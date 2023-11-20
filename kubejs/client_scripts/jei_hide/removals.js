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
}
