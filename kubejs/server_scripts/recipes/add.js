// priority 10

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
    type: "tfc:welding",
    first_input: { item: "gtceu:wrought_iron_rod" },
    second_input: { item: "gtceu:wrought_iron_rod" },
    tier: 3,
    result: { item: "kubejs:cutter_head" }
  })

  event.custom({
    type: "tfc:welding",
    first_input: { item: "gtceu:wrought_iron_bolt" },
    second_input: { item: "gtceu:wrought_iron_bolt" },
    tier: 3,
    result: { item: "gtceu:wrought_iron_screw" }
  })

  event.shaped("gtceu:wrought_iron_wire_cutter", [" F ", "HCD", "RSR"], {
    F: "#forge:tools/files",
    H: "#forge:tools/hammers",
    C: "kubejs:cutter_head",
    D: "#forge:tools/screwdrivers",
    R: "gtceu:wrought_iron_rod",
    S: "gtceu:wrought_iron_screw"
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
  event.shaped("create:andesite_alloy", ["SZ ", "ZS ", "   "], {
    S: "#tfc:igneous_extrusive_rock",
    Z: "#forge:nuggets/zinc"
  })

  event.custom({
    type: "create:mixing",
    ingredients: [{ tag: "tfc:igneous_extrusive_rock" }, { tag: "forge:nuggets/zinc" }],
    results: [{ item: "create:andesite_alloy" }]
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
    event.recipes.gtceu.greenhouse(`gregitas:${sapling}`)
      .circuit(1)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(
        `64x tfc:wood/log/${sapling}`,
        `4x tfc:wood/sapling/${sapling}`
      )
      .duration(640)
      .EUt(MV)

    event.recipes.gtceu.greenhouse(`gregitas:${sapling}_boosted`)
      .circuit(2)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(
        `64x tfc:wood/log/${sapling}`,
        `64x tfc:wood/log/${sapling}`,
        `8x tfc:wood/sapling/${sapling}`
      )
      .duration(640)
      .EUt(MV)
    
    //Cutter
      event.recipes.gtceu.cutter(`gregitas:${sapling}_lumber_water`)
        .itemInputs(`tfc:wood/log/${sapling}`)
        .inputFluids(Fluid.of("minecraft:water", 4))
        .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
        .duration(120)
        .EUt(LV)

      event.recipes.gtceu.cutter(`gregitas:${sapling}_lumber_distilled_water`)
        .itemInputs(`tfc:wood/log/${sapling}`)
        .inputFluids(Fluid.of("gtceu:distilled_water", 3))
        .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
        .duration(80)
        .EUt(LV)
      
      event.recipes.gtceu.cutter(`gregitas:${sapling}_lumber_lubricant`)
        .itemInputs(`tfc:wood/log/${sapling}`)
        .inputFluids(Fluid.of("gtceu:lubricant", 1))
        .itemOutputs(`12x tfc:wood/lumber/${sapling}`)
        .duration(40)
        .EUt(LV)
  })
  //GTCEU End

  //Rock and Stone!
  tfcStone.forEach((therock) => {
    event.custom({
      type: "gtceu:rock_breaker",
      duration: 16,
      data: {
        fluidA: "minecraft:lava",
        fluidB: "minecraft:water"
      },
      inputs: {
        item: [
          {
            content: {
              type: "gtceu:sized",
              "fabric:type": "gtceu:sized",
              count: 1,
              ingredient: {
                item: `tfc:rock/raw/${therock}`
              }
            },
            chance: 0.0,
            tierChanceBoost: 0.0
          }
        ]
      },
      outputs: {
        item: [
          {
            content: {
              type: "gtceu:sized",
              "fabric:type": "gtceu:sized",
              count: 1,
              ingredient: {
                item: `tfc:rock/raw/${therock}`
              }
            },
            chance: 1.0,
            tierChanceBoost: 0.0
          }
        ]
      },
      tickInputs: {
        eu: [
          {
            content: LV,
            chance: 1.0,
            tierChanceBoost: 0.0
          }
        ]
      },
      tickOutputs: {},
      recipeConditions: [
        {
          type: "rock_breaker",
          data: {}
        }
      ]
    })
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

  //Frunctional Storage Start
  event.shaped("functionalstorage:framed_1", ["SPS", " C ", "SPS"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/brass"
  })

  event.shaped("2x functionalstorage:framed_2", ["SPS", "C C", "SPS"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/brass"
  })

  event.shaped("4x functionalstorage:framed_4", ["CSC", "SPS", "CSC"], {
    S: "#forge:screws/brass",
    C: "#forge:chests/wooden",
    P: "#forge:plates/double/brass"
  })

  event.shaped("functionalstorage:compacting_framed_drawer", ["PSP", "QDQ", "SRS"], {
    P: "#forge:plates/brass",
    S: "#forge:screws/brass",
    Q: "minecraft:piston",
    D: "#functionalstorage:drawer",
    R: "minecraft:repeater"
  })

  event.shaped("functionalstorage:framed_simple_compacting_drawer", ["PSP", "TDQ", "SRS"], {
    P: "#forge:plates/brass",
    S: "#forge:screws/brass",
    Q: "minecraft:piston",
    D: "#functionalstorage:drawer",
    R: "minecraft:repeater",
    T: "#forge:rods/brass"
  })
  //Functional Storage End
}
