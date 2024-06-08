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
const fire = [
  "red",
  "green",
  "bronze",
  "gray"
]
const ice = [
  "blue",
  "white",
  "sapphire",
  "silver"
]
const lightning = [
  "electric",
  "amethyst",
  "copper",
  "black"
]

const addItemTags = (/** @type {TagEvent.Item} */ event) => {

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
    event.add("create:sleepers", `tfc:rock/smooth/${stone}_slab`)
  })

  tfcSaplingz.forEach((sapling) => {
    event.add("forge:saplings", `tfc:wood/sapling/${sapling}`)
    event.add('minecraft:logs_that_burn', [`#tfc:${sapling}_logs`])
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

  event.add('tfc:any_knapping', ['minecraft:flint', 'gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])
  event.add('tfc:flint_knapping', 'minecraft:flint')
  event.add('tfc:rubber_knapping', ['gtceu:rubber_plate', 'gtceu:polyethylene_plate', 'gtceu:polytetrafluoroethylene_plate', 'gtceu:polybenzimidazole_plate'])

  GTMaterialRegistry.registeredMaterials.forEach(id => {
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
      event.add('tfc:usable_on_tool_rack',`${id}_spade`)
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

  event.add("tfc:forge_fuel", ["gtceu:coke_gem", "gtceu:coke_block", "gtceu:chipped_coke_gem", "gtceu:flawed_coke_gem", "gtceu:flawless_coke_gem", "gtceu:exquisite_coke_gem"])
  event.add("tfc:blast_furnace_fuel", ["gtceu:coke_gem", "gtceu:coke_block", "gtceu:flawless_coke_gem", "gtceu:exquisite_coke_gem"])
  
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
  event.remove("forge:plates/iron","tfc:metal/sheet/wrought_iron")
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
      'expatternprovider:fishbig',
      '#forge:tools',
      'enderio:dark_steel_sword'
    ]
  )
  event.add("forge:double_ingots/any_bronze", ["tfc:metal/double_ingot/bronze","tfc:metal/double_ingot/bismuth_bronze", "tfc:metal/double_ingot/black_bronze"])
  event.add("forge:plates/any_bronze", ["#forge:plates/bronze","#forge:plates/bismuth_bronze", "#forge:plates/black_bronze"])
  event.add("iceandfire:tempt_hippogryph", ["tfc:food/rabbit", "tfc:food/cooked_rabbit"])
  event.add("iceandfire:tempt_hippocampus", ["tfc:plant/winged_kelp", "tfc:plant/leafy_kelp"])
  event.add("iceandfire:heal_hippocampus", ["tfc:plant/giant_kelp_flower"])

  event.add("forge:raw_materials/graphite", ["tfc:ore/graphite"])
  event.add("minecraft:axes", ["#tfc:axes"])
  event.add("forge:ingots/aluminum", ["gtceu:aluminium_ingot"])

  //Thorium Reactors
  event.removeAllTagsFrom('thoriumreactors:fluorite')
  
  event.removeAllTagsFrom('thoriumreactors:steel_ingot')
  event.removeAllTagsFrom('thoriumreactors:nickel_ingot')
  event.removeAllTagsFrom('thoriumreactors:aluminum_ingot')
  event.removeAllTagsFrom('thoriumreactors:uranium_ingot')
  event.removeAllTagsFrom('thoriumreactors:steel_ingot')
  
  
  event.removeAllTagsFrom('thoriumreactors:steel_nugget')
  event.removeAllTagsFrom('thoriumreactors:nickel_nugget')
  event.removeAllTagsFrom('thoriumreactors:aluminum_nugget')
  event.removeAllTagsFrom('thoriumreactors:uranium_nugget')
  event.removeAllTagsFrom('thoriumreactors:steel_nugget')
  
  //Minecraft
  event.removeAllTagsFrom('minecraft:copper_ingot')
  event.removeAllTagsFrom('minecraft:gold_ingot')
  
  //Railcraft
  event.removeAllTagsFrom('railcraft:brass_ingot')
  event.removeAllTagsFrom('railcraft:lead_ingot')
  event.removeAllTagsFrom('railcraft:nickel_ingot')
  event.removeAllTagsFrom('railcraft:silver_ingot')
  event.removeAllTagsFrom('railcraft:tin_ingot')
  event.removeAllTagsFrom('railcraft:zinc_ingot')
  event.removeAllTagsFrom('railcraft:steel_ingot')
  event.removeAllTagsFrom('railcraft:invar_ingot')
  event.removeAllTagsFrom('railcraft:bronze_ingot')
  
  event.removeAllTagsFrom('railcraft:brass_nugget')
  event.removeAllTagsFrom('railcraft:lead_nugget')
  event.removeAllTagsFrom('railcraft:nickel_nugget')
  event.removeAllTagsFrom('railcraft:silver_nugget')
  event.removeAllTagsFrom('railcraft:tin_nugget')
  event.removeAllTagsFrom('railcraft:zinc_nugget')
  event.removeAllTagsFrom('railcraft:steel_nugget')
  event.removeAllTagsFrom('railcraft:invar_nugget')
  event.removeAllTagsFrom('railcraft:bronze_nugget')
  
  event.removeAllTagsFrom('alltheores:brass_plate')
  event.removeAllTagsFrom('alltheores:lead_plate')
  event.removeAllTagsFrom('alltheores:nickel_plate')
  event.removeAllTagsFrom('alltheores:silver_plate')
  event.removeAllTagsFrom('alltheores:tin_plate')
  event.removeAllTagsFrom('alltheores:zinc_plate')
  event.removeAllTagsFrom('alltheores:steel_plate')
  event.removeAllTagsFrom('alltheores:invar_plate')
  event.removeAllTagsFrom('alltheores:bronze_plate')
  event.removeAllTagsFrom('alltheores:iron_plate')
  event.removeAllTagsFrom('alltheores:gold_plate')
  event.removeAllTagsFrom('alltheores:copper_plate')
  
  //Ice and Fire
  event.removeAllTagsFrom('iceandfire:silver_ingot')
  
  event.removeAllTagsFrom('iceandfire:silver_nugget')
  event.removeAllTagsFrom('iceandfire:copper_nugget')
  
  //All The Ores
  event.removeAllTagsFrom('alltheores:aluminum_ingot')
  event.removeAllTagsFrom('alltheores:iridium_ingot')
  event.removeAllTagsFrom('alltheores:lead_ingot')
  event.removeAllTagsFrom('alltheores:nickel_ingot')
  event.removeAllTagsFrom('alltheores:osmium_ingot')
  event.removeAllTagsFrom('alltheores:platinum_ingot')
  event.removeAllTagsFrom('alltheores:silver_ingot')
  event.removeAllTagsFrom('alltheores:tin_ingot')
  event.removeAllTagsFrom('alltheores:uranium_ingot')
  event.removeAllTagsFrom('alltheores:zinc_ingot')
  event.removeAllTagsFrom('alltheores:steel_ingot')
  event.removeAllTagsFrom('alltheores:invar_ingot')
  event.removeAllTagsFrom('alltheores:electrum_ingot')
  event.removeAllTagsFrom('alltheores:bronze_ingot')
  event.removeAllTagsFrom('alltheores:brass_ingot')
  event.removeAllTagsFrom('alltheores:constantan_ingot')							            //added by IE
  //event.removeAllTagsFrom('alltheores:enderium_ingot')							            might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_ingot')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_ingot')							            might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_ingot')							            might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_allthemodium_alloy_ingot')		  might be added in the future?
  //event.removeAllTagsFrom('alltheores:unobtainium_vibranium_alloy_ingot')			  might be added in the future?
  //event.removeAllTagsFrom('alltheores:unobtainium_allthemodium_alloy_ingot')		might be added in the future?
  event.removeAllTagsFrom('alltheores:allthemodium_ingot')
  event.removeAllTagsFrom('alltheores:unobtainium_ingot')

  event.removeAllTagsFrom('alltheores:aluminum_nugget')
  event.removeAllTagsFrom('alltheores:iridium_nugget')
  event.removeAllTagsFrom('alltheores:lead_nugget')
  event.removeAllTagsFrom('alltheores:nickel_nugget')
  event.removeAllTagsFrom('alltheores:osmium_nugget')
  event.removeAllTagsFrom('alltheores:platinum_nugget')
  event.removeAllTagsFrom('alltheores:silver_nugget')
  event.removeAllTagsFrom('alltheores:tin_nugget')
  event.removeAllTagsFrom('alltheores:uranium_nugget')
  event.removeAllTagsFrom('alltheores:zinc_nugget')
  event.removeAllTagsFrom('alltheores:steel_nugget')
  event.removeAllTagsFrom('alltheores:invar_nugget')
  event.removeAllTagsFrom('alltheores:electrum_nugget')
  event.removeAllTagsFrom('alltheores:bronze_nugget')
  event.removeAllTagsFrom('alltheores:copper_nugget')
  event.removeAllTagsFrom('alltheores:brass_nugget')
  event.removeAllTagsFrom('alltheores:constantan_nugget')							            //added by IE
  //event.removeAllTagsFrom('alltheores:enderium_nugget')							            might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_nugget')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_nugget')							            might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_nugget')							          might be added in the future?
  event.removeAllTagsFrom('alltheores:unobtainium_nugget')
  event.removeAllTagsFrom('alltheores:allthemodium_nugget')

  event.removeAllTagsFrom('alltheores:aluminum_dust')
  event.removeAllTagsFrom('alltheores:iridium_dust')
  event.removeAllTagsFrom('alltheores:lead_dust')
  event.removeAllTagsFrom('alltheores:nickel_dust')
  event.removeAllTagsFrom('alltheores:osmium_dust')
  event.removeAllTagsFrom('alltheores:platinum_dust')
  event.removeAllTagsFrom('alltheores:silver_dust')
  event.removeAllTagsFrom('alltheores:tin_dust')
  event.removeAllTagsFrom('alltheores:uranium_dust')
  event.removeAllTagsFrom('alltheores:zinc_dust')
  event.removeAllTagsFrom('alltheores:steel_dust')
  event.removeAllTagsFrom('alltheores:invar_dust')
  event.removeAllTagsFrom('alltheores:electrum_dust')
  event.removeAllTagsFrom('alltheores:bronze_dust')
  event.removeAllTagsFrom('alltheores:brass_dust')
  event.removeAllTagsFrom('alltheores:copper_gear')
  event.removeAllTagsFrom('alltheores:iron_dust')
  event.removeAllTagsFrom('alltheores:gold_dust')
  event.removeAllTagsFrom('alltheores:diamond_dust')
  event.removeAllTagsFrom('alltheores:constantan_dust')								            //added by IE
  //event.removeAllTagsFrom('alltheores:enderium_dust')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_dust')								              might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_dust')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:peridot_dust')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_dust')							            might be added in the future?			
  event.removeAllTagsFrom('alltheores:allthemodium_dust')
  event.removeAllTagsFrom('alltheores:unobtainium_dust')

  
  event.removeAllTagsFrom('alltheores:aluminum_gear')
  event.removeAllTagsFrom('alltheores:iridium_gear')
  event.removeAllTagsFrom('alltheores:lead_gear')
  event.removeAllTagsFrom('alltheores:nickel_gear')
  event.removeAllTagsFrom('alltheores:osmium_gear')
  event.removeAllTagsFrom('alltheores:platinium_gear')
  event.removeAllTagsFrom('alltheores:silver_gear')
  event.removeAllTagsFrom('alltheores:tin_gear')
  event.removeAllTagsFrom('alltheores:uranium_gear')
  event.removeAllTagsFrom('alltheores:zinc_gear')
  event.removeAllTagsFrom('alltheores:steel_gear')
  event.removeAllTagsFrom('alltheores:invar_gear')
  event.removeAllTagsFrom('alltheores:electrum_gear')
  event.removeAllTagsFrom('alltheores:bronze_gear')
  event.removeAllTagsFrom('alltheores:brass_dust')
  event.removeAllTagsFrom('alltheores:copper_gear')
  event.removeAllTagsFrom('alltheores:iron_gear')
  event.removeAllTagsFrom('alltheores:gold_gear')
  event.removeAllTagsFrom('alltheores:diamond_gear')
  //event.removeAllTagsFrom('alltheores:constantan_gear')							          not currently added by IE/GT
  //event.removeAllTagsFrom('alltheores:enderium_gear')								          might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_gear')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_gear')							           	might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_gear')						          	might be added in the future?
  event.removeAllTagsFrom('alltheores:allthemodium_gear')
  event.removeAllTagsFrom('alltheores:unobtainium_gear')


  event.removeAllTagsFrom('alltheores:aluminum_plate')
  event.removeAllTagsFrom('alltheores:iridium_plate')
  event.removeAllTagsFrom('alltheores:lead_plate')
  event.removeAllTagsFrom('alltheores:nickel_plate')
  event.removeAllTagsFrom('alltheores:osmium_plate')
  event.removeAllTagsFrom('alltheores:platinium_plate')
  event.removeAllTagsFrom('alltheores:silver_plate')
  event.removeAllTagsFrom('alltheores:tin_plate')
  event.removeAllTagsFrom('alltheores:uranium_plate')
  event.removeAllTagsFrom('alltheores:zinc_plate')
  event.removeAllTagsFrom('alltheores:steel_plate')
  event.removeAllTagsFrom('alltheores:invar_plate')
  event.removeAllTagsFrom('alltheores:electrum_plate')
  event.removeAllTagsFrom('alltheores:bronze_plate')
  event.removeAllTagsFrom('alltheores:iron_plate')
  event.removeAllTagsFrom('alltheores:gold_plate')
  event.removeAllTagsFrom('alltheores:diamond_plate')
  event.removeAllTagsFrom('alltheores:copper_plate')
  event.removeAllTagsFrom('alltheores:brass_plate')
  event.removeAllTagsFrom('alltheores:constantan_plate')						          	//added by IE
  //event.removeAllTagsFrom('alltheores:enderium_plate')							          might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_plate')								          might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_plate')							          might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_plate')							          might be added in the future?
  event.removeAllTagsFrom('alltheores:allthemodium_plate')
  event.removeAllTagsFrom('alltheores:unobtainium_plate')

  event.removeAllTagsFrom('alltheores:aluminum_rod')
  event.removeAllTagsFrom('alltheores:iridium_rod')
  event.removeAllTagsFrom('alltheores:lead_rod')
  event.removeAllTagsFrom('alltheores:nickel_rod')
  event.removeAllTagsFrom('alltheores:osmium_rod')
  event.removeAllTagsFrom('alltheores:platinium_rod')
  event.removeAllTagsFrom('alltheores:silver_rod')
  event.removeAllTagsFrom('alltheores:tin_rod')
  event.removeAllTagsFrom('alltheores:uranium_rod')
  event.removeAllTagsFrom('alltheores:zinc_rod')
  event.removeAllTagsFrom('alltheores:steel_rod')
  event.removeAllTagsFrom('alltheores:invar_rod')
  event.removeAllTagsFrom('alltheores:electrum_rod')
  event.removeAllTagsFrom('alltheores:bronze_rod')
  event.removeAllTagsFrom('alltheores:iron_rod')
  event.removeAllTagsFrom('alltheores:gold_rod')
  event.removeAllTagsFrom('alltheores:diamond_rod')
  event.removeAllTagsFrom('alltheores:copper_rod')
  event.removeAllTagsFrom('alltheores:brass_rod')
  //event.removeAllTagsFrom('alltheores:constantan_rod')						          	not currently added by IE/GT
  //event.removeAllTagsFrom('alltheores:enderium_rod')								          might be added in the future?
  //event.removeAllTagsFrom('alltheores:lumium_rod')								            might be added in the future?
  //event.removeAllTagsFrom('alltheores:signalum_rod')								          might be added in the future?
  //event.removeAllTagsFrom('alltheores:vibranium_rod')								          might be added in the future?
  event.removeAllTagsFrom('alltheores:allthemodium_rod')
  event.removeAllTagsFrom('alltheores:unobtainium_rod')


  //Create
  event.removeAllTagsFrom('create:zinc_ingot')
  event.removeAllTagsFrom('create:brass_ingot')

  event.removeAllTagsFrom('create:copper_nugget')
  event.removeAllTagsFrom('create:zinc_nugget')
  event.removeAllTagsFrom('create:brass_nugget')

  event.removeAllTagsFrom('create:copper_sheet')
  event.removeAllTagsFrom('create:brass_sheet')
  event.removeAllTagsFrom('create:zinc_sheet')
  event.removeAllTagsFrom('create:iron_sheet')
  event.removeAllTagsFrom('create:golden_sheet')

  //Create Deco
  event.removeAllTagsFrom('createdeco:zinc_sheet')

  //Vintage Improvements:
  event.removeAllTagsFrom('vintageimprovements:aluminum_sheet')
  event.removeAllTagsFrom('vintageimprovements:bronze_sheet')
  event.removeAllTagsFrom('vintageimprovements:cobalt_sheet')
  event.removeAllTagsFrom('vintageimprovements:constantan_sheet')
  event.removeAllTagsFrom('vintageimprovements:enderium_sheet')
  event.removeAllTagsFrom('vintageimprovements:invar_sheet')
  event.removeAllTagsFrom('vintageimprovements:lead_sheet')
  event.removeAllTagsFrom('vintageimprovements:lumium_sheet')
  event.removeAllTagsFrom('vintageimprovements:nickel_sheet')
  event.removeAllTagsFrom('vintageimprovements:osmium_sheet')
  event.removeAllTagsFrom('vintageimprovements:palladium_sheet')
  event.removeAllTagsFrom('vintageimprovements:platinum_sheet')
  event.removeAllTagsFrom('vintageimprovements:rhodium_sheet')
  event.removeAllTagsFrom('vintageimprovements:rose_gold_sheet')
  event.removeAllTagsFrom('vintageimprovements:signalum_sheet')
  event.removeAllTagsFrom('vintageimprovements:silver_sheet')
  event.removeAllTagsFrom('vintageimprovements:tin_sheet')
  event.removeAllTagsFrom('vintageimprovements:uranium_sheet')
  event.removeAllTagsFrom('vintageimprovements:vanadium_sheet')
  event.removeAllTagsFrom('vintageimprovements:zinc_sheet')


  event.removeAllTagsFrom('vintageimprovements:aluminum_sheet')
  event.removeAllTagsFrom('vintageimprovements:bronze_rod')
  event.removeAllTagsFrom('vintageimprovements:cobalt_rod')
  event.removeAllTagsFrom('vintageimprovements:constantan_rod')
  event.removeAllTagsFrom('vintageimprovements:enderium_rod')
  event.removeAllTagsFrom('vintageimprovements:invar_rod')
  event.removeAllTagsFrom('vintageimprovements:lead_rod')
  event.removeAllTagsFrom('vintageimprovements:lumium_rod')
  event.removeAllTagsFrom('vintageimprovements:nickel_rod')
  event.removeAllTagsFrom('vintageimprovements:osmium_rod')
  event.removeAllTagsFrom('vintageimprovements:palladium_rod')
  event.removeAllTagsFrom('vintageimprovements:platinum_rod')
  event.removeAllTagsFrom('vintageimprovements:rhodium_rod')
  event.removeAllTagsFrom('vintageimprovements:rose_gold_rod')
  event.removeAllTagsFrom('vintageimprovements:signalum_rod')
  event.removeAllTagsFrom('vintageimprovements:silver_rod')
  event.removeAllTagsFrom('vintageimprovements:steel_rod')
  event.removeAllTagsFrom('vintageimprovements:tin_rod')
  event.removeAllTagsFrom('vintageimprovements:uranium_rod')
  event.removeAllTagsFrom('vintageimprovements:vanadium_rod')
  event.removeAllTagsFrom('vintageimprovements:zinc_rod')

  event.removeAllTagsFrom('vintageimprovements:sulfuric_acid')


  //Create Additions
  event.removeAllTagsFrom('createadditions:electrum_ingot')
  event.removeAllTagsFrom('createadditions:electrum_nugget')

  event.removeAllTagsFrom('alltheores:zinc_plate')
  event.removeAllTagsFrom('alltheores:electrum_plate')

  event.removeAllTagsFrom('createadditions:copper_rod')
  event.removeAllTagsFrom('createadditions:iron_rod')
  event.removeAllTagsFrom('createadditions:gold_rod')
  event.removeAllTagsFrom('createadditions:electrum_rod')
  event.removeAllTagsFrom('createadditions:brass_rod')

  event.removeAllTagsFrom('createadditions:seed_oil')
  event.removeAllTagsFrom('createadditions:bioethanol')



  //Immersive Engineering
  event.removeAllTagsFrom('immersiveengineering:ingot_lead')
  event.removeAllTagsFrom('immersiveengineering:ingot_silver')
  event.removeAllTagsFrom('immersiveengineering:ingot_nickel')
  event.removeAllTagsFrom('immersiveengineering:ingot_uranium')
  //event.removeAllTagsFrom('immersiveengineering:ingot_constantan')				    not currently added by GT
  event.removeAllTagsFrom('immersiveengineering:ingot_electrum')
  event.removeAllTagsFrom('immersiveengineering:ingot_steel')

  event.removeAllTagsFrom('immersiveengineering:nugget_copper')
  event.removeAllTagsFrom('immersiveengineering:nugget_lead')
  event.removeAllTagsFrom('immersiveengineering:nugget_silver')
  event.removeAllTagsFrom('immersiveengineering:nugget_nickel')
  event.removeAllTagsFrom('immersiveengineering:nugget_uranium')
  //event.removeAllTagsFrom('immersiveengineering:nugget_constantan')				    not currently added by GT
  event.removeAllTagsFrom('immersiveengineering:nugget_electrum')
  event.removeAllTagsFrom('immersiveengineering:nugget_steel')


  event.removeAllTagsFrom('immersiveengineering:plate_copper')
  event.removeAllTagsFrom('immersiveengineering:plate_lead')
  event.removeAllTagsFrom('immersiveengineering:plate_silver')
  event.removeAllTagsFrom('immersiveengineering:plate_nickel')
  event.removeAllTagsFrom('immersiveengineering:plate_uranium')
  //event.removeAllTagsFrom('immersiveengineering:plate_constantan')				    not currently added by GT
  event.removeAllTagsFrom('immersiveengineering:plate_electrum')
  event.removeAllTagsFrom('immersiveengineering:plate_steel')
  event.removeAllTagsFrom('immersiveengineering:plate_iron')
  event.removeAllTagsFrom('immersiveengineering:plate_gold')

  event.removeAllTagsFrom('alltheores:steel_rod')
  event.removeAllTagsFrom('alltheores:iron_rod')


  event.removeAllTagsFrom('immersiveengineering:plantoil')
  event.removeAllTagsFrom('immersiveengineering:ethanol')
  event.removeAllTagsFrom('immersiveengineering:biodiesel')
  event.removeAllTagsFrom('immersiveengineering:concrete')
  event.removeAllTagsFrom('immersiveengineering:herbicide')
  event.removeAllTagsFrom('immersiveengineering:redstone_acid')
  event.removeAllTagsFrom('immersiveengineering:potion')
  event.removeAllTagsFrom('immersiveengineering:acetaldehyde')
  event.removeAllTagsFrom('immersiveengineering:phenolic_resin')

  event.removeAllTagsFrom('immersiveengineering:plantoil_bucket')
  event.removeAllTagsFrom('immersiveengineering:ethanol_bucket')
  event.removeAllTagsFrom('immersiveengineering:biodiesel_bucket')
  event.removeAllTagsFrom('immersiveengineering:concrete_bucket')
  event.removeAllTagsFrom('immersiveengineering:herbicide_bucket')
  event.removeAllTagsFrom('immersiveengineering:redstone_acid_bucket')
  event.removeAllTagsFrom('immersiveengineering:potion_bucket')
  event.removeAllTagsFrom('immersiveengineering:acetaldehyde_bucket')
  event.removeAllTagsFrom('immersiveengineering:phenolic_resin_bucket')
}
