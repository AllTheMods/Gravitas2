const entityBanLoot = ["minecraft:copper_ingot"]

let modifyAndRemoveEntityLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
    event
      .addLootTypeModifier([LootType.ENTITY])
      .removeLoot(Ingredient.of(entityBanLoot))
  }