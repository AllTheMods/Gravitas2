// priority: 10

const professions = [
    "minecraft:armorer",
    "minecraft:butcher",
    "minecraft:cartographer",
    "minecraft:cleric",
    "minecraft:farmer",
    "minecraft:fisherman",
    "minecraft:fletcher",
    "minecraft:leatherworker",
    "minecraft:librarian",
    "minecraft:mason",
    "minecraft:shepherd",
    "minecraft:toolsmith",
    "minecraft:weaponsmith"
];

const gemStones = [
    "amethyst",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "opal",
    "pyrite",
    "ruby",
    "sapphire",
    "topaz"
];

const tradeLevelXp = [1, 5, 10, 15, 20]

const replaceTrades = ((event) => {

    event.removeVanillaTrades();

    addArmorerTrades(event);

    addButcherTrades(event);

    addCartographerTrades(event);

    addClericTrades(event);

    addFarmerTrades(event);

    addFishermanTrades(event);

    addFletcherTrades(event);

    addLeatherworkerTrades(event);

    addLibrarianTrades(event);

    addMasonTrades(event);

    addShepherdTrades(event);

    addToolsmithTrades(event);

    addWeaponsmithTrades(event);
})

function addArmorerTrades(event) {

    event.addTrade("minecraft:armorer", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 3, 3)], TradeItem.of("tfc:metal/helmet/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:armorer", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 3, 3)], TradeItem.of("tfc:metal/chestplate/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:armorer", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 3, 3)], TradeItem.of("tfc:metal/greaves/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:armorer", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 2, 2)], TradeItem.of("tfc:metal/boots/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);

    
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/amethyst", 4, 6), TradeItem.of("tfc:metal/ingot/bismuth_bronze", 3, 3)], TradeItem.of("tfc:metal/helmet/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/amethyst", 4, 6), TradeItem.of("tfc:metal/ingot/bismuth_bronze", 3, 3)], TradeItem.of("tfc:metal/chestplate/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/amethyst", 4, 6), TradeItem.of("tfc:metal/ingot/bismuth_bronze", 3, 3)], TradeItem.of("tfc:metal/greaves/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/amethyst", 4, 6), TradeItem.of("tfc:metal/ingot/bismuth_bronze", 2, 2)], TradeItem.of("tfc:metal/boots/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/black_bronze", 3, 3)], TradeItem.of("tfc:metal/helmet/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/black_bronze", 3, 3)], TradeItem.of("tfc:metal/chestplate/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/black_bronze", 3, 3)], TradeItem.of("tfc:metal/greaves/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/black_bronze", 2, 2)], TradeItem.of("tfc:metal/boots/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/bronze", 3, 3)], TradeItem.of("tfc:metal/helmet/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/bronze", 3, 3)], TradeItem.of("tfc:metal/chestplate/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/bronze", 3, 3)], TradeItem.of("tfc:metal/greaves/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:armorer", 2, [TradeItem.of("tfc:gem/ruby", 4, 6), TradeItem.of("tfc:metal/ingot/bronze", 2, 2)], TradeItem.of("tfc:metal/boots/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);

    
    event.addTrade("minecraft:armorer", 3, [TradeItem.of("tfc:gem/sapphire", 4, 6), TradeItem.of("tfc:metal/ingot/wrought_iron", 3, 3)], TradeItem.of("tfc:metal/helmet/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:armorer", 3, [TradeItem.of("tfc:gem/sapphire", 4, 6), TradeItem.of("tfc:metal/ingot/wrought_iron", 3, 3)], TradeItem.of("tfc:metal/chestplate/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:armorer", 3, [TradeItem.of("tfc:gem/sapphire", 4, 6), TradeItem.of("tfc:metal/ingot/wrought_iron", 3, 3)], TradeItem.of("tfc:metal/greaves/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:armorer", 3, [TradeItem.of("tfc:gem/sapphire", 4, 6), TradeItem.of("tfc:metal/ingot/wrought_iron", 2, 2)], TradeItem.of("tfc:metal/boots/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);

    
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/steel", 3, 3)], TradeItem.of("tfc:metal/helmet/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/steel", 3, 3)], TradeItem.of("tfc:metal/chestplate/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/steel", 3, 3)], TradeItem.of("tfc:metal/greaves/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/steel", 2, 2)], TradeItem.of("tfc:metal/boots/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/black_steel", 3, 3)], TradeItem.of("tfc:metal/helmet/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/black_steel", 3, 3)], TradeItem.of("tfc:metal/chestplate/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/black_steel", 3, 3)], TradeItem.of("tfc:metal/greaves/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("tfc:gem/opal", 4, 6), TradeItem.of("tfc:metal/ingot/black_steel", 2, 2)], TradeItem.of("tfc:metal/boots/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);

    
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/red_steel", 3, 3)], TradeItem.of("tfc:metal/helmet/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/red_steel", 3, 3)], TradeItem.of("tfc:metal/chestplate/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/red_steel", 3, 3)], TradeItem.of("tfc:metal/greaves/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/red_steel", 2, 2)], TradeItem.of("tfc:metal/boots/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/blue_steel", 3, 3)], TradeItem.of("tfc:metal/helmet/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/blue_steel", 3, 3)], TradeItem.of("tfc:metal/chestplate/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/blue_steel", 3, 3)], TradeItem.of("tfc:metal/greaves/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("tfc:gem/emerald", 4, 6), TradeItem.of("tfc:metal/ingot/blue_steel", 2, 2)], TradeItem.of("tfc:metal/boots/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);

}

function addButcherTrades(event) {
    event.addTrade("minecraft:butcher", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:food/pork", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:butcher", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:food/chicken", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:butcher", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:food/rabbit", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:butcher", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:food/wolf", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:butcher", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/quail", 2, 4)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:butcher", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("firmalife:food/bacon", 3, 6)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:butcher", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/gran_feline", 3, 6)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:butcher", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/chevon", 4, 8)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:butcher", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/camelidae", 4, 8)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:butcher", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/venison", 4, 7)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:butcher", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/turtle", 4, 7)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:butcher", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/duck", 2, 6)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:butcher", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/mutton", 2, 6)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:butcher", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/bear", 2, 6)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:butcher", 4, [TradeItem.of("tfc:gem/lapis_lazuli", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/horse_meat", 6, 9)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:butcher", 4, [TradeItem.of("tfc:gem/lapis_lazuli", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/turkey", 6, 9)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:butcher", 4, [TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:food/pheasant", 5, 10)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:butcher", 4, [TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:food/peafowl", 6, 10)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/beef", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/chicken", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/venison", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/cooked_horse_meat", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:food/cooked_pheasant", 6, 20)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:food/cooked_beef", 6, 20)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:butcher", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:food/cooked_turkey", 6, 20)).villagerExperience(tradeLevelXp[4]);
}

function addCartographerTrades(event) {
    const biomeArray = [
        "tfc:badlands",
        "tfc:inverted_badlands",
        "tfc:canyons",
        "tfc:low_canyons",
        "tfc:plains",
        "tfc:plateau",
        "tfc:hills",
        "tfc:rolling_hills",
        "tfc:lake",
        "tfc:lowlands",
        "tfc:mountains",
        "tfc:volcanic_mountains",
        "tfc:old_mountains",
        "tfc:oceanic_mountains",
        "tfc:volcanic_oceanic_mountains",
        "tfc:ocean",
        "tfc:ocean_reef",
        "tfc:deep_ocean",
        "tfc:deep_ocean_trench",
        "tfc:river",
        "tfc:shore",
        "tfc:mountain_lake",
        "tfc:volcanic_mountain_lake",
        "tfc:old_mountain_lake",
        "tfc:oceanic_mountain_lake",
        "tfc:volcanic_oceanic_mountain_lake",
        "tfc:plateau_lake",
        "minecraft:warped_forest",
        "minecraft:nether_wastes",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley",
        "tfc:salt_marsh",
        "tfc:highlands",
        "tfc:tidal_flats"
    ];
    event.addTrade("minecraft:cartographer", 1, TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("minecraft:paper", 1, 3)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:cartographer", 1, TradeItem.of("minecraft:paper", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:cartographer", 2, TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("minecraft:map", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:cartographer", 2, TradeItem.of("minecraft:glass_pane", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 3)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:cartographer", 3, TradeItem.of("tfc:gem/sapphire", 1, 3), TradeItem.of("minecraft:compass", 1, 3)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:cartographer", 3, TradeItem.of("tfc:gem/sapphire", 1, 3), TradeItem.of("minecraft:spyglass", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:cartographer", 3, TradeItem.of("tfc:gem/sapphire", 1, 3), TradeItem.of("firmaciv:nav_clock", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:cartographer", 3, TradeItem.of("tfc:gem/sapphire", 1, 3), TradeItem.of("firmaciv:sextant", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:cartographer", 3, VillagerUtils.createBiomeMapTrade("tfc:gem/lapis_lazuli", biomeArray)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:cartographer", 4, TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("minecraft:item_frame", 1, 1)).villagerExperience(tradeLevelXp[3]);
    
    Ingredient.of("#minecraft:banners").getStacks().toArray().forEach((bannerItem => {
        event.addTrade("minecraft:cartographer", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], bannerItem).villagerExperience(tradeLevelXp[3]);
    }));
    event.addTrade("minecraft:cartographer", 5, TradeItem.of("tfc:gem/emerald", 1, 3), TradeItem.of("firmaciv:barometer", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:cartographer", 5, TradeItem.of("tfc:gem/emerald", 1, 3), TradeItem.of("firmaciv:firmaciv_compass", 1, 1)).villagerExperience(tradeLevelXp[4]);
}

function addClericTrades(event) {
    event.addTrade("minecraft:cleric", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of("tombstone:grave_dust", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:cleric", 1, [TradeItem.of("tfc:small_sheepskin_hide", 4, 5)], TradeItem.of("tombstone:bone_needle", 1, 2)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:cleric", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4)], TradeItem.of("tombstone:strange_scroll")).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:cleric", 2, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("tombstone:ankh_of_pray", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:cleric", 3, [TradeItem.of("tfc:gem/ruby", 2, 6)], TradeItem.of("tombstone:fishing_rod_of_misadventure", 1, 1)).villagerExperience(tradeLevelXp[2]);
    Ingredient.of("#tombstone:decorative_graves").getStacks().toArray().forEach((graveItem => {
        event.addTrade("minecraft:cleric", 3, [TradeItem.of("tfc:gem/ruby", 4, 6)], TradeItem.of(graveItem, 1, 1)).villagerExperience(tradeLevelXp[2]).maxUses(2);
    }));

    event.addTrade("minecraft:cleric", 4, [TradeItem.of("tfc:gem/opal", 2, 6)], TradeItem.of("tombstone:grave_plate", 1, 1)).villagerExperience(tradeLevelXp[3]);
    Ingredient.of("#tombstone:magic_books").getStacks().toArray().forEach((bookItem => {
        event.addTrade("minecraft:cleric", 4, [TradeItem.of("tfc:gem/opal", 4, 6)], TradeItem.of(bookItem, 1, 1)).villagerExperience(tradeLevelXp[3]).maxUses(2);
    }));

    event.addTrade("minecraft:cleric", 5, [TradeItem.of("tfc:gem/emerald", 2, 6)], TradeItem.of("tombstone:voodoo_poppet", 1, 1)).villagerExperience(tradeLevelXp[4]);
    Ingredient.of("#tombstone:magic_scrolls").getStacks().toArray().forEach((scrollItem => {
        event.addTrade("minecraft:cleric", 5, [TradeItem.of("tfc:gem/emerald", 4, 6)], TradeItem.of(scrollItem, 1, 1)).villagerExperience(tradeLevelXp[4]).maxUses(2);
    }));
}

function addFarmerTrades(event) {
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:wood/sapling/birch", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:wood/sapling/spruce", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:food/wheat", 6, 12)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:seeds/wheat", 4, 8)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:food/beet", 6, 12)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:farmer", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:seeds/beet", 4, 8)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/topaz", 1, 3), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:plant/green_apple_sapling", 1, 2)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/topaz", 1, 3), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:plant/red_apple_sapling", 1, 2)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/red_apple", 6, 12)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/green_apple", 6, 12)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/carrot", 6, 12)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/carrot", 4, 8)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/potato", 6, 12)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:farmer", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/potato", 4, 8)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:plant/olive_sapling", 1, 2)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:plant/cherry_sapling", 1, 2)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:food/olive", 6, 12)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:food/maize", 6, 12)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:food/tomato", 6, 12)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:food/onion", 6, 12)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:seeds/tomato", 6, 8)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:seeds/onion", 6, 8)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:farmer", 3, [TradeItem.of("tfc:gem/amethyst", 1, 3), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:seeds/maize", 6, 8)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/amethyst", 1, 4), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:plant/peach_sapling", 1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/amethyst", 1, 4), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:plant/plum_sapling", 1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/amethyst", 1, 4), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:plant/banana_sapling", 1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/amethyst", 1, 4), TradeItem.of("tfc:gem/ruby", 1, 3)], TradeItem.of("tfc:plant/orange_sapling", 1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:food/peach", 12, 16)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:food/plum", 12, 16)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:food/garlic", 12, 16)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:seeds/garlic", 8, 12)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:seeds/jute", 8, 12)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:farmer", 4, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 3)], TradeItem.of("tfc:seeds/cabbage", 8, 12)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 4)], TradeItem.of("firmalife:plant/cilantro", 1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/ruby", 1, 4), TradeItem.of("tfc:gem/sapphire", 1, 4)], TradeItem.of("firmalife:plant/basil", 1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/sapphire", 1, 4), TradeItem.of("tfc:gem/opal", 1, 4)], TradeItem.of("firmalife:plant/oregano", 6, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/sapphire", 1, 4), TradeItem.of("tfc:gem/opal", 1, 4)], TradeItem.of("firmalife:plant/pimento", 6, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/sapphire", 1, 4), TradeItem.of("tfc:gem/opal", 1, 4)], TradeItem.of("firmalife:plant/cumin", 6, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/opal", 1, 4), TradeItem.of("tfc:gem/emerald", 1, 4)], TradeItem.of("firmalife:food/tofu", 6, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/emerald", 1, 4), TradeItem.of("tfc:gem/diamond", 1, 4)], TradeItem.of("firmalife:plant/cocoa_sapling", 1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/emerald", 1, 4), TradeItem.of("tfc:gem/diamond", 1, 4)], TradeItem.of("firmalife:plant/fig_sapling", 1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:farmer", 5, [TradeItem.of("tfc:gem/emerald", 1, 4), TradeItem.of("tfc:gem/diamond", 1, 4)], TradeItem.of("firmalife:plant/pineapple_bush", 1, 2)).villagerExperience(tradeLevelXp[4]);
}

function addFishermanTrades(event) {
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:food/shellfish", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("tfc:gem/pyrite", 1, 2), TradeItem.of("tfc:gem/topaz", 1, 2)], TradeItem.of("tfc:food/calamari", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:seeds/oat", 4, 8)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("tfc:gem/topaz", 1, 2), TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)], TradeItem.of("tfc:seeds/rye", 4, 8)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/rice", 4, 8)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:fisherman", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/cod", 3, 6)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:fisherman", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/tropical_fish", 3, 6)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:fisherman", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/pumpkin", 4, 8)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:fisherman", 2, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/melon", 4, 8)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:fisherman", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/lake_trout", 4, 7)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:fisherman", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/rainbow_trout", 4, 7)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:fisherman", 3, [TradeItem.of("tfc:gem/ruby", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/barley", 12, 16)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:fisherman", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/soybean", 12, 16)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:fisherman", 3, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 3), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:seeds/squash", 12, 16)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:fisherman", 4, [TradeItem.of("tfc:gem/lapis_lazuli", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/lake_trout", 6, 9)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:fisherman", 4, [TradeItem.of("tfc:gem/lapis_lazuli", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/rainbow_trout", 6, 9)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:fisherman", 4, [TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/barley", 16, 20)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:fisherman", 4, [TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/soybean", 16, 20)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:fisherman", 4, [TradeItem.of("tfc:gem/opal", 1, 3), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/squash", 16, 20)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/cod", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/salmon", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/cod", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/sapphire", 2, 4), TradeItem.of("tfc:gem/amethyst", 1, 2)], TradeItem.of("tfc:food/salmon", 8, 12)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/barley", 16, 20)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/soybean", 16, 20)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:fisherman", 5, [TradeItem.of("tfc:gem/opal", 1, 1), TradeItem.of("tfc:gem/sapphire", 1, 2)], TradeItem.of("tfc:seeds/squash", 16, 20)).villagerExperience(tradeLevelXp[4]);
}

function addFletcherTrades(event) {

    event.addTrade("minecraft:fletcher", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of("minecraft:arrow", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:fletcher", 1, [TradeItem.of("minecraft:stick", 4, 5)], TradeItem.of("tfc:gem/lapis_lazuli", 1, 2)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:fletcher", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4)], TradeItem.of("minecraft:flint")).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:fletcher", 2, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("minecraft:bow", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:fletcher", 3, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/ruby", 8, 22)], "minecraft:bow").amount(1,4)).villagerExperience(tradeLevelXp[2]);
    Ingredient.of("#forge:string").getStacks().toArray().forEach((stringItem => {
        event.addTrade("minecraft:fletcher", 3, [TradeItem.of(stringItem, 10, 20)], TradeItem.of("tfc:gem/ruby", 1, 1)).villagerExperience(tradeLevelXp[2])
    }));

    event.addTrade("minecraft:fletcher", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 8, 22)], "minecraft:crossbow").amount(1,4)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:fletcher", 4, [TradeItem.of("minecraft:feather", 12, 24)], "tfc:gem/opal").villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:fletcher", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 8, 22)], "iceandfire:dragonbone_bow").amount(1,4)).villagerExperience(tradeLevelXp[4]);
    Ingredient.of("#minecraft:arrows").getStacks().toArray().forEach((arrowItem => {
        event.addTrade("minecraft:fletcher", 5, [TradeItem.of("tfc:gem/emerald", 1, 4), TradeItem.of("minecraft:arrow", 5, 5)], TradeItem.of(arrowItem, 5, 5)).villagerExperience(tradeLevelXp[4]).maxUses(10);
    }));
}

function addLeatherworkerTrades(event) {
    event.addTrade("minecraft:leatherworker", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of("waterflasks:leather_flask", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:leatherworker", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of("minecraft:leather", 2, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:leatherworker", 1, [TradeItem.of("tfc:small_raw_hide", 4, 5)], TradeItem.of("tfc:gem/ruby", 1, 2)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:leatherworker", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4)], TradeItem.of("minecraft:leather_helmet", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:leatherworker", 2, [TradeItem.of("tfc:small_raw_hide", 4, 5)], TradeItem.of("tfc:gem/ruby", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:leatherworker", 2, [TradeItem.of("tfc:gem/ruby", 3, 4)], TradeItem.of("tfcambiental:leather_apron", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:leatherworker", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("minecraft:leather_chestplate", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:leatherworker", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("minecraft:leather_leggings", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:leatherworker", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("minecraft:leather_boots", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:leatherworker", 2, [TradeItem.of("tfc:medium_raw_hide", 2, 4)], TradeItem.of("tfc:gem/opal", 2, 4)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:leatherworker", 4, [TradeItem.of("tfc:gem/opal", 2, 6)], TradeItem.of("tfcambiental:insulated_leather_hat", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:leatherworker", 4, [TradeItem.of("tfc:gem/opal", 2, 6)], TradeItem.of("tfcambiental:insulated_leather_boots", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:leatherworker", 4, [TradeItem.of("tfc:large_raw_hide", 1, 3)], TradeItem.of("tfc:gem/emerald", 1, 1)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:leatherworker", 5, [TradeItem.of("tfc:gem/emerald", 2, 6)], TradeItem.of("tfcambiental:insulated_leather_tunic", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:leatherworker", 5, [TradeItem.of("tfc:gem/emerald", 2, 6)], TradeItem.of("tfcambiental:insulated_leather_pants", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:leatherworker", 5, [TradeItem.of("minecraft:leather", 5, 10)], TradeItem.of("tfc:gem/emerald", 1, 3)).villagerExperience(tradeLevelXp[4]);
}

function addLibrarianTrades(event) {
    event.addTrade("minecraft:librarian", 1, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/lapis_lazuli", 5, 15), TradeItem.of("minecraft:book", 1, 1)], "minecraft:book").amount(1,1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:librarian", 1, [TradeItem.of("minecraft:paper", 1, 4)], TradeItem.of("tfc:gem/sapphire", 1, 4)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:librarian", 2, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/sapphire", 10, 20), TradeItem.of("minecraft:book", 1, 1)], "minecraft:book").amount(1,2)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:librarian", 2, [TradeItem.of("minecraft:book", 1, 4)], TradeItem.of("tfc:gem/ruby", 1, 4)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:librarian", 3, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/ruby", 15, 30), TradeItem.of("minecraft:book", 1, 1)], "minecraft:book").amount(1,3)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:librarian", 3, [TradeItem.of("minecraft:ink_sac", 1, 4)], TradeItem.of("tfc:gem/opal", 1, 4)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:librarian", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 20, 40), TradeItem.of("minecraft:book", 1, 1)], "minecraft:book").amount(1,4)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:librarian", 4, [TradeItem.of("minecraft:writable_book", 1, 4)], TradeItem.of("tfc:gem/emerald", 1, 4)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:librarian", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 32, 64), TradeItem.of("minecraft:book", 1, 1)], "minecraft:book").amount(1,5)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:librarian", 5, [TradeItem.of("tfc:gem/emerald", 1, 4)], TradeItem.of("minecraft:name_tag", 1, 4)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:librarian", 5, [TradeItem.of("tfc:gem/emerald", 1, 4)], TradeItem.of("iceandfire:bestiary", 1, 4)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:librarian", 5, [TradeItem.of("tfc:gem/emerald", 5, 15)], TradeItem.of("iceandfire:manuscript", 1, 4)).villagerExperience(tradeLevelXp[4]);
}

function addMasonTrades(event) {
    Ingredient.of("#tfc:rock/raw").getStacks().toArray().forEach((rockItem => {
        event.addTrade("minecraft:mason", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 1, 4)], rockItem).villagerExperience(tradeLevelXp[0]);
    }));

    Ingredient.of("#forge:stone_bricks").getStacks().toArray().forEach((stoneItem => {
        event.addTrade("minecraft:mason", 2, [TradeItem.of("tfc:gem/sapphire", 1, 4)], stoneItem).villagerExperience(tradeLevelXp[1]);
    }));

    
    event.addTrade("minecraft:mason", 3, [TradeItem.of("tfc:gem/ruby", 1, 4)], "minecraft:white_glazed_terracotta").villagerExperience(tradeLevelXp[2]);
    Ingredient.of("#tfc:colored_glazed_terracotta").getStacks().toArray().forEach((terracottaItem => {
        event.addTrade("minecraft:mason", 3, [TradeItem.of("tfc:gem/ruby", 1, 4)], terracottaItem).villagerExperience(tradeLevelXp[2]);
    }));

    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "tfc:powder/graphite").villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "tfc:powder/kaolinite").villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "minecraft:clay_ball").villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "tfc:silica_glass_batch").villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "tfc:hematitic_glass_batch").villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:mason", 4, [TradeItem.of("tfc:gem/opal", 1, 4)], "tfc:olivine_glass_batch").villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:mason", 5, [TradeItem.of("tfc:gem/emerald", 1, 4)], TradeItem.of("tfc:fire_clay", 2, 6)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:mason", 5, [TradeItem.of("tfc:gem/emerald", 1, 4)], "tfc:volcanic_glass_batch").villagerExperience(tradeLevelXp[4]).transform((offer,entity,random) => {
        let d100 = Utils.random.nextInt(1,100);
        if (d100 >= 95) {
            offer.getFirstInput().setCount(Utils.random.nextInt(10,15));
            offer.setOutput("waystones:waystone");
            offer.setMaxUses(2);
        } else if (d100 >= 90) {
            offer.getFirstInput().setCount(Utils.random.nextInt(10,15));
            offer.setOutput("waystones:warp_plate");
            offer.getOutput().setCount(2);
            offer.setMaxUses(2);
        }
    });
}

function addShepherdTrades(event) {
    Ingredient.of("#minecraft:wool").getStacks().toArray().forEach((woolItem => {
        event.addTrade("minecraft:shepherd", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of(woolItem, 2, 4)).villagerExperience(tradeLevelXp[0]).maxUses(2);
    }));
    event.addTrade("minecraft:shepherd", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6)], TradeItem.of("comforts:sleeping_bag_white", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:shepherd", 1, [TradeItem.of("tfc:small_sheepskin_hide", 4, 5)], TradeItem.of("tfc:gem/ruby", 1, 2)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:shepherd", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4)], TradeItem.of("minecraft:white_banner")).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:shepherd", 2, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("simpleplanes:parachute", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:shepherd", 2, [TradeItem.of("tfc:small_sheepskin_hide", 4, 5)], TradeItem.of("tfc:gem/ruby", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:shepherd", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6)], TradeItem.of("tfcambiental:wool_hat", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:shepherd", 3, [TradeItem.of("tfc:medium_sheepskin_hide", 2, 4)], TradeItem.of("tfc:gem/opal", 2, 4)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:shepherd", 3, [TradeItem.of("tfc:gem/ruby", 10, 15)], TradeItem.of("minecraft:enchanted_book", 1, 1, '{StoredEnchantments:[{lvl:1s,id:"apotheosis:chromatic"}]}')).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:shepherd", 3, [TradeItem.of("tfc:gem/ruby", 2, 6)], TradeItem.of("minecraft:light_blue_banner", 1, 1, '{Patterns: [{Pattern: "cs", Color: 15}, {Pattern: "mc", Color: 0}, {Pattern: "bs", Color: 5}, {Pattern: "tt", Color: 15}, {Pattern: "ts", Color:3}]}')).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:shepherd", 4, [TradeItem.of("tfc:gem/opal", 2, 6)], TradeItem.of("tfcambiental:wool_boots", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:shepherd", 4, [TradeItem.of("tfc:gem/opal", 10, 15)], TradeItem.of("minecraft:enchanted_book", 1, 1, '{StoredEnchantments:[{lvl:1s,id:"apotheosis:exploitation"}]}')).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:shepherd", 4, [TradeItem.of("tfc:large_sheepskin_hide", 1, 3)], TradeItem.of("tfc:gem/emerald", 1, 1)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:shepherd", 5, [TradeItem.of("tfc:gem/emerald", 2, 6)], TradeItem.of("tfcambiental:wool_sweater", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:shepherd", 5, [TradeItem.of("tfc:gem/emerald", 2, 6)], TradeItem.of("tfcambiental:wool_pants", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:shepherd", 5, [TradeItem.of("tfc:gem/emerald", 10, 15)], TradeItem.of("minecraft:enchanted_book", 1, 1, '{StoredEnchantments:[{lvl:1s,id:"apotheosis:growth_serum"}]}')).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:shepherd", 5, [TradeItem.of("minecraft:white_wool", 5, 10)], TradeItem.of("tfc:gem/emerald", 1, 3)).villagerExperience(tradeLevelXp[4]);

}

function addToolsmithTrades(event) {
    event.addTrade("minecraft:toolsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("gtceu:copper_plate", 1, 1)], TradeItem.of("tfc:metal/fish_hook/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:toolsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 1, 1)], TradeItem.of("tfc:metal/propick_head/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:toolsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 1, 1)], TradeItem.of("tfc:metal/hoe_head/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:bronze_plate", 1, 1)], TradeItem.of("tfc:metal/fish_hook/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:bismuth_bronze_plate", 1, 1)], TradeItem.of("tfc:metal/fish_hook/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:black_bronze_plate", 1, 1)], TradeItem.of("tfc:metal/fish_hook/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bismuth_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 3, 4), TradeItem.of("gtceu:black_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bismuth_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:toolsmith", 2, [TradeItem.of("tfc:gem/ruby", 3, 4), TradeItem.of("gtceu:black_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_plate", 1, 1)], TradeItem.of("tfc:metal/fish_hook/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:toolsmith", 3, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/sapphire", 15, 30), TradeItem.of("gtceu:wrought_iron_ingot", 2, 2)], "tfc:metal/hoe/wrought_iron").amount(1, 2)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:toolsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 2, 2)], TradeItem.of("tfc:metal/fish_hook/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/fish_hook/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 15, 30), TradeItem.of("gtceu:steel_ingot", 2, 2)], "tfc:metal/propick/steel").amount(1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:toolsmith", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 15, 30), TradeItem.of("gtceu:black_steel_ingot", 2, 2)], "tfc:metal/fishing_rod/black_steel").amount(1, 2)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:toolsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/fish_hook/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/fish_hook/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/propick_head/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 3, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/hoe_head/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 15, 30), TradeItem.of("gtceu:blue_steel_ingot", 2, 2)], "tfc:metal/fishing_rod/blue_steel").amount(1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:toolsmith", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 15, 30), TradeItem.of("gtceu:red_steel_ingot", 2, 2)], "tfc:metal/propick/red_steel").amount(1, 2)).villagerExperience(tradeLevelXp[4]);
}

function addWeaponsmithTrades(event) {

    event.addTrade("minecraft:weaponsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 2, 2)], TradeItem.of("tfc:metal/mace_head/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:weaponsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 1, 1)], TradeItem.of("tfc:metal/javelin_head/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);
    event.addTrade("minecraft:weaponsmith", 1, [TradeItem.of("tfc:gem/lapis_lazuli", 4, 6), TradeItem.of("tfc:metal/ingot/copper", 2, 2)], TradeItem.of("tfc:metal/sword_blade/copper", 1, 1)).villagerExperience(tradeLevelXp[0]);

    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:bismuth_bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/amethyst", 2, 4), TradeItem.of("gtceu:black_bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bismuth_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 3, 4), TradeItem.of("gtceu:black_bronze_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 4, 5), TradeItem.of("gtceu:bismuth_bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/bismuth_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);
    event.addTrade("minecraft:weaponsmith", 2, [TradeItem.of("tfc:gem/ruby", 3, 4), TradeItem.of("gtceu:black_bronze_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/black_bronze", 1, 1)).villagerExperience(tradeLevelXp[1]);

    event.addTrade("minecraft:weaponsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:weaponsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:weaponsmith", 3, [TradeItem.of("tfc:gem/sapphire", 2, 6), TradeItem.of("gtceu:wrought_iron_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/wrought_iron", 1, 1)).villagerExperience(tradeLevelXp[2]);
    event.addTrade("minecraft:weaponsmith", 3, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/sapphire", 15, 30), TradeItem.of("gtceu:wrought_iron_ingot", 2, 2)], "tfc:metal/sword/wrought_iron").amount(1, 2)).villagerExperience(tradeLevelXp[2]);

    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:steel_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("tfc:gem/opal", 2, 6), TradeItem.of("gtceu:black_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/black_steel", 1, 1)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 15, 30), TradeItem.of("gtceu:steel_ingot", 2, 2)], "tfc:metal/sword/steel").amount(1, 2)).villagerExperience(tradeLevelXp[3]);
    event.addTrade("minecraft:weaponsmith", 4, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/opal", 15, 30), TradeItem.of("gtceu:black_steel_ingot", 2, 2)], "tfc:metal/sword/black_steel").amount(1, 2)).villagerExperience(tradeLevelXp[3]);

    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/mace_head/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 1, 1)], TradeItem.of("tfc:metal/javelin_head/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:blue_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/blue_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("tfc:gem/emerald", 2, 6), TradeItem.of("gtceu:red_steel_ingot", 2, 2)], TradeItem.of("tfc:metal/sword_blade/red_steel", 1, 1)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 15, 30), TradeItem.of("gtceu:blue_steel_ingot", 2, 2)], "tfc:metal/sword/blue_steel").amount(1, 2)).villagerExperience(tradeLevelXp[4]);
    event.addTrade("minecraft:weaponsmith", 5, VillagerUtils.createEnchantedItemTrade([TradeItem.of("tfc:gem/emerald", 15, 30), TradeItem.of("gtceu:red_steel_ingot", 2, 2)], "tfc:metal/sword/red_steel").amount(1, 2)).villagerExperience(tradeLevelXp[4]);
}