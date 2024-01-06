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
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/tomato",6,8));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/onion",6,8));
    event.addTrade("minecraft:farmer",3, [TradeItem.of("tfc:gem/amethyst",1,3),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:seeds/maize",6,8));

    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/peach_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/plum_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/banana_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/amethyst",1,4),TradeItem.of("tfc:gem/ruby",1,3)], TradeItem.of("tfc:plant/orange_sapling",1,2));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/peach",12,16));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/plum",12,16));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:food/garlic",12,16));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/garlic",8,12));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/jute",8,12));
    event.addTrade("minecraft:farmer",4, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,3)], TradeItem.of("tfc:seeds/cabbage",8,12));

    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,4)], TradeItem.of("firmalife:plant/cilantro",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/ruby",1,4),TradeItem.of("tfc:gem/sapphire",1,4)], TradeItem.of("firmalife:plant/basil",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("firmalife:plant/oregano",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("firmalife:plant/pimento",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/sapphire",1,4),TradeItem.of("tfc:gem/opal",1,4)], TradeItem.of("firmalife:plant/cumin",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/opal",1,4),TradeItem.of("tfc:gem/emerald",1,4)], TradeItem.of("firmalife:food/tofu",6,12));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/emerald",1,4),TradeItem.of("tfc:gem/diamond",1,4)], TradeItem.of("firmalife:plant/cocoa_sapling",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/emerald",1,4),TradeItem.of("tfc:gem/diamond",1,4)], TradeItem.of("firmalife:plant/fig_sapling",1,2));
    event.addTrade("minecraft:farmer",5, [TradeItem.of("tfc:gem/emerald",1,4),TradeItem.of("tfc:gem/diamond",1,4)], TradeItem.of("firmalife:plant/pineapple_bush",1,2));

    /* Fisherman */

    event.addTrade("minecraft:fisherman",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:food/shellfish",2,4));
    event.addTrade("minecraft:fisherman",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:food/calamari",2,4));
    event.addTrade("minecraft:fisherman",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:seeds/oat",4,8));
    event.addTrade("minecraft:fisherman",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:seeds/rye",4,8));
    event.addTrade("minecraft:fisherman",1, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/rice",4,8));

    event.addTrade("minecraft:fisherman",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/cod",3,6));
    event.addTrade("minecraft:fisherman",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/tropical_fish",3,6));
    event.addTrade("minecraft:fisherman",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/pumpkin",4,8));
    event.addTrade("minecraft:fisherman",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/melon",4,8));

    event.addTrade("minecraft:fisherman",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/lake_trout",4,7));
    event.addTrade("minecraft:fisherman",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/rainbow_trout",4,7));
    event.addTrade("minecraft:fisherman",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/barley",12,16));
    event.addTrade("minecraft:fisherman",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/soybean",12,16));
    event.addTrade("minecraft:fisherman",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:seeds/squash",12,16));

    event.addTrade("minecraft:fisherman",4, [TradeItem.of("tfc:gem/lapis_lazuli",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/lake_trout",6,9));
    event.addTrade("minecraft:fisherman",4, [TradeItem.of("tfc:gem/lapis_lazuli",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/rainbow_trout",6,9));
    event.addTrade("minecraft:fisherman",4, [TradeItem.of("tfc:gem/opal",1,3),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/barley",16,20));
    event.addTrade("minecraft:fisherman",4, [TradeItem.of("tfc:gem/opal",1,3),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/soybean",16,20));
    event.addTrade("minecraft:fisherman",4, [TradeItem.of("tfc:gem/opal",1,3),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/squash",16,20));

    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/cod",8,12));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/salmon",8,12));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/cod",8,12));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/salmon",8,12));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/barley",16,20));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/soybean",16,20));
    event.addTrade("minecraft:fisherman",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:seeds/squash",16,20));


    /* Toolsmith */

    event.addTrade("minecraft:toolsmith",1, [TradeItem.of("tfc:gem/lapis_lazuli",4,6),TradeItem.of("gtceu:copper_plate",1,1)], TradeItem.of("tfc:metal/fish_hook/copper",1,1));
    event.addTrade("minecraft:toolsmith",1, [TradeItem.of("tfc:gem/lapis_lazuli",4,6),TradeItem.of("tfc:metal/ingot/copper",1,1)], TradeItem.of("tfc:metal/propick_head/copper",1,1));
    event.addTrade("minecraft:toolsmith",1, [TradeItem.of("tfc:gem/lapis_lazuli",4,6),TradeItem.of("tfc:metal/ingot/copper",1,1)], TradeItem.of("tfc:metal/hoe_head/copper",1,1));

    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/amethyst",2,4),TradeItem.of("gtceu:bronze_plate",1,1)], TradeItem.of("tfc:metal/fish_hook/bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/amethyst",2,4),TradeItem.of("gtceu:bismuth_bronze_plate",1,1)], TradeItem.of("tfc:metal/fish_hook/bismuth_bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/amethyst",2,4),TradeItem.of("gtceu:black_bronze_plate",1,1)], TradeItem.of("tfc:metal/fish_hook/black_bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",4,5),TradeItem.of("tfc:metal/ingot/bronze",1,1)], TradeItem.of("tfc:metal/propick_head/bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",4,5),TradeItem.of("tfc:metal/ingot/bismuth_bronze",1,1)], TradeItem.of("tfc:metal/propick_head/bismuth_bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",3,4),TradeItem.of("tfc:metal/ingot/black_bronze",1,1)], TradeItem.of("tfc:metal/propick_head/black_bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",4,5),TradeItem.of("tfc:metal/ingot/bronze",1,1)], TradeItem.of("tfc:metal/hoe_head/bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",4,5),TradeItem.of("tfc:metal/ingot/bismuth_bronze",1,1)], TradeItem.of("tfc:metal/hoe_head/bismuth_bronze",1,1));
    event.addTrade("minecraft:toolsmith",2, [TradeItem.of("tfc:gem/ruby",3,4),TradeItem.of("tfc:metal/ingot/black_bronze",1,1)], TradeItem.of("tfc:metal/hoe_head/black_bronze",1,1));

    event.addTrade("minecraft:toolsmith",3, [TradeItem.of("tfc:gem/sapphire",2,6),TradeItem.of("gtceu:wrought_iron_plate",1,1)], TradeItem.of("tfc:metal/fish_hook/wrought_iron",1,1));
    event.addTrade("minecraft:toolsmith",3, [TradeItem.of("tfc:gem/sapphire",2,6),TradeItem.of("tfc:metal/ingot/wrought_iron",1,1)], TradeItem.of("tfc:metal/propick_head/wrought_iron",1,1));
    event.addTrade("minecraft:toolsmith",3, [TradeItem.of("tfc:gem/sapphire",2,6),TradeItem.of("tfc:metal/ingot/wrought_iron",1,1)], TradeItem.of("tfc:metal/hoe_head/wrought_iron",1,1));

    event.addTrade("minecraft:toolsmith",4, [TradeItem.of("tfc:gem/opal",2,6),TradeItem.of("tfc:metal/ingot/steel",2,2)], TradeItem.of("tfc:metal/fish_hook/steel",1,1));
    event.addTrade("minecraft:toolsmith",4, [TradeItem.of("tfc:gem/opal",2,6),TradeItem.of("tfc:metal/ingot/black_steel",2,2)], TradeItem.of("tfc:metal/fish_hook/black_steel",1,1));

    event.addTrade("minecraft:toolsmith",5, [TradeItem.of("tfc:gem/emerald",2,6),TradeItem.of("tfc:metal/ingot/blue_steel",2,2)], TradeItem.of("tfc:metal/fish_hook/blue_steel",1,1));
    event.addTrade("minecraft:toolsmith",5, [TradeItem.of("tfc:gem/emerald",2,6),TradeItem.of("tfc:metal/ingot/red_steel",2,2)], TradeItem.of("tfc:metal/fish_hook/red_steel",1,1));


    /* Butcher */
    event.addTrade("minecraft:butcher",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:food/pork",2,4));
    event.addTrade("minecraft:butcher",1, [TradeItem.of("tfc:gem/pyrite",1,2),TradeItem.of("tfc:gem/topaz",1,2)], TradeItem.of("tfc:food/chicken",2,4));
    event.addTrade("minecraft:butcher",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:food/rabbit",2,4));
    event.addTrade("minecraft:butcher",1, [TradeItem.of("tfc:gem/topaz",1,2), TradeItem.of("tfc:gem/lapis_lazuli",1,2)], TradeItem.of("tfc:food/wolf",2,4));
    event.addTrade("minecraft:butcher",1, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/quail",2,4));

    event.addTrade("minecraft:butcher",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("firmalife:food/bacon",3,6));
    event.addTrade("minecraft:butcher",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/gran_feline",3,6));
    event.addTrade("minecraft:butcher",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/chevon",4,8));
    event.addTrade("minecraft:butcher",2, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/camelidae",4,8));

    event.addTrade("minecraft:butcher",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/venison",4,7));
    event.addTrade("minecraft:butcher",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/turtle",4,7));
    event.addTrade("minecraft:butcher",3, [TradeItem.of("tfc:gem/ruby",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/duck",2,6));
    event.addTrade("minecraft:butcher",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/mutton",2,6));
    event.addTrade("minecraft:butcher",3, [TradeItem.of("tfc:gem/lapis_lazuli",1,3),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/bear",2,6));

    event.addTrade("minecraft:butcher",4, [TradeItem.of("tfc:gem/lapis_lazuli",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/horse_meat",6,9));
    event.addTrade("minecraft:butcher",4, [TradeItem.of("tfc:gem/lapis_lazuli",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/turkey",6,9));
    event.addTrade("minecraft:butcher",4, [TradeItem.of("tfc:gem/opal",1,3),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:food/pheasant",5,10));
    event.addTrade("minecraft:butcher",4, [TradeItem.of("tfc:gem/opal",1,3),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:food/peafowl",6,10));

    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/beef",8,12));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/chicken",8,12));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/venison",8,12));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/sapphire",2,4),TradeItem.of("tfc:gem/amethyst",1,2)], TradeItem.of("tfc:food/cooked_horse_meat",8,12));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:food/cooked_pheasant",6,20));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:food/cooked_beef",6,20));
    event.addTrade("minecraft:butcher",5, [TradeItem.of("tfc:gem/opal",1,1),TradeItem.of("tfc:gem/sapphire",1,2)], TradeItem.of("tfc:food/cooked_turkey",6,20));

    /* Leatherworker */

    event.addTrade("minecraft:leatherworker",1, [TradeItem.of("tfc:gem/lapis_lazuli",4,6)], TradeItem.of("waterflasks:leather_flask",1,1));
    event.addTrade("minecraft:leatherworker",1, [TradeItem.of("tfc:gem/lapis_lazuli",4,6)], TradeItem.of("minecraft:leather",2,4));
    event.addTrade("minecraft:leatherworker",1, [TradeItem.of("tfc:small_raw_hide",4,5)], TradeItem.of("tfc:gem/ruby",1,2));

    event.addTrade("minecraft:leatherworker",2, [TradeItem.of("tfc:gem/amethyst",2,4)], TradeItem.of("minecraft:leather_helmet",1,1));
    event.addTrade("minecraft:leatherworker",2, [TradeItem.of("tfc:small_raw_hide",4,5)], TradeItem.of("tfc:gem/ruby",1,1));
    event.addTrade("minecraft:leatherworker",2, [TradeItem.of("tfc:gem/ruby",3,4)], TradeItem.of("tfcambiental:leather_apron",1,1));

    event.addTrade("minecraft:leatherworker",3, [TradeItem.of("tfc:gem/sapphire",2,6)], TradeItem.of("minecraft:leather_chestplate",1,1));
    event.addTrade("minecraft:leatherworker",3, [TradeItem.of("tfc:gem/sapphire",2,6)], TradeItem.of("minecraft:leather_leggings",1,1));
    event.addTrade("minecraft:leatherworker",3, [TradeItem.of("tfc:gem/sapphire",2,6)], TradeItem.of("minecraft:leather_boots",1,1));
    event.addTrade("minecraft:leatherworker",2, [TradeItem.of("tfc:medium_raw_hide",2,4)], TradeItem.of("tfc:gem/opal",2,4));

    event.addTrade("minecraft:leatherworker",4, [TradeItem.of("tfc:gem/opal",2,6)], TradeItem.of("tfcambiental:insulated_leather_hat",1,1));
    event.addTrade("minecraft:leatherworker",4, [TradeItem.of("tfc:gem/opal",2,6)], TradeItem.of("tfcambiental:insulated_leather_boots",1,1));
    event.addTrade("minecraft:leatherworker",4, [TradeItem.of("tfc:large_raw_hide",1,3)], TradeItem.of("tfc:gem/emerald",1,1));

    event.addTrade("minecraft:leatherworker",5, [TradeItem.of("tfc:gem/emerald",2,6)], TradeItem.of("tfcambiental:insulated_leather_tunic",1,1));
    event.addTrade("minecraft:leatherworker",5, [TradeItem.of("tfc:gem/emerald",2,6)], TradeItem.of("tfcambiental:insulated_leather_pants",1,1));
    event.addTrade("minecraft:leatherworker",5, [TradeItem.of("minecraft:leather",5,10)], TradeItem.of("tfc:gem/emerald",1,3));

})