// priority 10
const toolsToRemove = [
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "iron",
  "steel",
  "invar",
  "black_steel",
  "blue_steel",
  "red_steel"
]
let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.remove({ id: "tfc:crafting/bloomery" })
  event.remove({ id: "computercraft:computer_normal" })
  event.remove({ id: "computercraft:computer_advanced_upgrade" })
  event.remove({ id: "computercraft:computer_advanced" })
  event.remove({ id: "computercraft:pocket_computer_normal" })
  event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" })
  event.remove({ id: "computercraft:pocket_computer_advanced" })
  event.remove({ id: "computercraft:wireless_modem_normal" })
  event.remove({ id: "computercraft:wireless_modem_advanced"})
  event.remove({ id: "vintageimprovements:curving/iron_sheet"})
  //GT
  event.remove({ id: "gtceu:shaped/stick_wrought_iron" })
  event.remove({ id: "gtceu:cutter/cut_glass_block_to_plate_water"})
  event.remove({ id: "gtceu:shaped/stick_long_stick_wrought_iron" })
  event.remove({ id: "gtceu:shaped/wire_cutter_wrought_iron" })
  event.remove({ id: "gtceu:shaped/iron_bucket" })
  event.remove({ id: "gtceu:shaped/casing_primitive_bricks"})
  event.remove({ id: "gtceu:shaped/casing_coke_bricks"})
  event.remove({ id: "gtceu:smelting/fireclay_brick"})
  event.remove({ id: "gtceu:shaped/bronze_primitive_blast_furnace" })
  event.remove([{ id: 'gtceu:shaped/pump_deck' }, { id: 'gtceu:shaped/pump_hatch' }, { id: 'gtceu:shaped/primitive_pump' }])
  event.remove({ id: "gtceu:shapeless/rubber_wood_planks" })
  event.remove([{ id: "gtceu:shaped/steam_extractor_bronze" }, { id: "gtceu:shaped/steam_extractor_steel" }])
  event.remove({ id: "gtceu:shaped/treated_wood_planks"})
  event.remove({ id: "gtceu:alloy_smelter/form_brick" })
  event.remove({ id: "gtceu:assembler/chest"})
  event.remove({ id: "gtceu:assembler/enchanting_table"})
  event.remove({ id: "gtceu:assembler/wool_from_string"})
  event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime'})
  event.remove({ id: 'gtceu:shaped/lv_extruder' })
  event.remove({ id: "gtceu:alloy_smelter/anvil"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_tag_seeds"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_beetroot"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_melon"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_pumpkin"})
  event.remove({ id: "gtceu:electric_blast_furnace/steel_from_wrought_iron"})
  event.remove({ id: "gtceu:electric_blast_furnace/steel_from_iron"})

  //GT / Railcraft Tool Specific
  toolsToRemove.forEach((tool) => {
    event.remove({ output: `gtceu:${tool}_shovel`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_pickaxe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_axe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_hoe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_scythe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_sword`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_helmet`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_chestplate`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_leggings`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_boots`, mod: "gtceu" })

    event.remove({ output: `railcraft:${tool}_shovel`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_pickaxe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_axe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_hoe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_sword`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_helmet`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_chestplate`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_leggings`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_boots`, mod: "railcraft" })

    //GT General
    event.remove({ id: "gtceu:extractor/fish_oil_from_salmon"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_pufferfish"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_tropical_fish"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_cod"})
    
    event.remove({ id: "gtceu:shaped/plank_to_wooden_shape"})
    event.remove({ id: "gtceu:shaped/rotor_bronze"})
    event.remove({ id: "gtceu:shaped/bronze_hull"})
    event.remove({ id: "gtceu:shapeless/blaze_rod_to_powder"})
    event.remove({ id: "gtceu:shaped/wooden_shape_brick"})
    event.remove({ id: "gtceu:smelting/coke_oven_brick", mod: "gtceu" })
    event.remove({ id: "gtceu:macerator/macerate_blaze_rod"})
    event.remove(
        [
            {
                id: 'gtceu:compressor/sandstone'
            },
            {
                id: 'gtceu:centrifuge/red_sand_separation'
            },
            {
                id: 'gtceu:forge_hammer/smooth_sandstone_to_sand'
            },
            {
                id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand'
            },
            {
                id: 'gtceu:forge_hammer/sandstone_to_sand'
            },
            {
                id: 'gtceu:alloy_smelter/alloy_smelt_glass_tube'
            }
        ]
    )
  })

  //Railcraft
  event.remove({ id: /^railcraft:.*_gear/, mod: "railcraft" })
  event.remove({ id: /^railcraft:.*_shears/, mod: "railcraft" })
  event.remove({ id: /^railcraft:rolling.*_plate/, mod: "railcraft" })
  event.remove({ id: /^railcraft:blast_furnace.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:blast_furnace_bricks" })
  event.remove({ id: /^railcraft:coke_oven.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:coke_oven_bricks" })
  event.remove({ id: "railcraft:solid_fueled_firebox" })
  event.remove({ id: "railcraft:brass_ingot_crafted_with_ingots" })
  event.remove({ id: "railcraft:wooden_tie"})
  event.remove({ id: "railcraft:wooden_tie_bottle"})

  /// Railways (Steam n Rails)
  event.remove({ mod: "railways", id: /^railways:crafting\/smokestack.*/})
  
  //ATO
  event.remove({ id: /^alltheores:.*/, mod: "alltheores" })

  //ATM
  event.remove({ id: "allthemodium:teleport_pad"})


  //Apotheosis
  event.remove({ id: /^apotheosis:salvaging.*_horse_armor/ })

  //Create
  event.remove({ id: "create:crafting/materials/andesite_alloy" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_block" })
  event.remove({ id: "create:crafting/kinetics/millstone" })
  event.remove({ id: "create:mixing/andesite_alloy" })
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
  event.remove({ id: "create:deploying/cogwheel" })
  event.remove({ id: "create:deploying/large_cogwheel" })
  event.remove({ input: "minecraft:saddle", mod: "create" })
  event.remove({ input: "minecraft:leather_horse_armor", mod: "create" })
  event.remove({ id: /^create:crushing\/.*_ore/, mod: "create" })
  event.remove({ id: /^create:crushing\/.*_block/, mod: "create" })
  event.remove({ id: /^create:crushing\/.*_armor/, mod: "create" })
  event.remove({ id: "create:crafting/appliances/copper_backtank"})
  event.remove({ id: "create:crafting/appliances/tree_fertilizer"})
  event.remove({ id: "create:crushing/blaze_rod"})
  event.remove({ id: "create:crafting/kinetics/fluid_tank"})
  event.remove({ id: "create:crafting/kinetics/mechanical_press"})
  event.remove({ id: "create:crafting/kinetics/basin"})
  event.remove({ id: "create:crafting/kinetics/empty_blaze_burner"})
  event.remove({ id: "create:filling/sweet_roll"})
  event.remove({ id: "create:crafting/kinetics/belt_connector"})
  event.remove({ id: "create:crushing/crimsite_recycling"})
  event.remove({ id: "create:crushing/ochrum_recycling"})
  event.remove({ id: "create:crushing/veridium"})
  event.remove({ id: "create:crushing/tuff"})
  event.remove({ id: "create:crushing/gravel"})
  event.remove({ id: "create:crushing/asurine_recycling"})
  event.remove({ id: "create:crushing/crimsite"})
  event.remove({ id: /^create:.*_crimsite_stonecutting/})
  event.remove({ id: "create:sequenced_assembly/precision_mechanism"})

  //Cast iron plate jank
  event.remove({ id: "gtceu:shaped/plate_iron" })
  event.remove({ id: "create:pressing/iron_ingot" })
  event.remove({ id: "railcraft:rolling/iron_plate" })

  //FramedBlocks
  event.remove({ id: "framedblocks:framed_torch" })
  event.remove({ id: "framedblocks:framed_soul_torch" })
  event.remove({ id: "framedblocks:framed_chest" })
  event.remove({ id: "framedblocks:framed_secret_storage" })

  //Storage Drawers / Framed Drawers
  event.remove({ id: /^storagedrawers:oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:spruce_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:birch_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:jungle_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:acacia_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:dark_oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:crimson_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:warped_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:mangrove_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:cherry_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:.*_storage_upgrade/, mod: "storagedrawers"})
  
  event.remove({ id: /^framedcompactdrawers:.*/, mod: "framedcompactdrawers" })

  //Integrated Dynamics
  event.remove({ id: "integrateddynamics:crafting/squeezer" })
  event.remove({ id: "integrateddynamics:crafting/mechanical_squeezer" })
  event.remove({ mod: "integrateddynamics", output: "minecraft:blaze_powder" })
  event.remove({ mod: "integrateddynamics", output: "minecraft:blaze_powder" })
  event.remove({ type: "integrateddynamics:squeezer"})
  event.remove({ type: "integrateddynamics:mechanical_squeezer"})
  event.remove({ type: "integrateddynamics:drying_basin", output: "minecraft:leather"})
  event.remove({ type: "integrateddynamics:mechanical_drying_basin", output: "minecraft:leather"})

  // Railcraft
  event.remove({ id: "railcraft:bronze_ingot_crafted_with_ingots" })
  event.remove({ mod: "railcraft", id: `/^railcraft:.*coke.*/`})
  event.remove({ mod: "railcraft", id: `/^railcraft:crusher\/.*cobbleston.*/`})
  event.remove({ id: "railcraft:invar_ingot_crafted_with_ingots"})
  //Woodencog
  event.remove({ id: /^woodencog:cutting\/.*_rod/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:rock_knapping\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_bloom/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*door/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_sheet/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_steel_ingot/, mod: "woodencog" })
  event.remove({ id: "woodencog:crafting/kinetics/belt_connector"})
  event.remove({ id: /^woodencog:deploying\/.*/, mod : "woodencog"})
  event.remove({ id: /^woodencog:heating\/.*_dough/, mod: "woodencog" })


  // TreeTap
  event.remove({ mod: "treetap", output: "treetap:tap" })

  // Immersive Engineering

  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastfurnace_preheater" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:fertilizer" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cloche" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:waterwheel_segment" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill_base" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:watermill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:sample_drill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dynamo" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:wooden_barrel" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crafting_table" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:reinforced_crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coal_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dust_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_coke" })

  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:.*_hammering/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:crafting\/raw_hammercrushing.*/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:crafting\/hammercrushing.*/})

  event.remove({ id: "immersiveengineering:crafting/survey_tools"})
  event.remove({ id: "immersiveengineering:crafting/string"})
  event.remove({ id: `/^immersiveengineering:crafting\/pickaxe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/axe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/shovel_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/sword_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/hoe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/stick_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/treated_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/treated_.*/`})
  event.remove({ id: "immersiveengineering:crafting/wirecutter"})
  event.remove({ id: "immersiveengineering:crafting/craftingtable"})
  event.remove({ id: "immersiveengineering:crafting/workbench"})
  event.remove({ id: "immersiveengineering:crafting/ersatz_leather"})

  //Firmalife
  event.remove({ id: "firmalife:alloy/stainless_steel"})
  event.remove({ id: /firmalife:heating\/ore\/.*_chromite/})
  //AE2

  event.remove({ id: `/^ae2:tools\/.*_pickaxe/`})
  event.remove({ id: `/^ae2:tools\/.*_axe/`})
  event.remove({ id: `/^ae2:tools\/.*_spade/`})
  event.remove({ id: `/^ae2:tools\/.*_sword/`})
  event.remove({ id: `/^ae2:tools\/.*_hoe/`})

  //Ender tanks & chests
  event.remove(
    [
      {
        mod: 'enderchests'
      },
      {
        mod: 'endertanks'
      }
    ]
  )
  //Vanilla
  event.remove({ output: "minecraft:dirt"})
  event.remove({ output: "minecraft:coarse_dirt"})
  event.remove({ output: "minecraft:gravel"})
  event.remove({ output: "minecraft:mud"})
  event.remove({ output: "minecraft:furnace"})
  event.remove({ output: "minecraft:blast_furnace"})
  event.remove({ id: "minecraft:andesite" })
  event.remove({ id: "minecraft:brick" })
  event.remove({ id: "minecraft:blaze_powder"})
  event.remove({ id: "minecraft:diorite"})
  event.remove({ id: "minecraft:stone"})
  event.remove({ id: "minecraft:sugar_from_honey_bottle"})

  //PM
  event.remove({ id: "potionsmaster:blaze_powder"})

  //EnderIO
  event.remove({ id: "enderio:stick"})
  event.remove({ id: "enderio:sag_milling/blaze_powder"})
  event.remove({ id: "enderio:primitive_alloy_smelter"})
  event.remove({ id: "enderio:sag_mill"})
  event.remove({ id: "enderio:alloy_smelter"})
  event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot"})
  event.remove({ id: "enderio:stirling_generator"})
  event.remove({ id: "enderio:fluid_tank"})
  event.remove({ id: "enderio:pressurized_fluid_tank"})


  //Waystones
  event.remove({ id: `/^waystones:.*/`})

  //Astikorcarts
  event.remove({ id: "astikorcarts:plow"})
  event.remove({ id: "astikorcarts:animal_cart"})
  event.remove({ id: "astikorcarts:supply_cart"})
  event.remove({ id: "astikorcarts:wheel"})

  //Computercraft
  event.remove({ id: "computercraft:turtle_normal"})

  //Corail
  event.remove({ id: "tombstone:familiar_receptacle"})

  //SimplePlanes
  event.remove({ id: "simpleplanes:liquid_engine"})

  //SFM

  event.remove({ id: "sfm:manager"})
  event.remove({ id: "sfm:cable"})
  event.remove({ id: "sfm:water_tank"})
  event.remove({ id: "sfm:disk"})
  event.remove({ id: "sfm:labelgun"})
  event.remove({ id: "sfm:network_tool"})
  event.remove({ id: "sfm:printing_press"})
  event.remove({ id: "sfm:printing_form"})

  //I&F
  event.remove({ id: `/^iceandfire:.*silver.*/`})

  event.remove({ id: `/^iceandfire:.*copper.*/`})
  event.remove({ id: `/^iceandfire:.*_pile/`})
  
  //CHALK

  event.remove({ id: `/^chalk:chalk_from_.*/`})
  
  //DECO

  event.remove({ id: 'createdeco:pressing/zinc_sheet'})

}
