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
  "minecraft:beehive": "firmalife:beehive",
  "minecraft:lantern": "tfc:metal/lamp/bronze",
  // Restore vanilla concrete drops — DFC overrides these loot tables to drop dfc:concrete/smooth/*
  "dfc:concrete/smooth/white":      "minecraft:white_concrete",
  "dfc:concrete/smooth/orange":     "minecraft:orange_concrete",
  "dfc:concrete/smooth/magenta":    "minecraft:magenta_concrete",
  "dfc:concrete/smooth/light_blue": "minecraft:light_blue_concrete",
  "dfc:concrete/smooth/yellow":     "minecraft:yellow_concrete",
  "dfc:concrete/smooth/lime":       "minecraft:lime_concrete",
  "dfc:concrete/smooth/pink":       "minecraft:pink_concrete",
  "dfc:concrete/smooth/gray":       "minecraft:gray_concrete",
  "dfc:concrete/smooth/light_gray": "minecraft:light_gray_concrete",
  "dfc:concrete/smooth/cyan":       "minecraft:cyan_concrete",
  "dfc:concrete/smooth/purple":     "minecraft:purple_concrete",
  "dfc:concrete/smooth/blue":       "minecraft:blue_concrete",
  "dfc:concrete/smooth/brown":      "minecraft:brown_concrete",
  "dfc:concrete/smooth/green":      "minecraft:green_concrete",
  "dfc:concrete/smooth/red":        "minecraft:red_concrete",
  "dfc:concrete/smooth/black":      "minecraft:black_concrete"
}



let modifyAndRemoveBlockLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
  event.addLootTypeModifier([LootType.BLOCK]).removeLoot(Ingredient.of(blockBanList))
	event.addLootTypeModifier([LootType.BLOCK]).modifyLoot(Ingredient.of(Object.keys(blockReplacementMap)),(/** @type {Internal.ItemStack} */ item) => Item.of(blockReplacementMap[item.item.id]))


}
