// priority 10

let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/wrought_iron" },
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
  event.shaped("create:andesite_alloy", ["SZ ", "ZS ", "   "], {
    S: "#tfc:igneous_extrusive_rock",
    Z: "#forge:nuggets/zinc"
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

  //Functional Storage

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
}
