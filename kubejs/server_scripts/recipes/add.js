// priority 10
const TFCSeeds = [
  "barley",
  "oat",
  "rye",
  "maize",
  "wheat",
  "rice",
  "beet",
  "cabbage",
  "carrot",
  "garlic",
  "green_bean",
  "potato",
  "onion",
  "soybean",
  "squash",
  "sugarcane",
  "tomato",
  "red_bell_pepper",
  "yellow_bell_pepper"
]

const TFCFlowers = [
  "canna",
  "goldenrod",
  "allium",
  "anthurium",
  "blood_lily",
  "blue_ginger",
  "blue_orchid",
  "butterfly_milkweed",
  "black_orchid",
  "calendula",
  "dandelion",
  "desert_flame",
  "foxglove",
  "hyacinth",
  "guzmania",
  "hibiscus",
  "kangaroo_paw",
  "labrador_tea",
  "lily_of_the_valley",
  "lilac",
  "lotus",
  "marigold",
  "nasturtium",
  "oxeye_daisy",
  "pistia",
  "poppy",
  "primrose",
  "pulsatilla",
  "rose",
  "sacred_datura",
  "sagebrush",
  "sapphire_tower",
  "sargassum",
  "silver_spurflower",
  "snapdragon_pink",
  "snapdragon_red",
  "snapdragon_white",
  "snapdragon_yellow",
  "strelitzia",
  "toquilla_palm",
  "trillium",
  "tropical_milkweed",
  "tulip_orange",
  "tulip_pink",
  "tulip_red",
  "tulip_white",
  "vriesea",
  "water_lily",
  "yucca"
]

const TFCGrainsToAlchohol = [
  {
    id: "barley",
    color: 0x8b4513,
    name: "Barley",
    alcohol: "tfc:beer"
  },
  {
    id: "maize",
    color: 0xffd700,
    name: "Maize",
    alcohol: "tfc:corn_whiskey"
  },
  {
    id: "rye",
    color: 0x8b4513,
    name: "Rye",
    alcohol: "tfc:rye_whiskey"
  },
  {
    id: "rice",
    color: 0xffd700,
    name: "Rice",
    alcohol: "tfc:sake"
  },
  {
    id: "wheat",
    color: 0xffd700,
    name: "Wheat",
    alcohol: "tfc:whiskey"
  }
]
const molds = [
  "ingot",
  "chisel_head",
  "axe_head",
  "hoe_head",
  "pickaxe_head",
  "propick_head",
  "scythe_blade",
  "shovel_head",
  "sword_blade",
  "hammer_head",
  "saw_blade",
  "javelin_head",
  "mace_head",
  "knife_blade",
  "bell"
]
const proMolds = ["prospector_hammer_head", "prospector_drill_head", "mineral_prospector_head"]
const fish = [
  "tfc:food/cod",
  "tfc:food/salmon",
  "tfc:food/bluegill",
  "tfc:food/crappie",
  "tfc:food/lake_trout",
  "tfc:food/largemouth_bass",
  "tfc:food/rainbow_trout",
  "tfc:food/smallmouth_bass",
  "tfc:food/tropical_fish"
]

const tfcgems = [
  "topaz",
  "sapphire",
  "ruby",
  "pyrite",
  "opal",
  "lapis_lazuli",
  "emerald",
  "amethyst"
]

const TFCtoGTores = {
  "diamond": "2x gtceu:crushed_diamond_ore",
  "sulfur": "2x gtceu:crushed_sulfur_ore",
  "cinnabar": "8x gtceu:crushed_cinnabar_ore",
  "cryolite": "8x gtceu:crushed_redstone_ore",
  "halite": "4x gtceu:crushed_salt_ore",
  "sylvite": "4x gtceu:crushed_rock_salt_ore",
  "borax": "6x gtceu:crushed_borax_ore",
  "saltpeter": "4x gtceu:crushed_saltpeter_ore"
}

const createstone = ["veridium", "asurine", "crimsite", "ochrum"]

const createstonec = ["scoria", "scorchia"]

const createstoneh = ["limestone"]

const createstonecut = ["granite", "diorite", "andesite"]

const createstonevanilla = ["tuff", "calcite"]
const baseTFCMetals = [
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "copper",
  "wrought_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel"
]
const jams = [
  "blackberry",
  "blueberry",
  "bunchberry",
  "cloudberry",
  "cranberry",
  "elderberry",
  "gooseberry",
  "raspberry",
  "snowberry",
  "strawberry",
  "wintergreen_berry",
  "banana",
  "cherry",
  "green_apple",
  "lemon",
  "olive",
  "orange",
  "peach",
  "plum",
  "red_apple",
  "pumpkin_chunks",
  "melon_slice"
]

const dyes = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "orange",
  "red",
  "yellow",
  "green",
  "lime",
  "blue",
  "light_blue",
  "pink",
  "magenta",
  "purple",
  "cyan"
]

const tfcStone = [
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]
const tfcStone2 = [
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "dacite",
  "slate",
  "phyllite",
  "schist",
  "gneiss"
]
const vanStone = ["granite", "diorite", "andesite", "quartzite", "marble", "basalt"]
const gemStonesA = ["amethyst", "diamond", "emerald", "lapis_lazuli", "opal", "pyrite", "ruby", "sapphire", "topaz"]
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

const tfcFruitSaplings = ["cherry", "green_apple", "lemon", "olive", "orange", "peach", "plum", "red_apple", "banana"]

const TFCGrains = ["oat", "barley", "maize", "rye", "rice", "wheat"]

const gtVacuumShit = [
  "black_steel",
  "red_steel",
  "blue_steel",
  "europium",
  "iridium",
  "niobium",
  "osmium",
  "palladium",
  "rhodium",
  "ruthenium",
  "samarium",
  "silicon",
  "titanium",
  "tungsten",
  "vanadium",
  "yttrium",
  "naquadah",
  "enriched_naquadah",
  "naquadria",
  "trinium",
  "kanthal",
  "nichrome",
  "niobium_nitride",
  "niobium_titanium",
  "black_bronze",
  "ruridit",
  "ultimet",
  "vanadium_gallium",
  "yttrium_barium_cuprate",
  "osmiridium",
  "tungsten_carbide",
  "magnesium_diboride",
  "mercury_barium_calcium_cuprate",
  "uranium_triplatinum",
  "samarium_iron_arsenic_oxide",
  "indium_tin_barium_titanium_cuprate",
  "uranium_rhodium_dinaquadide",
  "enriched_naquadah_trinium_europium_duranide",
  "ruthenium_trinium_americium_neutronate",
  "tungsten_steel",
  "naquadah_alloy",
  "rhodium_plated_palladium",
  "hssg",
  "hsse",
  "hsss",
  "tantalum_carbide",
  "molybdenum_disilicide",
  "zeron_100",
  "watertight_steel",
  "incoloy_ma_956",
  "maraging_steel_300",
  "hastelloy_x",
  "stellite_100",
  "titanium_carbide",
  "titanium_tungsten_carbide",
  "hastelloy_c_276"
]

const thermalDepositsMap = {
  "tfcthermaldeposits:mineral/salt": "gtceu:salt_dust",
  "tfcthermaldeposits:mineral/saltpeter": "gtceu:saltpeter_dust",
  "tfcthermaldeposits:mineral/calcite": "gtceu:calcite_dust",
  "tfcthermaldeposits:mineral/brimstone": "gtceu:sulfur_dust",
  "tfcthermaldeposits:mineral/salmiak": "tfcthermaldeposits:mineral/powder/salmiak",
  "tfcthermaldeposits:mineral/zabuyelite": "tfcthermaldeposits:mineral/powder/zabuyelite",
  "tfcthermaldeposits:mineral/magnesite": "gtceu:magnesite_dust",
  "tfcthermaldeposits:mineral/spherocobaltite": "tfcthermaldeposits:mineral/powder/spherocobaltite",
  "tfcthermaldeposits:mineral/alabandite": "tfcthermaldeposits:mineral/powder/alabandite",
  "tfcthermaldeposits:mineral/smithsonite": "tfcthermaldeposits:mineral/powder/smithsonite",
  "tfcthermaldeposits:mineral/greigite": "tfcthermaldeposits:mineral/powder/greigite",
  "tfcthermaldeposits:mineral/apatite": "tfcthermaldeposits:mineral/powder/apatite",
  "tfcthermaldeposits:mineral/bastnasite": "gtceu:bastnasite_dust"
}

// ingot/plates/etc. to convert to GT equivalents
const gtMetalReplaceMap = {
  "alltheores:brass_ingot": "gtceu:brass_ingot",
  "alltheores:bronze_ingot": "gtceu:bronze_ingot",
  "alltheores:invar_ingot": "gtceu:invar_ingot",
  "alltheores:lead_ingot": "gtceu:lead_ingot",
  "alltheores:lead_plate": "gtceu:lead_plate",
  "alltheores:nickel_plate": "gtceu:nickel_plate",
  "alltheores:silver_ingot": "gtceu:silver_ingot",
  "alltheores:silver_plate": "gtceu:silver_plate",
  "alltheores:steel_plate": "gtceu:steel_plate",
  "alltheores:tin_ingot": "gtceu:tin_ingot",
  "alltheores:zinc_ingot": "gtceu:zinc_ingot",
  "alltheores:zinc_plate": "gtceu:zinc_plate",
  "create:copper_sheet": "gtceu:copper_plate",
  "create:golden_sheet": "gtceu:gold_plate",
  "create:zinc_ingot": "gtceu:zinc_ingot",
  "createaddition:zinc_sheet": "gtceu:zinc_plate",
  "immersiveengineering:ingot_aluminum": "gtceu:aluminium_ingot",
  "immersiveengineering:ingot_lead": "gtceu:lead_ingot",
  "immersiveengineering:ingot_nickel": "gtceu:nickel_ingot",
  "immersiveengineering:plate_lead": "gtceu:lead_plate",
  "immersiveengineering:plate_nickel": "gtceu:nickel_plate",
  "railcraft:brass_plate": "gtceu:brass_plate",
  "railcraft:bronze_ingot": "gtceu:bronze_ingot",
  "railcraft:gold_plate": "gtceu:gold_plate",
  "railcraft:lead_ingot": "gtceu:lead_ingot",
  "railcraft:silver_ingot": "gtceu:silver_ingot",
  "railcraft:silver_plate": "gtceu:silver_plate",
  "railcraft:tin_plate": "gtceu:tin_plate",
  "tfc:metal/ingot/brass": "gtceu:brass_ingot",
  "tfc:metal/ingot/bronze": "gtceu:bronze_ingot",
  "tfc:metal/ingot/silver": "gtceu:silver_ingot",
  "tfc:metal/ingot/steel": "gtceu:steel_ingot",
  "tfc:metal/ingot/wrought_iron": "gtceu:wrought_iron_ingot",
  "tfc:metal/sheet/silver": "gtceu:silver_plate",
  "tfc:metal/sheet/steel": "gtceu:steel_plate",
  "tfc:metal/sheet/zinc": "gtceu:zinc_plate"
}
const colorMap = [
  "orange",
  "light_gray",
  "cyan",
  "red",
  "magenta",
  "purple",
  "pink",
  "gray",
  "blue",
  "brown",
  "black",
  "lime",
  "light_blue",
  "yellow",
  "green"
]

let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  const tfc = event.recipes.tfc
  const shaped = event.recipes.minecraft.crafting_shaped
  const smoking = event.recipes.minecraft.smoking
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          tag: "tfc:chisels"
        },
        {
          item: `tfc:rock/button/chalk`
        }
      ],
      result: {
        item: `chalk:white_chalk`
      }
    }
  })
  molds.forEach((mold) => {
    event.recipes.gtceu
      .forming_press(`gregitas:molds/${mold}`)
      .itemInputs(`5x minecraft:clay_ball`)
      .itemOutputs(`tfc:ceramic/unfired_${mold}_mold`)
      .notConsumable(`tfc:ceramic/${mold}_mold`)
      .duration(100)
      .EUt(LV)
  })

  proMolds.forEach((mold) => {
    event.recipes.gtceu
      .forming_press(`gregitas:molds/${mold}`)
      .itemInputs(`5x minecraft:clay_ball`)
      .itemOutputs(`precisionprospecting:ceramic/unfired_${mold}_mold`)
      .notConsumable(`precisionprospecting:ceramic/${mold}_mold`)
      .duration(100)
      .EUt(LV)
  })

  event.recipes.gtceu
    .forming_press(`gregitas:molds/heart`)
    .itemInputs(`5x minecraft:clay_ball`)
    .itemOutputs(`tfcchannelcasting:unfired_heart_mold`)
    .notConsumable(`tfcchannelcasting:heart_mold`)
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .forming_press('gregitas:brick')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemInputs('minecraft:clay_ball')
    .itemOutputs('tfc:ceramic/unfired_brick')
    .duration(100)
    .EUt(8)

  event.recipes.vintageimprovements.curving("tfc:ceramic/unfired_brick", "minecraft:clay_ball", "gtceu:ingot_casting_mold")
    .id("gregitas:forming/brick")

  event.recipes.gtceu
    .forming_press('gregitas:fire_brick')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemInputs('tfc:fire_clay')
    .itemOutputs('tfc:ceramic/unfired_fire_brick')
    .duration(100)
    .EUt(8)

  event.recipes.vintageimprovements.curving("tfc:ceramic/unfired_fire_brick", "tfc:fire_clay", "gtceu:ingot_casting_mold")
    .id("gregitas:forming/fire_brick")

  event.custom({
    type: "tfc:loom",
    ingredient: {
      ingredient: { item: "gtceu:carbon_fibers" },
      count: 2
    },
    result: { item: "gtceu:carbon_fiber_mesh" },
    steps_required: 8,
    in_progress_texture: "minecraft:block/black_wool"
  }).id("gregitas:loom/carbon_fiber_mesh")


  event.custom({
    type: "create:compacting",
    ingredients: [{ tag: "tfc:seeds" }],
    results: [{ amount: 100, fluid: "createdieselgenerators:plant_oil" }]
  })

  colorMap.forEach((color) => {
    event
      .custom({
        type: "tfc:barrel_sealed",
        input_item: {
          ingredient: {
            item: "chalk:white_chalk"
          }
        },
        input_fluid: {
          ingredient: `tfc:${color}_dye`,
          amount: 25
        },
        output_item: {
          item: `chalk:${color}_chalk`
        },
        duration: 1200
      })
      .id(`gregitas:barrel/${color}_chalk`)

    event.recipes.gtceu
      .chemical_bath(`${color}_chalk`)
      .itemInputs("chalk:white_chalk")
      .inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
      .itemOutputs(Item.of(`chalk:${color}_chalk`))
      .duration(500)
      .EUt(LV)
  })
  // event.replaceOutput({ type: "tfc:anvil" }, "gtceu:wrought_iron_rod", "minecraft:apple")
  /*
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/wrought_iron" },
    result: {
      item: "gtceu:wrought_iron_rod",
      count: 2
    },
    tier: 3,
    rules: ["bend_last", "draw_second_last", "draw_third_last"]
  })
  */
  event.recipes.tfc
    .anvil("treetap:tap", "#forge:ingots/copper", ["bend_last", "bend_second_last", "bend_third_last"])
    .tier(1)
    .applyBonus(false)
    .id("gregitas:anvil/treetap")
  /*
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/copper" },
    result: {
      item: "treetap:tap",
      count: 1
    },
    tier: 1,
    rules: ["bend_last", "bend_second_last", "bend_third_last"]
  })
  */

  shaped("tfc:bloomery", ["BBB", "B B", "BBB"], {
    B: "#forge:double_sheets/any_bronze"
  })

  event.custom({
    type: "tfc:glassworking",
    operations: ["blow", "blow", "roll", "pinch", "saw"],
    batch: {
      item: "tfc:silica_glass_batch"
    },
    result: {
      item: "gtceu:glass_tube"
    }
  })

  //Create Start

  gemStonesA.forEach((gemStone) => {
    event.custom({
      type: "tfc:damage_inputs_shapeless_crafting",
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
          {
            tag: "create:sandpaper"
          },
          {
            item: `tfc:ore\/${gemStone}`
          },
          {
            tag: "tfc:chisels"
          },
          {
            tag: "forge:tools/hammers"
          }
        ],
        result: {
          item: `tfc:gem\/${gemStone}`
        }
      }
    })
    event.recipes.vintageimprovements
      .polishing(`tfc:gem/${gemStone}`, `tfc:ore/${gemStone}`, 40)
      .speedLimits(1)
  })
  event.shapeless("2x minecraft:blaze_powder", ["#forge:tools/mortars", "minecraft:blaze_rod"])
  event.shapeless("1x gtceu:saltpeter_dust", ["4x tfc:powder/saltpeter"])
  event.shaped(
    'tfc:powder/saltpeter',
    [
      '  S',
      '   ',
      '   ',
    ],
    {
      S: 'gtceu:saltpeter_dust'
    }
  )
  //Create End

  //GTCEU Start
  event.recipes.kubejs
    .shaped("gtceu:primitive_blast_furnace", ["HRS", "PBR", "DRS"], {
      H: "#forge:tools/hammers",
      R: "#forge:rods/steel",
      S: "#forge:screws/steel",
      P: "#forge:sheets/steel",
      B: "gtceu:firebricks",
      D: "#forge:tools/screwdrivers"
    })
    .damageIngredient(["#forge:tools"])
  shaped("2x gtceu:coke_oven_bricks", ["BMB", "MBM", "BMB"], {
    M: "tfc:mortar",
    B: "gtceu:coke_oven_brick"
  })
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          tag: "tfc:lumber"
        },
        {
          tag: "tfc:lumber"
        },
        {
          tag: "tfc:lumber"
        },
        {
          tag: "tfc:lumber"
        },
        {
          tag: "forge:tools/saws"
        }
      ],
      result: {
        item: "gtceu:empty_wooden_form"
      }
    }
  })
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        tag: "tfc:foods/breads"
      },
      {
        amount: 250,
        fluidTag: "forge:milk"
      }
    ],
    results: [
      {
        item: "create:sweet_roll"
      }
    ]
  })
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          item: "gtceu:empty_wooden_form"
        },
        {
          tag: "forge:tools/knives"
        }
      ],
      result: {
        item: "gtceu:brick_wooden_form"
      }
    }
  })

  event.recipes.gtceu
    .assembler("enchanting")
    .circuit(3)
    .itemInputs(
      {
        type: "forge:partial_nbt",
        item: "apotheosis:gem",
        nbt: '{"affix_data":{"rarity":"apotheosis:mythic"}}'
      },
      {
        type: "forge:partial_nbt",
        item: "apotheosis:gem",
        nbt: '{"affix_data":{"rarity":"apotheosis:mythic"}}'
      },
      {
        tag: "forge:obsidian"
      },
      {
        tag: "forge:double_plates/red_steel"
      },
      {
        tag: "forge:double_plates/blue_steel"
      }
    )
    .itemOutputs("minecraft:enchanting_table")
    .duration(2500)
    .EUt(HV)

  event.recipes.gtceu
    .greenhouse(`gregitas:menril`)
    .circuit(1)
    .notConsumable(`integrateddynamics:menril_sapling`)
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .itemOutputs(
      `64x integrateddynamics:menril_log`,
      `4x integrateddynamics:menril_sapling`,
      "8x integrateddynamics:menril_berries"
    )
    .duration(640)
    .EUt(MV)

  event.recipes.gtceu
    .greenhouse(`gregitas:menril_boosted`)
    .circuit(2)
    .notConsumable(`integrateddynamics:menril_sapling`)
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .itemOutputs(
      `64x integrateddynamics:menril_log`,
      `64x integrateddynamics:menril_log`,
      `8x integrateddynamics:menril_sapling`,
      "16x integrateddynamics:menril_berries"
    )
    .duration(640)
    .EUt(MV)

  tfcFruitSaplings.forEach((sapling) => {
    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}`)
      .circuit(1)
      .notConsumable(`tfc:plant/${sapling}_sapling`)
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(`32x tfc:food/${sapling}`, `32x minecraft:stick`, `4x tfc:plant/${sapling}_sapling`)
      .duration(640)
      .EUt(MV)

    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}_boosted`)
      .circuit(2)
      .notConsumable(`tfc:plant/${sapling}_sapling`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(
        `32x tfc:food/${sapling}`,
        `32x tfc:food/${sapling}`,
        `64x minecraft:stick`,
        `8x tfc:plant/${sapling}_sapling`
      )
      .duration(640)
      .EUt(MV)
  })

  const beneathSaplings = ["crimson", "warped"]

  beneathSaplings.forEach((sapling) => {
    //Greenhouse
    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}`)
      .circuit(1)
      .notConsumable(`beneath:wood/sapling/${sapling}`)
      .inputFluids(Fluid.of("gtceu:nether_air", 250))
      .itemOutputs(`64x beneath:wood/log/${sapling}`, `4x beneath:wood/sapling/${sapling}`)
      .duration(640)
      .EUt(480)

    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}_boosted`)
      .circuit(2)
      .notConsumable(`beneath:wood/sapling/${sapling}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("gtceu:nether_air", 250))
      .itemOutputs(
        `64x beneath:wood/log/${sapling}`,
        `64x beneath:wood/log/${sapling}`,
        `8x beneath:wood/sapling/${sapling}`
      )
      .duration(640)
      .EUt(480)
  })

  tfcSaplings.forEach((sapling) => {
    shaped(`gregitas:${sapling}_hull_segment`, ["P P", "PLP", "SSS"], {
      P: `tfc:wood/planks/${sapling}`,
      S: `tfc:wood/planks/${sapling}_slab`,
      L: `tfc:wood/stripped_log/${sapling}`
    })
    //Greenhouse
    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}`)
      .circuit(1)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(`64x tfc:wood/log/${sapling}`, `4x tfc:wood/sapling/${sapling}`)
      .duration(640)
      .EUt(MV)

    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}_boosted`)
      .circuit(2)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(`64x tfc:wood/log/${sapling}`, `64x tfc:wood/log/${sapling}`, `8x tfc:wood/sapling/${sapling}`)
      .duration(640)
      .EUt(MV)

    //Cutter
    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_water`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("minecraft:water", 4))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(120)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_distilled_water`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:distilled_water", 3))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(80)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_lubricant`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:lubricant", 1))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(40)
      .EUt(LV)
  })

  TFCFlowers.forEach((flower) => {
    event.recipes.gtceu
      .greenhouse(`gregitas:${flower}`)
      .circuit(1)
      .notConsumable(`tfc:plant/${flower}`)
      .inputFluids(Fluid.of("minecraft:water", 2000))
      .itemOutputs(`32x tfc:plant/${flower}`)
      .duration(480)
      .EUt(MV)

    event.recipes.gtceu
      .greenhouse(`gregitas:${flower}_boosted`)
      .circuit(2)
      .notConsumable(`tfc:plant/${flower}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 2000))
      .itemOutputs(`64x tfc:plant/${flower}`, `64x tfc:plant/${flower}`)
      .duration(480)
      .EUt(MV)
  })

  TFCSeeds.forEach((seed) => {
    event.recipes.gtceu
      .greenhouse(`gregitas:${seed}_boosted`)
      .circuit(3)
      .notConsumable(`tfc:seeds/${seed}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 2000))
      .itemOutputs(`16x tfc:food/${seed}`, `16x tfc:food/${seed}`, `32x tfc:seeds/${seed}`, `32x tfc:seeds/${seed}`)
      .duration(480)
      .EUt(HV)
  })
  event.recipes.gtceu
    .greenhouse(`gregitas:pumpkin_boosted`)
    .circuit(3)
    .notConsumable(`tfc:seeds/pumpkin`)
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids(Fluid.of("minecraft:water", 2000))
    .itemOutputs(`16x tfc:pumpkin`, `16x tfc:pumpkin`, `32x tfc:seeds/pumpkin`, `32x tfc:seeds/pumpkin`)
    .duration(480)
    .EUt(HV)

  event.recipes.gtceu
    .greenhouse(`gregitas:melon_boosted`)
    .circuit(3)
    .notConsumable(`tfc:seeds/melon`)
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids(Fluid.of("minecraft:water", 2000))
    .itemOutputs(`16x tfc:melon`, `16x tfc:melon`, `32x tfc:seeds/melon`, `32x tfc:seeds/melon`)
    .duration(480)
    .EUt(HV)

  event.recipes.gtceu
    .greenhouse(`gregitas:papyrus_boosted`)
    .circuit(3)
    .notConsumable(`tfc:seeds/papyrus`)
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids(Fluid.of("minecraft:water", 2000))
    .itemOutputs(`16x tfc:papyrus`, `16x tfc:papyrus`, `32x tfc:seeds/papyrus`, `32x tfc:seeds/papyrus`)
    .duration(480)
    .EUt(HV)

  event.recipes.gtceu
    .greenhouse(`gregitas:jute_boosted`)
    .circuit(3)
    .notConsumable(`tfc:seeds/jute`)
    .itemInputs("4x gtceu:fertilizer")
    .inputFluids(Fluid.of("minecraft:water", 2000))
    .itemOutputs(`16x tfc:jute`, `16x tfc:jute`, `32x tfc:seeds/jute`, `32x tfc:seeds/jute`)
    .duration(480)
    .EUt(HV)

  shaped("gtceu:treated_wood_planks", ["LL", "LL"], { L: "gregitas:creosote_treated_lumber" }).id(
    "gregitas:shaped/treated_wood_planks"
  )
  shaped("gtceu:rubber_planks", ["LL", "LL"], { L: "gregitas:rubber_lumber" }).id("gregitas:shaped/rubber_planks")

  event
    .custom({
      type: "tfc:barrel_sealed",
      input_item: {
        ingredient: {
          tag: "tfc:lumber"
        }
      },
      input_fluid: {
        ingredient: "gtceu:creosote",
        amount: 25
      },
      output_item: {
        item: "gregitas:creosote_treated_lumber"
      },
      duration: 6000
    })
    .id("gregitas:barrel/creosote_treated_lumber")

  //Assembly Line
  event.recipes.gtceu
    .assembly_line("hpca")
    .itemInputs(
      "gtceu:data_bank",
      "4x #gtceu:circuits/zpm",
      "8x gtceu:luv_field_generator",
      "gtceu:data_orb",
      "gtceu:computer_monitor_cover",
      "32x gtceu:uranium_rhodium_dinaquadide_double_wire",
      "32x gtceu:uranium_rhodium_dinaquadide_double_wire",
      "16x gtceu:normal_optical_pipe"
    )
    .inputFluids("gtceu:soldering_alloy 1152", "gtceu:vanadium_gallium 1152", "gtceu:pcb_coolant 4000")
    .itemOutputs("gtceu:high_performance_computation_array")
    ["scannerResearch(java.util.function.UnaryOperator)"]((b) =>
      b.researchStack("gtceu:computer_monitor_cover").EUt(IV).duration(2400)
    )
    .duration(1200)
    .EUt(100000)

  event.recipes.gtceu
    .assembly_line("uhv_battery")
    .itemInputs(
      "16x gtceu:double_darmstadtium_plate",
      "4x gtceu:wetware_processor_mainframe",
      "16x gtceu:energy_cluster",
      "4x gtceu:uv_field_generator",
      "64x gtceu:uhpic_wafer",
      "64x gtceu:uhpic_wafer",
      "64x gtceu:advanced_smd_diode",
      "64x gtceu:advanced_smd_capacitor",
      "64x gtceu:advanced_smd_resistor",
      "64x gtceu:advanced_smd_transistor",
      "64x gtceu:advanced_smd_inductor",
      "32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire",
      "32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire",
      "64x gtceu:neutronium_bolt"
    )
    .inputFluids("gtceu:soldering_alloy 5760", "gtceu:polybenzimidazole 2304", "gtceu:naquadria 2592")
    .itemOutputs("gtceu:max_battery")
    .stationResearch((b) => b.researchStack("gtceu:energy_cluster").EUt(1966080).CWUt(144, 576000))
    .duration(2000)
    .EUt(300000)

  //GTCEU End
  //Computercraft
  shaped("computercraft:computer_normal", ["sps", "scs", "OPO"], {
    O: "gtceu:iron_plate",
    s: "#forge:plates/copper",
    c: "#gtceu:circuits/lv",
    p: "gtceu:resin_printed_circuit_board",
    P: "gtceu:glass_plate"
  })

  shaped("computercraft:computer_advanced", ["sps", "scs", "OPO"], {
    O: "gtceu:steel_plate",
    s: "#forge:plates/gold",
    c: "#gtceu:circuits/mv",
    p: "gtceu:phenolic_printed_circuit_board",
    P: "gtceu:glass_plate"
  })

  event.shapeless("computercraft:wireless_modem_normal", ["computercraft:wired_modem", "minecraft:ender_pearl"])
  event.shapeless("computercraft:wireless_modem_advanced", ["computercraft:wireless_modem_normal", "minecraft:ender_eye"])
  
  //Rock and Stone!
  tfcStone.forEach((stone) => {
    event.recipes.gtceu
      .rock_breaker(`loose_${stone}`)
      .notConsumable(`tfc:rock/raw/${stone}`)
      .itemOutputs(`tfc:rock/raw/${stone}`)
      .duration(16)
      .EUt(LV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })
  //Railcraft Start
  shaped("railcraft:solid_fueled_firebox", ["BBB", "BCB", "BFB"], {
    B: "minecraft:brick",
    C: "minecraft:fire_charge",
    F: "tfc:crucible"
  })
  
  // Replace Railcraft cut firestone recipe
  // (the original recipe requires vanilla netherite pickaxe, and thus is uncraftable)
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
	  type: "minecraft:crafting_shapeless",
	  ingredients: [
	    {item: "minecraft:netherite_ingot"},
	    {item: "railcraft:raw_firestone"},
	    {tag: "tfc:chisels"},
	    {tag: "forge:tools/hammers"}
	  ],
      result: {item: "railcraft:cut_firestone"}
    }
  }).id('railcraft:cut_firestone')

  //Railcraft End

  shaped("framedblocks:framed_chest", ["FRF", "RCR", "FRF"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "#forge:chests/wooden"
  })
  shaped("framedblocks:framed_secret_storage", ["RFR", "FCF", "RFR"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "framedblocks:framed_chest"
  })
  // Blocks needed for schematicannon
  shaped("framedblocks:framed_double_slab", ["S", "S"], {
    S: "framedblocks:framed_slab"
  })
  shaped("framedblocks:framed_double_panel", ["PP"], {
    P: "framedblocks:framed_panel"
  })

  //ThoriumReactors Start
  event.recipes.gtceu
    .assembler("ie_concrete")
    .itemInputs("#forge:clay", "#forge:gravel")
    .inputFluids(Fluid.of("gtceu:concrete", 144))
    .itemOutputs("immersiveengineering:concrete")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .implosion_compressor("blasted_stone")
    .itemInputs("2x immersiveengineering:concrete_leaded", "minecraft:tnt")
    .itemOutputs("2x thoriumreactors:blasted_stone")
    .duration(800)
    .EUt(EV)

  event.recipes.gtceu
    .implosion_compressor("blasted_iron_ingot")
    .itemInputs("2x #forge:ingots/wrought_iron", "minecraft:tnt")
    .itemOutputs("2x thoriumreactors:blasted_iron_ingot")
    .duration(800)
    .EUt(EV)

  event.recipes.gtceu
    .autoclave("enriched_uranium_pellet")
    .inputFluids(Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 600))
    .itemOutputs("thoriumreactors:enriched_uranium")
    .duration(1000)
    .EUt(EV)

  event.recipes.gtceu
    .centrifuge("enriched_uranium_hexafluorite")
    .inputFluids(Fluid.of("thoriumreactors:uranium_hexafluorite", 1000))
    .outputFluids(Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 1000))
    .duration(400)
    .EUt(EV)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .chemical_reactor("enriched_uranium_hexafluorite")
    .itemInputs("thoriumreactors:yellow_cake")
    .inputFluids(Fluid.of("thoriumreactors:hydrofluorite", 1000))
    .outputFluids(Fluid.of("thoriumreactors:uranium_hexafluorite", 1000))
    .duration(400)
    .EUt(EV)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .chemical_reactor("hydrofluorite")
    .itemInputs("#forge:dusts/fluorite")
    .inputFluids(Fluid.of("gtceu:distilled_water", 200))
    .outputFluids(Fluid.of("thoriumreactors:hydrofluorite", 200))
    .duration(100)
    .EUt(EV)

  event.recipes.gtceu
    .compressor("yellow_cake")
    .itemInputs("gregitas:triuranium_octoxide")
    .itemOutputs("3x thoriumreactors:yellow_cake")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .fluid_heater("molten_salt")
    .itemInputs("4x #forge:dusts/thorium")
    .inputFluids(Fluid.of("gtceu:sodium_potassium", 1000))
    .outputFluids(Fluid.of("thoriumreactors:molten_salt", 200))
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .fluid_heater("molten_salt_from_depleted")
    .itemInputs("12x #forge:dusts/thorium")
    .inputFluids(Fluid.of("thoriumreactors:depleted_molten_salt", 6000))
    .outputFluids(Fluid.of("thoriumreactors:molten_salt", 6000))
    .duration(400)
    .EUt(EV)

  //Thorium Reactors Temporary(?) Recipe to get Fluorite
  event.recipes.gtceu
    .autoclave("fluorite")
    .itemInputs("#forge:dusts/calcium")
    .inputFluids(Fluid.of("gtceu:fluorine", 2000))
    .itemOutputs("3x gcyr:fluorite_gem")
    .duration(160)
    .EUt(EV)

  //Thorium Reactors Recipes Phase 2
  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_glass")
    .itemInputs(
      "thoriumreactors:reactor_casing",
      "2x immersiveengineering:insulating_glass",
      "8x thoriumreactors:graphite_nugget"
    )
    .itemOutputs("2x thoriumreactors:reactor_glass")
    .duration(160)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_graphite_moderator")
    .itemInputs("25x thoriumreactors:graphite_tube")
    .itemOutputs("thoriumreactors:reactor_graphite_moderator")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_core")
    .itemInputs(
      "thoriumreactors:reactor_casing",
      "thoriumreactors:module_sensor",
      "thoriumreactors:module_storage",
      "thoriumreactors:reactor_graphite_moderator"
    )
    .itemOutputs("thoriumreactors:reactor_core")
    .duration(600)
    .EUt(EV)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_rod_controller")
    .itemInputs(
      "thoriumreactors:reactor_casing",
      "thoriumreactors:reactor_graphite_moderator",
      "gtceu:ev_conveyor_module",
      "thoriumreactors:module_sensor"
    )
    .itemOutputs("thoriumreactors:reactor_rod_controller")
    .duration(300)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_valve")
    .itemInputs("thoriumreactors:reactor_casing", "thoriumreactors:module_tank")
    .itemOutputs("thoriumreactors:reactor_valve")
    .duration(300)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_controller")
    .itemInputs(
      "thoriumreactors:reactor_casing",
      "thoriumreactors:machine_casing",
      "thoriumreactors:redstone_processor",
      "gtceu:computer_monitor_cover"
    )
    .itemOutputs("thoriumreactors:reactor_controller")
    .duration(600)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("immersiveengineering:insulating_glass")
    .itemInputs("gtceu:tempered_glass", "2x gtceu:stainless_steel_dust")
    .inputFluids(Fluid.of("gtceu:argon fluid", 1000))
    .itemOutputs("immersiveengineering:insulating_glass")
    .duration(100)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("thoriumreactors:graphite_tube")
    .itemInputs("2x thoriumreactors:graphite_ingot", "4x gtceu:carbon_fiber_mesh")
    .inputFluids(Fluid.of("gtceu:reinforced_epoxy_resin", 144))
    .itemOutputs("thoriumreactors:graphite_tube")
    .duration(120)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("thoriumreactors:reactor_casing")
    .itemInputs(
      "4x thoriumreactors:blasted_stone",
      "2x gtceu:double_lead_plate",
      "4x thoriumreactors:blasted_iron_ingot",
      "2x gtceu:titanium_frame"
    )
    .itemOutputs("2x thoriumreactors:reactor_casing")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:machine_casing")
    .itemInputs(
      "thoriumreactors:module_energy",
      "thoriumreactors:module_io",
      "thoriumreactors:module_processing",
      "thoriumreactors:module_storage",
      "gtceu:ev_machine_hull"
    )
    .itemOutputs("thoriumreactors:machine_casing")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:configurator")
    .itemInputs(
      "thoriumreactors:module_empty",
      "gtceu:data_stick",
      "thoriumreactors:redstone_processor",
      "createdeco:decal_radioactive"
    )
    .itemOutputs("thoriumreactors:configurator")
    .duration(360)
    .EUt(EV)

  //Thorium Reactors Phase 3
  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_empty")
    .itemInputs("thoriumreactors:redstone_processor", "gtceu:data_stick", "#gtceu:circuits/hv")
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_empty")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_io")
    .itemInputs("thoriumreactors:module_empty", "gtceu:item_filter", "gtceu:ev_robot_arm")
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_io")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_energy")
    .itemInputs(
      "thoriumreactors:module_empty",
      "gtceu:advanced_energy_detector_cover",
      "gtceu:engraved_lapotron_crystal_chip"
    )
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_energy")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_storage")
    .itemInputs("thoriumreactors:module_empty", "gtceu:ev_conveyor_module")
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_storage")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_tank")
    .itemInputs("thoriumreactors:module_empty", "gtceu:ev_electric_pump")
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_tank")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_sensor")
    .itemInputs(
      "thoriumreactors:module_empty",
      "gtceu:advanced_fluid_detector_cover",
      "gtceu:advanced_item_detector_cover"
    )
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_sensor")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:module_processing")
    .itemInputs("thoriumreactors:module_empty", "4x gtceu:ram_chip")
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:module_processing")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("vintageimprovements:redstone_module")
    .itemInputs(
      "gtceu:gold_plate",
      "minecraft:repeater",
      "#forge:gems/nether_quartz",
      "#forge:dusts/redstone",
      "#forge:nuggets/iron"
    )
    .itemOutputs("vintageimprovements:redstone_module")
    .duration(120)
    .EUt(HV)

  event.recipes.gtceu
    .circuit_assembler("thoriumreactors:redstone_processor")
    .itemInputs(
      "gtceu:lpic_chip",
      "#gtceu:circuits/mv",
      "vintageimprovements:redstone_module",
      "#forge:plates/redstone"
    )
    .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
    .itemOutputs("thoriumreactors:redstone_processor")
    .duration(200)
    .EUt(HV)

  //ThoriumReactors Phase 4
  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_casing")
    .itemInputs(
      "4x thoriumreactors:blasted_stone",
      "2x gtceu:plascrete",
      "4x thoriumreactors:blasted_iron_ingot",
      "2x gtceu:titanium_frame"
    )
    .itemOutputs("2x thoriumreactors:turbine_casing")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:thermal_conductor")
    .itemInputs(
      "4x thoriumreactors:blasted_stone",
      "2x gtceu:nichrome_coil_block",
      "4x thoriumreactors:blasted_iron_ingot",
      "2x gtceu:titanium_frame"
    )
    .itemOutputs("2x thoriumreactors:thermal_conductor")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_valve")
    .itemInputs("thoriumreactors:turbine_casing", "thoriumreactors:module_tank")
    .itemOutputs("thoriumreactors:turbine_valve")
    .duration(300)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_power_port")
    .itemInputs("thoriumreactors:turbine_casing", "thoriumreactors:module_energy")
    .itemOutputs("thoriumreactors:turbine_power_port")
    .duration(300)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_controller")
    .itemInputs(
      "thoriumreactors:turbine_casing",
      "thoriumreactors:machine_casing",
      "thoriumreactors:redstone_processor",
      "gtceu:computer_monitor_cover"
    )
    .itemOutputs("thoriumreactors:turbine_controller")
    .duration(600)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:thermal_valve")
    .itemInputs("thoriumreactors:thermal_conductor", "thoriumreactors:module_tank")
    .itemOutputs("thoriumreactors:thermal_valve")
    .duration(300)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:thermal_controller")
    .itemInputs("thoriumreactors:thermal_conductor", "thoriumreactors:machine_casing", "gtceu:computer_monitor_cover")
    .itemOutputs("thoriumreactors:thermal_controller")
    .duration(600)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_glass")
    .itemInputs("thoriumreactors:turbine_casing", "2x immersiveengineering:insulating_glass")
    .itemOutputs("2x thoriumreactors:turbine_glass")
    .duration(160)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("thoriumreactors:thermal_heat_sink")
    .itemInputs("thoriumreactors:thermal_conductor", "6x #forge:plates/copper")
    .itemOutputs("thoriumreactors:thermal_heat_sink")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_vent")
    .itemInputs("thoriumreactors:turbine_casing", "3x gtceu:titanium_plate")
    .itemOutputs("thoriumreactors:turbine_vent")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:turbine_rotation_mount")
    .itemInputs("thoriumreactors:turbine_casing", "thoriumreactors:turbine_rotor")
    .itemOutputs("thoriumreactors:turbine_rotation_mount")
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .forming_press("thoriumreactors:turbine_rotor")
    .itemInputs("2x gtceu:long_steel_rod", "4x thoriumreactors:blasted_iron_ingot", "4x gtceu:carbon_fiber_mesh")
    .itemOutputs("thoriumreactors:turbine_rotor")
    .duration(80)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("thoriumreactors:electromagnetic_coil")
    .itemInputs("create_new_age:netherite_magnet", "16x gtceu:annealed_copper_single_wire")
    .itemOutputs("thoriumreactors:electromagnetic_coil")
    .duration(160)
    .EUt(EV)

  //ThoriumReactors Phase 5
  event.recipes.gtceu
    .arc_furnace("thoriumreactors:graphite_ingot")
    .itemInputs("gtceu:graphite_dust")
    .inputFluids(Fluid.of("gtceu:nitrogen", 100))
    .itemOutputs("thoriumreactors:graphite_ingot")
    .duration(60)
    .EUt(HV)

  event.recipes.gtceu
    .autoclave("thoriumreactors:enriched_uranium_pellet_2")
    .itemInputs("thoriumreactors:depleted_uranium")
    .inputFluids(Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 400))
    .itemOutputs("thoriumreactors:enriched_uranium")
    .duration(600)
    .EUt(EV)

  event.recipes.gtceu
    .centrifuge("triuranium_octoxide")
    .itemInputs("3x gtceu:uranium_235_dust")
    .inputFluids(Fluid.of("gtceu:sulfuric_acid", 2000))
    .itemOutputs("gregitas:triuranium_octoxide", "2x gtceu:sulfur_dust")
    .outputFluids(Fluid.of("gtceu:hydrogen", 4000))
    .duration(160)
    .EUt(EV)

  event.recipes.gtceu
    .mixer("raw_thorium")
    .itemInputs(
      "gtceu:raw_thorium",
      "minecraft:stone", //realisticly should be monazite
      "minecraft:clay"
    )
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .itemOutputs("2x gtceu:raw_thorium")
    .duration(200)
    .EUt(HV)

  //End of Thorium Reactors

  //Ender Tanks & Chests
  shaped("enderchests:ender_chest", ["eOs", "cCc", "OfO"], {
    e: "gtceu:mv_emitter",
    O: "gtceu:obsidian_plate",
    s: "gtceu:mv_sensor",
    c: "gtceu:mv_conveyor_module",
    C: "gtceu:lv_super_chest",
    f: "gtceu:lv_field_generator"
  })

  shaped("endertanks:ender_tank", ["eOs", "pTp", "OfO"], {
    e: "gtceu:mv_emitter",
    O: "gtceu:obsidian_plate",
    s: "gtceu:mv_sensor",
    p: "gtceu:mv_electric_pump",
    T: "gtceu:lv_super_tank",
    f: "gtceu:lv_field_generator"
  })
  //ImmersiveEngineering
  shaped("immersiveengineering:wirecutter", ["k k", " b ", "s s"], {
    k: "tfc:metal/knife_blade/wrought_iron",
    b: "gtceu:brass_screw",
    s: "#forge:rods/invar"
  })
  shaped("immersiveengineering:craftingtable", ["ppp", "rfr", "rwr"], {
    p: "#forge:treated_wood",
    r: "#forge:rods/treated_wood",
    f: "#forge:frames/treated_wood",
    w: "#tfc:workbenches"
  })
  shaped("immersiveengineering:workbench", [" dq", "pff", "crf"], {
    q: "#forge:feathers",
    d: "#forge:dyes/black",
    p: "#forge:plates/wrought_iron",
    r: "#forge:rods/treated_wood",
    f: "#forge:frames/treated_wood",
    c: "immersiveengineering:craftingtable"
  })
  shaped("railcraft:wooden_tie", ["   ", "ppp", "   "], {
    p: "gregitas:creosote_treated_lumber"
  })
  const gemPowders = ["amethyst", "emerald", "lapis_lazuli", "opal", "pyrite", "ruby", "sapphire", "topaz"]

  gemPowders.forEach((powder) => {
    event.recipes.gtceu
      .centrifuge("tfc_powder_to_dust/" + powder)
      .itemInputs([`4x tfc:powder/${powder}`])
      .itemOutputs([`gtceu:impure_${powder.replace("_lazuli", "")}_dust`])
      .EUt(ULV)
      .duration(200)
  })
  event.recipes.gtceu
    .alloy_smelter("brick")
    .itemInputs("4x minecraft:clay_ball")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x minecraft:brick")
    .duration(80)
    .EUt(LV)

  tfcStone.forEach((stone) => {
    event.recipes.gtceu
      .alloy_smelter(`${stone}_brick`)
      .itemInputs(`4x tfc:rock/loose/${stone}`)
      .notConsumable("gtceu:ingot_casting_mold")
      .itemOutputs(`4x tfc:brick/${stone}`)
      .duration(80)
      .EUt(LV)

    event.recipes.gtceu
      .forge_hammer(`loose_${stone}`)
      .itemInputs(`tfc:rock/raw/${stone}`)
      .itemOutputs(`4x tfc:rock/loose/${stone}`)
      .duration(60)
      .EUt(LV)

    event.recipes.vintageimprovements
      .polishing(`tfc:brick/${stone}`, [[`tfc:rock/loose/${stone}`, `tfc:rock/mossy_loose/${stone}`]], 10)
      .id(`gregitas:polishing/brick/${stone}`)

    event.recipes.vintageimprovements
      .polishing(`tfc:rock/smooth/${stone}`, `tfc:rock/raw/${stone}`, 40)
      .id(`gregitas:polishing/stone/${stone}`)
  })

  tfcStone2.forEach((stone) => {
    event.recipes.gtceu
      .macerator(`${stone}_dust`)
      .itemInputs(`tfc:rock/loose/${stone}`)
      .itemOutputs(`gregitas_core:${stone}_dust`)
      .chancedOutput(`gregitas_core:${stone}_dust`, 1000, 1)
      .duration(60)
      .EUt(LV)
  })

  vanStone.forEach((stone) => {
    event.recipes.gtceu
      .macerator(`${stone}_dust`)
      .itemInputs(`tfc:rock/loose/${stone}`)
      .itemOutputs(`gtceu:${stone}_dust`)
      .chancedOutput(`gtceu:${stone}_dust`, 1000, 1)
      .duration(60)
      .EUt(LV)
  })

  Object.keys(thermalDepositsMap).forEach((input) => {
    const output = thermalDepositsMap[input]

    event.recipes.gtceu.macerator(input).itemInputs(input).itemOutputs(output).duration(400).EUt(2)

    event.recipes.create.crushing([output], input, 250)

    event.recipes.create.milling(output, input, 250)
  })

  event.recipes.gtceu
    .macerator(`netherpebble`)
    .itemInputs("beneath:nether_pebble")
    .itemOutputs("gtceu:small_netherrack_dust")
    .chancedOutput("minecraft:gold_nugget", 125, 1.2)
    .duration(37.5)
    .EUt(ULV)

  event.recipes.gtceu
    .electric_blast_furnace("steel")
    .itemInputs("#forge:ingots/wrought_iron")
    .inputFluids(Fluid.of("gtceu:oxygen", 200))
    .chancedOutput("gtceu:ash_dust", 1111, 1)
    .chancedOutput("immersiveengineering:slag", 2000, 1)
    .itemOutputs("gtceu:steel_ingot")
    .blastFurnaceTemp(1000)
    .duration(300)
    .EUt(MV)

  event.recipes.gtceu
    .electric_blast_furnace("steel_from_iron")
    .itemInputs("#forge:ingots/iron")
    .inputFluids(Fluid.of("gtceu:oxygen", 200))
    .chancedOutput("gtceu:ash_dust", 1111, 1)
    .chancedOutput("immersiveengineering:slag", 2000, 1)
    .itemOutputs("gtceu:steel_ingot")
    .blastFurnaceTemp(1000)
    .duration(300)
    .EUt(MV)

    event.recipes.gtceu
    .electric_blast_furnace("terracotta")
    .itemInputs("#tfc:mud")
    .inputFluids(Fluid.of("gtceu:oxygen", 50))
    .itemOutputs("minecraft:terracotta")
    .blastFurnaceTemp(1000)
    .duration(10)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("copper_alloy")
    .itemInputs("#forge:silicon", "#forge:ingots/copper")
    .itemOutputs("enderio:copper_alloy_ingot")
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("redstone_alloy")
    .itemInputs("#forge:silicon", "#forge:dusts/redstone")
    .itemOutputs("enderio:redstone_alloy_ingot")
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("energetic_alloy")
    .itemInputs("minecraft:redstone_block", "#forge:ingots/gold")
    .itemOutputs("enderio:energetic_alloy_ingot")
    .duration(750)
    .EUt(MV)
  event.recipes.gtceu
    .alloy_smelter("vanilla_iron")
    .itemInputs("#forge:ingots/cast_iron", "#forge:dusts/quicklime")
    .itemOutputs("minecraft:iron_ingot")
    .duration(250)
    .EUt(LV)
  event.recipes.gtceu
    .alloy_smelter("conductive_alloy")
    .itemInputs("enderio:copper_alloy_ingot", "#forge:ingots/wrought_iron")
    .itemOutputs("enderio:conductive_alloy_ingot")
    .duration(750)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("vibrant_alloy")
    .itemInputs("enderio:energetic_alloy_ingot", "#forge:ender_pearls")
    .itemOutputs("enderio:vibrant_alloy_ingot")
    .duration(750)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("pulsating_alloy")
    .itemInputs("enderio:vibrant_alloy_ingot", "enderio:energetic_alloy_ingot")
    .itemOutputs("enderio:pulsating_alloy_ingot")
    .duration(750)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("dark_steel")
    .itemInputs("#forge:ingots/steel", "#forge:dusts/coal")
    .itemOutputs("enderio:dark_steel_ingot")
    .duration(750)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("soularium")
    .itemInputs("#forge:ingots/gold", "#minecraft:soul_fire_base_blocks")
    .itemOutputs("enderio:soularium_ingot")
    .duration(750)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("clear_glass")
    .itemInputs("#forge:glass/colorless", "#tfc:flux")
    .itemOutputs("enderio:clear_glass")
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("dark_clear_glass")
    .itemInputs("#forge:glass/colorless", "4x tfc:gem/amethyst")
    .itemOutputs("enderio:clear_glass_d")
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .alloy_smelter("fused_quartz")
    .itemInputs("minecraft:quartz_block", "#tfc:flux")
    .itemOutputs("enderio:fused_quartz")
    .duration(500)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("dark_fused_quartz")
    .itemInputs("enderio:fused_quartz", "4x tfc:gem/amethyst")
    .itemOutputs("enderio:fused_quartz_d")
    .duration(500)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("enlightened_clear_glass")
    .itemInputs("enderio:clear_glass", "minecraft:glowstone")
    .itemOutputs("enderio:clear_glass_e")
    .duration(750)
    .EUt(MV)

  event.recipes.gtceu
    .alloy_smelter("enlightened_fused_quartz")
    .itemInputs("enderio:fused_quartz", "minecraft:glowstone")
    .itemOutputs("enderio:fused_quartz_e")
    .duration(750)
    .EUt(MV)

  // Create Igneous Alloy
  event.recipes.gtceu
    .alloy_smelter("igneous_alloy")
    .itemInputs("2x gregitas_core:igneous_dust", "2x gtceu:small_zinc_dust")
    .itemOutputs("create:andesite_alloy")
    .duration(60)
    .EUt(LV)

  shaped("computercraft:turtle_normal", ["www", "wpw", "wcw"], {
    w: "tfc:metal/ingot/cast_iron",
    p: "computercraft:computer_normal",
    c: "#forge:chests"
  })

  shaped("tombstone:receptacle_of_familiar", ["twt", "wdw", "twt"], {
    w: "tfc:metal/ingot/cast_iron",
    d: "tombstone:impregnated_diamond",
    t: "minecraft:ghast_tear"
  })
  shaped("simpleplanes:liquid_engine", ["iOi", "BLB", "HcH"], {
    i: "tfc:metal/ingot/cast_iron",
    O: "create:propeller",
    B: "createdieselgenerators:engine_piston",
    L: "railcraft:fluid_fueled_firebox",
    H: "minecraft:heavy_weighted_pressure_plate",
    c: "#forge:ingots/copper"
  })

  shaped("create_new_age:magnetite_block", ["PCP", "CRC", "PCP"], {
    C: "immersiveengineering:coil_hv",
    R: "#forge:rods/steel",
    P: "#forge:plates/magnetic_iron"
  })

  //SFM
  shaped("sfm:manager", ["PPP", "LVL", "CCC"], {
    P: "#forge:plates/wrought_iron",
    L: "gtceu:circuits/lv",
    V: "gtceu:vacuum_tube",
    C: "gtceu:resin_printed_circuit_board"
  })
  shaped("8x sfm:cable", ["ppp", "bcb", "ppp"], {
    p: "#forge:plates/rubber",
    b: "gtceu:brass_small_item_pipe",
    c: "minecraft:comparator"
  })

  shaped("sfm:disk", ["RGB", "PDP", "XTX"], {
    R: "#forge:dyes/red",
    G: "#forge:dyes/green",
    B: "#forge:dyes/blue",
    P: "minecraft:paper",
    D: "computercraft:disk",
    X: "#forge:dusts/redstone",
    T: "minecraft:repeater"
  })
  shaped("sfm:labelgun", ["rr ", "ipg", "h  "], {
    h: "gregitas:small_tool_handle",
    r: "#forge:rods/wrought_iron",
    i: "#forge:dyes/black",
    p: "minecraft:paper",
    g: "tfc:glue"
  })
  shaped("sfm:network_tool", [" LS", " IW", "h  "], {
    h: "gregitas:small_tool_handle",
    L: "minecraft:redstone_lamp",
    S: "gtceu:resin_printed_circuit_board",
    I: "gtceu:basic_integrated_circuit",
    W: "gtceu:copper_octal_wire"
  })
  shaped("sfm:printing_press", ["RGB", "PDP", "XTX"], {
    R: "#forge:dyes/red",
    G: "#forge:dyes/green",
    B: "#forge:dyes/blue",
    P: "#forge:plates/rubber",
    D: "tfc:metal/anvil/wrought_iron",
    X: "#forge:dusts/redstone",
    T: "minecraft:piston"
  })

  event.shapeless("storagedrawers:one_stack_upgrade", ["2x #tfc:rock_knapping", "storagedrawers:upgrade_template"])
  event.shapeless("storagedrawers:obsidian_storage_upgrade", [
    "2x #forge:plates/any_bronze",
    "storagedrawers:upgrade_template"
  ])
  event.shapeless("storagedrawers:iron_storage_upgrade", [
    "2x #forge:double_sheets/any_bronze",
    "storagedrawers:upgrade_template"
  ])
  event.shapeless("storagedrawers:gold_storage_upgrade", ["2x #forge:plates/steel", "storagedrawers:upgrade_template"])
  event.shapeless("storagedrawers:diamond_storage_upgrade", [
    "2x #forge:double_plates/steel",
    "storagedrawers:upgrade_template"
  ])
  event.shapeless("storagedrawers:emerald_storage_upgrade", [
    "2x #forge:plates/stainless_steel",
    "storagedrawers:upgrade_template"
  ])

  TFCGrains.forEach((grain) => {
    smoking(`firmalife:food\/${grain}_flatbread`, `tfc:food\/${grain}_dough`)
  })

  event.recipes.kubejs
    .shaped("gtceu:bronze_rotor", ["PHP", "SRF", "PDP"], {
      H: "#forge:tools/hammers",
      D: "#forge:tools/screwdrivers",
      S: "#forge:screws/bronze",
      P: "#forge:plates/any_bronze",
      R: "gtceu:bronze_ring",
      F: "#forge:tools/files"
    })
    .damageIngredient(["#forge:tools"])

  event.recipes.kubejs
    .shaped("gtceu:bronze_machine_casing", ["PPP", "PHP", "PPP"], {
      H: "#forge:tools/hammers",
      P: "#forge:plates/any_bronze"
    })
    .damageIngredient(["#forge:tools"])

  gtVacuumShit.forEach((hot) => {
    event.custom({
      type: "tfc:barrel_instant",
      input_item: {
        ingredient: {
          item: `gtceu:hot_${hot}_ingot`
        }
      },
      input_fluid: {
        ingredient: "minecraft:water",
        amount: 500
      },
      output_item: {
        item: `gtceu:${hot}_ingot`
      },
      sound: "minecraft:block.fire.extinguish"
    })
  })

  for (const [item, replacement] of Object.entries(gtMetalReplaceMap)) {
    event.shapeless(replacement, [item])
  }
  event.shapeless("immersiveengineering:storage_steel", "gtceu:steel_block")
  event.shapeless("gtceu:steel_block", "immersiveengineering:storage_steel")

  /* Railways Smokestacks */ {
    event.stonecutting("3x railways:smokestack_caboosestyle", "#tfc:lamps")
    event.stonecutting("3x railways:smokestack_long", "#tfc:lamps")
    event.stonecutting("3x railways:smokestack_coalburner", "#tfc:lamps")
    event.stonecutting("3x railways:smokestack_oilburner", "#tfc:lamps")
    event.stonecutting("3x railways:smokestack_streamlined", "#tfc:lamps")
    event.stonecutting("3x railways:smokestack_woodburner", "#tfc:lamps")
  }
// railways locometal
event.stonecutting("2x railways:riveted_locometal", "minecraft:iron_ingot")
  //TFC Jars
  event.recipes.gtceu
    .alloy_smelter("empty_jar")
    .notConsumable("gtceu:block_casting_mold")
    .itemInputs("#tfc:glass_batches_tier_2")
    .itemOutputs("tfc:empty_jar")
    .duration(60)
    .EUt(LV)

  event.recipes.gtceu
    .cutter("tin_lid")
    .itemInputs("gtceu:tin_plate")
    .itemOutputs("32x tfc:jar_lid")
    .inputFluids(Fluid.of("minecraft:water", 4))
    .duration(40)
    .EUt(LV)

  //Fish Oil
  fish.forEach((fish) => {
    event.recipes.gtceu
      .extractor(`${fish}_oil`)
      .itemInputs(`${fish}`)
      .outputFluids(Fluid.of("gtceu:fish_oil", 50))
      .duration(60)
      .EUt(LV)

    //Moss
  })
  event.recipes.kubejs.shaped("2x minecraft:moss_block", ["PPP", "PRP", "PPP"], {
    P: "gtceu:fertilizer",
    R: "#tfc:rock/raw"
  })

  //create stones

  event.recipes.kubejs.shaped("2x minecraft:tuff", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/dacite"
  })

  event.recipes.kubejs.shaped("2x create:veridium", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/schist"
  })

  event.recipes.kubejs.shaped("2x create:ochrum", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/conglomerate"
  })

  event.recipes.kubejs.shaped("2x create:crimsite", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/chert"
  })

  event.recipes.kubejs.shaped("2x create:asurine", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/shale"
  })

  event.recipes.kubejs.shaped("2x create:cut_granite", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/granite"
  })

  event.recipes.kubejs.shaped("2x create:cut_andesite", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/andesite"
  })

  event.recipes.kubejs.shaped("2x create:cut_diorite", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/diorite"
  })

  event.recipes.kubejs.shaped("2x minecraft:calcite", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/marble"
  })

  event.recipes.kubejs.shaped("2x minecraft:dripstone_block", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/claystone"
  })

  //honey

  event.shapeless("4x firmalife:jar/honey", ["minecraft:honey_block", "4x tfc:empty_jar"])

  event.recipes.kubejs.shaped("apotheosis:beeshelf", ["PTP", "ERE", "PTP"], {
    P: "firmalife:beeswax",
    R: "#forge:bookshelves",
    E: "minecraft:honey_block",
    T: "minecraft:beehive"
  })

  //Create Redstone

  event.recipes.kubejs.shaped("create_connected:sequenced_pulse_generator", ["EC ", "ERT", "PPP"], {
    P: "#tfc:rock/raw",
    R: "gtceu:brass_plate",
    C: "#gtceu:circuits/lv",
    E: "create:electron_tube",
    T: "minecraft:redstone_torch"
  })

  //tfc jams

  jams.forEach((jams) => {
    event.recipes.gtceu
      .mixer(`gregitas:mixer_jam_${jams}`)
      .itemInputs(`4x tfc:empty_jar_with_lid`)
      .itemInputs(
        Ingredient.of(
          {
            type: "tfc:not_rotten",
            ingredient: {
              item: `tfc:food/${jams}`
            }
          },
          4
        )
      )
      .itemInputs(`#firmalife:sweetener`)
      .inputFluids(Fluid.of("minecraft:water", 500))
      .itemOutputs(`4x tfc:jar/${jams}`)
      .duration(40)
      .EUt(LV)
  })
 // tfc plant dyes

 dyes.forEach((dye) => {
  event.recipes.create.crushing([`2x minecraft:${dye}_dye`], `#tfc:makes_${dye}_dye`, 250)

  event.recipes.gtceu
    .macerator(`gregitas:macerator_tfc_${dye}_dye`)
    .itemInputs(`#tfc:makes_${dye}_dye`)
    .itemOutputs(`2x minecraft:${dye}_dye`)
    .duration(20)
    .EUt(LV)
})
  //tfc liquid dyes

  dyes.forEach((dyes) => {
    event.recipes.gtceu
      .mixer(`gregitas:mixer_tfc_${dyes}_dye`)
      .itemInputs(`minecraft:${dyes}_dye`)
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .outputFluids(Fluid.of(`tfc:${dyes}_dye`, 1000))
      .duration(100)
      .EUt(LV)
  })

  //alabaster

  dyes.forEach((dyes) => {
    event.recipes.gtceu
      .mixer(`gregitas:mixer_tfc_${dyes}_alabaster`)
      .itemInputs(`tfc:alabaster/raw`)
      .inputFluids(Fluid.of(`tfc:${dyes}_dye`, 25))
      .itemOutputs(`tfc:alabaster/raw/${dyes}`)
      .duration(40)
      .EUt(LV)
  })

  dyes.forEach((dyes) => {
    event.recipes.gtceu
      .mixer(`gregitas:mixer_tfc_${dyes}_alabaster_bricks`)
      .itemInputs(`tfc:alabaster/bricks`)
      .inputFluids(Fluid.of(`tfc:${dyes}_dye`, 25))
      .itemOutputs(`tfc:alabaster/bricks/${dyes}`)
      .duration(40)
      .EUt(LV)
  })

  event.recipes.gtceu
    .mixer(`gregitas:mixer_tfc_alabaster`)
    .itemInputs(`tfc:ore/gypsum`)
    .inputFluids(Fluid.of(`tfc:limewater`, 100))
    .itemOutputs(`tfc:alabaster/raw`)
    .duration(20)
    .EUt(LV)

  dyes.forEach((dyes) => {
    event.recipes.gtceu
      .mixer(`gregitas:mixer_tfc_${dyes}_alabaster_polished`)
      .itemInputs(`tfc:alabaster/polished`)
      .inputFluids(Fluid.of(`tfc:${dyes}_dye`, 25))
      .itemOutputs(`tfc:alabaster/polished/${dyes}`)
      .duration(40)
      .EUt(LV)
  })

  // TFC gem macerating
  
  tfcgems.forEach((tfcgems) => {
    event.recipes.gtceu
      .macerator(`gregitas:${tfcgems}_crushing`)
      .itemInputs(`tfc:ore/${tfcgems}`)
      .itemOutputs(`4x tfc:powder/${tfcgems}`)
      .duration(10)
      .EUt(40)
  })

  Object.entries(TFCtoGTores).forEach(([ore, replacement]) => {
    event.recipes.gtceu
      .macerator(`gregitas:${ore}_crushing`)
      .itemInputs(`tfc:ore/${ore}`)
      .itemOutputs(replacement)
      .duration(10)
      .EUt(40)
  })

  //create stones

  createstone.forEach((createstone) => {
    event.recipes.gtceu
      .rock_breaker(`raw_${createstone}`)
      .notConsumable(`create:${createstone}`)
      .itemOutputs(`create:${createstone}`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  createstonec.forEach((createstonec) => {
    event.recipes.gtceu
      .rock_breaker(`raw_${createstonec}`)
      .notConsumable(`create:${createstonec}`)
      .itemOutputs(`create:${createstonec}`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "firmalife:chocolate")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  createstoneh.forEach((createstoneh) => {
    event.recipes.gtceu
      .rock_breaker(`raw_${createstoneh}`)
      .notConsumable(`create:${createstoneh}`)
      .itemOutputs(`create:${createstoneh}`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "create:honey")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  createstoneh.forEach((createstoneh) => {
    event.recipes.gtceu
      .rock_breaker(`minecraft:dripstone_block`)
      .notConsumable(`minecraft:dripstone_block`)
      .itemOutputs(`minecraft:dripstone_block`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  createstonecut.forEach((createstonecut) => {
    event.recipes.gtceu
      .rock_breaker(`cut_${createstonecut}`)
      .notConsumable(`create:cut_${createstonecut}`)
      .itemOutputs(`create:cut_${createstonecut}`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  createstonevanilla.forEach((createstonevanilla) => {
    event.recipes.gtceu
      .rock_breaker(`raw_${createstonevanilla}`)
      .notConsumable(`minecraft:${createstonevanilla}`)
      .itemOutputs(`minecraft:${createstonevanilla}`)
      .duration(16)
      .EUt(MV)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  //gregtech circuits

  event.recipes.gtceu
    .circuit_assembler("gregitas:quantum_mainframe_advanced")
    .itemInputs("2x gtceu:hssg_frame")
    .itemInputs("2x gtceu:quantum_processor_computer")
    .itemInputs("6x gtceu:advanced_smd_inductor")
    .itemInputs("12x gtceu:advanced_smd_capacitor")
    .itemInputs("24x gtceu:ram_chip")
    .itemInputs("24x gtceu:annealed_copper_double_wire")
    .inputFluids(Fluid.of(`gtceu:tin`, 576))
    .itemOutputs("gtceu:quantum_processor_mainframe")
    .EUt(IV)
    .duration(400)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .circuit_assembler("gregitas:quantum_mainframe_advanced_solder")
    .itemInputs("2x gtceu:hssg_frame")
    .itemInputs("2x gtceu:quantum_processor_computer")
    .itemInputs("6x gtceu:advanced_smd_inductor")
    .itemInputs("12x gtceu:advanced_smd_capacitor")
    .itemInputs("24x gtceu:ram_chip")
    .itemInputs("24x gtceu:annealed_copper_double_wire")
    .inputFluids(Fluid.of(`gtceu:soldering_alloy`, 288))
    .itemOutputs("gtceu:quantum_processor_mainframe")
    .EUt(IV)
    .duration(400)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .circuit_assembler("gregitas:quantum_mainframe")
    .itemInputs("2x gtceu:hssg_frame")
    .itemInputs("2x gtceu:quantum_processor_computer")
    .itemInputs("24x gtceu:smd_inductor")
    .itemInputs("48x gtceu:smd_capacitor")
    .itemInputs("24x gtceu:ram_chip")
    .itemInputs("24x gtceu:annealed_copper_double_wire")
    .inputFluids(Fluid.of(`gtceu:tin`, 576))
    .itemOutputs("gtceu:quantum_processor_mainframe")
    .EUt(IV)
    .duration(800)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu
    .circuit_assembler("gregitas:quantum_mainframe_solder")
    .itemInputs("2x gtceu:hssg_frame")
    .itemInputs("2x gtceu:quantum_processor_computer")
    .itemInputs("24x gtceu:smd_inductor")
    .itemInputs("48x gtceu:smd_capacitor")
    .itemInputs("24x gtceu:ram_chip")
    .itemInputs("24x gtceu:annealed_copper_double_wire")
    .inputFluids(Fluid.of(`gtceu:soldering_alloy`, 288))
    .itemOutputs("gtceu:quantum_processor_mainframe")
    .EUt(IV)
    .duration(800)
    .cleanroom(CleanroomType.CLEANROOM)

  //Liquid Chorus

  event.recipes.gtceu
    .mixer("liquid_chorus")
    .itemInputs("integrateddynamics:proto_chorus")
    .inputFluids(Fluid.of("integrateddynamics:menril_resin", 250))
    .inputFluids(Fluid.of("gtceu:methane", 250))
    .outputFluids(Fluid.of("integrateddynamics:liquid_chorus", 100))
    .duration(50)
    .EUt(HV)

  //create radiator fan

  shaped("railways:smokestack_diesel", [" T ", "TET", " T "], {
    T: "gtceu:iron_plate",
    E: "create:propeller"
  })

  //straw hat

  shaped("tfcambiental:straw_hat", ["TTT", "T T", "   "], {
    T: "tfc:straw"
  })

  //ColdsGrappler
  shaped("coldsgrappler:extra_rope_item", ["  R", " R ", "   "], {
    R: "firmaciv:rope_coil"
  }).id("coldsgrappler:extra_rope")

  shaped("coldsgrappler:rope_light_item", [" R ", " L ", "   "], {
    R: "firmaciv:rope_coil",
    L: "#tfc:lamps"
  }).id("coldsgrappler:rope_light")

  shaped("coldsgrappler:grappler_item", [" P ", " L ", " R "], {
    R: "firmaciv:rope_coil",
    P: "tfc:metal/pickaxe_head/wrought_iron",
    L: "#tfc:lamps"
  }).id("coldsgrappler:grappler")

  baseTFCMetals.forEach((metal) => {
    event.recipes.kubejs
      .shaped(`tfcgroomer:${metal}_grooming_station`, ["PHP", "PPP", "W W"], {
        P: `#forge:plates/${metal}`,
        H: `#forge:tools/hammers`,
        W: `tfc:wattle`
      })
      .damageIngredient(["#forge:tools/hammers"])
      .id(`tfcgroomer:${metal}_grooming_station`)
  })

  event
    .custom({
      type: "immersiveengineering:fermenter",
      energy: 6400,
      fluid: { amount: 80, fluid: "firmalife:yeast_starter" },
      input: { type: "tfc:has_trait", trait: "firmalife:dried", ingredient: { tag: "tfc:foods/fruits" } }
    })
    .id("gregitas:yeast_starter")

  event
    .custom({
      type: "immersiveengineering:fermenter",
      energy: 6400,
      fluid: { amount: 100, fluid: "firmalife:yeast_starter" },
      input: { type: "tfc:not_rotten", ingredient: { item: `gregitas:oat_mash` } }
    })
    .id("gregitas:yeast_starter_oat")

  event
    .custom({
      type: "immersiveengineering:fermenter",
      energy: 6400,
      fluid: { amount: 100, fluid: "firmalife:yeast_starter" },
      input: { type: "tfc:not_rotten", ingredient: { item: `gregitas:wheat_mash` } }
    })
    .id("gregitas:yeast_starter_wheat")

  TFCGrainsToAlchohol.forEach((grain) => {
    event
      .custom({
        type: "immersiveengineering:squeezer",
        energy: 19200,
        input: { type: "tfc:not_rotten", ingredient: { item: `tfc:food/${grain.id}_grain` } },
        result: { item: `gregitas:${grain.id}_mash`, count: 1 }
      })
      .id(`gregitas:${grain.id}_mash`)
  })

  TFCGrainsToAlchohol.forEach((grain) => {
    event
      .custom({
        type: "immersiveengineering:mixer",
        energy: 18000,
        fluid: { amount: 500, tag: "gregitas:water" },
        inputs: [{ type: "tfc:not_rotten", ingredient: { item: `gregitas:${grain.id}_mash` }, count: 1 }],
        result: { amount: 500, fluid: `${grain.alcohol}` }
      })
      .id(`gregitas:${grain.id}_alcohol`)
  })

  // Create Diesel Generators
  shaped("8x createdieselgenerators:asphalt_block", ["SSS", "SBG", "GGG"], {
    S: "#forge:sand",
    G: "#forge:gravel",
    B: "createdieselgenerators:crude_oil_bucket"
  })

  event.custom({
    type: "create:mixing",
    ingredients: [
      { tag: "forge:gravel" },
      { tag: "forge:sand" },
      {
        amount: 100,
        fluid: "createdieselgenerators:crude_oil"
      }
    ],
    heatRequirement: "heated",
    results: [{ item: "createdieselgenerators:asphalt_block", amount: 4 }]
  })

  event
    .custom({
      type: "tfc:knapping",
      knapping_type: "tfc:rock",
      outside_slot_required: false,
      pattern: ["XX XX", "XX XX", "     ", "XX XX", "XX XX"],
      result: {
        item: "scguns:pebbles",
        count: 4
      },
      ingredient: {
        tag: "tfc:any_knapping"
      }
    })
    .id("gregitas:knapping/pebbles")

  event.recipes.kubejs.shaped("scguns:small_casing_mold", ["W  ", "M  ", "   "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })

  event.recipes.kubejs.shaped("scguns:medium_casing_mold", ["   ", "MW ", "   "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })
  event.recipes.kubejs.shaped("scguns:large_casing_mold", ["   ", "M  ", "W  "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })
  event.recipes.kubejs.shaped("scguns:bullet_mold", ["   ", "M  ", " W "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })
  event.recipes.kubejs.shaped("scguns:gun_parts_mold", ["   ", " M ", "W  "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })
  event.recipes.kubejs.shaped("scguns:disc_mold", ["W  ", " M ", "   "], {
    W: "#forge:tools/wire_cutters",
    M: "scguns:blank_mold"
  })

  event.recipes.gtceu
    .compressor(`gregitas:netherite_block`)
    .itemInputs(`9x minecraft:netherite_ingot`)
    .itemOutputs(`minecraft:netherite_block`)
    .duration(300)
    .EUt(2)

  event.recipes.gtceu
    .centrifuge("gregitas:crimson_resin")
    .inputFluids(Fluid.of("gregitas:crimson_resin", 100))
    .chancedOutput("gtceu:sulfur_dust", 1500, 1)
    .chancedOutput("minecraft:redstone", 375, 1)
    .chancedOutput("gtceu:coal_dust", 375, 1)
    .chancedOutput("gtceu:gold_dust", 42, 1)
    .duration(160)
    .EUt(20)

    event.recipes.gtceu
    .macerator("gregitas:crushed_crackle")
    .itemInputs("#iceandfire:crackled_blocks")
    .itemOutputs("2x gregitas:crushed_crackle")
    .chancedOutput("gregitas:crushed_crackle", 420, 1)
    .duration(180)
    .EUt(80)

    event.recipes.gtceu
    .macerator("gregitas:crushed_char")
    .itemInputs("#iceandfire:charred_blocks")
    .itemOutputs("2x gregitas:crushed_char")
    .chancedOutput("gregitas:crushed_char", 420, 1)
    .duration(180)
    .EUt(80)

    event.recipes.gtceu
    .macerator("gregitas:crushed_frostburn")
    .itemInputs("#iceandfire:frozen_blocks")
    .itemOutputs("2x gregitas:crushed_frostburn")
    .chancedOutput("gregitas:crushed_frostburn", 420, 1)
    .duration(180)
    .EUt(80)

    event.recipes.gtceu
    .centrifuge("gregitas:crushed_crackle_outputs")
    .itemInputs("gregitas:crushed_crackle")
    .chancedOutput("gtceu:impure_tungstate_dust", 320, 1)
    .chancedOutput("gtceu:tungsten_dust", 25, 1)
    .chancedOutput("gtceu:tungstate_dust", 100, 1)
    .chancedOutput("gtceu:stone_dust", 1200, 1)
    .duration(160)
    .EUt(420)

    event.recipes.gtceu
    .centrifuge("gregitas:crushed_char_outputs")
    .itemInputs("gregitas:crushed_char")
    .chancedOutput("gtceu:tiny_plutonium_dust", 1320, 1)
    .chancedOutput("gtceu:tiny_uranium_dust", 660, 1)
    .chancedOutput("gtceu:ash_dust", 1200, 1)
    .duration(160)
    .EUt(420)

    event.recipes.gtceu
    .centrifuge("gregitas:crushed_frostburn_outputs")
    .itemInputs("gregitas:crushed_frostburn")
    .chancedOutput("gtceu:tiny_platinum_group_sludge_dust", 1320, 3)
    .chancedOutput("gtceu:tiny_platinum_group_sludge_dust", 660, 1)
    .chancedOutput("gtceu:ice_dust", 1200, 1)
    .outputFluids(Fluid.of("gtceu:liquid_air", 10))
    .duration(160)
    .EUt(128)

    event.recipes.gtceu
    .centrifuge("gregitas:centrifuged_kapok_log")
    .itemInputs("tfc:wood/log/kapok")
    .chancedOutput("gtceu:sticky_resin", 5000, 1200)
    .chancedOutput("gtceu:plant_ball", 3750, 900)
    .chancedOutput("gtceu:carbon_dust", 2500, 600)
    .chancedOutput("gtceu:wood_dust", 2500, 700)
    .outputFluids(Fluid.of("gtceu:methane", 60))
    .duration(200)
    .EUt(20)

  //Sophisticated Backpacks
  shaped("sophisticatedbackpacks:tool_swapper_upgrade", ["BFB", "CGD", "AEA"], {
    A: "#forge:ingots/iron",
    B: "#forge:dusts/redstone",
    G: "sophisticatedbackpacks:upgrade_base",
    C: Item.of("tfc:metal/pickaxe/copper", '{Damage:0}'),
    D: Item.of("tfc:metal/axe/copper", '{Damage:0}'),
    E: Item.of("tfc:metal/shovel/copper", '{Damage:0}'),
    F: Item.of("tfc:metal/sword/copper", '{Damage:0}')
  }).id("gregitas:tool_swapper_upgrade")

  //Firmalife
  event.replaceInput(
    { id: 'firmalife:crafting/solar_drier' },
    'firmalife:metal/rod/stainless_steel',
    '#forge:rods/aluminium'
  )

  // TFC Casting with Channels
  event.recipes.minecraft.smelting('tfcchannelcasting:channel', 'tfcchannelcasting:unfired_channel')
  event.recipes.minecraft.smelting('tfcchannelcasting:mold_table', 'tfcchannelcasting:unfired_mold_table')
  event.recipes.minecraft.smelting('tfcchannelcasting:heart_mold', 'tfcchannelcasting:unfired_heart_mold')

  // Experience bottle filling/draining (EnderIO compatible)
  event.recipes.create.filling("minecraft:experience_bottle", ["minecraft:glass_bottle", {fluidTag: "forge:experience", amount: 250}])
    .id("gregitas:filling/experience_bottle")

  event.recipes.gtceu.canner("gregitas:experience_bottle_fill")
    .itemOutputs("minecraft:experience_bottle")
    .itemInputs("minecraft:glass_bottle")
    .inputFluids(toJSONObject({value: {tag: "forge:experience"}, amount: 250}))
    .duration(2 * 20)
    .EUt(7)

  event.recipes.create.emptying(["minecraft:glass_bottle", Fluid.of("enderio:xp_juice", 250)], "minecraft:experience_bottle")
    .id("gregitas:emptying/experience_bottle")

  event.recipes.gtceu.canner("gregitas:experience_bottle_drain")
    .itemInputs("minecraft:experience_bottle")
    .itemOutputs("minecraft:glass_bottle")
    .outputFluids(Fluid.of("enderio:xp_juice", 250))
    .duration(2 * 20)
    .EUt(7)

  // Fire clay mixing
  event.recipes.create.mixing(["tfc:fire_clay", Item.of("tfc:fire_clay").withChance(0.15)], ["minecraft:clay_ball", "4x tfc:powder/graphite", "4x tfc:powder/kaolinite"])
    .id("gregitas:mixing/fire_clay")

  event.recipes.gtceu.mixer("gregitas:fire_clay")
    .itemInputs(["minecraft:clay_ball", "3x tfc:powder/graphite", "3x tfc:powder/kaolinite"])
	.itemOutputs("tfc:fire_clay")
    .duration(1 * 20)
    .EUt(4)

  // Wood pulp -> treated wood pulp
  event.recipes.create.mixing("gtceu:treated_wood_dust", ["#forge:dusts/wood", {fluidTag: "forge:creosote", amount: 100}])
    .id("gregitas:mixing/treated_wood_dust")
	
  event.recipes.gtceu.chemical_bath("gregitas:treated_wood_dust")
    .itemInputs("#forge:dusts/wood")
    .itemOutputs("gtceu:treated_wood_dust")
    .inputFluids(toJSONObject({value: {tag: "forge:creosote"}, amount: 100}))
    .duration(1 * 20)
    .EUt(4)

  // Scorched Guns blaze fuel
  event.recipes.create.filling("scguns:blaze_fuel", ["scguns:empty_tank", {fluidTag: "forge:blaze", amount: 3 * 144}])
    .id("gregitas:filling/blaze_fuel")
  event.recipes.gtceu.canner("gregitas:blaze_fuel")
    .itemInputs("scguns:empty_tank")
    .itemOutputs("scguns:blaze_fuel")
    .inputFluids(toJSONObject({value: {tag: "forge:blaze"}, amount: 3 * 144}))
    .duration(2 * 20)
    .EUt(7)

  // Paperback books - makes TFC papyrus recipe chain at least somewhat useful
  event.shapeless("minecraft:book", ["3x #forge:plates/paper", "tfc:unrefined_paper"])
    .id("gregitas:shapeless/paperback_book")

  // Immersive Aircraft
  event.recipes.gtceu
  .assembler("gregitas:industrial_gears")
  .itemInputs("gtceu:small_bronze_gear", "gtceu:small_iron_gear", "gtceu:aluminium_rod")
  .inputFluids(Fluid.of("gtceu:soldering_alloy", 50))
  .itemOutputs("immersive_aircraft:industrial_gears")
  .duration(160)
  .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:steel_boiler")
    .itemInputs("7x gtceu:steel_plate", "immersive_aircraft:boiler", "railcraft:solid_fueled_firebox")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 200))
    .itemOutputs("immersive_aircraft:steel_boiler")
    .duration(360)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:sturdy_pipes")
    .itemInputs("3x gtceu:bronze_normal_fluid_pipe", "2x gtceu:steel_plate")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 100))
    .itemOutputs("immersive_aircraft:sturdy_pipes")
    .duration(260)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:air_hull")
    .itemInputs("12x gtceu:stainless_steel_screw", "4x #tfc:lumber", "3x gtceu:aluminium_rod")
    .itemOutputs("immersive_aircraft:hull")
    .duration(160)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:landing_gear")
    .itemInputs("4x gtceu:stainless_steel_screw", "2x gtceu:steel_minecart_wheels", "3x gtceu:aluminium_rod", "2x gtceu:rubber_sheet")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 100))
    .itemOutputs("immersive_aircraft:improved_landing_gear")
    .duration(260)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:hull_reinforcement")
    .itemInputs("3x immersive_aircraft:hull", "6x gtceu:stainless_steel_plate", "32x gtceu:stainless_steel_screw", "2x gtceu:rubber_sheet")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 100))
    .itemOutputs("immersive_aircraft:hull_reinforcement")
    .duration(260)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:gyroscope")
    .itemInputs("3x minecraft:redstone_comparator", "firmaciv:firmaciv_compass", "firmaciv:nav_clock", "firmaciv:sextant", "2x gtceu:aluminium_plate")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 200))
    .itemOutputs("immersive_aircraft:gyroscope")
    .duration(220)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:engine")
    .itemInputs("2x createdieselgenerators:engine_piston", "gregitas:double_aluminium_ingot", "4x gtceu:aluminium_gear", "2x gtceu:copper_single_wire", "immersive_aircraft:steel_boiler", "gtceu:steel_rod")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 200))
    .itemOutputs("immersive_aircraft:engine")
    .duration(420)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:boiler")
    .itemInputs("7x gtceu:bronze_plate", "tfc:crucible")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 200))
    .itemOutputs("immersive_aircraft:boiler")
    .duration(220)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:tunnel_digger")
    .itemInputs("7x gtceu:bronze_plate", "6x gtceu:steel_frame", "4x immersive_aircraft:industrial_gears", "immersive_aircraft:engine", "12x gtceu:steel_minecart_wheels", "8x immersiveengineering:conveyor_basic", "immersive_machinery:iron_drill")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 500))
    .itemOutputs("immersive_machinery:tunnel_digger")
    .duration(420)
    .EUt(MV)

    event.recipes.gtceu
    .assembler("gregitas:rotary_cannon")
    .itemInputs("scguns:rapid_firing_unit", "4x scguns:gun_barrel", "scguns:heavy_gun_parts", "scguns:gun_magazine", "scguns:treated_brass_gun_frame", "create:metal_bracket","create:mechanical_bearing")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 200))
    .itemOutputs("immersive_aircraft:rotary_cannon")
    .duration(320)
    .EUt(MV)


    event.recipes.gtceu
    .assembler("gregitas:copperfin")
    .itemInputs("immersive_aircraft:engine", "6x firmalife:reinforced_glass", "create:propeller", "create:copper_backtank", "4x #forge:plates/copper", "minecraft:conduit")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 1000))
    .itemOutputs("immersive_machinery:copperfin")
    .duration(320)
    .EUt(MV)

    shaped("minecraft:conduit", ["III", "IGI", "III"], {
      I: "enderio:conduit_binder",
      G: "create:propeller"
    })

    event.recipes.gtceu
    .assembler("gregitas:quadrocopter")
    .itemInputs("4x gtceu:lv_electric_motor", "8x minecraft:bamboo", "4x create:propeller", "4x minecraft:redstone_comparator")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 1000))
    .itemOutputs("immersive_aircraft:quadrocopter")
    .duration(420)
    .EUt(MV)


    event.recipes.gtceu
    .assembler("gregitas:biplane")
    .itemInputs("immersive_aircraft:engine", "3x immersive_aircraft:hull", "create:propeller", "minecraft:lever")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 400))
    .itemOutputs("immersive_aircraft:biplane")
    .duration(420)
    .EUt(MV)


    event.recipes.gtceu
    .assembler("gregitas:airship")
    .itemInputs("immersive_aircraft:engine", "6x immersive_aircraft:hull", "create:propeller", "6x immersive_aircraft:sail")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 400))
    .itemOutputs("immersive_aircraft:airship")
    .duration(320)
    .EUt(MV)


    event.recipes.gtceu
    .assembler("gregitas:cargo_airship")
    .itemInputs("immersive_aircraft:engine", "6x immersive_aircraft:hull", "create:propeller", "6x immersive_aircraft:sail", "4x #forge:chests/wooden")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 400))
    .itemOutputs("immersive_aircraft:cargo_airship")
    .duration(360)
    .EUt(MV)  

    event.recipes.gtceu
    .assembler("gregitas:warship")
    .itemInputs("4x immersive_aircraft:engine", "9x immersive_aircraft:hull", "4x create:propeller", "12x immersive_aircraft:sail", "4x #forge:chests/wooden")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 400))
    .itemOutputs("immersive_aircraft:warship")
    .duration(420)
    .EUt(MV)  

    event.recipes.gtceu
    .assembler("gregitas:crossbow")
    .itemInputs("minecraft:crossbow","create:metal_bracket","create:mechanical_bearing")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 100))
    .itemOutputs("immersive_aircraft:heavy_crossbow")
    .duration(160)
    .EUt(MV)  


    event.recipes.gtceu
    .assembler("gregitas:bomb_bay")
    .itemInputs("4x create:mechanical_bearing","2x create:metal_bracket", "6x gtceu:steel_plate", "minecraft:tripwire_hook")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 100))
    .itemOutputs("immersive_aircraft:bomb_bay")
    .duration(260)
    .EUt(MV)  

    shaped("headlight:headlight", [" I ", "LPL", "S S"], {
      I: "minecraft:item_frame",
      L: "#forge:leather",
      P: "tfc:wool_cloth",
      S: "minecraft:string"
    })
}
