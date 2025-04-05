// priority 10

const oresToRemove = [
  "uranium",
  "lead",
  "osmium",
  "crimsoniron",
  "platinum",
  "allthemodium",
  "vibranium",
  "unobtainium"
]
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

let hidePotions = (/** @type {Internal.HideJEIEventJS}*/ event) => {
  oresToRemove.forEach((ore) => {
    event.hide(`potionsmaster:${ore}_powder`)
    event.hide(`potionsmaster:calcinated${ore}_powder`)
    event.hide(Item.of("minecraft:potion", `{Potion: "potionsmaster:${ore}_sight"}`))
    event.hide(Item.of("minecraft:splash_potion", `{Potion:"potionsmaster:${ore}_sight"}`))
    event.hide(Item.of("minecraft:tipped_arrow", `{Potion:"potionsmaster:${ore}_sight"}`))
    event.hide(Item.of("minecraft:lingering_potion", `{Potion:"potionsmaster:${ore}_sight"}`))
    event.hide(Item.of("apotheosis:potion_charm", `{Damage:0,Potion:"potionsmaster:${ore}_sight"}`))
  })
    event.hide(/potionsmaster:.*bezoar.*/)
    event.hide(/potionsmaster:.*bladder.*/)
  toolsToRemove.forEach((tool) => {
    event.hide(`/^gtceu:${tool}_shovel/`)
    event.hide(`/^gtceu:${tool}_pickaxe/`)
    event.hide(`/^gtceu:${tool}_axe/`)
    event.hide(`/^gtceu:${tool}_hoe/`)
    event.hide(`/^gtceu:${tool}_scythe/`)
    event.hide(`/^gtceu:${tool}_sword/`)
    event.hide(`/^gtceu:${tool}_helmet/`)
    event.hide(`/^gtceu:${tool}_chestplate/`)
    event.hide(`/^gtceu:${tool}_leggings/`)
    event.hide(`/^gtceu:${tool}_boots/`)
  })
    event.hide(`/^minecraft:.*_boat/`)
    event.hide(`/^tfc:wood/boat/.*/`)

    //IE
    event.hide("immersiveengineering:cokebrick")
    event.hide("immersiveengineering:slab_cokebrick")
    event.hide("immersiveengineering:blastbrick")
    event.hide("immersiveengineering:blastbrick_reinforced")
    event.hide("immersiveengineering:blastfurnace_preheater")
    event.hide("immersiveengineering:slab_blastbrick")
    event.hide("immersiveengineering:slab_blastbrick_reinforced")
    event.hide("immersiveengineering:fertilizer")
    event.hide("immersiveengineering:cloche")
    event.hide("immersiveengineering:waterwheel_segment")
    event.hide("immersiveengineering:windmill_base")
    event.hide("immersiveengineering:watermill")
    event.hide("immersiveengineering:windmill")
    event.hide("immersiveengineering:sample_drill")
    event.hide("immersiveengineering:dynamo")
    event.hide("immersiveengineering:wooden_barrel")
    event.hide("immersiveengineering:crafting_table")
    event.hide("immersiveengineering:crate")
    event.hide("immersiveengineering:reinforced_crate")
    event.hide("immersiveengineering:coal_coke")
    event.hide("immersiveengineering:dust_coke")
    event.hide("immersiveengineering:coke")
    event.hide(`/^immersiveengineering:.*hemp_seed.*/`)

    //ATM
    event.hide("allthemodium:teleport_pad")

    //Railcraft
    event.hide(`/^railcraft:.*coke.*/`)
    
    //Storage Drawers
    event.hide(`/^storagedrawers:.*_trim/`)
    event.hide(`/^storagedrawers:.*_full_.*/`)
    event.hide(`/^storagedrawers:.*_half_.*/`)

    //Astikor Carts
    event.hide("astikorcarts:plow")
    event.hide("astikorcarts:animal_cart")
    event.hide("astikorcarts:supply_cart")
    event.hide("astikorcarts:wheel")

    event.hide(`/^.*deepslate.*/`)

    // Vanilla
    event.hide(`/^minecraft:.*dark_oak.*/`)
    event.hide(`/^minecraft:.*oak.*/`)
    event.hide(`/^minecraft:.*acacia.*/`)
    event.hide(`/^minecraft:.*birch.*/`)
    event.hide(`/^minecraft:.*mangrove.*/`)
    event.hide(`/^minecraft:.*cherry.*/`)
    event.hide(`/^minecraft:.*spruce.*/`)
    event.hide(`/^minecraft:.*andesite.*/`)
    event.hide(`/^minecraft:.*diorite.*/`)
    event.hide(`/^minecraft:.*granite.*/`)
    event.hide("minecraft:smoker")
    event.hide("minecraft:furnace")
    event.hide("minecraft:furnace_minecart")
    event.hide("minecraft:blast_furnace")
    event.hide("minecraft:campfire")
    event.hide("minecraft:soul_campfire")

    // EnderIO
    event.hide(`/^enderio:end_steel.*/`)

    //SFM
    event.hide("sfm:water_tank")

    //GTCEu
    event.hide('gtceu:lp_steam_extractor')
    event.hide('gtceu:hp_steam_extractor')
    event.hide('gtceu:lv_extruder')
    event.hide('gtceu:wood_mallet')

    // Vintage Improvements
    event.hide('vintageimprovements:spring_coiling_machine_wheel')
    event.hide(/^vintageimprovements:.*_spring/)

    // Thorium Reactors
    event.hide('thoriumreactors:generator_block')
    event.hide('thoriumreactors:fluid_evaporation_block')
    event.hide('thoriumreactors:electrolytic_salt_separator')
    event.hide('thoriumreactors:salt_melter_block')
    event.hide('thoriumreactors:concentrator_block')
    event.hide('thoriumreactors:decomposer_block')
    event.hide('thoriumreactors:uranium_oxidizer_block')
    event.hide('thoriumreactors:fluid_centrifuge_block')
    event.hide('thoriumreactors:crystallizer_block')
    event.hide('thoriumreactors:blast_furnace_block')
    event.hide('thoriumreactors:fluid_enricher_block')
    event.hide('thoriumreactors:sodium')
    event.hide('thoriumreactors:potassium')
    event.hide('thoriumreactors:raw_uranium')
    event.hide('thoriumreactors:fluorite')
    event.hide('thoriumreactors:uran_three_chloride')

    // Immersive Aircraft
    event.hide('immersive_aircraft:gyrodyne')
    event.hide('immersive_aircraft:propeller')

    // Jumbo Furnace
    event.hide('jumbofurnace:jumbo_furnace')
}
