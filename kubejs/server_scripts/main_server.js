// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  recipeAdd(event)
})

LootJS.modifiers((event) => {
  modifyAndRemoveChestLoot(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})