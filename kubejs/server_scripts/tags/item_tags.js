// priority 10

let gtceuIngots = [
  "aluminium",
  "americium",
  "annealed_copper",
  "antimony",
  "battery_alloy",
  "beryllium",
  "blue_alloy",
  "chromium",
  "cobalt",
  "cobalt_brass",
  "cupronickel",
  "damascus_steel",
  "darmstadtium",
  "duranium",
  "electrum",
  "enriched_naquadah",
  "enriched_naquadah_trinium_europium_duranide",
  "europium",
  "gallium",
  "gallium_arsenide",
  // "graphene", no fluid
  "hsse",
  "hssg",
  "hsss",
  "indium",
  "indium_gallium_phosphide",
  "indium_tin_barium_titanium_cuprate",
  "invar",
  "iridium",
  "kanthal",
  "lead",
  "magnalium",
  "magnesium_diboride",
  "manganese",
  "manganese_phosphide",
  "mercury_barium_calcium_cuprate",
  "molybdenum",
  "naquadah",
  "naquadah_alloy",
  "naquadria",
  "neodymium",
  "neutronium",
  "nichrome",
  "nickel_zinc_ferrite",
  "niobium",
  "niobium_nitride",
  "niobium_titanium",
  "osmiridium",
  "osmium",
  "palladium",
  "platinum",
  "plutonium",
  "plutonium_241",
  "potin",
  "red_alloy",
  "rhodium",
  "rhodium_plated_palladium",
  // "ruridit", no fluid
  "ruthenium",
  "ruthenium_trinium_americium_neutronate",
  "samarium",
  "samarium_iron_arsenic_oxide",
  "silicon",
  "soldering_alloy",
  "stainless_steel",
  "tantalum",
  "thorium",
  "tin_alloy",
  "titanium",
  "trinium",
  "tritanium",
  "tungsten",
  "tungsten_carbide",
  "tungsten_steel",
  "ultimet",
  "uranium",
  "uranium_235",
  "uranium_rhodium_dinaquadide",
  "uranium_triplatinum",
  "vanadium",
  "vanadium_gallium",
  "vanadium_steel",
  "yttrium",
  "yttrium_barium_cuprate"
]

let tfcStonei = [
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
let tfcSaplingz = [
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

let tfcMetalz = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "rose_gold",
  "silver",
  "tin",
  "zinc",
  "sterling_silver",
  "wrought_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
  "chromite",
  "thorium",
  "tungsten_carbide",
  "damascus_steel",
  "tungsten_steel",
  "cobalt_brass",
  "vanadium_steel",
  "ultimet",
  "invar",
  "aluminium",
  "titanium"
]
const fire = ["red", "green", "bronze", "gray"]
const ice = ["blue", "white", "sapphire", "silver"]
const lightning = ["electric", "amethyst", "copper", "black"]

const addItemTags = (/** @type {TagEvent.Item} */ event) => {
  // Global remove + hides
  global.itemsToRemove.forEach(item => event.removeAllTagsFrom(item))
  global.fluidsToRemove.forEach(item => event.removeAllTagsFrom(item))
  global.fluidsWithBucketsToRemove.forEach(item => event.removeAllTagsFrom(item))

  fire.forEach((color) => {
    event.add("gregitas:eggs/dragon/fire", `iceandfire:dragonegg_${color}`)
  })
  ice.forEach((color) => {
    event.add("gregitas:eggs/dragon/ice", `iceandfire:dragonegg_${color}`)
  })
  lightning.forEach((color) => {
    event.add("gregitas:eggs/dragon/lightning", `iceandfire:dragonegg_${color}`)
  })

  event.add("gravitas:igneous_rocks", ["#tfc:igneous_extrusive_rock", "#tfc:igneous_intrusive_rock"])
  event.add("forge:dusts/diamond", "tfc:powder/diamond")
  event.add("tfc:copper_pieces", [
    "tfc:ore/small_native_copper",
    "tfc:ore/small_malachite",
    "tfc:ore/small_tetrahedrite"
  ])
  event.add("forge:thorium", ["gtceu:raw_thorium", "thoriumreactors:thorium", "create_new_age:thorium"])
  event.add("forge:ingots/niobium", ["thoriumreactors:niob_ingot"])

  event.add("forge:tools/saws", ["#tfc:saws"])
  event.add("forge:tools/hammers", "#tfc:hammers")
  event.add("forge:tools/knives", ["#tfc:knives"])

  event.add("forge:tools", ["#forge:tools/saws", "#forge:tools/hammers", "#forge:tools/knives", "#forge:tools/files"])

  gtceuIngots.forEach((ingot) => {
    event.add("tfc:pileable_ingots", `gtceu:${ingot}_ingot`)
  })

  tfcStonei.forEach((stone) => {
    event.add("forge:slabs/cobblestone", `tfc:rock/cobble/${stone}_slab`)
    event.add("tfc:bricks", `tfc:brick/${stone}`)
    event.add("minecraft:stone_buttons", `tfc:rock/button/${stone}`)
    event.add("create:sleepers", `tfc:rock/smooth/${stone}_slab`)
  })

  tfcSaplingz.forEach((sapling) => {
    event.add("forge:saplings", `tfc:wood/sapling/${sapling}`)
    event.add("minecraft:logs_that_burn", [`#tfc:${sapling}_logs`])
  })

  tfcMetalz.forEach((metal) => {
    event.add(`forge:plates/${metal}`, `tfc:metal/sheet/${metal}`)
    event.add(`forge:plates/double/${metal}`, `tfc:metal/double_sheet/${metal}`)

    event.add(`forge:sheets/${metal}`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets/${metal}`, `gtceu:double_${metal}_plate`)
    event.add(`forge:sheets`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets`, `gtceu:double_${metal}_plate`)
  })

  event.add("firmalife:sweetener", "#tfc:sweetener")
  event.add("forge:treated_wood", "firmalife:treated_wood")

  event.add("tfc:any_knapping", [
    "minecraft:flint",
    "gtceu:rubber_plate",
    "gtceu:polyethylene_plate",
    "gtceu:polytetrafluoroethylene_plate",
    "gtceu:polybenzimidazole_plate"
  ])
  event.add("tfc:flint_knapping", "minecraft:flint")
  event.add("tfc:rubber_knapping", [
    "gtceu:rubber_plate",
    "gtceu:polyethylene_plate",
    "gtceu:polytetrafluoroethylene_plate",
    "gtceu:polybenzimidazole_plate"
  ])

  let refreshGTMaterials = false
  if (refreshGTMaterials) {
    JsonIO.write("kubejs/server_scripts/tags/gt_materials.json", {materials: GTMaterialRegistry.registeredMaterials.stream().map(mat => mat.toString()).toList()})
  }

  let registeredMaterials = JsonIO.read("kubejs/server_scripts/tags/gt_materials.json")
  registeredMaterials.materials.forEach((id) => {
    event.add("tfc:saws", `${id}_saw`)
    event.add("tfc:hammers", `${id}_hammer`)
    event.add("tfc:knives", `${id}_knife`)
    event.add("tfc:usable_on_tool_rack", `${id}_file`)
    event.add("tfc:usable_on_tool_rack", `${id}_wrench`)
    event.add("tfc:usable_on_tool_rack", `${id}_saw`)
    event.add("tfc:usable_on_tool_rack", `${id}_plunger`)
    event.add("tfc:usable_on_tool_rack", `${id}_hammer`)
    event.add("tfc:usable_on_tool_rack", `${id}_knife`)
    event.add("tfc:usable_on_tool_rack", `${id}_screwdriver`)
    event.add("tfc:usable_on_tool_rack", `${id}_crowbar`)
    event.add("tfc:usable_on_tool_rack", `${id}_mortar`)
    event.add("tfc:usable_on_tool_rack", `${id}_soft_mallet`)
    event.add("tfc:usable_on_tool_rack", `${id}_wire_cutter`)
    event.add("tfc:usable_on_tool_rack", `${id}_sword`)
    event.add("tfc:usable_on_tool_rack", `${id}_pickaxe`)
    event.add("tfc:usable_on_tool_rack", `${id}_axe`)
    event.add("tfc:usable_on_tool_rack", `${id}_shovel`)
    event.add("tfc:usable_on_tool_rack", `${id}_spade`)
    event.add("tfc:usable_on_tool_rack", `${id}_hoe`)
    event.add("tfc:usable_on_tool_rack", `${id}_scythe`)
    event.add("tfc:usable_on_tool_rack", `${id}_butchery_knife`)
  })

  gtceuToolsGT.forEach((metal) => {
    event.add("forge:double_ingots", `gregitas:double_${metal.id}_ingot`)
    event.add(`forge:double_ingots/${metal.id}`, `gregitas:double_${metal.id}_ingot`)
  })

  event.add("tfc:pickaxe_tier6", ["tfc:metal/pickaxe/red_steel", "tfc:metal/pickaxe/blue_steel"])
  event.add("tfc:castable_pickaxe_heads", [
    "tfc:metal/pickaxe_head/copper",
    "tfc:metal/pickaxe_head/bronze",
    "tfc:metal/pickaxe_head/black_bronze",
    "tfc:metal/pickaxe_head/bismuth_bronze"
  ])
  event.add("tfc:castable_propick_heads", [
    "tfc:metal/propick_head/copper",
    "tfc:metal/propick_head/bronze",
    "tfc:metal/propick_head/black_bronze",
    "tfc:metal/propick_head/bismuth_bronze"
  ])
  event.get("smallships:cogs").removeAll()
  tfcSaplingz.forEach((wood) => {
    event.add("smallships:cogs", `tfships:${wood}_cog`)
  })

  event.remove("forge:dusts/iron", ["tfc:powder/hematite", "tfc:powder/magnetite", "tfc:powder/limonite"])
  event.remove("forge:dusts/copper", ["tfc:powder/malachite", "tfc:powder/tetrahedrite", "tfc:powder/native_copper"])
  event.add("forge:plates/aluminum", "#forge:plates/aluminium")
  event.add("forge:nuggets/aluminum", "#forge:nuggets/aluminium")
  event.add("forge:ingots/aluminum", "#forge:ingots/aluminium")
  event.add("forge:rods/aluminum", "#forge:rods/aluminium")

  event.add("tfc:forge_fuel", [
    "gtceu:coke_gem",
    "gtceu:coke_block",
    "gtceu:flawless_coke_gem",
    "gtceu:exquisite_coke_gem"
  ])
  event.add("tfc:blast_furnace_fuel", [
    "gtceu:coke_gem",
    "gtceu:coke_block",
    "gtceu:flawless_coke_gem",
    "gtceu:exquisite_coke_gem"
  ])

  event.add("forge:dusts/sulfur", "tfc:powder/sulfur")

  event.remove("forge:dusts/salt", "railcraft:saltpeter_dust")
  event.add("forge:dusts/salt", "tfc:powder/salt")
  event.add("forge:dusts/saltpeter", "tfc:powder/saltpeter")
  event.add("forge:dusts/saltpeter", "railcraft:saltpeter_dust")

  event.remove("forge:ingots/iron", "tfc:metal/ingot/wrought_iron")
  event.remove("forge:ingots/cast_iron", "minecraft:iron_ingot")

  event.remove("tfc:unfired_pottery", "woodencog:unfired_fireclay_crucible")
  //WOODENCLOG
  event.remove("forge:plates/obsidian", "tfc:metal/sheet/steel")
  event.remove("forge:plates/iron", "tfc:metal/sheet/wrought_iron")
  event.add("tfc:usable_on_tool_rack", [
    "mininggadgets:mininggadget",
    "mininggadgets:mininggadget_fancy",
    "mininggadgets:mininggadget_simple",
    "create:wrench",
    "buildinggadgets2:gadget_building",
    "buildinggadgets2:gadget_exchanging",
    "buildinggadgets2:gadget_copy_paste",
    "buildinggadgets2:gadget_cut_paste",
    "buildinggadgets2:gadget_destruction",
    "expatternprovider:fishbig",
    "#forge:tools",
    "enderio:dark_steel_sword"
  ])
  event.add("forge:double_ingots/any_bronze", [
    "tfc:metal/double_ingot/bronze",
    "tfc:metal/double_ingot/bismuth_bronze",
    "tfc:metal/double_ingot/black_bronze"
  ])
  event.add("forge:plates/any_bronze", [
    "#forge:plates/bronze",
    "#forge:plates/bismuth_bronze",
    "#forge:plates/black_bronze"
  ])
  event.add("iceandfire:tempt_hippogryph", ["tfc:food/rabbit", "tfc:food/cooked_rabbit"])
  event.add("iceandfire:tempt_hippocampus", ["tfc:plant/winged_kelp", "tfc:plant/leafy_kelp"])
  event.add("iceandfire:heal_hippocampus", ["tfc:plant/giant_kelp_flower"])

  event.add("forge:raw_materials/graphite", ["tfc:ore/graphite"])
  event.add("minecraft:axes", ["#tfc:axes"])
  event.add("forge:ingots/aluminum", ["gtceu:aluminium_ingot"])
  event.add("forge:rods/aluminium", ["vintageimprovements:aluminum_rod", "alltheores:aluminum_rod"])

  event.removeAllTagsFrom("immersiveengineering:storage_steel")

  event.add("scguns:advanced_bullet_material", "gtceu:steel_ingot")

  event.add("forge:dusts/saltpeter", "scguns:niter_dust")
  event.add("forge:dusts/quicklime", "tfc:powder/lime")  
  event.add("tfc:glassworking_potash", "#forge:dusts/soda_ash")
  event.add("forge:dusts/soda_ash", "tfc:powder/soda_ash")

  const weakCompostables = [event.get("tfc:compost_greens_low"), event.get("tfc:compost_browns_low")]
    .reduce((arr, iter) => arr.concat(iter), [])
    .map((i) => i.getObjectIds())

  const normalCompostables = [event.get("tfc:compost_greens"), event.get("tfc:compost_browns")]
    .reduce((arr, iter) => arr.concat(iter), [])
    .map((i) => i.getObjectIds())

  const strongCompostables = [event.get("tfc:compost_greens_high"), event.get("tfc:compost_browns_high")]
    .reduce((arr, iter) => arr.concat(iter), [])
    .map((i) => i.getObjectIds())

  weakCompostables.forEach((c) => event.add("scguns:weak_compost", c))
  normalCompostables.forEach((c) => event.add("scguns:normal_compost", c))
  strongCompostables.forEach((c) => event.add("scguns:strong_compost", c))

  event.add("forge:dusts", "createdieselgenerators:wood_chip")
  event.add("forge:dusts/wood", "createdieselgenerators:wood_chip")

  event.add("forge:dusts/nether_quartz", "createmoredrillheads:quartz_dusts")
  event.add("forge:dusts/quartz", "gtceu:quartz_sand_dust")
  event.add("forge:netherrack", "beneath:cobblerack")
  event.add("forge:dusts", "create:cinder_flour")
  event.add("forge:dusts/netherrack", "create:cinder_flour")

  const tfcFermentables = [event.get("tfc:foods/fruits"), event.get("tfc:foods/grains")]
    .reduce((arr, iter) => arr.concat(iter), [])
    .map((i) => i.getObjectIds())
  tfcFermentables.forEach((c) => event.add("forge:fermentable", c))

  event.add("forge:fermentable", "tfc:food/potato")

  event.add("gregitas_core:apple", "minecraft:apple")
  event.add("gregitas_core:apple", "tfc:food/green_apple")
  event.add("gregitas_core:apple", "tfc:food/red_apple")

  event.add("forge:coal_coke", "gtceu:coke_dust")
  event.add("forge:coal_coke", "gtceu:coke_gem")
  event.add("forge:storage_blocks/coal_coke", "gtceu:coke_block")

  const tfcCoral = [
    "tube",
    "tube_dead",
    "tube_dead_coral_fan",
    "tube_coral_fan",
    "brain_dead_coral",
    "brain_coral",
    "bubble_dead_coral",
    "bubble_coral",
    "bubble_dead_coral_fan",
    "bubble_coral_fan",
    "fire_dead_coral",
    "fire_coral",
    "fire_dead_coral_fan",
    "fire_coral_fan",
    "horn_dead_coral",
    "horn_coral",
    "horn_dead_coral_fan",
    "horn_coral_fan"
  ]

  tfcCoral.forEach((coral) => {
    event.add("create:upgrade_aquatic/coral", `tfc:coral/${coral}`)
  })

  event.add("forge:dusts/apatite", "tfcthermaldeposits:mineral/powder/apatite")

  event.add("gravitas:phantom", "minecraft:warped_fungus")
  event.add("gravitas:phantom", "beneath:wood/sapling/warped")

  event.add("forge:dusts/phosphorus", "scguns:phosphor_dust")
  
  // Create New Age nuclear fuel
  event.add("create_new_age:nuclear/is_nuclear_fuel", ["#forge:rods/thorium", "#forge:rods/uranium", "#forge:rods/uranium_235"])
  event.add("create_new_age:nuclear/time_28800", "#forge:rods/thorium") // Thorium rods last the same as the usual New Age fuel
  event.add("create_new_age:nuclear/time_14400", "#forge:rods/uranium") // Uranium rods have 1/2 the lifetime
  event.add("create_new_age:nuclear/time_230400", "#forge:rods/uranium_235") // Enriched Uranium rods - lasts 8 times longer

  // Create New Age radiation resistant armor
  // Adds New Age radiation resistance to GregTech hazmats and advanced armor
  event.add("create_new_age:nuclear/hazmat_suit", "#gtceu:ppe_armor")

  event.add("forge:magma", ["minecraft:magma_block",
                            "tfc:rock/magma/basalt",
                            "tfc:rock/magma/granite",
                            "tfc:rock/magma/diorite",
                            "tfc:rock/magma/gabbro",
                            "tfc:rock/magma/rhyolite",
                            "tfc:rock/magma/andesite",
                            "tfc:rock/magma/dacite"
                           ])

  event.add("headlight:lights", ["tfc:torch"])
}
