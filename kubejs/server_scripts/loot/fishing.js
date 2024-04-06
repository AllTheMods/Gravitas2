const fishes =[
    "tfc:food/cod",
    "tfc:food/salmon",
    "tfc:food/bluegill",
    "tfc:food/crappie",
    "tfc:food/lake_trout",
    "tfc:food/largemouth_bass",
    "tfc:food/rainbow_trout",
    "tfc:food/smallmouth_bass",
    "tfc:food/tropical_fish"
]
const vanillaFishes = [
    "minecraft:cod",
    "minecraft:salmon",
    "minecraft:tropical_fish",
    "minecraft:pufferfish"
]

let modifyAndRemoveFishingLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
    
    
    vanillaFishes.forEach(fish => {
        event.addLootTableModifier("gameplay/fishing").removeLoot(fish)
    })

    fishes.forEach(fish => {
        event.addLootTableModifier("gameplay/fishing").addLoot(fish)
    })
}