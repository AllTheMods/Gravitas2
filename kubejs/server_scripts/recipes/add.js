// priority 10
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
let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
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

  event.shaped("tfc:bloomery", ["BBB", "B B", "BBB"], {
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

  event.shaped("create:millstone", [" M ", " G ", " Q "], {
    M: "tfc:handstone",
    G: "create:cogwheel",
    Q: "tfc:quern"
  })
  
  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "tfc:raw_iron_bloom" }],
    results: [{ item: "tfc:refined_iron_bloom" }]
  })
  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "tfc:refined_iron_bloom" }],
    results: [{ item: "tfc:metal/ingot/wrought_iron" }]
  })
  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "create:shaft"
      },
      { tag: "forge:treated_wood" }
    ],
    results: [{ item: "create:cogwheel" }]
  })
  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "create:cogwheel"
      },
      { tag: "forge:treated_wood" }
    ],
    results: [{ item: "create:large_cogwheel" }]
  })
  //Create End

  //GTCEU Start
  event.shaped("gtceu:primitive_blast_furnace", ["HRS", "PBR", "DRS"], {
    H: "#forge:tools/hammers",
    R: "#forge:rods/steel",
    S: "#forge:screws/steel",
    P: "#forge:sheets/steel",
    B: "gtceu:firebricks",
    D: "#forge:tools/screwdrivers"
  })

  tfcSaplings.forEach((sapling) => {
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
      .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
      .duration(120)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_distilled_water`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:distilled_water", 3))
      .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
      .duration(80)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_lubricant`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:lubricant", 1))
      .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
      .duration(40)
      .EUt(LV)
  })

  event.shaped('gtceu:treated_wood_planks', ['LL', 'LL'], {L: 'gregitas:creosote_treated_lumber'}).id('gregitas:shaped/treated_wood_planks')
  event.shaped('gtceu:rubber_planks', ['LL', 'LL'], {L: 'gregitas:rubber_lumber'}).id('gregitas:shaped/rubber_planks')

  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: 'tfc:lumber'
      }
    },
    input_fluid: {
      ingredient: 'gtceu:creosote',
      amount: 25
    },
    output_item: {
      item: 'gregitas:creosote_treated_lumber'
    },
    duration: 6000
  }).id('gregitas:barrel/creosote_treated_lumber')
  
  //GTCEU End

  //Rock and Stone!
  tfcStone.forEach((stone) => {
    event.recipes.gtceu
      .rock_breaker(`loose_${stone}`)
      .notConsumable(`tfc:rock/raw/${stone}`)
      .itemOutputs(`tfc:rock/raw/${stone}`)
      .duration(16)
      .EUt(LV)
      ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
      ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })
  //Railcraft Start
  event.shaped("railcraft:solid_fueled_firebox", ["BBB", "BCB", "BFB"], {
    B: "minecraft:brick",
    C: "minecraft:fire_charge",
    F: "tfc:crucible"
  })

  event.shaped("framedblocks:framed_chest", ["FRF", "RCR", "FRF"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "#forge:chests/wooden"
  })

  event.shaped("framedblocks:framed_secret_storage", ["RFR", "FCF", "RFR"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "framedblocks:framed_chest"
  })
  //Railcraft End


  //Framed Compacting Drawers Start
  event.shaped("framedcompactdrawers:framed_full_one", ["SPS", " C ", "SPS"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/brass"
  })

  event.shaped("2x framedcompactdrawers:framed_full_two", ["SPS", "C C", "SPS"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/brass"
  })

  event.shaped("4x framedcompactdrawers:framed_full_four", ["CSC", "SPS", "CSC"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/double/brass"
  })

  event.shaped("framedcompactdrawers:framed_compact_drawer", ["PSP", "QDQ", "SRS"], {
    P: "#forge:plates/brass",
    S: "#forge:screws/brass",
    Q: "minecraft:piston",
    D: "#forge:chests/wooden",
    R: "minecraft:repeater"
  })

  event.shaped("framedcompactdrawers:framed_drawer_controller", ["PSP", "TDQ", "SRS"], {
    P: "#forge:plates/brass",
    S: "#forge:screws/brass",
    Q: "minecraft:piston",
    D: "framedcompactdrawers:framed_compact_drawer",
    R: "minecraft:repeater",
    T: "#forge:rods/brass"
  })
  //Framed Compacting Drawers End
}
