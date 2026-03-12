// priority 100

const $IngotPileBlock = Java.loadClass("net.dries007.tfc.common.blocks.devices.IngotPileBlock")
const $Integer = Java.loadClass("java.lang.Integer")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $FluidHelper = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidHelper")
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
const $CraftingComponents = Java.loadClass("com.gregtechceu.gtceu.data.recipe.GTCraftingComponents")
const $CraftingComponent = Java.loadClass("com.gregtechceu.gtceu.data.recipe.CraftingComponent")
const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Fluid = Java.loadClass("net.minecraft.world.level.material.Fluid")
const $UnboundFluidStackJS = Java.loadClass("dev.latvian.mods.kubejs.fluid.UnboundFluidStackJS")
const $CreateInputFluid = Java.loadClass("dev.latvian.mods.kubejs.create.CreateInputFluid")
const $ChunkProvider = Java.loadClass("net.dries007.tfc.world.chunkdata.ChunkDataProvider")
const $ForestConfig = Java.loadClass("net.dries007.tfc.world.feature.tree.ForestConfig")
const $ForestFeature = Java.loadClass("net.dries007.tfc.world.feature.tree.ForestFeature")
const $TFCFeatures = Java.loadClass("net.dries007.tfc.world.feature.TFCFeatures")
const $Helpers = Java.loadClass("net.dries007.tfc.util.Helpers")
const $ChunkGeneratorExtension = Java.loadClass("net.dries007.tfc.world.ChunkGeneratorExtension")
const $RandomSource = Java.loadClass("net.minecraft.util.RandomSource")
const $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
const $Util = Java.loadClass("net.minecraft.Util")
const $HashSet = Java.loadClass("java.util.HashSet")
const $ArrayList = Java.loadClass("java.util.ArrayList")
const $JSONObject = Java.loadClass('com.google.gson.JsonObject')

/** @type {Internal.ForestFeature} */
const $ForestFeatureObj = $TFCFeatures.FOREST.get()
/**  @type {Internal.Method} */
const ForestFeature$getTree = $ForestFeatureObj
  .getClass()
  .getDeclaredMethods()
  .filter((m) => m.name.startsWith("getTree"))[0]
let $TreeForest
let $ForestConfigObj

let loadRegistryVariables = (/** @type {Internal.SimpleLevelEventJS} */ event) => {
  $TreeForest = event.level.registryAccess().registry($Registries.CONFIGURED_FEATURE).get().get("tfc:forest")
  $ForestConfigObj = $TreeForest.config()
}
global.immGeoOres = [
  {
    ore:"copper", 
    fluid:"tfc:metal/copper"
  },
  {
    ore:"lead",
    fluid:"tfc_ie_addon:metal/lead",
  },
  {
    ore:"chalcopyrite",
    fluid:"tfc:metal/copper"
  },
  {
    ore:"platinum",
    fluid:"dfc:metal/dfc_platinum"
  },
  {
    ore:"silver",
    fluid:"tfc:metal/silver"
  },
  {
    ore:"gold",
    fluid:"tfc:metal/gold"
  },
  {
    ore:"bauxite",
    fluid:"tfc_ie_addon:metal/aluminum"
  },
  {
    ore:"cassiterite",
    fluid:"tfc:metal/tin"
  },
  {
    ore:"hematite",
    fluid:"tfc:metal/cast_iron"
  },
  {
    ore:"magnetite",
    fluid:"tfc:metal/cast_iron"
  },
  {
    ore:"sphalerite",
    fluid:"tfc:metal/zinc"
  },
  {
    ore:"uraninite",
    fluid:"tfc_ie_addon:metal/uranium"
  }
]

global.immGeoOresMelts = {
  "copper": 1080,
  "hematite": 1535,
  "lead": 327,
  "chalcopyrite": 1080,
  "platinum": 1535,
  "silver": 960,
  "gold": 1060,
  "bauxite": 1535,
  "cassiterite": 230,
  "magnetite": 1535,
  "sphalerite": 420,
  "uraninite": 1132


}

global.immGeoOresCap = {
  "copper": 1.143,
  "hematite": 1.143,
  "lead": 1.143,
  "chalcopyrite": 1.143,
  "platinum": 0.543,
  "silver": 0.833,
  "gold": 0.667,
  "bauxite": 1.143,
  "cassiterite": 2.857,
  "magnetite": 1.143,
  "sphalerite": 1.905,
  "uraninite": 1.143
}

let enderTC = [
  {
    id: "white",
    colour: "000"
  },
  {
    id: "orange",
    colour: "111"
  },
  {
    id: "magenta",
    colour: "222"
  },
  {
    id: "light_blue",
    colour: "333"
  },
  {
    id: "yellow",
    colour: "444"
  },
  {
    id: "lime",
    colour: "555"
  },
  {
    id: "pink",
    colour: "666"
  },
  {
    id: "gray",
    colour: "777"
  },
  {
    id: "light_gray",
    colour: "888"
  },
  {
    id: "cyan",
    colour: "999"
  },
  {
    id: "purple",
    colour: "AAA"
  },
  {
    id: "blue",
    colour: "BBB"
  },
  {
    id: "brown",
    colour: "CCC"
  },
  {
    id: "green",
    colour: "DDD"
  },
  {
    id: "red",
    colour: "EEE"
  },
  {
    id: "black",
    colour: "FFF"
  }
]

function toJSONObject(object) {
  let json = new $JSONObject()
  for (const key of Object.keys(object)) {
    json.add(key, object[key])
  }
  return json
}

const getJsonPath = (/** @type {Internal.JsonElement} */ jsonElement, /** @type {string} */ path) => {
  return path.split(".").reduce((acc, cur) => (acc != null ? acc.asJsonObject.get(cur) : null), jsonElement)
}

function unwrapEither(/** @type { Internal.Either } */ value) {
  return value.left().orElseGet(() => value.right().get())
}

function unwrapMapBuilder(/** @type { Internal.RecipeComponentBuilderMap } */ mapBuilder) {
  let map = Utils.newMap()
  mapBuilder.entrySet().forEach((entry) => {
    let val = unwrapValue(entry.getValue())
    let key = entry.getKey().name
    map.put(key, val)
  })
  return map
}

function unwrapArray(/** @type { Internal.ArrayList } */ array) {
  let changed = false
  let newArray = Utils.newList()
  array.forEach((element) => {
    let newElement = unwrapValue(element)
    if (element != newElement || element.getClass() != newElement.getClass()) {
      changed = true
    }
    newArray.push(newElement)
  })
  return changed ? newArray : array
}

function unwrapValue(value) {
  if (value == null) return
  let newValue = value
  if (value.getClass().getSuperclass().simpleName == "Either") {
    newValue = unwrapEither(value)
  } else if (value.getClass().simpleName == "RecipeComponentBuilderMap") {
    newValue = unwrapMapBuilder(value)
  } else if (value.getClass().isArray()) {
    newValue = unwrapArray(value)
  } else if (value.getClass().isEnum()) {
    newValue = value.toString().toLowerCase()
  }
  if (value == newValue && value.getClass() == newValue.getClass()) {
    if (value instanceof InputItem) return value.toJson()
    if (value instanceof OutputItem) return value.item.toJson()
    if (value instanceof $Fluid) return value.arch$registryName()
    return value
  }
  return unwrapValue(newValue)
}

function getState(block, state) {
  if (state == null) return Block.getBlock(block).defaultBlockState()
  return Block.getBlock(block).withPropertiesOf(state)
}

function getWoodReplacement(block, tfcTree) {
  let item = block
  if (!item.namespace.equals("minecraft")) return
  for (let i = 0; i < regexArray.length; i++) {
    let regExp = regexArray[i][0]
    let tfcString = regexArray[i][1]
    let match = item.path.match(regExp)
    if (!match) continue
    if (tfcTree) {
      let newPath = new String(item.path).replace(match[1], tfcTree.path.replace("tree/", ""))
      let newItem = newPath.replace(regExp, tfcString)
      return newItem
    } else {
      if (!tfcWoodVanillaToTFC[match[1]]) return
      let newPath = new String(item.path).replace(match[1], tfcWoodVanillaToTFC[match[1]])
      let newItem = newPath.replace(regExp, tfcString)
      return newItem
    }
  }
}

function getStoneReplacement(block, rockId) {
  let item = block
  if (!item.namespace.equals("minecraft")) return
  for (let i = 0; i < regexStoneArray.length; i++) {
    let regExp = regexStoneArray[i][0]
    let tfcString = regexStoneArray[i][1]
    let match = item.path.match(regExp)
    if (!match) continue
    let rockType = rockId.replace("tfc:rock/raw/", "")
    let newItem = tfcString.replace("$1", rockType)
    return newItem
  }
}

const regexArray = [
  [new RegExp(/^stripped_(\w+?)_log$/), "tfc:wood/stripped_log/$1"],
  [new RegExp(/^(\w+?)_log$/), "tfc:wood/log/$1"],
  [new RegExp(/^stripped_(\w+?)_wood$/), "tfc:wood/stripped_wood/$1"],
  [new RegExp(/^(\w+?)_leaves$/), "tfc:wood/leaves/$1"],
  [new RegExp(/^(\w+?)_wood$/), "tfc:wood/wood/$1"],
  [new RegExp(/^(\w+?)_sapling$/), "tfc:wood/sapling/$1"],
  [new RegExp(/^(\w+?)_planks$/), "tfc:wood/planks/$1"],
  [new RegExp(/^(\w+?)_stairs$/), "tfc:wood/planks/$1_stairs"],
  [new RegExp(/^(\w+?)_slab$/), "tfc:wood/planks/$1_slab"],
  [new RegExp(/^(\w+?)_fence$/), "tfc:wood/planks/$1_fence"],
  [new RegExp(/^(\w+?)_fence_gate$/), "tfc:wood/planks/$1_fence_gate"],
  [new RegExp(/^(\w+?)_door$/), "tfc:wood/planks/$1_door"],
  [new RegExp(/^(\w+?)_trapdoor$/), "tfc:wood/planks/$1_trapdoor"],
  [new RegExp(/^(\w+?)_pressure_plate$/), "tfc:wood/planks/$1_pressure_plate"],
  [new RegExp(/^(\w+?)_button$/), "tfc:wood/planks/$1_button"]
]

const regexStoneArray = [
  [new RegExp(/^stone$/), "tfc:rock/hardened/$1"],
  [new RegExp(/^stone_stairs$/), "tfc:rock/raw/$1_stairs"],
  [new RegExp(/^stone_slab$/), "tfc:rock/raw/$1_slab"],
  [new RegExp(/^stone_pressure_plate$/), "tfc:rock/pressure_plate/$1"],
  [new RegExp(/^stone_button$/), "tfc:rock/button/$1"],
  [new RegExp(/^stone_bricks$/), "tfc:rock/bricks/$1"],
  [new RegExp(/^stone_brick_slab$/), "tfc:rock/bricks/$1_slab"],
  [new RegExp(/^stone_brick_stairs$/), "tfc:rock/bricks/$1_stairs"],
  [new RegExp(/^stone_brick_wall$/), "tfc:rock/bricks/$1_wall"],

  [new RegExp(/^cobblestone_wall$/), "tfc:rock/cobble/$1_wall"],
  [new RegExp(/^cobblestone_slab$/), "tfc:rock/cobble/$1_slab"],
  [new RegExp(/^cobblestone_stairs$/), "tfc:rock/cobble/$1_stairs"],
  [new RegExp(/^cobblestone$/), "tfc:rock/raw/$1"],

  [new RegExp(/^chiseled_stone_bricks$/), "tfc:rock/chiseled/$1"],
  [new RegExp(/^infested_chiseled_stone_bricks$/), "tfc:rock/chiseled/$1"],
  [new RegExp(/^cracked_stone_bricks$/), "tfc:rock/cracked_bricks/$1"],

  [new RegExp(/^mossy_stone_bricks$/), "tfc:rock/mossy_bricks/$1"],

  [new RegExp(/^mossy_cobblestone$/), "tfc:rock/mossy_cobble/$1"],

  [new RegExp(/^smooth_stone_slab$/), "tfc:rock/smooth/$1_slab"],

  [new RegExp(/^infested_stone$/), "tfc:rock/hardened/$1"],

  [new RegExp(/^andesite$/), "tfc:rock/hardened/andesite"]
]

const tfcWoodVanillaToTFC = {
  oak: "oak",
  spruce: "spruce",
  birch: "birch",
  jungle: "palm",
  acacia: "acacia",
  dark_oak: "hickory",
  // no crimson
  // no warped
  mangrove: "mangrove",
  // no bamboo
  cherry: "white_cedar"
}

const tfcCobbleToSand = [
  {
    stone: "granite",
    sand: "white"
  },
  {
    stone: "diorite",
    sand: "white"
  },
  {
    stone: "gabbro",
    sand: "black"
  },
  {
    stone: "shale",
    sand: "black"
  },
  {
    stone: "claystone",
    sand: "brown"
  },
  {
    stone: "limestone",
    sand: "white"
  },
  {
    stone: "conglomerate",
    sand: "green"
  },
  {
    stone: "dolomite",
    sand: "black"
  },
  {
    stone: "chert",
    sand: "yellow"
  },
  {
    stone: "chalk",
    sand: "white"
  },
  {
    stone: "rhyolite",
    sand: "red"
  },
  {
    stone: "basalt",
    sand: "red"
  },
  {
    stone: "andesite",
    sand: "red"
  },
  {
    stone: "dacite",
    sand: "yellow"
  },
  {
    stone: "slate",
    sand: "yellow"
  },
  {
    stone: "phyllite",
    sand: "brown"
  },
  {
    stone: "schist",
    sand: "green"
  },
  {
    stone: "gneiss",
    sand: "green"
  },
  {
    stone: "marble",
    sand: "yellow"
  }
]

let tfcSandColors = [
  "brown",
  "white",
  "black",
  "red",
  "yellow",
  "green",
  "pink"
]

let tfcMetalFluids = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "black_steel",
  "blue_steel",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "red_steel",
  "rose_gold",
  "silver",
  "steel",
  "sterling_silver",
  "tin",
  "wrought_iron",
  "zinc"
]

function addChemBathDye(event, opts) {
  const idPrefix = opts.idPrefix
  const input = opts.input
  const coloredOutput = opts.coloredOutput
  const colors = opts.colors !== undefined ? opts.colors : dfcColors
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const dyeFluidAmount = Math.round((opts.dyeFluidAmount !== undefined ? opts.dyeFluidAmount : 18) * fluidScale)
  colors.forEach(function(color) {
    event.recipes.gtceu
      .chemical_bath(idPrefix + "_dye_" + color)
      .itemInputs(input)
      .inputFluids(Fluid.of("gtceu:" + color + "_dye", dyeFluidAmount))
      .itemOutputs(coloredOutput(color))
      .duration(20)
      .EUt(7)
  })
}

function addBarrelDye(event, opts) {
  const idPrefix = opts.idPrefix
  const rawInput = opts.baseInput !== undefined ? opts.baseInput : opts.input
  const coloredOutput = opts.coloredOutput
  const colors = opts.colors !== undefined ? opts.colors : dfcColors
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const tfcDyeAmount = Math.round((opts.tfcDyeAmount !== undefined ? opts.tfcDyeAmount : 25) * fluidScale)
  const inputIngredient = rawInput.startsWith("#") ? { tag: rawInput.slice(1) } : { item: rawInput }
  colors.forEach(function(color) {
    event.custom({
      type: "tfc:barrel_sealed",
      input_item: { ingredient: inputIngredient },
      input_fluid: { ingredient: "tfc:" + color + "_dye", amount: tfcDyeAmount },
      output_item: { item: coloredOutput(color) },
      duration: 1000,
    }).id("gregitas:barrel/" + idPrefix + "_dye_" + color)
  })
}

function addChemBathBleach(event, opts) {
  const bleachedOutput = opts.bleachedOutput
  if (!bleachedOutput) return
  const idPrefix = opts.idPrefix
  const input = opts.bleachInput !== undefined ? opts.bleachInput : opts.input
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const chlorineAmount = Math.round((opts.chlorineAmount !== undefined ? opts.chlorineAmount : 50) * fluidScale)
  event.recipes.gtceu
    .chemical_bath(idPrefix + "_bleach")
    .itemInputs(input)
    .inputFluids(Fluid.of("gtceu:chlorine", chlorineAmount))
    .itemOutputs(bleachedOutput)
    .duration(400)
    .EUt(2)
}

function addBarrelBleach(event, opts) {
  const bleachedOutput = opts.bleachedOutput
  if (!bleachedOutput) return
  const idPrefix = opts.idPrefix
  const input = opts.bleachInput !== undefined ? opts.bleachInput : opts.input
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const lyeAmount = Math.round((opts.lyeAmount !== undefined ? opts.lyeAmount : 75) * fluidScale)
  const inputIngredient = input.startsWith("#") ? { tag: input.slice(1) } : { item: input }
  event.custom({
    type: "tfc:barrel_sealed",
    input_item: { ingredient: inputIngredient },
    input_fluid: { ingredient: "tfc:lye", amount: lyeAmount },
    output_item: { item: bleachedOutput },
    duration: 1000,
  }).id("gregitas:barrel/" + idPrefix + "_bleach_lye")
}

function addGTMixBleach(event, opts) {
  const bleachedOutput = opts.bleachedOutput
  if (!bleachedOutput) return
  const idPrefix = opts.idPrefix
  const input = opts.bleachInput !== undefined ? opts.bleachInput : opts.input
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const lyeAmount = Math.round((opts.lyeAmount !== undefined ? opts.lyeAmount : 75) * fluidScale)
  event.recipes.gtceu
    .mixer("gregitas:" + idPrefix + "_bleach_lye")
    .itemInputs(input)
    .inputFluids(Fluid.of("tfc:lye", lyeAmount))
    .itemOutputs(bleachedOutput)
    .duration(40)
    .EUt(LV)
}

function addCreateMixBleach(event, opts) {
  const bleachedOutput = opts.bleachedOutput
  if (!bleachedOutput) return
  const idPrefix = opts.idPrefix
  const input = opts.bleachInput !== undefined ? opts.bleachInput : opts.input
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const lyeAmount = Math.round((opts.lyeAmount !== undefined ? opts.lyeAmount : 75) * fluidScale)
  event.recipes.create
    .mixing([bleachedOutput], [input, Fluid.of("tfc:lye", lyeAmount)])
    .id("gregitas:mixing/" + idPrefix + "_bleach_lye")
}

function addGTMixDye(event, opts) {
  const idPrefix = opts.idPrefix
  const input = opts.baseInput !== undefined ? opts.baseInput : opts.input
  const coloredOutput = opts.coloredOutput
  const colors = opts.colors !== undefined ? opts.colors : dfcColors
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const tfcDyeAmount = Math.round((opts.tfcDyeAmount !== undefined ? opts.tfcDyeAmount : 25) * fluidScale)
  colors.forEach(function(color) {
    event.recipes.gtceu
      .mixer("gregitas:" + idPrefix + "_dye_" + color)
      .itemInputs(input)
      .inputFluids(Fluid.of("tfc:" + color + "_dye", tfcDyeAmount))
      .itemOutputs(coloredOutput(color))
      .duration(40)
      .EUt(LV)
  })
}

function addCreateMixDye(event, opts) {
  const idPrefix = opts.idPrefix
  const input = opts.baseInput !== undefined ? opts.baseInput : opts.input
  const coloredOutput = opts.coloredOutput
  const colors = opts.colors !== undefined ? opts.colors : dfcColors
  const fluidScale = opts.fluidScale !== undefined ? opts.fluidScale : 1
  const tfcDyeAmount = Math.round((opts.tfcDyeAmount !== undefined ? opts.tfcDyeAmount : 25) * fluidScale)
  colors.forEach(function(color) {
    event.recipes.create
      .mixing([coloredOutput(color)], [input, Fluid.of("tfc:" + color + "_dye", tfcDyeAmount)])
      .id("gregitas:mixing/" + idPrefix + "_dye_" + color)
  })
}

function addDyeRecipes(event, opts) {
  addChemBathDye(event, opts)
  addBarrelDye(event, opts)
  addChemBathBleach(event, opts)
  addBarrelBleach(event, opts)
  addGTMixBleach(event, opts)
  addCreateMixBleach(event, opts)
  addGTMixDye(event, opts)
  addCreateMixDye(event, opts)
}
