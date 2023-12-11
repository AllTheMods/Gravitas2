// priority 100

let $ResourcePackLoader
let $PlatformImpl
let $ModNioResourcePack
if (Platform.isForge()) {
  $ResourcePackLoader = Java.loadClass("net.minecraftforge.resource.ResourcePackLoader")
} else {
  $PlatformImpl = Java.loadClass("dev.architectury.platform.fabric.PlatformImpl")
  $ModNioResourcePack = Java.loadClass("net.fabricmc.fabric.impl.resource.loader.ModNioResourcePack")
}

const $Collectors = Java.loadClass("java.util.stream.Collectors")
const $ServerPacksSource = Java.loadClass("net.minecraft.server.packs.repository.ServerPacksSource")
const $FallbackResourceManager = Java.loadClass("net.minecraft.server.packs.resources.FallbackResourceManager")

global.readJsonFileFromMod = (type, modId, resourceLocation) => {
  let pack = loadPack(type, modId)
  if (pack.listPacks().toList().empty) return Utils.emptyMap()
  resourceLocation = resourceLocation.endsWith(".json")
    ? new ResourceLocation(resourceLocation)
    : new ResourceLocation(resourceLocation + ".json")
  let resource = pack.getResource(resourceLocation).orElse(null)
  if (resource == null) {
    console.warn(`Resource "${resourceLocation}" not found.`)
    return Utils.emptyMap()
  }
  let reader = resource.openAsReader()
  let string = reader.lines().collect($Collectors.joining("\n"))
  reader.close()
  pack.listPacks().forEach((packResource) => packResource.close())
  return JsonIO.parse(string)
}

global.readJsonFolderFromMod = (type, modId, folder, predicate) => {
  let jsonMap = Utils.newMap()
  let pack = loadPack(type, modId)
  if (pack.listPacks().toList().empty) return jsonMap
  predicate = predicate == null ? (rl) => rl.path.endsWith(".json") : predicate
  let map = Utils.emptyMap().copyOf(pack.listResources(folder, predicate))
  map.forEach((key, val) => {
    if (!key.path.endsWith(".json")) return
    let reader = val.openAsReader()
    let string = reader.lines().collect($Collectors.joining("\n"))
    reader.close()
    jsonMap.put(key.toString(), JsonIO.parse(string))
  })
  pack.listPacks().forEach((packResource) => packResource.close())
  return jsonMap
}

function loadPack(type, modId) {
  type = type == "assets" ? 0 : type == "data" ? 1 : -1
  if (type == -1) {
    console.warn(`Package type is not valid, use "assets" or "data"`)
    return
  }
  let pack = new $FallbackResourceManager(type, modId)
  if (modId == "minecraft") {
    if (type == 0) {
      pack.push(Client.getVanillaPackResources())
    } else {
      pack.push(new $ServerPacksSource().getVanillaPack())
    }
  } else {
    let resourcePack = Platform.isForge() ? loadModForge(type, modId) : loadModFabric(type, modId)
    resourcePack && pack.push(resourcePack)
  }
  return pack
}

function loadModFabric(type, modId) {
  let mod
  try {
    mod = $PlatformImpl.getMod(modId)
  } catch (error) {
    console.warn(`ModId "${modId}" is not loaded.`)
  }
  if (!mod) return
  let modContainer = getPrivateField(mod, "container")
  let resourcePack = $ModNioResourcePack.create(mod.getModId(), modContainer, null, type, 2)
  return resourcePack
}

function loadModForge(type, modId) {
  let resourcePack
  try {
    resourcePack = $ResourcePackLoader.getPackFor(modId).get()
  } catch (error) {
    console.warn(`ModId "${modId}" is not loaded.`)
  }
  if (!resourcePack) return
  return resourcePack
}

function getPrivateField(obj, field) {
  let classField = obj.class.getDeclaredField(field)
  classField.setAccessible(true)
  return classField.get(obj)
}
