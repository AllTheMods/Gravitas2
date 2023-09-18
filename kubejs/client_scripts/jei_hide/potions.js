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
}