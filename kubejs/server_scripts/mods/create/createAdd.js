let createAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    event.shapeless('gregitas_core:igneous_dust', ['#forge:tools/mortars', '#tfc:igneous_extrusive_rock'])
    event.shaped('gregitas_core:igneous_alloy_dust', ['IZ', 'ZI'], {I: 'gregitas_core:igneous_dust', Z: 'gtceu:small_zinc_dust'})
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
                    item: 'tfc:powder/salt'
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
                    item: 'tfc:powder/salt'
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
                    item: 'tfc:powder/salt'
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
                    item: 'tfc:powder/salt'
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
                    item: 'tfc:powder/salt'
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
                    item: 'tfc:powder/salt'
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

    event.custom(
        {
            type: 'create:filling',
            ingredients: [
                Item.of('tfc:ceramic/ingot_mold').strongNBT(),
                {
                    fluid: 'gregitas_core:igneous_alloy',
                    nbt: {},
                    amount: 144
                }
            ],
            results: [
                {
                    item: 'tfc:ceramic/ingot_mold',
                    nbt: {
                        tank: {
                            Amount: 144,
                            FluidName: 'gregitas_core:igneous_alloy'
                        }
                    },
                    count: 1
                }
            ]
        }
    )
    event.custom(
        {
            type: 'create:filling',
            ingredients: [
                Item.of('tfc:ceramic/fire_ingot_mold').strongNBT(),
                {
                    fluid: 'gregitas_core:igneous_alloy',
                    nbt: {},
                    amount: 144
                }
            ],
            results: [
                {
                    item: 'tfc:ceramic/fire_ingot_mold',
                    nbt: {
                        tank: {
                            Amount: 144,
                            FluidName: 'gregitas_cores:igneous_alloy'
                        }
                    },
                    count: 1
                }
            ]
        }
    )

    tfcCobbleToSand.forEach((type) => {
            event.recipes.create.crushing([
                `tfc:sand/${type.sand}`,
                Item.of('minecraft:flint').withChance(0.1),
                Item.of('minecraft:clay_ball').withChance(0.05)
                ],
                `tfc:rock/gravel/${type.stone}` , 250)

            event.recipes.create.milling(`tfc:rock/gravel/${type.stone}`, `tfc:rock/cobble/${type.stone}`, 250)
    })

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


    tfcSaplings.forEach(wood => {
        event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.1)], `tfc:wood/log/${wood}`, 150)
        event.recipes.create.cutting([`tfc:wood/stripped_log/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/log/${wood}`)
        event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/stripped_log/${wood}`, 150)
    })

    
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
}
