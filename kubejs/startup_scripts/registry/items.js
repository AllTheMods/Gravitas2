// priority 10

const gtTFCTools = [
  {
    id: "aluminium",
    color: 0x80c8f0,
    name: "Aluminium"
  },
  {
    id: "titanium",
    color: 0xdca0f0,
    name: "Titanium"
  },
  {
    id: "invar",
    color: 0xb4b478,
    name: "Invar"
  },
  {
    id: "sterling_silver",
    color: 0xfadce1,
    name: "Sterling Silver"
  },
  {
    id: "rose_gold",
    color: 0xffe61e,
    name: "Rose Gold"
  },
  {
    id: "stainless_steel",
    color: 0xc8c8dc,
    name: "Stainless Steel"
  },
  {
    id: "ultimet",
    color: 0xb4b4e6,
    name: "Ultimet"
  },
  {
    id: "tungsten_carbide",
    color: 0x330066,
    name: "Tungsten Carbide"
  },
  {
    id: "damascus_steel",
    color: 0x6e6e6e,
    name: "Damascus Steel"
  },
  {
    id: "tungsten_steel",
    color: 0x6464a0,
    name: "Tungsten Steel"
  },
  {
    id: "cobalt_brass",
    color: 0xb4b4a0,
    name: "Cobalt Brass"
  },
  {
    id: "vanadium_steel",
    color: 0xc0c0c0,
    name: "Vanadium Steel"
  }
]
const TFCGrainsToMash = [
  {
    id: "barley",
    color: 0x8b4513,
    name: "Barley",
    alcohol: "beer"
  },
  {
    id: "maize",
    color: 0xffd700,
    name: "Maize",
    alcohol: "corn_whiskey"
  },
  {
    id: "oat",
    color: 0x8b4513,
    name: "Oat",
    alcohol: "yeast_starter"
  },
  {
    id: "rye",
    color: 0x8b4513,
    name: "Rye",
    alcohol: "rye_whiskey"
  },
  {
    id: "rice",
    color: 0xffd700,
    name: "Rice",
    alcohol: "sake"
  },
  {
    id: "wheat",
    color: 0xffd700,
    name: "Wheat",
    alcohol: "whiskey"
  }
]

const gtMortars = [
  {
    id: "bronze",
    color: 0xff8000,
    name: "Bronze"
  },
  {
    id: "invar",
    color: 0xb4b478,
    name: "Invar"
  },
  {
    id: "steel",
    color: 0x808080,
    name: "Steel"
  },
  {
    id: "wrought_iron",
    color: 0xc8b4b4,
    name: "Wrought Iron"
  },
  {
    id: "damascus_steel",
    color: 0x6e6e6e,
    name: "Damascus Steel"
  },
  {
    id: "cobalt_brass",
    color: 0xb4b4a0,
    name: "Cobalt Brass"
  }
]

const gtTFCtoolsTFC = [
  {
    id: "bronze",
    color: 0xff8000,
    name: "Bronze"
  },
  {
    id: "steel",
    color: 0x808080,
    name: "Steel"
  },
  {
    id: "wrought_iron",
    color: 0xc8b4b4,
    name: "Wrought Iron"
  },
  {
    id: "red_steel",
    color: 0x8c6464,
    name: "Red Steel"
  },
  {
    id: "blue_steel",
    color: 0x64648c,
    name: "Blue Steel"
  }
]
const tfcWoodTypes = [
  {
    id: "acacia",
    color: 0x9d422f,
    name: "Acacia"
  },
  {
    id: "ash",
    color: 0x9e5647,
    name: "Ash"
  },
  {
    id: "aspen",
    color: 0x40402d,
    name: "Aspen"
  },
  {
    id: "birch",
    color: 0x80704e,
    name: "Birch"
  },
  {
    id: "blackwood",
    color: 0x1d1b19,
    name: "Blackwood"
  },
  {
    id: "chestnut",
    color: 0x55341f,
    name: "Chestnut"
  },
  {
    id: "douglas_fir",
    color: 0xae9476,
    name: "Douglas Fir"
  },
  {
    id: "hickory",
    color: 0x492f17,
    name: "Hickory"
  },
  {
    id: "kapok",
    color: 0xa27892,
    name: "Kapok"
  },
  {
    id: "mangrove",
    color: 0x6f2a2d,
    name: "Mangrove"
  },
  {
    id: "maple",
    color: 0xaa743d,
    name: "Maple"
  },
  {
    id: "oak",
    color: 0xc29d62,
    name: "Oak"
  },
  {
    id: "palm",
    color: 0xc07438,
    name: "Palm"
  },
  {
    id: "pine",
    color: 0xd1bd9a,
    name: "Pine"
  },
  {
    id: "rosewood",
    color: 0x8f2228,
    name: "Rosewood"
  },
  {
    id: "sequoia",
    color: 0x754434,
    name: "Sequoia"
  },
  {
    id: "spruce",
    color: 0xbf806f,
    name: "Spruce"
  },
  {
    id: "sycamore",
    color: 0xd2a040,
    name: "Sycamore"
  },
  {
    id: "white_cedar",
    color: 0xc2b5ad,
    name: "White Cedar"
  },
  {
    id: "willow",
    color: 0x3a430b,
    name: "Willow"
  }
]
let registerItems = (/** @type {Registry.Item} */ event) => {
  //GTCEu
  event.create("gregitas:creosote_treated_lumber").texture("kubejs:item/lumber").color(0x502800)
  event.create("gregitas:rubber_lumber").texture("kubejs:item/lumber").color(0x615232)

  event.create("gregitas:certus_boule").texture("kubejs:item/certus_boule")
  event.create("gregitas:certus_wafer").texture("kubejs:item/certus_wafer")
  event.create("gregitas:engineering_wafer").texture("kubejs:item/engineering_wafer")
  event.create("gregitas:calculation_wafer").texture("kubejs:item/calculation_wafer")
  event.create("gregitas:logic_wafer").texture("kubejs:item/logic_wafer")
  event.create("gregitas:crafting_core").displayName("Crafting Simulation Core").texture("kubejs:item/crafting_core")

  //Tools
  event.create("gregitas:small_tool_handle").texture("kubejs:item/tools/handle").unstackable()
  event.create("gregitas:stone_bowl").texture("kubejs:item/tools/stone_bowl").unstackable()
  event.create("gregitas:flint_pestle").texture("kubejs:item/tools/pestle").color(0, 0x002040).unstackable()
  event.create("gregitas:rubber_mallet_head").texture("kubejs:item/tools/mallet").color(0, 0x000000).unstackable()
  event.create("gregitas:polyethylene_mallet_head").texture("kubejs:item/tools/mallet").color(0, 0xc8c8c8).unstackable()
  event
    .create("gregitas:polytetrafluoroethylene_mallet_head")
    .texture("kubejs:item/tools/mallet")
    .color(0, 0x646464)
    .unstackable()
  event
    .create("gregitas:polybenzimidazole_mallet_head")
    .texture("kubejs:item/tools/mallet")
    .color(0, 0x2d2d2d)
    .unstackable()
  event.create("gregitas:rubber_plunger_head").texture("kubejs:item/tools/plunger").color(0, 0x353529).unstackable()
  event
    .create("gregitas:polyethylene_plunger_head")
    .texture("kubejs:item/tools/plunger")
    .color(0, 0xf0f0f0)
    .unstackable()
  event
    .create("gregitas:polytetrafluoroethylene_plunger_head")
    .texture("kubejs:item/tools/plunger")
    .color(0, 0xffffff)
    .unstackable()
  event
    .create("gregitas:polybenzimidazole_plunger_head")
    .texture("kubejs:item/tools/plunger")
    .color(0, 0x464441)
    .unstackable()

  gtTFCTools.forEach((metal) => {
    event.create(`gregitas:${metal.id}_saw_blade`).texture("kubejs:item/tools/saw").color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_file_head`).texture("kubejs:item/tools/file").color(0, metal.color).unstackable()
    event
      .create(`gregitas:${metal.id}_hammer_head`)
      .texture("kubejs:item/tools/hammer")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_knife_blade`)
      .texture("kubejs:item/tools/knife")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_crowbar_base`)
      .texture("kubejs:item/tools/crowbar")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_cutter_blade`)
      .texture("layer0", "kubejs:item/tools/cutter_handle")
      .texture("layer1", "kubejs:item/tools/cutter_blade")
      .color(1, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_wrench_base`)
      .texture("kubejs:item/tools/wrench_base")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_wrench_claw`)
      .texture("kubejs:item/tools/wrench_claw")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:double_${metal.id}_ingot`)
      .displayName(`${metal.name} Double Ingot`)
      .texture("tfc:item/metal/double_ingot/wrought_iron")
      .color(0, metal.color)
    event.create(`gregitas:${metal.id}_axe_head`).texture("kubejs:item/tools/axe").color(0, metal.color).unstackable()
    event.create(`gregitas:${metal.id}_hoe_head`).texture("kubejs:item/tools/hoe").color(0, metal.color).unstackable()
    event
      .create(`gregitas:${metal.id}_pickaxe_head`)
      .texture("kubejs:item/tools/pickaxe")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_scythe_head`)
      .texture("kubejs:item/tools/scythe")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_shovel_head`)
      .texture("kubejs:item/tools/shovel")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_sword_blade`)
      .texture("kubejs:item/tools/sword")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_butchery_blade`)
      .texture("kubejs:item/tools/butchery_blade")
      .color(0, metal.color)
      .unstackable()
  })
  tfcWoodTypes.forEach((wood) => {
    event
      .create(`gregitas:${wood.id}_hull_segment`)
      .texture("gregitas:item/ship/hull")
      .color(0, wood.color)
      .unstackable()
  })
  gtMortars.forEach((metal) => {
    event.create(`gregitas:${metal.id}_pestle`).texture("kubejs:item/tools/pestle").color(0, metal.color).unstackable()
  })

  gtTFCtoolsTFC.forEach((metal) => {
    event.create(`gregitas:${metal.id}_file_head`).texture("kubejs:item/tools/file").color(0, metal.color).unstackable()
    event
      .create(`gregitas:${metal.id}_crowbar_base`)
      .texture("kubejs:item/tools/crowbar")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_cutter_blade`)
      .texture("layer0", "kubejs:item/tools/cutter_handle")
      .texture("layer1", "kubejs:item/tools/cutter_blade")
      .color(1, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_wrench_base`)
      .texture("kubejs:item/tools/wrench_base")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_wrench_claw`)
      .texture("kubejs:item/tools/wrench_claw")
      .color(0, metal.color)
      .unstackable()
    event
      .create(`gregitas:${metal.id}_butchery_blade`)
      .texture("kubejs:item/tools/butchery_blade")
      .color(0, metal.color)
      .unstackable()
  })
  event
    .create("gregitas:maple_glazed_roll")
    .texture("create:item/sweet_roll")
    .color(0, 0xbb9351)
    .food((food) => {
      food.hunger(6).saturation(6)
    })
  TFCGrainsToMash.forEach((grain) => {
    event.create(`gregitas:${grain.id}_mash`).texture(`tfc:item/food/${grain.id}_grain`).color(0, grain.color)
  })

  //Custom Items
  event.create("gregitas:packaged_greenhouse").modelJson(pkgJson)
  event.create("gregitas:cane_pulp").texture("gtceu:item/material_sets/dull/dust").color(0, 0xdc6f51)
  event.create("gregitas:triuranium_octoxide").texture("kubejs:item/triuranium_octoxide")

  event.create("gregitas:crushed_crackle").texture("kubejs:item/triuranium_octoxide").color(0, 0x555555)
  event.create("gregitas:crushed_char").texture("kubejs:item/triuranium_octoxide").color(0, 0x111111)
  event.create("gregitas:crushed_frostburn").texture("kubejs:item/triuranium_octoxide").color(0, 0xFFFFFF)

}
