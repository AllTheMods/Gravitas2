// priority 100

const $IngotPileBlock = Java.loadClass("net.dries007.tfc.common.blocks.devices.IngotPileBlock")
const $Integer = Java.loadClass("java.lang.Integer")
const $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const $FluidHelper = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidHelper")
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV] = GTValues.VA
const RockBreakerCondition = Java.loadClass('com.gregtechceu.gtceu.common.recipe.RockBreakerCondition')

const tfcSaplings = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow"
]

const tfcMetal = [
  'bismuth',
  'bismuth_bronze',
  'black_bronze',
  'bronze',
  'brass',
  'copper',
  'gold',
  'nickel',
  'rose_gold',
  'silver',
  'tin',
  'zinc',
  'sterling_silver',
  'wrought_iron',
  'steel',
  'black_steel',
  'blue_steel',
  'red_steel',
  'tungsten_carbide',
  'damascus_steel',
  'tungsten_steel',
  'cobalt_brass',
  'vanadium_steel',
  'ultimet',
  'invar',
  'aluminium',
  'titanium'
]

const tfcRockKnapping = [
  'igneous_extrusive',
  'igneous_intrusive',
  'metamorphic',
  'sedimentary'
]

const gtMortars = [
  {
    id: 'bronze',
    tier: 2,
    double: 'tfc:metal/double_ingot/bronze'
  },
  {
    id: 'invar',
    tier: 3,
    double: 'gregitas:double_bronze_ingot'
  },
  {
    id: 'steel',
    tier: 4,
    double: 'tfc:metal/double_ingot/steel'
  },
  {
    id: 'wrought_iron',
    tier: 3,
    double: 'tfc:metal/double_ingot/wrought_iron'
  },
  {
    id: 'damascus_steel',
    tier: 5,
    double: 'gregitas:double_damascus_steel_ingot'
  },
  {
    id: 'cobalt_brass',
    tier: 3,
    double: 'gregitas:double_cobalt_brass_ingot'
  }
]

const gtceuALLToolMetalsID = [
    'aluminium',
    'titanium',
    'bronze',
    'invar',
    'sterling_silver',
    'rose_gold',
    'stainless_steel',
    'steel',
    'ultimet',
    'wrought_iron',
    'tungsten_carbide',
    'damascus_steel',
    'tungsten_steel',
    'cobalt_brass',
    'vanadium_steel',
    'red_steel',
    'blue_steel'
]

const gtceuToolsTFC = [
  {
    id: 'aluminium',
    fluid: 'gtceu:aluminium',
    tier: 3,
    double: 'gregitas:double_aluminium_ingot'
  },
  {
    id: 'titanium',
    fluid: 'gtceu:titanium',
    tier: 6,
    double: 'gregitas:double_titanium_ingot'
  },
  {
    id: 'bronze',
    fluid: 'tfc:metal/bronze',
    tier: 2,
    double: 'tfc:metal/double_ingot/bronze'
  },
  {
    id: 'invar',
    fluid: 'gtceu:invar',
    tier: 3,
    double: 'gregitas:double_bronze_ingot'
  },
  {
    id: 'sterling_silver',
    fluid: 'tfc:metal/sterling_silver',
    tier: 4,
    double: 'tfc:metal/double_ingot/sterling_silver'
  },
  {
    id: 'rose_gold',
    fluid: 'tfc:metal/rose_gold',
    tier: 4,
    double: 'tfc:metal/double_ingot/rose_gold'
  },
  {
    id: 'stainless_steel',
    fluid: 'firmalife:metal/stainless_steel',
    tier: 5,
    double: 'firmalife:metal/double_ingot/stainless_steel'
  },
  {
    id: 'steel',
    fluid: 'tfc:metal/steel',
    tier: 4,
    double: 'tfc:metal/double_ingot/steel'
  },
  {
    id: 'wrought_iron',
    fluid: 'tfc:metal/wrought_iron',
    tier: 3,
    double: 'tfc:metal/double_ingot/wrought_iron'
  },
  {
    id: 'damascus_steel',
    fluid: 'gtceu:damascus_steel',
    tier: 5,
    double: 'gregitas:double_damascus_steel_ingot'
  },
  {
    id: 'cobalt_brass',
    fluid: 'gtceu:cobalt_brass',
    tier: 3,
    double: 'gregitas:double_cobalt_brass_ingot'
  },
  {
    id: 'red_steel',
    fluid: 'tfc:metal/red_steel',
    tier: 6,
    double: 'tfc:metal/double_ingot/red_steel'
  },
  {
    id: 'blue_steel',
    fluid: 'tfc:metal/blue_steel',
    tier: 6,
    double: 'tfc:metal/double_ingot/blue_steel'
  }
]

const gtceuToolsGT = [
  {
    id: 'aluminium',
    fluid: 'gtceu:aluminium',
    tier: 3,
    double: 'gregitas:double_aluminium_ingot'
  },
  {
    id: 'titanium',
    fluid: 'gtceu:titanium',
    tier: 6,
    double: 'gregitas:double_titanium_ingot'
  },
  {
    id: 'invar',
    fluid: 'gtceu:invar',
    tier: 3,
    double: 'gregitas:double_bronze_ingot'
  },
  {
    id: 'sterling_silver',
    fluid: 'tfc:metal/sterling_silver',
    tier: 4,
    double: 'tfc:metal/double_ingot/sterling_silver'
  },
  {
    id: 'rose_gold',
    fluid: 'tfc:metal/rose_gold',
    tier: 4,
    double: 'tfc:metal/double_ingot/rose_gold'
  },
  {
    id: 'stainless_steel',
    fluid: 'firmalife:metal/stainless_steel',
    tier: 5,
    double: 'firmalife:metal/double_ingot/stainless_steel'
  },
  {
    id: 'damascus_steel',
    fluid: 'gtceu:damascus_steel',
    tier: 5,
    double: 'gregitas:double_damascus_steel_ingot'
  },
  {
    id: 'cobalt_brass',
    fluid: 'gtceu:cobalt_brass',
    tier: 3,
    double: 'gregitas:double_cobalt_brass_ingot'
  }
]