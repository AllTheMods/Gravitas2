// priority 10

let modifyAndRemoveBlockLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event.addLootTypeModifier([LootType.BLOCK]).removeLoot(Ingredient.of(global.blockBanList))
	event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(Object.keys(global.blockReplacementMap)),(/** @type {Internal.ItemStack} */ item) => Item.of(global.blockReplacementMap[item.item.id]))
}
