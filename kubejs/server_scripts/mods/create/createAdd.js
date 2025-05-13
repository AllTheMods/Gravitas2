let createAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    event.shapeless('gregitas_core:igneous_dust', ['#forge:tools/mortars', '#tfc:igneous_extrusive_rock'])
    event.shaped('gregitas_core:igneous_alloy_dust', ['IZ', 'ZI'], {I: 'gregitas_core:igneous_dust', Z: 'gtceu:small_zinc_dust'})
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    nbt: {},
                    amount: 1000
                },
                {
                    item: 'tfc:olive_paste'
                },
                {
                    item: 'tfc:olive_paste'
                },
                {
                    item: 'tfc:olive_paste'
                },
                {
                    item: 'tfc:olive_paste'
                },
                {
                    item: 'tfc:olive_paste'
                },
            ],
            results: [
                {
                    fluid: 'tfc:olive_oil_water',
                    nbt: {},
                    amount: 1000
                },
            ],
            heatRequirement: "heated",
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'tfc:olive_oil_water',
                    nbt: {},
                    amount: 250
                },
                {
                    item: 'tfc:jute_net'
                },
            ],
            results: [
                {
                    fluid: 'tfc:olive_oil',
                    nbt: {},
                    amount: 50
                },
                {
                    item: 'tfc:dirty_jute_net'
                },
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'tfc:olive_oil',
                    nbt: {},
                    amount: 1000
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    tag: 'tfc:foods/dough'}
                },
                {
                    tag: 'forge:dusts/salt'
                },
                {
                    item: 'firmalife:spice/basil_leaves'
                },
            ],
            results: [
                {
                    item: 'firmalife:food/pizza_dough',
                    count: 4
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'firmalife:cream',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {
                    item: 'firmalife:ice_shavings'
                },
                {
                    item: 'firmalife:spice/vanilla'
                },
            ],
            results: [
                {
                    item: 'firmalife:food/vanilla_ice_cream',
                    count: 2
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    tag: 'firmalife:feeds_yeast'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'minecraft:egg'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'tfc:food/pumpkin_chunks'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'tfc:food/pumpkin_chunks'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/pumpkin_pie_dough',
                    count: 1
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'firmalife:cream',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'forge:dusts/salt'
                },
            ],
            results: [
                {
                    item: 'firmalife:food/butter',
                    count: 1
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'minecraft:egg'}
                },
                {
                    item: 'firmalife:spice/vanilla'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/butter'}
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    tag: 'firmalife:feeds_yeast'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/cookie_dough',
                    count: 4
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    nbt: {},
                    amount: 1000
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    tag: 'firmalife:feeds_yeast'}
                },
                {
                    tag: 'forge:dusts/salt'
                },
            ],
            results: [
                {
                    item: 'firmalife:food/hardtack_dough',
                    count: 4
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'firmalife:chocolate',
                    nbt: {},
                    amount: 1000
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/vanilla_ice_cream'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/chocolate_ice_cream',
                    count: 1
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluidTag: 'tfc:milks',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_butter'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_butter'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/white_chocolate_blend',
                    count: 2
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluidTag: 'tfc:milks',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_powder'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_powder'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/dark_chocolate_blend',
                    count: 2
                }
            ],
        }
    )

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluidTag: 'tfc:milks',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_butter'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/cocoa_powder'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/milk_chocolate_blend',
                    count: 2
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/vanilla_ice_cream'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'tfc:food/strawberry'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'tfc:food/strawberry'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/strawberry_ice_cream',
                    count: 1
                }
            ],
        }
    )

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'tfc:salt_water',
                    nbt: {},
                    amount: 1000
                },
            ],
            results: [
                {
                    item: 'gtceu:salt_dust',
                    count: 1
                }
            ],
            heatRequirement: "heated"
        }
    )

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    fluid: 'minecraft:water',
                    nbt: {},
                    amount: 1000
                },
                {
                    tag: 'firmalife:sweetener'
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    tag: 'firmalife:feeds_yeast'}
                },
                {"type": "tfc:not_rotten",
                "ingredient": {
                    item: 'firmalife:food/butter'}
                },
            ],
            results: [
                {
                    item: 'firmalife:food/pie_dough',
                    count: 1
                }
            ],
        }
    )

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                      "tag": "firmalife:foods/chocolate"
                    }
                  },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                      "item": "firmalife:food/cookie_dough"
                    }
                  },
                  {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                      "item": "firmalife:food/cookie_dough"
                    }
                  },
                  {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                      "item": "firmalife:food/cookie_dough"
                    }
                  },
                  {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                      "item": "firmalife:food/cookie_dough"
                    }
                  },
            ],
            results: [
                {
                    item: 'firmalife:food/chocolate_chip_cookie_dough',
                    count: 4
                }
            ],
        }
    )
    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                tag: 'firmalife:sweetener'
            },
            {
                "type": "tfc:not_rotten",
                "ingredient": {
                  "tag": "firmalife:foods/chocolate"
                }
              },
            {
                fluidTag: 'tfc:milks',
                nbt: {},
                amount: 1000
            }
        ],
        results: [
            {
                fluid: 'firmalife:chocolate',
                nbt: {},
                amount: 1000
            }
        ],
        heatRequirement: "heated"
        }
    )
    event.custom(
        {
            type: 'tfc:casting',
            mold: {
                item: 'tfc:ceramic/ingot_mold'
            },
            fluid: {
                ingredient: 'gregitas_core:igneous_alloy',
                amount: 144.0
            },
            result: {
                item: 'create:andesite_alloy'
            },
            break_chance: 0.1
        }
    )
    event.custom(
        {
            type: 'tfc:casting',
            mold: {
                item: 'tfc:ceramic/fire_ingot_mold'
            },
            fluid: {
                ingredient: 'gregitas_core:igneous_alloy',
                amount: 144.0
            },
            result: {
                item: 'create:andesite_alloy'
            },
            break_chance: 0.01
        }
    )
    event.custom(
        {
            type: 'tfc:heating',
            ingredient: {
                tag: 'forge:dusts/igneous_alloy'
            },
            result_fluid: {
                fluid: 'gregitas_core:igneous_alloy',
                amount: 144.0
            },
            temperature: 420
        }
    )

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    item: 'gregitas_core:igneous_dust'
                },
                {
                    item: 'gregitas_core:igneous_dust'
                },
                {
                    item: 'gregitas_core:igneous_dust'
                },
                {
                    item: 'gregitas_core:igneous_dust'
                },
                {
                    item: 'gtceu:zinc_dust'
                }
            ],
            results: [
                {
                    fluid: 'gregitas_core:igneous_alloy',
                    nbt: {},
                    amount: 288
                }
            ],
            heatRequirement: "heated"
        }
    )

    event.recipes.woodencog.filling(["tfc:ceramic/ingot_mold"], ['tfc:ceramic/ingot_mold', Fluid.of("gregitas_core:igneous_alloy", 144)]).id("woodencog:advanced_filling/igneous_alloy_to_mold")
    event.recipes.woodencog.filling(["tfc:ceramic/fire_ingot_mold"], ['tfc:ceramic/fire_ingot_mold', Fluid.of("gregitas_core:igneous_alloy", 144)]).id("woodencog:advanced_filling/igneous_alloy_to_fire_mold")

    tfcCobbleToSand.forEach((type) => {
            event.recipes.create.crushing([
                `tfc:sand/${type.sand}`,
                Item.of('minecraft:flint').withChance(0.1),
                Item.of('minecraft:clay_ball').withChance(0.05)
                ],
                `tfc:rock/gravel/${type.stone}` , 250)

            event.recipes.create.milling(`tfc:rock/gravel/${type.stone}`, `tfc:rock/cobble/${type.stone}`, 250)
    })

    tfcCobbleToSand.forEach((type) => {
        event.recipes.create.crushing([
            `tfc:rock/gravel/${type.stone}`,
            Item.of('gtceu:plant_ball').withChance(0.2),
            ],
            `tfc:rock/mossy_cobble/${type.stone}` , 250)
    });

    tfcSandColors.forEach((color) => {
        event.recipes.create.crushing([
            `tfc:sand/${color}`
            ],
            `tfc:raw_sandstone/${color}`)
        event.recipes.vintageimprovements.polishing(
            `tfc:smooth_sandstone/${color}`,
            `tfc:raw_sandstone/${color}`,
            40
            )
            .id(`gregitas:polishing/sandstone/${color}`)
    });

    event.recipes.create.splashing(Item.of('minecraft:clay_ball').withChance(0.25), '#forge:sand', 250)

    event.recipes.create.milling('gregitas_core:igneous_dust', '#tfc:igneous_extrusive_rock', 250)

    event.recipes.create.milling('gtceu:zinc_dust', 'gtceu:zinc_ingot', 250)

    event.recipes.create.mixing(['gtceu:sticky_resin', Item.of('gtceu:sticky_resin').withChance(0.25)], ['#forge:small_dusts/sulfur', Fluid.of('gregitas:raw_resin', 1000)], 250, 'heated')

    let addMoldChiselDeploying = (resultItem, moldItem, breakChance, fluidIngredientId, fluidAmount) => {
        let resultMold = (breakChance != 1) ? Item.of(moldItem).withChance(1 - breakChance) : 0;
        if (resultItem == null || resultItem == Item.empty) return;
        event.recipes.create.deploying(
            [
                resultItem,
                resultMold,
            ],
            [
                {
                    type: "tfc:heatable",
                    ingredient: {
                        type: "forge:partial_nbt",
                        item: Item.of(moldItem).getId(),
                        nbt: {
                            tank: {
                                Amount: fluidAmount, 
                                FluidName: fluidIngredientId
                            }
                        }
                    }
                },
                {
                    tag: "tfc:chisels"
                }
            ]
        )
    }
    event.forEachRecipe({ type: "tfc:casting"}, (/** @type {Special.Recipes.CastingTfc} **/ r) => {
        let fluidInput = unwrapValue(r.get("fluid"))
        let fluidIngredient = fluidInput.get("ingredient")
        let fluidAmount = fluidInput.get("amount")
        let moldType = unwrapValue(r.get("mold"))
        let moldItem = moldType.get("item").item
        let breakChance = unwrapValue(r.get("break_chance"))
        let resultItem = unwrapValue(r.get("result")).get("item")
        addMoldChiselDeploying(resultItem, moldItem, breakChance, fluidIngredient.getId(), fluidAmount)
    })

    addMoldChiselDeploying("create:andesite_alloy", "tfc:ceramic/fire_ingot_mold", 0.01, "gregitas_core:igneous_alloy", 144)
    addMoldChiselDeploying("create:andesite_alloy", "tfc:ceramic/ingot_mold", 0.1, "gregitas_core:igneous_alloy", 144)
    tfcSaplings.forEach(wood => {
        event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.1)], `tfc:wood/log/${wood}`, 150)
        event.recipes.create.cutting([`tfc:wood/stripped_log/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/log/${wood}`, 50)
        event.recipes.create.cutting([`tfc:wood/stripped_wood/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/wood/${wood}`, 50)
        event.recipes.create.cutting(`4x tfc:wood/support/${wood}`, `tfc:wood/stripped_log/${wood}`, 150)
        event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/wood/${wood}`, 150)
        event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/stripped_wood/${wood}`, 150)
    })
    event.recipes.create.cutting(["2x immersiveengineering:slab_treated_wood_horizontal"], "gtceu:treated_wood_planks", 150)

    // Paper making with Create, same recipes as in Gregtech chemical reactor
    event.recipes.create.compacting('minecraft:paper', ['#forge:dusts/wood', Fluid.of('water', 100)])
    event.recipes.create.compacting('minecraft:paper', ['#forge:dusts/paper', Fluid.of('water', 100)])
    event.recipes.create.compacting('minecraft:paper', ['#forge:dusts/wood', Fluid.of('gtceu:distilled_water', 100)])
    event.recipes.create.compacting('minecraft:paper', ['#forge:dusts/paper', Fluid.of('gtceu:distilled_water', 100)])

    // Fire clay knapping automation
    // Player will need to use recipe filter
    event.recipes.create.compacting('tfc:ceramic/unfired_crucible', '5x tfc:fire_clay')
    event.recipes.create.compacting('tfcchannelcasting:unfired_mold_table', '5x tfc:fire_clay')
    event.recipes.create.compacting('4x tfcchannelcasting:unfired_channel', '5x tfc:fire_clay')
    event.recipes.create.compacting('2x tfc:ceramic/unfired_fire_ingot_mold', '5x tfc:fire_clay')

    // TFC metallurgy
    event.recipes.create.sequenced_assembly('tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/pig_iron', 
        event.recipes.create.pressing('tfc:metal/ingot/pig_iron', 'tfc:metal/ingot/pig_iron')
    ).transitionalItem('tfc:metal/ingot/pig_iron').loops(3)

    event.recipes.create.sequenced_assembly('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel', 
        event.recipes.create.pressing('tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/high_carbon_steel')
    ).transitionalItem('tfc:metal/ingot/high_carbon_steel').loops(3)

    event.recipes.create.sequenced_assembly('gtceu:black_steel_ingot', 'tfc:metal/ingot/high_carbon_black_steel', 
        event.recipes.create.pressing('tfc:metal/ingot/high_carbon_black_steel', 'tfc:metal/ingot/high_carbon_black_steel')
    ).transitionalItem('tfc:metal/ingot/high_carbon_black_steel').loops(3)

    event.recipes.create.sequenced_assembly('gtceu:blue_steel_ingot', 'tfc:metal/ingot/high_carbon_blue_steel', 
        event.recipes.create.pressing('tfc:metal/ingot/high_carbon_blue_steel', 'tfc:metal/ingot/high_carbon_blue_steel')
    ).transitionalItem('tfc:metal/ingot/high_carbon_blue_steel').loops(3)

    event.recipes.create.sequenced_assembly('gtceu:red_steel_ingot', 'tfc:metal/ingot/high_carbon_red_steel', 
        event.recipes.create.pressing('tfc:metal/ingot/high_carbon_red_steel', 'tfc:metal/ingot/high_carbon_red_steel')
    ).transitionalItem('tfc:metal/ingot/high_carbon_red_steel').loops(3)

    event.recipes.create.filling("gregitas:maple_glazed_roll", ["#tfc:foods/breads", Fluid.of("gregitas:maple_syrup", 250)]).id("gregitas:maple_glazed_roll")

    // Quern to create crushing (avoiding duplicates)
    let existing_crushing_recipes = new Set()
    event.forEachRecipe({ type: "create:crushing" }, r => {
        // No quern recipes with milling recipes and no crushing recipe, so fine to just check crushing
        existing_crushing_recipes.add(`${r.json.get("ingredients").get(0)}`);
    })
    event.forEachRecipe({ type: "tfc:quern" }, r => {
        let ingredient = `${r.json.get("ingredient")}`
        if(!existing_crushing_recipes.has(ingredient)){
            let new_recipe = r.json
            let ingredientValue = new_recipe.remove("ingredient")
            let resultValue = new_recipe.remove("result")
            new_recipe.add("ingredients", [ingredientValue])

            if(resultValue.has("count") && resultValue.get("count") > 1) {
                // create-style result display, rather than using item count
                let count = resultValue.remove("count")
                let resultsArray = []
                for (let i = 0; i < count; i++) {
                    resultsArray.push(resultValue)
                }
                new_recipe.add("results", resultsArray)
            } else {
                new_recipe.add("results", [resultValue])
            }

            new_recipe.add("type", "create:crushing")
            event.custom(new_recipe)

            new_recipe.add("type", "create:milling")
            event.custom(new_recipe)
        }
    })

    // GT ore washing to Create washing (no byproducts)
    event.forEachRecipe({ type: "gtceu:ore_washer" }, r => {
        let ingredient = `${r.json.get("inputs").get("item").get(0).get("content").get("ingredient").get("tag")}`
        ingredient = ingredient.substring(1, ingredient.length - 1);

        let result = `${r.json.get("outputs").get("item").get(0).get("content").get("ingredient").get("item")}`
        result = result.substring(1, result.length - 1);

        event.recipes.create.splashing([result], "#" + ingredient)
    })
}
