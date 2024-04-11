// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]

//Id's of things to replace furnace -> crucible
const furnacent = [
  "integrateddynamics:crafting/part_machine_reader",
  "gtceu:shaped/multi_furnace",
  "integrateddynamics:crafting/part_machine_writer",
  "gtceu:shaped/steam_boiler_coal_bronze",
  "gtceu:shaped/steam_boiler_coal_steel",
  "railcraft:fluid_fueled_firebox",
  "enderio:alloy_smelter",
  "minecraft:blast_furnace",
  "gtceu:shaped/steam_furnace_bronze",
  "gtceu:shaped/steam_alloy_smelter_bronze",
  "gtceu:shaped/electric_blast_furnace",
  "enderio:stirling_generator",
  "railcraft:steam_oven",
  "enderio:primitive_alloy_smelter",
  "ae2:network/blocks/energy_vibration_chamber",
  "railcraft:tunnel_bore",
  "integrateddynamics:crafting/coal_generator"
]
const tfcMetallics = [
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
const tfcShipTypes = [
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
let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")

  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:anvil", "tfc:metal/anvil/wrought_iron")
  event.replaceInput({ type: "minecraft:crafting_shapeless" }, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ mod: "create" },"minecraft:iron_ingot", "gtceu:wrought_iron_ingot")

  event.replaceInput({ mod: "create" },"#forge:plates/iron", "gtceu:wrought_iron_plate")
  event.replaceInput({ mod: "railways" },"minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ mod: "railcraft" },"minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:cobblestone_slab", "#forge:slabs/cobblestone")
  //remove furnace existance
  furnacent.forEach((furnace) => {
    event.replaceInput(furnace, "minecraft:furnace", "tfc:crucible")
  })
  //Simpleplanes
  event.replaceInput({ mod: "simpleplanes"}, "minecraft:iron_axe", "tfc:metal/axe/steel")
  event.replaceInput({ mod: "simpleplanes"}, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/steel")
  event.replaceInput({ id: "simpleplanes:furnace_engine" }, "minecraft:blast_furnace", "railcraft:solid_fueled_firebox")
  event.replaceInput({ id: "simpleplanes:liquid_engine" }, "minecraft:blast_furnace", "railcraft:liquid_fueled_firebox")
  event.replaceInput({ id: "simpleplanes:electric_engine" }, "#forge:ingots/copper", "immersiveengineering:coil_lv")
  event.replaceInput({ id: "simpleplanes:supply_crate"}, "minecraft:barrel", "#tfc:barrels")

  //Corail

  event.replaceInput({ mod: "tombstone"}, "minecraft:stone", "tfc:rock/raw/marble")
  //Apotheosis
  event.replaceInput({ mod: "apotheosis"}, "minecraft:smooth_stone", "#forge:smooth_stone")
  event.replaceInput({ mod: "apotheosis"}, "minecraft:honeycomb_block", "firmalife:jar/honey")
  event.replaceInput({ mod: "apotheosis"}, "minecraft:iron_axe", "tfc:metal/axe/red_steel")
  event.replaceInput({ mod: "apotheosis"}, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/blue_steel")
  //Create
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceOutput({ id: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceInput({ mod: "create" }, "#minecraft:planks", "#forge:treated_wood")
  event.replaceInput({ mod: "create" }, "#forge:plates/iron", "#forge:plates/wrought_iron")
  event.forEachRecipe({id: "woodencog:crafting/kinetics/fluid_tank"}, r => {
    event.recipes.kubejs.shaped("create:fluid_tank", r.json.asMap().pattern, r.json.asMap().key).replaceIngredient("#tfc:barrels", Item.empty).id(r.getId())
  })
  event.forEachRecipe({id: "woodencog:crafting/sequenced_assembly/track"}, r => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 6)
    r.results(modifiedResult)
  })


  //Functional Storage
  event.replaceInput(
    { id: "functionalstorage:framed_storage_controller" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  event.replaceInput(
    { id: "functionalstorage:framed_controller_extension" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  //Railcraft
  event.replaceInput({ id: "railcraft:water_tank_siding" }, "minecraft:slimeball", "gtceu:sticky_resin")
  event.replaceInput({ id: "railcraft:steam_locomotive" }, "railcraft:blast_furnace_bricks", "gtceu:firebricks")

  //TFC
  tfcMetallics.forEach((metal) => {
    event.replaceInput({ type: "minecraft:crafting_shaped" }, `tfc:metal/sheet/${metal}`, `#forge:plates/${metal}`)
    event.replaceInput(
      { type: "minecraft:crafting_shaped" },
      `tfc:metal/double_sheet/${metal}`,
      `#forge:plates/double/${metal}`
    )
  })

  //Railways (Steam n Rails)
  event.forEachRecipe({mod: "railways", id: /^railways:sequenced_assembly\/track_tfc_[^_]+$/}, r => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 6)
    r.results(modifiedResult)
  })
  event.forEachRecipe({mod: "railways", id: /^railways:sequenced_assembly\/track_tfc_.*_narrow$/}, r => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 3)
    r.results(modifiedResult)
  })

  //Firmalife
  event.replaceInput({ mod: "firmalife"}, "firmalife:metal/ingot/chromium", "gtceu:chromium_ingot" )
  event.replaceInput({ mod: "firmalife"}, "firmalife:metal/ingot/stainless_steel", "gtceu:stainless_steel_ingot" )
  //Firebricks/Cokebricks etc
  event.replaceInput({ id: "gtceu:shaped/compressed_coke_clay"}, "minecraft:clay_ball", "tfc:fire_clay")
  event.replaceOutput({ id: "tfc:crafting/fire_bricks"}, "tfc:fire_bricks", "gtceu:firebricks")

  //IE
  event.replaceInput({ mod: "immersiveengineering"}, "immersiveengineering:hemp_fiber", "tfc:jute_fiber")

  //Misc
  event.replaceInput({ type: "minecraft:crafting_shaped"}, "minecraft:gold_block", "#forge:double_plates/gold")
  event.replaceInput({ type: "minecraft:crafting_shaped"}, "minecraft:amethyst", "tfc:gem/amethyst")
  event.replaceInput({ type: "minecraft:crafting_shapeless"}, "minecraft:amethyst", "tfc:gem/amethyst")
  event.replaceInput({ type: "minecraft:crafting_shaped"}, "minecraft:amethyst_shard", "tfc:gem/amethyst")
  
  //TFShips
  tfcShipTypes.forEach((wood) => {
    event.replaceInput({ id: `tfships:${wood}_cog`}, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
    event.replaceInput({ id: `tfships:${wood}_brigg`}, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
    event.replaceInput({ id: `tfships:${wood}_galley`}, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
  })
  event.replaceInput({id: "smallships:sail"}, "#minecraft:wool", "immersiveengineering:hemp_fabric")
  //Storage Drawers
  event.replaceInput({ id: "storagedrawers:controller"}, "minecraft:stone", "#forge:stone")
  event.replaceInput({ id: "storagedrawers:controller"}, "minecraft:diamond", "create:pulse_repeater")
  event.replaceInput({ id: "storagedrawers:controller_slave"}, "minecraft:stone", "#forge:stone")
  event.replaceInput({ id: "storagedrawers:controller_slave"}, "minecraft:gold_ingot", "minecraft:repeater")
  event.replaceInput({ id: "storagedrawers:compacting_drawers_3"}, "minecraft:stone", "#forge:stone")



  event.replaceInput({}, "minecraft:compass", "firmaciv:firmaciv_compass")
  event.replaceInput({}, "minecraft:stone_button", "#minecraft:stone_buttons")
  event.replaceInput({ mod: "iceandfire" }, "minecraft:stone_bricks", "#forge:stone_bricks")

  event.replaceInput({ id: "iceandfire:dragon_meal"}, "#iceandfire:dragon_food_meat", "#tfc:foods/meats")
  event.replaceInput({ id: "woodencog:crafting/schematics/schematicannon"}, "minecraft:smooth_stone", "#tfc:rock/smooth")
  event.replaceInput({ id: "create:haunting/poisonous_potato"}, "minecraft:potato", "tfc:food/potato")
  event.replaceOutput({ id: `/^gtceu:smelting\/smelt_.*_ore_to_ingot/`}, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceOutput({ id: `/^gtceu:blasting\/smelt_.*_ore_to_ingot/`}, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceOutput({ id: `/^minecraft:iron_ingot_from_.*/`}, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ mod: "computercraft"}, "minecraft:redstone", "gtceu:basic_electronic_circuit")

  event.replaceInput({ mod: "immersiveengineering"}, "#forge:rods/aluminum", "gtceu:aluminium_rod")
  event.replaceInput({ mod: "createdeco"}, "minecraft:copper_ingot", "#forge:ingots/copper")
  event.replaceInput({ mod: "createdeco"}, "create:brass_ingot", "#forge:ingots/brass")
  event.replaceInput({ mod: "createdeco"}, "create:zinc_ingot", "#forge:ingots/zinc")
  event.replaceInput({ mod: "createdeco"}, "create:brass_sheet", "#forge:plates/brass")
  event.replaceInput({ mod: "createdeco"}, "create:iron_sheet", "#forge:plates/iron")
  event.replaceInput({ mod: "createdeco"}, "createdeco:zinc_sheet", "#forge:plates/zinc")
  event.replaceInput({ mod: "createdeco"}, "create:copper_sheet", "#forge:plates/copper")

  event.replaceInput({ mod: "createdeco"}, "tfc:torch", "minecraft:ochre_froglight")
  event.replaceInput({ mod: "createdeco"}, "minecraft:redstone_torch", "minecraft:glowstone")
  event.replaceInput({ mod: "createdeco"}, "minecraft:glow_berries", "minecraft:verdant_froglight")
  event.replaceInput({ mod: "createdeco"}, "minecraft:soul_torch", "minecraft:pearlescent_froglight")

  event.replaceInput({ mod: "createdeco"}, "create:brass_nugget", "#forge:nuggets/brass")
  event.replaceInput({ mod: "createdeco"}, "create:zinc_nugget", "#forge:nuggets/zinc")
  event.replaceInput({ mod: "createdeco"}, "create:copper_nugget", "#forge:nuggets/copper")
  event.replaceInput({ mod: "createdeco"}, "create:limestone", "tfc:rock/raw/limestone")
  event.replaceInput({ mod: "createdeco"}, "create:crimsite", "minecraft:netherrack")
  event.replaceInput({ mod: "createdeco"}, "create:asurine", "tfc:rock/raw/dolomite")
  event.replaceInput({ mod: "createdeco"}, "create:veridium", "tfc:rock/raw/schist")
  event.replaceInput({ mod: "createdeco"}, "create:ochrum", "tfc:rock/raw/claystone")
  event.replaceInput({ mod: "createdeco"}, "create:brass_block", "#forge:storage_blocks/brass")
  event.replaceInput({ mod: "createdeco"}, "create:zinc_block", "#forge:storage_blocks/zinc")
  
  event.replaceInput({}, "minecraft:honeycomb", "firmalife:beeswax")
  event.replaceInput({}, "minecraft:honey_bottle", "firmalife:jar/honey")
  
  event.replaceInput({ id: "integratedtunnels:crafting/part_exporter_world_block"}, "minecraft:diamond_pickaxe", "tfc:metal/pickaxe/black_steel")
  event.replaceInput({ id: "integratedtunnels:crafting/part_importer_world_block"}, "minecraft:diamond_pickaxe", "tfc:metal/pickaxe/black_steel")
  
  event.replaceInput({ id: "mininggadgets:upgrade_size_1"}, "minecraft:diamond_pickaxe", "tfc:metal/pickaxe/black_steel")
  event.replaceInput({ id: "mininggadgets:upgrade_size_1"}, "minecraft:ender_pearl", "#gtceu:circuits/lv")
  event.replaceInput({ id: "mininggadgets:upgrade_size_2"}, "minecraft:netherite_pickaxe", "tfc:metal/pickaxe/blue_steel")
  event.replaceInput({ id: "mininggadgets:upgrade_size_2"}, "minecraft:ender_pearl", "#gtceu:circuits/mv")
  event.replaceInput({ id: "mininggadgets:upgrade_size_3"}, "minecraft:netherite_pickaxe", "tfc:metal/pickaxe/red_steel")
  event.replaceInput({ id: "mininggadgets:upgrade_size_3"}, "minecraft:ender_pearl", "#gtceu:circuits/hv")
  
  event.replaceInput({ id: "railcraft:track_relayer"}, "minecraft:diamond_pickaxe", "tfc:metal/pickaxe/black_steel")
}