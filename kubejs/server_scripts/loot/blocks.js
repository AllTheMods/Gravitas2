// priority 10

let blockBanList = [
  "minecraft:enchanting_table",
  "minecraft:furnace",
  "minecraft:brewing_stand",
  "minecraft:smoker",
  "minecraft:blast_furnace",
  "minecraft:campfire",
  "minecraft:soul_campfire"
]
let blockReplacementMap = {
  "minecraft:chest": "tfc:wood/chest/oak",
  "minecraft:trapped_chest": "tfc:wood/trapped_chest/oak", // won't see on jade because it is cheating
  "minecraft:barrel": "tfc:wood/barrel/oak", // not same functionality but :shrug:
  "minecraft:lectern": "tfc:wood/lectern/oak",
  "minecraft:bell": "tfc:brass_bell",
  "minecraft:torch": "tfc:torch",
  "minecraft:beehive": "firmalife:beehive"
}
let modifyAndRemoveBlockLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event.addLootTypeModifier([LootType.BLOCK]).removeLoot(Ingredient.of(blockBanList))
	event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(Object.keys(blockReplacementMap)),(/** @type {Internal.ItemStack} */ item) => Item.of(blockReplacementMap[item.item.id]))
}
