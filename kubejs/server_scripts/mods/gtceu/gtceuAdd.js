let gtceuAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    //Rubber

    event.custom(
        {
            type: 'tfc:pot',
            ingredients: [
                {
                    tag: 'forge:dusts/sulfur'
                }
            ],
            fluid_ingredient: {
                ingredient: 'gregitas:raw_resin',
                amount: 1000
            },
            duration: 3000,
            temperature: 300,
            item_output: [
                {
                    item: 'gtceu:sticky_resin'
                }
            ]
        }
    ).id('gregitas:pot/sticky_resin')

    event.custom(
        {
            type: 'create:crushing',
            ingredients: [
                {
                    item: 'gtceu:sticky_resin'
                }
            ],
            processingTime: 250,
            results: [
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    chance: 0.5,
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    chance: 0.25,
                    item: 'gtceu:raw_rubber_dust'
                }
            ]
        }
    ).id('gregitas:crushing/raw_rubber_pulp')

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    item: 'gtceu:sulfur_small_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                },
                {
                    item: 'gtceu:raw_rubber_dust'
                }
            ],
            results: [
                {
                    fluid: 'gtceu:rubber',
                    nbt: {},
                    amount: 144
                }
            ],
            heatRequirement: "heated"
        }
    ).id('gregitas:heated_mixing/rubber')

    event.custom(
        {
            type: 'create:filling',
            ingredients: [
                {
                    item: 'tfc:ceramic/ingot_mold'
                },
                {
                    fluid: 'gtceu:rubber',
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
                            FluidName: 'gtceu:rubber'
                        }
                    },
                    count: 1
                }
            ]
        }
    ).id('gregitas:filling/mold/ingot_rubber')

    event.custom(
        {
            type: 'tfc:casting',
            mold: {
                item: 'tfc:ceramic/ingot_mold'
            },
            fluid: {
                ingredient: 'gtceu:rubber',
                amount: 144
            },
            result: {
                item: 'gtceu:rubber_ingot'
            },
            break_chance: 0.1
        }
    ).id('gregitas:casting/rubber_ingot')

    event.custom(
        {
            type: 'create:compacting',
            ingredients: [
                {
                    item: 'gtceu:rubber_ingot'
                }
            ],
            results: [
                {
                    item: 'gtceu:rubber_plate',
                    count: 1
                }
            ],
            heatRequirement: 'heated'
        }
    ).id('gregitas:heated_pressing/rubber_plate')
}