// priority 10
const $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI")

function handleFTBCustomClick(/** @type {Internal.CustomClickEvent>} */ event) {
  switch (event.id().namespace) {
    case "patchouli":
      event.id().path.startsWith("tfc/") && openTFCGuideBook(new String(event.id().path))
      break

    default:
      break
  }
  return $EventResult.pass()
}

let openTFCGuideBook = (/** @type {string} */ path) => {
  Client.screen = null
  path = path.replace("tfc/", "tfc:")
  let page = "1"
  let underlineIndex = path.lastIndexOf("_")
  if (underlineIndex != -1 && !isNaN(parseInt(path.charAt(path.length - 1)))) {
    page = path.substring(underlineIndex + 1)
    path = path.substring(0, underlineIndex)
  }
  $PatchouliAPI.get().openBookEntry("tfc:field_guide", path, parseInt(page))
}