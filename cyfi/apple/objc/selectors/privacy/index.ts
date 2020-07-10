import fetch from "node-fetch"

const docs = [
  { name: "Contacts", url: "https://developer.apple.com/tutorials/data/documentation/contacts.json" },
  { name: "Capture", url : "https://developer.apple.com/tutorials/data/documentation/avfoundation/cameras_and_media_capture.json"}
]
const parameterMarkdown = ({ name, description }: { name: string, description: string }) => {
  return `#### ${name} - ${description}`
}

const toMarkdown = ({ selector, description, parameters }: { selector: string, description: string, parameters: { name: string, description: string }[] }) => {
  let parameterStr = ""
  parameters.forEach((parameter) => {
    parameterStr += parameterMarkdown(parameter) + "\n"
  })
  return `# ${selector}\n ${description}\n` + ((parameters.length > 0) ? `### Parameters\n ${parameterStr}` : "")
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
  const primaryContentSections = (((json["primaryContentSections"] as { [key: string]: any }[]).filter((el) => el["kind"] === "parameters") ?? [])[0] ?? {})["parameters"] as { [key: string]: any }[]
  const parameters = (primaryContentSections ?? []).map((el) => { return { name: el["name"], description: el["content"][0]["inlineContent"][0]["text"] } })
  return { selector, description, parameters }
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




const fetchAllDocs = async () => {
  const result = await fetch("https://developer.apple.com/tutorials/data/documentation/contacts.json")
  const json = await result.json()
  const element = 'Fetch and Save Requests'
  const name = "Contacts"
  const topicSections = json["topicSections"] as { [key: string]: any }[]
  const identifiers = topicSections.filter((topicSection) => {
    return topicSection.title === element
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
      output += toMarkdown(subComp) + "\n"
    })
  })
  console.log(output)

}
fetchAllDocs()


