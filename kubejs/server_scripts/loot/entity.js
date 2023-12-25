// priority 10

const entityBanLoot = ["minecraft:copper_ingot", "minecraft:gold_ingot", "minecraft:iron_ingot"]

let modifyAndRemoveEntityLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event.addLootTypeModifier([LootType.ENTITY]).removeLoot(Ingredient.of(entityBanLoot))
  event.addLootTypeModifier([LootType.ENTITY]).replaceLoot("porkchop", "tfc:food/pork")
}
