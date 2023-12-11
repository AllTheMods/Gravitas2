// priority 100

const $IngotPileBlock = Java.loadClass("net.dries007.tfc.common.blocks.devices.IngotPileBlock")
const $Integer = Java.loadClass("java.lang.Integer")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $FluidHelper = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidHelper")
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
const RockBreakerCondition = Java.loadClass("com.gregtechceu.gtceu.common.recipe.RockBreakerCondition")
const $CraftingComponent = Java.loadClass("com.gregtechceu.gtceu.data.recipe.CraftingComponent")

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

const meltMap = {
  6: JsonIO.primitiveOf(9),
  25: JsonIO.primitiveOf(36),
  50: JsonIO.primitiveOf(72),
  75: JsonIO.primitiveOf(108),
  100: JsonIO.primitiveOf(JsonIO.parse("144")),
  200: JsonIO.primitiveOf(JsonIO.parse("288")),
  400: JsonIO.primitiveOf(576),
  600: JsonIO.primitiveOf(864),
  800: JsonIO.primitiveOf(1152),
  1200: JsonIO.primitiveOf(1728),
  1400: JsonIO.primitiveOf(2016),
  10: JsonIO.primitiveOf(16),
  15: JsonIO.primitiveOf(24),
  35: JsonIO.primitiveOf(48),
  20: JsonIO.primitiveOf(24),
  30: JsonIO.primitiveOf(48),
  90: JsonIO.primitiveOf(128),
  60: JsonIO.primitiveOf(86),
  40: JsonIO.primitiveOf(58),
  70: JsonIO.primitiveOf(96)
}

const getJsonPath = (/** @type {Internal.JsonElement} */jsonElement, /** @type {string} */ path) => {
  return path.split(".").reduce((acc, cur) => (acc != null ? acc.asJsonObject.get(cur) : null), jsonElement)
}
