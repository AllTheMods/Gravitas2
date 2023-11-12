let tfcGregTools = (/** @type {Internal.RecipesEventJS} */ event) => {
    //Mortar
    tfcRockKnapping.forEach((rock) => {
        event.custom({
            type: 'tfc:knapping',
            knapping_type: 'tfc:rock',
            outside_slot_required: false,
            pattern: [
                '     ',
                'X   X',
                'XXXXX',
                ' XXX ',
                '     '
            ],
            result: {
                item: 'gregitas:stone_bowl'
            },
            ingredient: {
                tag: `tfc:${rock}_rock`
            }
        })
    })

    event.custom(
      {
        type: 'tfc:knapping',
        knapping_type: 'tfc:flint',
        outside_slot_required: false,
        pattern: [
          '   XX',
          '  XXX',
          'XXXX ',
          'XXX  ',
          'XXX  '
        ],
        result: {
          item: 'gregitas:flint_pestle'
        }
      }
    ).id('gregitas:flint_knapping/flint_pestle')

    event.shapeless('gtceu:flint_mortar', ['gregitas:stone_bowl', 'gregitas:flint_pestle'])

        gtMortars.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: metal.double
                },
                result: {
                  item: `gregitas:${metal.id}_pestle`,
                  count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last',
                    'draw_second_last', 
                    'shrink_last'
                ]
              })
        
            event.shapeless(`gtceu:${metal.id}_mortar`, ['gregitas:stone_bowl', `gregitas:${metal.id}_pestle`]).id(`gregitas:shapeless/${metal.id}_mortar`)
        }) 
    
    //File
        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: metal.double
                },
                result: {
                    item: `gregitas:${metal.id}_file_head`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last', 
                    'draw_second_last', 
                    'shrink_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_file`, ['F', 'H'], {F: `gregitas:${metal.id}_file_head`, H: 'gregitas:small_tool_handle'}).id(`gregitas:shaped/${metal.id}_file`)
        })
    //Screwdriver
        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:welding',
                first_input: { 
                    item: `gtceu:${metal.id}_rod` 
                },
                second_input: { 
                    item: `gtceu:${metal.id}_rod` 
                },
                    tier: metal.tier,
                result: { 
                    item: `gtceu:${metal.id}_long_rod`  
                }
            })
    
            event.custom({
                type: "tfc:anvil",
                input: { 
                    item: `gtceu:${metal.id}_long_rod` 
                },
                result: {
                    item: `gtceu:${metal.id}_screwdriver_tip`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'draw_third_last',
                    'draw_second_last', 
                    'shrink_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_screwdriver`, ['S', 'H'], {S: `gtceu:${metal.id}_screwdriver_tip`, H: 'gregitas:small_tool_handle'}).id(`gregitas:shaped/${metal.id}_screwdriver`)
        })
        
    //Hammer
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_hammer_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'punch_last',
                        'shrink_not_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_hammer`, ['RH'], {H: `gregitas:${metal.id}_hammer_head`, R: 'gtceu:wood_long_rod'}).id(`gregitas:shaped/${metal.id}_hammer`)
        })

    //Saw
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_saw_blade`
                    },
                    tier: metal.tier,
                    rules: [
                        'hit_last',
                        'hit_second_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_saw`, ['HR'], {H: `gregitas:${metal.id}_saw_blade`, R: 'gtceu:wood_long_rod'}).id(`gregitas:shaped/${metal.id}_saw`)
        })

    //Wire Cutters
        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: metal.double
                },
                result: {
                    item: `gregitas:${metal.id}_cutter_blade`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last', 
                    'draw_second_last', 
                    'bend_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_wire_cutter`, ['SB', 'Bs'], {S: `gtceu:${metal.id}_screw`, B: `gregitas:${metal.id}_cutter_blade`, s: '#forge:tools/screwdrivers'}).id(`gregitas:shaped/${metal.id}_wire_cutter`)
        })

    //Soft Mallet
        event.custom(
            {
                type: 'tfc:knapping',
                knapping_type: 'tfc:rubber',
                outside_slot_required: false,
                pattern: [
                    ' XX  ',
                    'XXXX ',
                    'XXXXX',
                    ' XXXX',
                    '  XX '
                ],
                result: {
                    item: 'gregitas:rubber_mallet_head'
                },
                ingredient: {
                    item: 'gtceu:rubber_plate'
                }
            }
        )

        event.custom(
            {
                type: 'tfc:knapping',
                knapping_type: 'tfc:rubber',
                outside_slot_required: false,
                pattern: [
                    ' XX  ',
                    'XXXX ',
                    'XXXXX',
                    ' XXXX',
                    '  XX '
                ],
                result: {
                    item: 'gregitas:polyethylene_mallet_head'
                },
                ingredient: {
                    item: 'gtceu:polyethylene_plate'
                }
            }
        )

        event.custom(
            {
                type: 'tfc:knapping',
                knapping_type: 'tfc:rubber',
                outside_slot_required: false,
                pattern: [
                    ' XX  ',
                    'XXXX ',
                    'XXXXX',
                    ' XXXX',
                    '  XX '
                ],
                result: {
                    item: 'gregitas:polytetrafluoroethylene_mallet_head'
                },
                ingredient: {
                    item: 'gtceu:polytetrafluoroethylene_plate'
                }
            }
        )

        event.custom(
            {
                type: 'tfc:knapping',
                knapping_type: 'tfc:rubber',
                outside_slot_required: false,
                pattern: [
                    ' XX  ',
                    'XXXX ',
                    'XXXXX',
                    ' XXXX',
                    '  XX '
                ],
                result: {
                    item: 'gregitas:polybenzimidazole_mallet_head'
                },
                ingredient: {
                    item: 'gtceu:polybenzimidazole_plate'
                }
            }
        ) 

        event.shapeless('gtceu:rubber_mallet', ['gtceu:wood_long_rod', 'gregitas:rubber_mallet_head'])
        event.shapeless('gtceu:polyethylene_mallet', ['gtceu:wood_long_rod', 'gregitas:polyethylene_mallet_head'])
        event.shapeless('gtceu:polytetrafluoroethylene_mallet', ['gtceu:wood_long_rod', 'gregitas:polytetrafluoroethylene_mallet_head'])
        event.shapeless('gtceu:polybenzimidazole_mallet', ['gtceu:wood_long_rod', 'gregitas:polybenzimidazole_mallet_head'])

    //Plunger
        event.custom(
            {
                type: 'tfc:knapping',
                knapping_type: 'tfc:rubber',
                outside_slot_required: false,
                pattern: [
                    ' X   ',
                    'XXX  ',
                    'XXXX ',
                    'XXXXX',
                    ' XXX '
                ],
                result: {
                    item: 'gregitas:plunger_head'
                },
                ingredient: {
                    item: 'gtceu:rubber_plate'
                }
            }
        ).id('gregitas:rubber_knapping/plunger_head')

        gtceuToolsTFC.forEach((metal) => {
            event.shapeless(`gtceu:${metal.id}_plunger`, ['gregitas:plunger_head', `gtceu:${metal.id}_long_rod`]).id(`gregitas:shapeless/${metal.id}_plunger`)
        })

    //Wrench
        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: `gtceu:${metal.id}_double_plate`
                },
                result: {
                    item: `gregitas:${metal.id}_wrench_base`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last', 
                    'shrink_second_last', 
                    'bend_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_wrench`, ['Ls', 'SB'], {L: `gregitas:${metal.id}_wrench_claw`, B: `gregitas:${metal.id}_wrench_base`, S: `gtceu:${metal.id}_screw`, s: '#forge:tools/screwdrivers'})
        })

    //Crowbar

        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: metal.double
                },
                result: {
                    item: `gregitas:${metal.id}_crowbar_base`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last', 
                    'draw_second_last', 
                    'bend_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_crowbar`, ['CW', 'WD'], {C: `gregitas:${metal.id}_crowbar_base`, W: '#tfc:high_quality_cloth', D: '#forge:dyes/blue'})
        })

    //Knife
        
        gtceuToolsTFC.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_knife_blade`
                    },
                    tier: metal.tier,
                    rules: [
                        'hit_last',
                        'draw_second_last',
                        'draw_third_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_knife`, [' B', 'H '], {B: `gregitas:${metal.id}_knife_blade`, H: 'gregitas:small_tool_handle'}).id(`gregitas:shaped/${metal.id}_knife`)
        })

    //Sword
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:double_ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_sword_blade`
                    },
                    tier: metal.tier,
                    rules: [
                        'hit_last',
                        'bend_second_last',
                        'bend_third_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_sword`, [' H', 'R '], {H: `gregitas:${metal.id}_sword_blade`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_sword`)
        })

    //Pickaxe
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_pickaxe_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'punch_last',
                        'bend_not_last',
                        'draw_not_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_pickaxe`, [' H', 'R '], {H: `gregitas:${metal.id}_pickaxe_head`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_pickaxe`)
        })

    //Axe
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_axe_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'punch_last',
                        'hit_second_last',
                        'upset_third_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_axe`, [' H', 'R '], {H: `gregitas:${metal.id}_axe_head`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_axe`)
        })

    //Shovel
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_shovel_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'punch_last',
                        'hit_not_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_shovel`, [' H', 'R '], {H: `gregitas:${metal.id}_shovel_head`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_shovel`)
        })

    //Hoe
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_hoe_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'punch_last',
                        'hit_not_last',
                        'bend_not_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_hoe`, [' H', 'R '], {H: `gregitas:${metal.id}_hoe_head`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_hoe`)
        })

    //Scythe
        gtceuToolsGT.forEach((metal) => {
            event.custom(
                {
                    type: 'tfc:anvil',
                    input: {
                        tag: `forge:ingots/${metal.id}`
                    },
                    result: {
                        item: `gregitas:${metal.id}_scythe_head`
                    },
                    tier: metal.tier,
                    rules: [
                        'bend_third_last',
                        'draw_second_last',
                        'bend_third_last'
                    ]
                }
            )

            event.shaped(`gtceu:${metal.id}_scythe`, [' H', 'R '], {H: `gregitas:${metal.id}_scythe_head`, R: '#forge:rods/wood'}).id(`gregitas:shpaed/${metal.id}_scythe`)
        })

    //Buchery Knife
        gtceuToolsTFC.forEach((metal) => {
            event.custom({
                type: 'tfc:anvil',
                input: { 
                    item: `gtceu:${metal.id}_double_plate`
                },
                result: {
                    item: `gregitas:${metal.id}_butchery_blade`,
                    count: 1
                },
                tier: metal.tier,
                rules: [
                    'hit_third_last', 
                    'draw_second_last', 
                    'shrink_last'
                ]
            })

            event.shaped(`gtceu:${metal.id}_butchery_knife`, [' B', 'H '], {B: `gregitas:${metal.id}_butchery_blade`, H: 'gregitas:small_tool_handle'}).id(`gregitas:shaped/${metal.id}_butchery_knife`)
        })

    //Removal & Misc

    event.shaped('gregitas:small_tool_handle', ['Ls'], {L: '#tfc:lumber', s: '#forge:tools/saws'}).id('gregitas:shaped/small_tool_handle')

    event.shaped('2x gtceu:wood_long_rod', ['s', 'L'], {L: '#tfc:lumber', s: '#forge:tools/saws'}).id('gregitas:shaped/wood_long_rod')

    GTRegistries.MATERIALS.forEach(id => {
        event.remove(`gtceu:shaped/file_${id}`)
        event.remove(`gtceu:shaped/wrench_${id}`)
        event.remove(`gtceu:shaped/saw_${id}`)
        event.remove(`gtceu:shaped/plunger_${id}`)
        event.remove(`gtceu:shaped/hammer_${id}`)
        event.remove(`gtceu:shaped/knife_${id}`)
        event.remove(`gtceu:shaped/screwdriver_${id}`)
        event.remove(`gtceu:shaped/crowbar_${id}`)
        event.remove(`gtceu:shaped/mortar_${id}`)
        event.remove(`gtceu:shaped/soft_mallet_${id}`)
        event.remove(`gtceu:shaped/wire_cutter_${id}`)
        event.remove(`gtceu:shaped/sword_${id}`)
        event.remove(`gtceu:shaped/pickaxe_${id}`)
        event.remove(`gtceu:shaped/axe_${id}`)
        event.remove(`gtceu:shaped/shovel_${id}`)
        event.remove(`gtceu:shaped/hoe_${id}`)
        event.remove(`gtceu:shaped/scythe_${id}`)
        event.remove(`gtceu:shaped/butchery_knife_${id}`)
        event.remove(`gtceu:shaped/plate_${id}`)
        event.remove(`gtceu:shaped/plate_double_${id}`)
        event.remove(`gtceu:shaped/stick_${id}`)
        event.remove(`gtceu:shaped/stick_long_${id}`)
        event.remove(`gtceu:shaped/stick_long_stick_${id}`)
    })
}