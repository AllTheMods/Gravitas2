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
let modifyAndRemoveFishingLoot = (/** @type {Internal.LootModificationEventJS} */ event) => {
    event.addLootTableModifier("gameplay/fishing").removeLoot(ItemFilter.ALWAYS_TRUE)
    

    fishes.forEach(fish => {
        event.addLootTableModifier("gameplay/fishing").addLoot(fish)
    })
}