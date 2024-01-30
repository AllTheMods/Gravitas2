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
  'chromite',
  'thorium',
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

const addItemTags = (/** @type {TagEvent.Item} */ event) => {

  event.add("gravitas:igneous_rocks", ["#tfc:igneous_extrusive_rock", "#tfc:igneous_intrusive_rock"])
  event.add("forge:dusts/diamond", "tfc:powder/diamond")
  event.add('tfc:copper_pieces', ["tfc:ore/small_native_copper", "tfc:ore/small_malachite", "tfc:ore/small_tetrahedrite"])
  event.add('forge:thorium', ["gtceu:raw_thorium", "thoriumreactors:thorium", "create_new_age:thorium"])
  event.add('forge:ingots/niobium', ["thoriumreactors:niob_ingot"])
  
  event.add('forge:tools/saws', ["#tfc:saws"])
  event.add("forge:tools/hammers", "#tfc:hammers")
  event.add('forge:tools/knives', ["#tfc:knives"])

  event.add("forge:tools", ["#forge:tools/saws", "#forge:tools/hammers", "#forge:tools/knives", "#forge:tools/files"])

  gtceuIngots.forEach((ingot) => {
    event.add("tfc:pileable_ingots", `gtceu:${ingot}_ingot`)
  })

  tfcStonei.forEach((stone) => {
    event.add("forge:slabs/cobblestone", `tfc:rock/cobble/${stone}_slab`)
    event.add("tfc:bricks", `tfc:brick/${stone}`)
    event.add("minecraft:stone_buttons", `tfc:rock/button/${stone}`)
  })

  tfcSaplingz.forEach((sapling) => {
    event.add("forge:saplings", `tfc:wood/sapling/${sapling}`)
  })

  tfcMetalz.forEach((metal) => {
    event.add(`forge:plates/${metal}`, `tfc:metal/sheet/${metal}`)
    event.add(`forge:plates/double/${metal}`, `tfc:metal/double_sheet/${metal}`)

    event.add(`forge:sheets/${metal}`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets/${metal}`, `gtceu:${metal}_double_plate`)
    event.add(`forge:sheets`, `gtceu:${metal}_plate`)
    event.add(`forge:double_sheets`, `gtceu:${metal}_double_plate`)
  })



  event.add("firmalife:sweetener", "#tfc:sweetener")
  event.add("forge:treated_wood", "firmalife:treated_wood")

  event.add('tfc:any_knapping', ['minecraft:flint', 'gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])
  event.add('tfc:flint_knapping', 'minecraft:flint')
  event.add('tfc:rubber_knapping', ['gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])

  GTRegistries.MATERIALS.forEach(id => {
      event.add('tfc:saws', `${id}_saw`)
      event.add('tfc:hammers', `${id}_hammer`)
      event.add('tfc:knives', `${id}_knife`)
      event.add('tfc:usable_on_tool_rack',`${id}_file`)
      event.add('tfc:usable_on_tool_rack',`${id}_wrench`)
      event.add('tfc:usable_on_tool_rack',`${id}_saw`)
      event.add('tfc:usable_on_tool_rack',`${id}_plunger`)
      event.add('tfc:usable_on_tool_rack',`${id}_hammer`)
      event.add('tfc:usable_on_tool_rack',`${id}_knife`)
      event.add('tfc:usable_on_tool_rack',`${id}_screwdriver`)
      event.add('tfc:usable_on_tool_rack',`${id}_crowbar`)
      event.add('tfc:usable_on_tool_rack',`${id}_mortar`)
      event.add('tfc:usable_on_tool_rack',`${id}_soft_mallet`)
      event.add('tfc:usable_on_tool_rack',`${id}_wire_cutter`)
      event.add('tfc:usable_on_tool_rack',`${id}_sword`)
      event.add('tfc:usable_on_tool_rack',`${id}_pickaxe`)
      event.add('tfc:usable_on_tool_rack',`${id}_axe`)
      event.add('tfc:usable_on_tool_rack',`${id}_shovel`)
      event.add('tfc:usable_on_tool_rack',`${id}_hoe`)
      event.add('tfc:usable_on_tool_rack',`${id}_scythe`)
      event.add('tfc:usable_on_tool_rack',`${id}_butchery_knife`)
  })

  gtceuToolsGT.forEach((metal) => {
    event.add('forge:double_ingots', `gregitas:double_${metal.id}_ingot`)
    event.add(`forge:double_ingots/${metal.id}`, `gregitas:double_${metal.id}_ingot`)
  })

  event.add("tfc:pickaxe_tier6", ["tfc:metal/pickaxe/red_steel", "tfc:metal/pickaxe/blue_steel"])
  event.add("tfc:castable_pickaxe_heads", ["tfc:metal/pickaxe_head/copper", "tfc:metal/pickaxe_head/bronze", "tfc:metal/pickaxe_head/black_bronze", "tfc:metal/pickaxe_head/bismuth_bronze"])
  event.add("tfc:castable_propick_heads", ["tfc:metal/propick_head/copper", "tfc:metal/propick_head/bronze", "tfc:metal/propick_head/black_bronze", "tfc:metal/propick_head/bismuth_bronze"])
  event.get("smallships:cogs").removeAll()
  tfcSaplingz.forEach((wood) => {
    event.add("smallships:cogs", `tfships:${wood}_cog`)
  })

  event.remove("forge:dusts/iron", ["tfc:powder/hematite", "tfc:powder/magnetite", "tfc:powder/limonite"])
  event.remove("forge:dusts/copper", ["tfc:powder/malachite", "tfc:powder/tetrahedrite", "tfc:powder/native_copper"])
  event.add("forge:plates/aluminum", "#forge:plates/aluminium")
  event.add("forge:nuggets/aluminum", "#forge:nuggets/aluminium")
  event.add("tfc:forge_fuel", ["gtceu:coke_gem", "gtceu:coke_block","gtceu:coke_chipped_gem","gtceu:coke_flawed_gem", 'gtceu:coke_flawless_gem', 'gtceu:coke_exquisite_gem'])
  event.add("forge:dusts/sulfur", "tfc:powder/sulfur")
  event.remove("forge:ingots/iron", "tfc:metal/ingot/wrought_iron")
  event.remove("forge:ingots/cast_iron", "minecraft:iron_ingot")


  event.remove("tfc:unfired_pottery", "woodencog:unfired_fireclay_crucible")
  //WOODENCLOG
  event.remove("forge:plates/obsidian", "tfc:metal/sheet/steel")

  event.add('tfc:usable_on_tool_rack',
    [
      'mininggadgets:mininggadget',
      'mininggadgets:mininggadget_fancy',
      'mininggadgets:mininggadget_simple',
      'create:wrench',
      'buildinggadgets2:gadget_building',
      'buildinggadgets2:gadget_exchanging',
      'buildinggadgets2:gadget_copy_paste',
      'buildinggadgets2:gadget_cut_paste',
      'buildinggadgets2:gadget_destruction',
      'expatternprovider:fishbig'
    ]
  )
}
