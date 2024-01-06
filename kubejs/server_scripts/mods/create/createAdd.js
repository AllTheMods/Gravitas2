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
    
        event.recipes.create.milling('gtceu:igneous_dust', '#tfc:igneous_extrusive_rock', 250)
    
        event.recipes.create.milling('gtceu:zinc_dust', 'gtceu:zinc_ingot', 250)
    
        event.recipes.create.mixing(['gtceu:sticky_resin', Item.of('gtceu:sticky_resin').withChance(0.25)], ['#forge:small_dusts/sulfur', Fluid.of('gregitas:raw_resin', 1000)], 250, 'heated')
    
        tfcSaplings.forEach(wood => {
            event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.1)], `tfc:wood/log/${wood}`, 150)
            event.recipes.create.cutting([`tfc:wood/stripped_log/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/log/${wood}`)
            event.recipes.create.cutting([`12x tfc:wood/lumber/${wood}`, Item.of('gtceu:wood_dust').withChance(0.05)], `tfc:wood/stripped_log/${wood}`, 150)
        })
}