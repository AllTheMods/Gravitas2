onEvent("jei.hide.items", (e) => {
  const hidePotion = (recipeEvent, potionId) => {
    recipeEvent.hide(Item.of("minecraft:potion", `{Potion:"${potionId}"}`))
    recipeEvent.hide(
      Item.of("minecraft:splash_potion", `{Potion:"${potionId}"}`)
    )
    recipeEvent.hide(
      Item.of("minecraft:tipped_arrow", `{Potion:"${potionId}"}`)
    )
    recipeEvent.hide(
      Item.of("minecraft:lingering_potion", `{Potion:"${potionId}"}`)
    )
    recipeEvent.hide(
      Item.of("apotheosis:potion_charm", `{Damage:0,Potion:"${potionId}"}`)
    )
  }

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

  oresToRemove.forEach((ore) => {
    e.hide(`potionsmaster:${ore}_powder`)
    e.hide(`potionsmaster:calcinated${ore}_powder`)
    hidePotion(e, `potionsmaster:${ore}_sight`)
  })
  e.hide(/potionsmaster:.*bezoar.*/)
  e.hide(/potionsmaster:.*bladder.*/)
})
