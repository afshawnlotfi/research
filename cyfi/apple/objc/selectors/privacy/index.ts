import { writeFileSync } from "fs"
import fetch from "node-fetch"

const docs = [
  { name: "Contact", url: "https://developer.apple.com/tutorials/data/documentation/contacts.json", sections: ["Fetch and Save Requests"] },
  { name: "PhotoKit", url: "https://developer.apple.com/tutorials/data/documentation/photokit.json", sections: ["Asset Retrieval", "Asset Loading"] },
  { name: "AVFoundation", url: "https://developer.apple.com/tutorials/data/documentation/avfoundation/cameras_and_media_capture.json", sections: ["Capture Devices"] },
  { name: "EventKit", url: "https://developer.apple.com/tutorials/data/documentation/eventkit.json", sections: ["First Steps"] },
  { name: "CoreLocation", url: "https://developer.apple.com/tutorials/data/documentation/corelocation.json", sections: ["Essentials"] },
  { name: "CoreMotion", url: "https://developer.apple.com/tutorials/data/documentation/coremotion.json", sections: ["First Steps"] },

]

let allSelectors: string[] = []

const parameterMarkdown = ({ name, description }: { name: string, description: string }) => {
  return `#### ${name} - ${description}`
}

const toMarkdown = ({ selector, description, parameters, url }: { url: string, selector: string, description: string, parameters: { name: string, description: string }[] }) => {
  let parameterStr = ""
  parameters.forEach((parameter) => {
    parameterStr += parameterMarkdown(parameter) + "\n"
  })
  return `# [${selector}](${url})\n ${description}\n` + ((parameters.length > 0) ? `### Parameters\n${parameterStr}` : "")
}

const convertDocUrl = (urls: string[]) => {
  return urls.map((url) => {
    return "https://developer.apple.com/tutorials/data/" + url.replace("doc://com.apple.documentation/", "") + ".json?language=objc"
  })
}

const fetchDoc = async (url: string) => {
  const result = await fetch(url);
  const json = await result.json()
  const description = (((json["abstract"] ?? [])[0] ?? [])["text"]) ?? null
  const selector = json["metadata"]["title"] as string
  const primaryContentSections = ((((json["primaryContentSections"] ?? []) as { [key: string]: any }[]).filter((el) => el["kind"] === "parameters") ?? [])[0] ?? {})["parameters"] as { [key: string]: any }[]
  const parameters = (primaryContentSections ?? []).map((el) => { return { name: el["name"], description: el["content"][0]["inlineContent"][0]["text"] } })
  return { selector, description, parameters, url }
}



const fetchSubDoc = async (url: string) => {
  const result = await fetch(url);
  const json = await result.json()
  const topicSections = json["topicSections"] as { [key: string]: any }[] ?? []
  const identifiers = topicSections.map((topicSection) => {
    return topicSection.identifiers
  })
  const final = [].concat.apply([], identifiers);
  return Promise.all(convertDocUrl(final).map((docUrl) => {
    return fetchDoc(docUrl)
  }))
}



const fetchAllDocs = async ({ name, url, sections }: { name: string, url: string, sections: string[] }) => {
  const result = await fetch(url)
  const json = await result.json()
  const topicSections = json["topicSections"] as { [key: string]: any }[]
  const identifiers = topicSections.filter((topicSection) => {
    return sections.includes(topicSection.title)
  }).map(({ identifiers }) => {
    return identifiers
  })
  const converted = convertDocUrl([].concat.apply([], identifiers))
  const subDoc = converted.map((url) => {
    return fetchSubDoc(url)
  })
  const all = await Promise.all(subDoc)

  let output = `# ${name}\n`
  all.forEach((comp) => {
    comp.filter((el) => el.selector.endsWith(":")).forEach((subComp) => {
      allSelectors.push(subComp.selector)
      output += toMarkdown(subComp) + "\n"
    })
  })
  writeFileSync(`./docs/${name.toLowerCase()}.md`, output)

}
let readmeRoot = `# Privacy Functions\n\n`;

const main = async () => {

  docs.forEach(async (doc) => {
    readmeRoot += `## [${doc.name}](/research/cyfi/apple/objc/selectors/privacy/docs/${doc.name.toLowerCase()})\n\n`
    await fetchAllDocs(doc)
    writeFileSync("./all-selectors.txt", allSelectors.join("\n"))
  })
  writeFileSync("./README.md", readmeRoot)
}

main()
