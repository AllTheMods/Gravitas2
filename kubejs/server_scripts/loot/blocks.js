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

const trackTypes = [
                "acacia", "ash", "aspen", "birch", "blackwood",
                "chestnut", "douglas_fir", "hickory", "kapok", "mangrove",
                "maple", "oak", "palm", "pine", "rosewood",
                "sequoia", "spruce", "sycamore", "white_cedar", "willow"
                ]

let modifyAndRemoveBlockLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event.addLootTypeModifier([LootType.BLOCK]).removeLoot(Ingredient.of(blockBanList))
	event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(Object.keys(blockReplacementMap)),(/** @type {Internal.ItemStack} */ item) => Item.of(blockReplacementMap[item.item.id]))

    trackTypes.forEach(track => {
        event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(`railways:track_tfc_${track}`),(item) => Item.of(`railways:track_tfc_${track}`))
        event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(`railways:track_tfc_${track}_narrow`),(item) => Item.of(`railways:track_tfc_${track}_narrow`))
        event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(`railways:track_tfc_${track}_wide`),(item) => Item.of(`railways:track_tfc_${track}_wide`))
    })
}
