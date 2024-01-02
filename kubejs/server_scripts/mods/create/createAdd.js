let createAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    event.shapeless('gtceu:igneous_dust', ['#forge:tools/mortars', '#tfc:igneous_extrusive_rock'])
    event.shaped('gtceu:igneous_alloy_dust', ['IZ', 'ZI'], {I: 'gtceu:igneous_dust', Z: 'gtceu:zinc_small_dust'})
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
                ingredient: 'gtceu:igneous_alloy',
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
                ingredient: 'gtceu:igneous_alloy',
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
                fluid: 'gtceu:igneous_alloy',
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
                    item: 'gtceu:igneous_dust'
                },
                {
                    item: 'gtceu:igneous_dust'
                },
                {
                    item: 'gtceu:igneous_dust'
                },
                {
                    item: 'gtceu:igneous_dust'
                },
                {
                    item: 'gtceu:zinc_dust'
                }
            ],
            results: [
                {
                    fluid: 'gtceu:igneous_alloy',
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
                {
                    item: 'tfc:ceramic/ingot_mold'
                },
                {
                    fluid: 'gtceu:igneous_alloy',
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
                            FluidName: 'gtceu:igneous_alloy'
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
                    {
                        item: 'tfc:ceramic/fire_ingot_mold'
                    },
                    {
                        fluid: 'gtceu:igneous_alloy',
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
                                FluidName: 'gtceu:igneous_alloy'
                            }
                        },
                        count: 1
                    }
                ]
            }
        )
}
