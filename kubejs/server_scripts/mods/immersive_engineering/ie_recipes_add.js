// priority 10

var ieRecipesAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  // IE → GT metal conversions
  event.shapeless("gtceu:aluminium_ingot", "immersiveengineering:ingot_aluminum")
  event.shapeless("gtceu:lead_ingot",      "immersiveengineering:ingot_lead")
  event.shapeless("gtceu:nickel_ingot",    "immersiveengineering:ingot_nickel")
  event.shapeless("gtceu:lead_plate",      "immersiveengineering:plate_lead")
  event.shapeless("gtceu:nickel_plate",    "immersiveengineering:plate_nickel")

  // Steel storage block unification
  event.shapeless("immersiveengineering:storage_steel", "gtceu:steel_block")
  event.shapeless("gtceu:steel_block", "immersiveengineering:storage_steel")

  // Wire coil
  event.shaped("4x immersiveengineering:wirecoil_structure_steel", [" C ", "CSC", " C "], {
    C: "#forge:wires/steel",
    S: "#forge:rods/wooden"
  })

  // Tools
  event.shaped("immersiveengineering:wirecutter", ["k k", " b ", "s s"], {
    k: "tfc:metal/knife_blade/wrought_iron",
    b: "gtceu:brass_screw",
    s: "#forge:rods/invar"
  })
  event.shaped("immersiveengineering:craftingtable", ["ppp", "rfr", "rwr"], {
    p: "#forge:treated_wood",
    r: "#forge:rods/treated_wood",
    f: "#forge:frames/treated_wood",
    w: "#tfc:workbenches"
  })
  event.shaped("immersiveengineering:workbench", [" dq", "pff", "crf"], {
    q: "#forge:feathers",
    d: "#forge:dyes/black",
    p: "#forge:plates/wrought_iron",
    r: "#forge:rods/treated_wood",
    f: "#forge:frames/treated_wood",
    c: "immersiveengineering:craftingtable"
  })
}
