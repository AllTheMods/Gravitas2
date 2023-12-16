// priority 100

const $IngotPileBlock = Java.loadClass("net.dries007.tfc.common.blocks.devices.IngotPileBlock")
const $Integer = Java.loadClass("java.lang.Integer")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $FluidHelper = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidHelper")
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
const RockBreakerCondition = Java.loadClass("com.gregtechceu.gtceu.common.recipe.RockBreakerCondition")
const $CraftingComponent = Java.loadClass("com.gregtechceu.gtceu.data.recipe.CraftingComponent")
const $TagKey = Java.loadClass("net.minecraft.tags.TagKey")
const $Fluid = Java.loadClass("net.minecraft.world.level.material.Fluid")
const $UnboundFluidStackJS = Java.loadClass("dev.latvian.mods.kubejs.fluid.UnboundFluidStackJS")

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
