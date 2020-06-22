var fs = require("fs")
var plist = require("plist")
const fetch = require("node-fetch")
const cheerio = require("cheerio")
var striptags = require("striptags")

const link = (name) =>
  `http://webcache.googleusercontent.com/search?q=cache:https://developer.apple.com/documentation/bundleresources/information_property_list/${name}`

const markdownElement = ({ name, value, xcodeTitle, abstract }) => {
  return (
    `# [${name}](${link(name)})\n` +
    `## ${xcodeTitle}\n` +
    `### ${abstract}\n` +
    `### [Default]: ${JSON.stringify(value)}\n` +
    `### [Show More](/docs/${name}.md)\n`
  )
}

const markdownExternal = ({ name, value, xcodeTitle, abstract }) => {
  return (
    `# [${name}](${link(name)})\n` +
    `## ${xcodeTitle}\n` +
    `### ${abstract}\n` +
    `### [Default]: ${JSON.stringify(value)}\n` +
    `### [JSON](/json/${name}.json)\n`
  )
}

fs.writeFile(
  "README.md",
  "",
  {
    encoding: "utf8",
    flag: "w",
  },
  (err) => {
    if (err) console.log(err)
    else {
      console.log("File written successfully\n")
      console.log("The written has the following contents:")
    }
  }
)

var obj = plist.parse(fs.readFileSync("info.plist", "utf8"))
// const obj = { "NSCameraUsageDescription": "" }

const getAppleDocs = (name) => {
  const url = link(name)
  return fetch(url)
    .then((res) => res.text())
    .then((body) => {
      const $ = cheerio.load(body)
      const details = JSON.parse($("#bootstrap-data").html())
      console.log(url)
      return details
    })
}

const markdown = () => {
  return Object.keys(obj).forEach(async (name) => {
    const value = obj[name]
    const docs = await getAppleDocs(name)

    xcodeTitle = docs["xcodeTitle"]
    abstract = striptags(docs["abstract"])
    const mardownEl = markdownElement({ name, value, xcodeTitle, abstract })
    const mardownEx = markdownExternal({ name, value, xcodeTitle, abstract })

    fs.writeFile(
      "README.md",
      mardownEl,
      {
        encoding: "utf8",
        flag: "a",
      },
      (err) => {
        if (err) console.log(err)
        else {
          console.log("File written successfully\n")
          console.log("The written has the following contents:")
        }
      }
    )

    fs.writeFile(
      `docs/${name}.md`,
      mardownEx + "```json \n" + JSON.stringify(docs, null, 4) + "\n```",
      {
        encoding: "utf8",
        flag: "w",
      },
      (err) => {
        if (err) console.log(err)
        else {
          console.log("File written successfully\n")
          console.log("The written has the following contents:")
        }
      }
    )

    fs.writeFile(
      `json/${name}.json`,
      JSON.stringify(docs, null, 4),
      {
        encoding: "utf8",
        flag: "w",
      },
      (err) => {
        if (err) console.log(err)
        else {
          console.log("File written successfully\n")
          console.log("The written has the following contents:")
        }
      }
    )
  })
}

markdown()
