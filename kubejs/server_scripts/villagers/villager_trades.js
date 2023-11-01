// priority: 10

const professions = [
 "minecraft:armorer",
 "minecraft:shepherd",
 "minecraft:farmer",
 "minecraft:fisherman",
 "minecraft:toolsmith",
 "minecraft:weaponsmith",
 "minecraft:cleric",
 "minecraft:fletcher",
 "minecraft:mason",
 "minecraft:butcher",
 "minecraft:cartographer",
 "minecraft:librarian",
 "minecraft:leatherworker"
]

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
]

const replaceTrades = ((event) => {

    event.removeVanillaTrades();

    /* Farmer Trades */
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:wood/sapling/birch",2,4));
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:wood/sapling/spruce",2,4));
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:food/wheat",6,12));
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:seeds/wheat",4,8));
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:food/beet",6,12));
    event.addTrade("minecraft:farmer",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:seeds/beet",4,8));

    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/topaz",1,3),TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:plant/green_apple_sapling",1,2));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/topaz",1,3),TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:plant/red_apple_sapling",1,2));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/red_apple",6,12));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/green_apple",6,12));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/carrot",6,12));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/carrot",4,8));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/potato",6,12));
    event.addTrade("minecraft:farmer",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/potato",4,8));

    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:plant/olive_sapling",1,2));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:plant/cherry_sapling",1,2));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:food/olive",6,12));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:food/maize",6,12));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:food/tomato",6,12));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:food/onion",6,12));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/tomato",4,8));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/onion",4,8));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/maize",4,8));

    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/peach_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/plum_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/peach",6,12));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/plum",6,12));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/garlic",6,12));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/garlic",4,8));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/jute",4,8));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/cabbage",4,8));

    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,4)], TradeItem.of("tfc:plant/lemon_sapling",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,4)], TradeItem.of("tfc:plant/orange_sapling",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,4)], TradeItem.of("tfc:plant/banana_sapling",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("tfc:food/banana",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("tfc:food/orange",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("tfc:food/lemon",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("firmalife:plant/cocoa_sapling",4,8));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("firmalife:plant/fig_sapling",4,8));

})