let createAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    event.shapeless('gtceu:igneous_dust', ['#forge:tools/mortars', '#tfc:igneous_extrusive_rock'])
    event.shaped('gtceu:igneous_alloy_dust', ['IZ', 'ZI'], {I: 'gtceu:igneous_dust', Z: 'gtceu:zinc_small_dust'})

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
}