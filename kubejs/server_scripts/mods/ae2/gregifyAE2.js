let gregifyAE2 = (/** @type {Internal.RecipesEventJS} */ event) => {
    //Formation & Annihilation Cores
        event.remove(
            [
                {
                    id: 'ae2:materials/formationcore'
                },
                {
                    id: 'ae2:materials/annihilationcore'
                }
            ]
        )

        event.recipes.gtceu.assembler('gregitas:formation_core')
            .itemInputs(
                'gtceu:certus_quartz_gem',
                'ae2:fluix_dust',
                'ae2:logic_processor'
            )
            .inputFluids(
                Fluid.of('gtceu:red_alloy',144)
            )
            .itemOutputs('2x ae2:formation_core')
            .duration(100)
            .EUt(MV)

        event.recipes.gtceu.assembler('gregitas:annihilation_core')
            .itemInputs(
                'minecraft:quartz',
                'ae2:fluix_dust',
                'ae2:logic_processor'
            )
            .inputFluids(
                Fluid.of('gtceu:red_alloy',144)
            )
            .itemOutputs(
                '2x ae2:annihilation_core'
            )
            .duration(100)
            .EUt(MV)

    //Fluix
        event.recipes.gtceu.polarizer('gregitas:charged_certus')
            .itemInputs(
                'gtceu:certus_quartz_gem'
            )
            .itemOutputs('ae2:charged_certus_quartz_crystal')
            .duration(50)
            .EUt(LV)

        event.recipes.gtceu.mixer('gregitas:fluix')
            .itemInputs(
                'ae2:charged_certus_quartz_crystal',
                'minecraft:redstone',
                'minecraft:quartz'
            )
            .inputFluids(
                Fluid.of('minecraft:water',500)
            )
            .itemOutputs(
                '2x ae2:fluix_crystal'
            )
            .duration(100)
            .EUt(LV)
    
    //Cables
        event.remove(
            [
                {
                    id: 'ae2:network/parts/quartz_fiber_part'
                },
                {
                    id: 'ae2:network/cables/glass_fluix'
                },
                {
                    id: 'ae2:network/cables/glass_fluix_clean'
                },
                {
                    id: 'ae2:network/cables/covered_fluix'
                },
                {
                    id: 'ae2:network/cables/covered_fluix_clean'
                },
                {
                    id: 'ae2:network/cables/dense_covered_fluix'
                },
                {
                    id: 'ae2:network/cables/dense_covered_fluix_clean'
                },
                {
                    id: 'ae2:network/cables/smart_fluix'
                },
                {
                    id: 'ae2:network/cables/smart_fluix_clean'
                },
                {
                    id: 'ae2:network/cables/dense_smart_fluix'
                },
                {
                    id: 'ae2:network/cables/dense_smart_fluix_clean'
                },
                {
                    id: 'ae2:network/cables/dense_smart_from_smart'
                }
            ]
        )

        //Quartz Fiber
            event.recipes.gtceu.wiremill('gregitas:certus_quartz_fiber')
                .itemInputs('gtceu:certus_quartz_gem')
                .itemOutputs('2x ae2:quartz_fiber')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.wiremill('gregitas:quartz_fiber')
                .itemInputs('minecraft:quartz')
                .itemOutputs('2x ae2:quartz_fiber')
                .duration(50)
                .EUt(LV)
        //ME Cables
            event.recipes.gtceu.assembler('gregitas:me_fluix_cable_glass')
                .itemInputs(
                    'ae2:quartz_fiber',
                    '2x ae2:fluix_crystal'
                )
                .inputFluids(
                    Fluid.of('gtceu:glass',144)
                )
                .itemOutputs('2x ae2:fluix_glass_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_fluix_cable_borosilicate_glass')
                .itemInputs(
                    'ae2:quartz_fiber',
                    '2x ae2:fluix_crystal'
                )
                .inputFluids(
                    Fluid.of('gtceu:borosilicate_glass',72)
                )
                .itemOutputs('4x ae2:fluix_glass_cable')
                .duration(100)
                .EUt(MV)

            event.recipes.gtceu.assembler('gregitas:me_fluix_cable_fiber_glass')
                .itemInputs(
                    'ae2:quartz_fiber',
                    '2x ae2:fluix_crystal'
                )
                .inputFluids(
                    Fluid.of('gtceu:fiberglass',36)
                )
                .itemOutputs(
                    '8x ae2:fluix_glass_cable'
                )
                .duration(200)
                .EUt(HV)
            
            event.recipes.gtceu.chemical_bath('gregitas:me_fluix_glass_cleaning')
                .itemInputs(
                    '#ae2:glass_cable'
                )
                .inputFluids(
                    Fluid.of('minecraft:water',250)
                )
                .itemOutputs(
                    'ae2:fluix_glass_cable'
                )
                .duration(50)
                .EUt(LV)
        //Covered Cables
            event.recipes.gtceu.assembler('gregitas:me_covered_cable_rubber')
                .itemInputs(
                    'ae2:fluix_glass_cable'
                )
                .inputFluids(
                    Fluid.of('gtceu:rubber',144)
                )
                .itemOutputs('ae2:fluix_covered_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_covered_cable_silicon')
                .itemInputs(
                    'ae2:fluix_glass_cable'
                )
                .inputFluids(
                    Fluid.of('gtceu:silicone_rubber',72)
                )
                .itemOutputs('ae2:fluix_covered_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.chemical_bath('gregitas:me_covered_fluix_cleaning')
                .itemInputs(
                    '#ae2:covered_cable'
                )
                .inputFluids(
                    Fluid.of('minecraft:water',250)
                )
                .itemOutputs('ae2:fluix_covered_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_dense_covered_fluix')
                .circuit(4)
                .itemInputs('4x ae2:fluix_covered_cable')
                .itemOutputs('ae2:fluix_covered_dense_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.chemical_bath('gregitas:me_dense_covered_fluix_cleaning')
                .itemInputs(
                    '#ae2:covered_dense_cable'
                )
                .inputFluids(
                    Fluid.of('minecraft:water',250)
                )
                .itemOutputs('ae2:fluix_covered_dense_cable')
                .duration(50)
                .EUt(LV)
        //Smart Cables
            event.recipes.gtceu.chemical_bath('gregitas:me_smart_fluix_cleaning')
                .itemInputs(
                    '#ae2:smart_cable'
                )
                .inputFluids(
                    Fluid.of('minecraft:water',250)
                )
                .itemOutputs('ae2:fluix_smart_cable')
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_smart_dense_fluix')
                .circuit(4)
                .itemInputs(
                    '4x ae2:fluix_smart_cable'
                )
                .itemOutputs(
                    'ae2:fluix_smart_dense_cable'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.chemical_bath('gregitas:me_smart_dense_fluix_cleaning')
                .itemInputs(
                    '#ae2:smart_dense_cable'
                )
                .inputFluids(
                    Fluid.of('minecraft:water',250)
                )
                .itemOutputs(
                    'ae2:fluix_smart_dense_cable'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_smart_cable')
                .itemInputs(
                    '16x ae2:fluix_covered_cable',
                    '32x gtceu:red_alloy_fine_wire'
                )
                .inputFluids(
                    Fluid.of('gtceu:glowstone',2304)
                )
                .itemOutputs(
                    '16x ae2:fluix_smart_cable'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:me_smart_dense_cable')
                .itemInputs(
                    '4x ae2:fluix_covered_dense_cable',
                    '16x gtceu:red_alloy_fine_wire'
                )
                .inputFluids(
                    Fluid.of('gtceu:glowstone',1152)
                )
                .itemOutputs(
                    '4x ae2:fluix_smart_dense_cable'
                )
                .duration(50)
                .EUt(LV)
        //Coloured Cables
            let ae2Colours = [
                'white',
                'orange',
                'magenta',
                'light_blue',
                'yellow',
                'lime',
                'pink',
                'gray',
                'light_gray',
                'cyan',
                'purple',
                'blue',
                'brown',
                'green',
                'red',
                'black'
            ]

            ae2Colours.forEach(colour => {
                    event.recipes.gtceu.chemical_bath(`gregitas:${colour}_glass_fluix`)
                        .itemInputs(
                            '8x ae2:fluix_glass_cable'
                        )
                        .inputFluids(
                            Fluid.of(`gtceu:${colour}_dye`,144)
                        )
                        .itemOutputs(
                            `8x ae2:${colour}_glass_cable`
                        )
                        .duration(100)
                        .EUt(LV)
                    
                    event.recipes.gtceu.chemical_bath(`gregitas:${colour}_covered_fluix`)
                        .itemInputs(
                            '8x ae2:fluix_covered_cable'
                        )
                        .inputFluids(
                            Fluid.of(`gtceu:${colour}_dye`,144)
                        )
                        .itemOutputs(
                            `8x ae2:${colour}_covered_cable`
                        )
                        .duration(100)
                        .EUt(LV)

                    event.recipes.gtceu.chemical_bath(`gregitas:${colour}_smart_fluix`)
                        .itemInputs(
                            '8x ae2:fluix_smart_cable'
                        )
                        .inputFluids(
                            Fluid.of(`gtceu:${colour}_dye`,144)
                        )
                        .itemOutputs(
                            `8x ae2:${colour}_smart_cable`
                        )
                        .duration(100)
                        .EUt(LV)

                    event.recipes.gtceu.chemical_bath(`gregitas:${colour}_dense_covered_fluix`)
                        .itemInputs(
                            '8x ae2:fluix_covered_dense_cable'
                        )
                        .inputFluids(
                            Fluid.of(`gtceu:${colour}_dye`,144)
                        )
                        .itemOutputs(
                            `8x ae2:${colour}_covered_dense_cable`
                        )
                        .duration(100)
                        .EUt(LV)

                    event.recipes.gtceu.chemical_bath(`gregitas:${colour}_dense_smart_fluix`)
                        .itemInputs(
                            '8x ae2:fluix_smart_dense_cable'
                        )
                        .inputFluids(
                            Fluid.of(`gtceu:${colour}_dye`,144)
                        )
                        .itemOutputs(
                            `8x ae2:${colour}_smart_dense_cable`
                        )
                        .duration(100)
                        .EUt(LV)

                    event.remove(
                        [
                            {
                                id: `ae2:network/cables/glass_${colour}`
                            },
                            {
                                id: `ae2:network/cables/covered_${colour}`
                            },
                            {
                                id: `ae2:network/cables/smart_${colour}`
                            },
                            {
                                id: `ae2:network/cables/dense_covered_${colour}`
                            },
                            {
                                id: `ae2:network/cables/dense_smart_${colour}`
                            }
                        ]
                    )
                }
            )

    //Terminals
        event.remove(
            [
                {
                    id: 'ae2:network/parts/panels_dark_monitor'
                },
                {
                    id: 'ae2:network/parts/panels_monitor'
                },
                {
                    id: 'ae2:network/parts/panels_semi_dark_monitor'
                },
                {
                    id: 'ae2:network/parts/panels_semi_dark_monitor_alt'
                },
                {
                    id: 'ae2:network/parts/terminals'
                },
                {
                    id: 'ae2:network/parts/terminals_crafting'
                },
                {
                    id: 'ae2:network/parts/terminals_pattern_encoding'
                },
                {
                    id: 'ae2:network/parts/terminals_pattern_access'
                },
                {
                    id: 'expatternprovider:epa'
                }
            ]
        )

        event.recipes.gtceu.assembler('gregitas:illumination_panel')
            .itemInputs(
                'gtceu:iron_plate',
                '2x gtceu:glowstone_plate',
                '2x gtceu:glass_plate'
            )
            .inputFluids(
                Fluid.of('gtceu:red_alloy',144
                )
            )
            .itemOutputs(
                '2x ae2:semi_dark_monitor'
            )
            .duration(100)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:me_terminal')
            .itemInputs(
                'ae2:semi_dark_monitor',
                'ae2:formation_core',
                'ae2:annihilation_core',
                'ae2:logic_processor',
                'gtceu:computer_monitor_cover'
            )
            .itemOutputs(
                'ae2:terminal'
            )
            .duration(100)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:crafting_cover')
            .itemInputs(
                'minecraft:crafting_table',
                'gtceu:steel_plate',
                '16x gtceu:red_alloy_fine_wire',
                '#gtceu:circuits/lv'
            )
            .itemOutputs(
                'gregitas:crafting_core'
            )
            .duration(100)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:crafting_terminal')
            .itemInputs(
                'ae2:terminal',
                'gregitas:crafting_core',
                'ae2:calculation_processor'
            )
            .itemOutputs(
                'ae2:crafting_terminal'
            )
            .duration(100)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:pattern_terminal')
            .itemInputs(
                'ae2:crafting_terminal',
                'gtceu:digital_interface_cover',
                'ae2:blank_pattern',
                'ae2:engineering_processor'
            )
            .itemOutputs(
                'ae2:pattern_encoding_terminal'
            )
            .duration(100)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:pattern_access_terminal')
            .itemInputs(
                'ae2:pattern_encoding_terminal',
                '3x ae2:logic_processor',
                '#gtceu:circuits/hv',
                '#ae2:pattern_provider'
            )
            .itemOutputs(
                'expatternprovider:ex_pattern_access_part'
            )
            .duration(100)
            .EUt(HV)

    //Portable Cell
        event.shaped('ae2:portable_item_cell_1k', 
            [
                'bGb',
                'tSt',
                'wcw'
            ],
            {
                b: 'gtceu:red_alloy_bolt',
                G: '#forge:glass_panes',
                t: '#gtceu:circuits/ulv',
                S: 'gtceu:bronze_crate',
                w: 'gtceu:wrought_iron_plate',
                c: 'gtceu:red_alloy_single_cable'
            }
        )

    //Storage Components
        //Housings
            event.remove(
                [
                    {
                        id: 'ae2:network/cells/item_cell_housing'
                    },
                    {
                        id: 'ae2:network/cells/fluid_cell_housing'
                    },
                    {
                        id: 'ae2:network/crafting/cpu_crafting_unit'
                    },
                    {
                        id: 'ae2:network/cells/item_storage_components_cell_1k_part'
                    },
                    {
                        id: 'ae2:network/cells/item_storage_components_cell_4k_part'
                    },
                    {
                        id: 'ae2:network/cells/item_storage_components_cell_16k_part'
                    },
                    {
                        id: 'ae2:network/cells/item_storage_components_cell_64k_part'
                    },
                    {
                        id: 'ae2:network/cells/item_storage_components_cell_256k_part'
                    },
                    {
                        id: 'ae2:decorative/quartz_glass'
                    }
                ]
            )

            event.recipes.gtceu.assembler('gregitas:item_cell_housing')
                .itemInputs(
                    '8x gtceu:steel_plate',
                    'gtceu:lv_field_generator',
                    '8x gtceu:red_alloy_fine_wire',
                    '2x ae2:quartz_glass'
                )
                .itemOutputs(
                    '2x ae2:item_cell_housing'
                )
                .duration(400)
                .EUt(MV)

            event.recipes.gtceu.assembler('gregitas:fluid_cell_housing')
                .itemInputs(
                    '8x gtceu:annealed_copper_plate',
                    'gtceu:lv_field_generator',
                    '8x gtceu:red_alloy_fine_wire',
                    '2x ae2:quartz_glass'
                )
                .itemOutputs(
                    '2x ae2:fluid_cell_housing'
                )
                .duration(400)
                .EUt(MV)

            event.recipes.gtceu.autoclave('gregitas:quartz_glass')
                .itemInputs(
                    '5x gtceu:certus_quartz_dust'
                )
                .inputFluids(
                    Fluid.of('gtceu:glass',576)
                )
                .itemOutputs(
                    '4x ae2:quartz_glass'
                )
                .duration(200)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:cpu_crafting_unit')
                .itemInputs(
                    '4x gtceu:aluminium_plate',
                    '#gtceu:circuits/mv',
                    '2x ae2:fluix_glass_cable',
                    'ae2:logic_processor',
                    'ae2:calculation_processor'
                )
                .itemOutputs(
                    'ae2:crafting_unit'
                )
                .duration(100)
                .EUt(HV)

            event.recipes.gtceu.assembler('gregitas:1k_storage_component')
                .itemInputs(
                    'gtceu:certus_quartz_plate',
                    'ae2:logic_processor',
                    '2x #gtceu:circuits/lv'
                )
                .inputFluids(
                    Fluid.of('gtceu:red_alloy',144)
                )
                .itemOutputs(
                    'ae2:cell_component_1k'
                )
                .duration(200)
                .EUt(LV)
            
            event.recipes.gtceu.assembler('gregitas:4k_storage_component')
                .itemInputs(
                    '3x ae2:cell_component_1k',
                    'ae2:calculation_processor',
                    '#gtceu:circuits/mv'
                )
                .inputFluids(
                    Fluid.of('gtceu:red_alloy',144)
                )
                .itemOutputs(
                    'ae2:cell_component_4k'
                )
                .duration(200)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:16k_storage_component')
                .itemInputs(
                    '3x ae2:cell_component_4k',
                    'ae2:calculation_processor',
                    '#gtceu:circuits/hv'
                )
                .inputFluids(
                    Fluid.of('gtceu:red_alloy',144)
                )
                .itemOutputs(
                    'ae2:cell_component_16k'
                )
                .duration(200)
                .EUt(MV)

            event.recipes.gtceu.assembler('gregitas:64k_storage_component')
                .itemInputs(
                    '3x ae2:cell_component_16k',
                    'ae2:calculation_processor',
                    '#gtceu:circuits/hv'
                )
                .inputFluids(
                    Fluid.of('gtceu:red_alloy',288)
                )
                .itemOutputs(
                    'ae2:cell_component_64k'
                )
                .duration(200)
                .EUt(HV)

            event.recipes.gtceu.assembler('gregitas:256k_storage_component')
                .itemInputs(
                    '3x ae2:cell_component_64k',
                    'ae2:calculation_processor',
                    '#gtceu:circuits/ev'
                )
                .inputFluids(
                    Fluid.of('gtceu:red_alloy',288)
                )
                .itemOutputs(
                    'ae2:cell_component_256k'
                )
                .duration(200)
                .EUt(EV)

            let ae2Cells = [
                {
                    tier: '1k',
                    voltage: MV
                },
                {
                    tier: '4k',
                    voltage: MV
                },
                {
                    tier: '16k',
                    voltage: MV
                },
                {
                    tier: '64k',
                    voltage: HV
                },
                {
                    tier: '256k',
                    voltage: EV
                }
            ]

            ae2Cells.forEach(cell => {
                event.recipes.gtceu.canner(`gregitas:${cell.tier}_item_cell`)
                    .itemInputs(
                        'ae2:item_cell_housing',
                        `ae2:cell_component_${cell.tier}`
                    )
                    .itemOutputs(
                        `ae2:item_storage_cell_${cell.tier}`
                    )
                    .duration(200)
                    .EUt(cell.voltage)

                event.recipes.gtceu.canner(`gregitas:${cell.tier}_fluid_cell`)
                    .itemInputs(
                        'ae2:fluid_cell_housing',
                        `ae2:cell_component_${cell.tier}`
                    )
                    .itemOutputs(
                        `ae2:fluid_storage_cell_${cell.tier}`
                    )
                    .duration(200)
                    .EUt(cell.voltage)

                event.recipes.gtceu.canner(`gregitas:${cell.tier}_crafting_storage`)
                    .itemInputs(
                        'ae2:crafting_unit',
                        `ae2:cell_component_${cell.tier}`
                    )
                    .itemOutputs(
                        `ae2:${cell.tier}_crafting_storage`
                    )
                    .duration(200)
                    .EUt(cell.voltage)

                event.remove(
                    [
                        {
                            id: `ae2:network/cells/fluid_storage_cell_${cell.tier}`
                        },
                        {
                            id: `ae2:network/cells/fluid_storage_cell_${cell.tier}_storage`
                        },
                        {
                            id: `ae2:network/cells/item_storage_cell_${cell.tier}`
                        },
                        {
                            id: `ae2:network/cells/item_storage_cell_${cell.tier}_storage`
                        },
                        {
                            id: `ae2:tools/portable_fluid_cell_${cell.tier}`
                        },
                        {
                            id: `ae2:tools/portable_item_cell_${cell.tier}`
                        },
                        {
                            id: `ae2:network/crafting/${cell.tier}_cpu_crafting_storage`
                        }
                    ]
                )
            })

    //ME Drive
        event.remove(
            {
                id: 'ae2:network/blocks/storage_drive'
            }
        )

        event.recipes.gtceu.assembler('gregitas:me_drive')
            .itemInputs(
                'gtceu:lv_machine_hull',
                '4x gtceu:vanadium_steel_plate',
                '2x ae2:fluix_glass_cable',
                '#gtceu:circuits/lv',
                '2x ae2:engineering_processor'
            )
            .itemOutputs(
                'ae2:drive'
            )
            .duration(200)
            .EUt(MV)

    //ME Controller
        event.remove(
            {
                id: 'ae2:network/blocks/controller'
            }
        )

        event.recipes.gtceu.assembler('gregitas:me_controller')
            .itemInputs(
                'gtceu:mv_machine_hull',
                '6x gtceu:vanadium_steel_plate',
                'ae2:engineering_processor',
                '2x #gtceu:circuits/lv',
                '16x gtceu:red_alloy_fine_wire'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2:controller'
            )
            .duration(200)
            .EUt(HV)

    //Pattern Provider

        event.remove(
            {
                id: 'ae2:network/blocks/pattern_providers_interface'
            }
        )

        event.recipes.gtceu.assembler('gregitas:pattern_provider_steel')
            .itemInputs(
                '4x gtceu:steel_plate',
                '2x gregitas:crafting_core',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                'ae2:pattern_provider'
            )
            .duration(200)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:pattern_provider_aluminium')
            .itemInputs(
                '4x gtceu:aluminium_plate',
                '2x gregitas:crafting_core',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '2x ae2:pattern_provider'
            )
            .duration(300)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:pattern_provider_stainless_steel')
            .itemInputs(
                '4x gtceu:stainless_steel_plate',
                '2x gregitas:crafting_core',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '3x ae2:pattern_provider'
            )
            .duration(400)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:pattern_provider_tungsten_steel')
            .itemInputs(
                '4x gtceu:tungsten_steel_plate',
                '2x gregitas:crafting_core',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '4x ae2:pattern_provider'
            )
            .duration(500)
            .EUt(EV)

    //Interface

        event.remove(
            {
                id: 'ae2:network/blocks/interfaces_interface'
            }
        )

        event.recipes.gtceu.assembler('gregitas:interface_steel')
            .itemInputs(
                '4x gtceu:steel_plate',
                '2x #forge:glass',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                'ae2:interface'
            )
            .duration(200)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:interface_aluminium')
            .itemInputs(
                '4x gtceu:aluminium_plate',
                '2x #forge:glass',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '2x ae2:interface'
            )
            .duration(300)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:interface_stainless_steel')
            .itemInputs(
                '4x gtceu:stainless_steel_plate',
                '2x #forge:glass',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '3x ae2:interface'
            )
            .duration(400)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:interface_tungsten_steel')
            .itemInputs(
                '4x gtceu:tungsten_steel_plate',
                '2x #forge:glass',
                'ae2:annihilation_core',
                'ae2:formation_core'
            )
            .itemOutputs(
                '4x ae2:interface'
            )
            .duration(500)
            .EUt(EV)

    //Energy Accepter
        
        event.remove(
            {
                id: 'ae2:network/blocks/energy_energy_acceptor'
            }
        )

        event.recipes.gtceu.assembler('gregitas:energy_accepter')
            .itemInputs(
                'gtceu:lv_machine_hull',
                '2x gtceu:lv_voltage_coil',
                '2x ae2:fluix_glass_cable',
                '4x gtceu:vanadium_steel_plate'
            )
            .itemOutputs(
                'ae2:energy_acceptor'
            )
            .duration(200)
            .EUt(LV)

    //Molecular Assembler

        event.remove(
            {
                id: 'ae2:network/crafting/molecular_assembler'
            }
        )
        
        event.recipes.gtceu.assembler('gregitas:molecular_assembler_stainless_steel')
            .itemInputs(
                '4x gtceu:stainless_steel_plate',
                '2x ae2:quartz_glass',
                'ae2:annihilation_core',
                'ae2:formation_core',
                'gregitas:crafting_core',
                'gtceu:hv_conveyor_module'
            )
            .itemOutputs(
                '2x ae2:molecular_assembler'
            )
            .duration(200)
            .EUt(HV)

        event.recipes.gtceu.assembler('gregitas:molecular_assembler_titanium')
            .itemInputs(
                '4x gtceu:titanium_plate',
                '2x ae2:quartz_glass',
                'ae2:annihilation_core',
                'ae2:formation_core',
                'gregitas:crafting_core',
                'gtceu:ev_conveyor_module'
            )
            .itemOutputs(
                '4x ae2:molecular_assembler'
            )
            .duration(400)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:molecular_assembler_tungsten_steel')
            .itemInputs(
                '4x gtceu:tungsten_steel_plate',
                '2x ae2:quartz_glass',
                'ae2:annihilation_core',
                'ae2:formation_core',
                'gregitas:crafting_core',
                'gtceu:iv_conveyor_module'
            )
            .itemOutputs(
                '16x ae2:molecular_assembler'
            )
            .duration(600)
            .EUt(IV)

    //Crafting Monitor

        event.remove(
            {
                id: 'ae2:network/crafting/cpu_crafting_monitor'
            }
        )

        event.recipes.gtceu.assembler('gregitas:cpu_monitor')
            .itemInputs(
                'ae2:crafting_unit',
                'ae2:semi_dark_monitor',
                'gtceu:computer_monitor_cover',
                '16x gtceu:red_alloy_fine_wire'
            )
            .itemOutputs(
                'ae2:crafting_monitor'
            )
            .duration(200)
            .EUt(HV)

    //Network Tool

        event.remove(
            [
                {
                    id: 'ae2:tools/certus_quartz_wrench'
                },
                {
                    id: 'ae2:tools/nether_quartz_wrench'
                },
                {
                    id: 'ae2:tools/network_tool'
                }
            ]
        )

        event.recipes.gtceu.lathe('gregitas:certus_quartz_wrench')
            .itemInputs(
                'gtceu:certus_quartz_block'
            )
            .itemOutputs(
                'ae2:certus_quartz_wrench'
            )
            .duration(200)
            .EUt(LV)

        event.recipes.gtceu.lathe('gregitas:nether_quartz_wrench')
            .itemInputs(
                'minecraft:quartz_block'
            )
            .itemOutputs(
                'ae2:nether_quartz_wrench'
            )
            .duration(200)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:network_tool')
            .itemInputs(
                '#ae2:quartz_wrench',
                'ae2:semi_dark_monitor',
                'ae2:calculation_processor',
                '8x gtceu:red_alloy_fine_wire'
            )
            .itemOutputs(
                'ae2:network_tool'
            )
            .duration(200)
            .EUt(LV)

    //Cable Anchor
        
        event.remove(
            {
                id: 'ae2:network/parts/cable_anchor'
            }
        )

        let anchorCutter = [
            {
                type: 'water',
                fluid: 'minecraft:water',
                amount: 4,
                duration: 120
            },
            {
                type: 'distilled_water',
                fluid: 'gtceu:distilled_water',
                amount: 4,
                duration: 90
            },
            {
                type: 'lubricant',
                fluid: 'gtceu:lubricant',
                amount: 1,
                duration: 30
            }
        ]

        anchorCutter.forEach(cut => {
            event.recipes.gtceu.cutter(`gregitas:cable_anchor_steel_${cut.type}`)
                .itemInputs(
                    'gtceu:steel_bolt'
                )
                .inputFluids(
                    Fluid.of(cut.fluid,cut.amount)
                )
                .itemOutputs(
                    '2x ae2:cable_anchor'
                )
                .duration(cut.duration)
                .EUt(LV)

            event.recipes.gtceu.cutter(`gregitas:cable_anchor_aluminium_${cut.type}`)
                .itemInputs(
                    'gtceu:aluminium_bolt'
                )
                .inputFluids(
                     Fluid.of(cut.fluid,cut.amount)
                )
                .itemOutputs(
                    '4x ae2:cable_anchor'
                )
                .duration(cut.duration)
                .EUt(MV)

            event.recipes.gtceu.cutter(`gregitas:cable_anchor_stainless_steel_${cut.type}`)
                .itemInputs(
                    'gtceu:stainless_steel_bolt'
                )
                .inputFluids(
                     Fluid.of(cut.fluid,cut.amount)
                )
                .itemOutputs(
                    '8x ae2:cable_anchor'
                )
                .duration(cut.duration)
                .EUt(HV)

            event.recipes.gtceu.cutter(`gregitas:cable_anchor_titanium_${cut.type}`)
                .itemInputs(
                    'gtceu:titanium_bolt'
                )
                .inputFluids(
                     Fluid.of(cut.fluid,cut.amount)
                )
                .itemOutputs(
                    '16x ae2:cable_anchor'
                )
                .duration(cut.duration)
                .EUt(HV)
        })
        
    //Energy Cell

        event.remove(
            [
                {
                    id: 'ae2:decorative/quartz_vibrant_glass'
                },
                {
                    id: 'ae2:network/blocks/energy_energy_cell'
                },
                {
                    id: 'ae2:network/blocks/energy_dense_energy_cell'
                }
            ]
        )

        event.recipes.gtceu.chemical_bath('gregitas:vibrant_quartz_glass')
            .itemInputs(
                'ae2:quartz_glass'
            )
            .inputFluids(
                Fluid.of('gtceu:glowstone',144)
            )
            .itemOutputs(
                'ae2:quartz_vibrant_glass'
            )
            .duration(50)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:energy_cell')
            .itemInputs(
                '4x gtceu:certus_quartz_gem',
                '4x gtceu:certus_quartz_plate',
                '2x gtceu:lv_voltage_coil',
                'ae2:quartz_vibrant_glass' 
            )
            .itemOutputs(
                'ae2:energy_cell'
            )
            .duration(100)
            .EUt(MV)

        event.recipes.gtceu.assembler('gregitas:dense_energy_cell')
            .itemInputs(
                '8x ae2:energy_cell',
                'ae2:calculation_processor',
                '#gtceu:circuits/mv'
            )
            .itemOutputs(
                'ae2:dense_energy_cell'
            )
            .duration(100)
            .EUt(HV)

    //P2P

        event.remove(
            [
                {
                    id: 'ae2:network/parts/tunnels_me'
                },
                {
                    id: 'ae2:tools/network_memory_card'
                }
            ]
        )

        event.recipes.gtceu.assembler('gregitas:memory_card')
            .itemInputs(
                '2x gtceu:vanadium_steel_plate',
                'gtceu:plastic_printed_circuit_board',
                'gtceu:data_stick',
                'ae2:calculation_processor'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2:memory_card'
            )
            .duration(100)
            .EUt(MV)

        event.recipes.gtceu.assembler('gregitas:me_p2p')
            .itemInputs(
                '16x gtceu:red_alloy_fine_wire',
                '4x gtceu:vanadium_steel_plate',
                'ae2:engineering_processor',
                'gtceu:certus_quartz_plate',
                'gtceu:lv_emitter',
                'gtceu:lv_sensor'
            )
            .itemOutputs(
                '2x ae2:me_p2p_tunnel'
            )
            .duration(300)
            .EUt(HV)

    //Wireless

        event.remove(
            [
                {
                    id: 'ae2:network/wireless_terminal'
                },
                {
                    id: 'ae2:network/wireless_crafting_terminal'
                },
                {
                    id: 'ae2:network/upgrade_wireless_crafting_terminal'
                },
                {
                    id: 'ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal'
                },
                {
                    id: 'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal'
                },
                {
                    id: 'ae2wtlib:pattern_access/wireless_pattern_access_terminal'
                },
                {
                    id: 'ae2:network/wireless_access_point'
                },
                {
                    id: 'ae2:misc/fluixpearl'
                },
                {
                    id: 'ae2:network/wireless_booster'
                },
                {
                    id: 'ae2:network/wireless_part'
                },
                {
                    id: 'ae2:network/blocks/quantum_ring'
                },
                {
                    id: 'ae2:network/blocks/quantum_link'
                }
            ]
        )

        event.recipes.gtceu.chemical_reactor('gregitas:fluix_pearl')
            .itemInputs(
                'ae2:fluix_dust',
                'minecraft:ender_eye'
            )
            .itemOutputs(
                'ae2:fluix_pearl'
            )
            .duration(200)
            .EUt(MV)

        event.recipes.gtceu.macerator('gregitas:fluix_dust')
            .itemInputs(
                'ae2:fluix_crystal'
            )
            .itemOutputs(
                'ae2:fluix_dust'
            )
            .duration(50)
            .EUt(LV)

        event.recipes.gtceu.assembler('gregitas:wireless_reciver')
            .itemInputs(
                '2x #gtceu:circuits/ev',
                '2x gtceu:titanium_rod',
                'ae2:fluix_pearl',
                'gtceu:hv_sensor',
                'gtceu:hv_emitter'
            )
            .itemOutputs(
                'ae2:wireless_receiver'
            )
            .duration(100)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:wireless_terminal')
            .itemInputs(
                '8x gtceu:red_alloy_fine_wire',
                '2x gtceu:vanadium_steel_plate',
                '2x #gtceu:circuits/hv',
                'ae2:semi_dark_monitor',
                'ae2:formation_core',
                'ae2:annihilation_core',
                'gtceu:computer_monitor_cover',
                'gtceu:lapotron_crystal',
                'ae2:wireless_receiver'
                
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2:wireless_terminal'
            )
            .duration(1000)
            .EUt(EV)

        event.recipes.gtceu.assembler('wireless_gregitas:crafting_terminal')
            .itemInputs(
                'ae2:wireless_terminal',
                'gregitas:crafting_core',
                'ae2:calculation_processor'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2:wireless_crafting_terminal'
            )
            .duration(500)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:wireless_pattern_terminal')
            .itemInputs(
                'ae2:wireless_crafting_terminal',
                'gtceu:digital_interface_cover',
                'ae2:blank_pattern',
                'ae2:engineering_processor'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2wtlib:wireless_pattern_encoding_terminal'
            )
            .duration(500)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:wireless_pattern_access_terminal')
            .itemInputs(
                'ae2wtlib:wireless_pattern_encoding_terminal',
                '3x ae2:logic_processor',
                '#gtceu:circuits/hv',
                '#ae2:pattern_provider'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy',144)
            )
            .itemOutputs(
                'ae2wtlib:wireless_pattern_access_terminal'
            )
            .duration(500)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:wireless_access_point')
            .itemInputs(
                '16x gtceu:red_alloy_fine_wire',
                '2x #gtceu:circuits/hv',
                '2x gtceu:mpic_chip',
                'gtceu:epoxy_printed_circuit_board',
                'ae2:calculation_processor',
                '#ae2:glass_cable',
                'gtceu:ev_field_generator',
                'gtceu:ev_machine_hull',
                'ae2:wireless_receiver'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy', 288)
            )
            .itemOutputs(
                'ae2:wireless_access_point'
            )
            .duration(500)
            .EUt(EV)

        event.recipes.gtceu.assembler('gregitas:wireless_booster')
            .itemInputs(
                '16x gtceu:red_alloy_fine_wire',
                '3x gtceu:ender_pearl_dust',
                'gtceu:epoxy_printed_circuit_board',
                '#gtceu:circuits/hv',
                'gtceu:hv_field_generator',
                'gtceu:vanadium_steel_double_plate'
            )
            .inputFluids(
                Fluid.of('gtceu:soldering_alloy', 144)
            )
            .itemOutputs(
                '2x ae2:wireless_booster'
            )
            .duration(250)
            .EUt(EV)

    //Bits and Bobs

        event.remove(
            [
                {
                    id: 'ae2:network/crafting/patterns_blank'
                },
                {
                    id: 'ae2:network/blocks/inscribers'
                },
                {
                    id: 'ae2:materials/basiccard'
                },
                {
                    id: 'ae2:materials/advancedcard'
                },
                {
                    id: 'ae2:materials/cardredstone'
                },
                {
                    id: 'ae2:materials/cardcapacity'
                },
                {
                    id: 'ae2:materials/cardvoid'
                },
                {
                    id: 'ae2:materials/cardcrafting'
                },
                {
                    id: 'ae2:materials/cardfuzzy'
                },
                {
                    id: 'ae2:materials/cardspeed'
                },
                {
                    id: 'ae2:materials/cardinverter'
                },
                {
                    id: 'ae2:materials/carddistribution'
                },
                {
                    id: 'ae2:materials/cardenergy'
                },
                {
                    id: 'ae2:network/parts/storage_bus'
                },
                {
                    id: 'ae2:network/parts/import_bus'
                },
                {
                    id: 'ae2:network/parts/export_bus'
                }
            ]
        )

        //Patterns
            
            event.recipes.gtceu.assembler('gregitas:patten_pe')
                .itemInputs(
                    '4x gtceu:red_alloy_fine_wire',
                    '3x gtceu:steel_plate',
                    '2x gtceu:polyethylene_plate',
                    '#gtceu:circuits/mv' 
                )
                .itemOutputs(
                    'ae2:blank_pattern'
                )
                .duration(50)
                .EUt(HV)

            event.recipes.gtceu.assembler('gregitas:patten_pvc')
                .itemInputs(
                    '4x gtceu:red_alloy_fine_wire',
                    '3x gtceu:steel_plate',
                    '2x gtceu:polyvinyl_chloride_plate',
                    '#gtceu:circuits/mv' 
                )
                .itemOutputs(
                    '4x ae2:blank_pattern'
                )
                .duration(100)
                .EUt(HV)

            event.recipes.gtceu.assembler('gregitas:patten_ptfe')
                .itemInputs(
                    '4x gtceu:red_alloy_fine_wire',
                    '3x gtceu:steel_plate',
                    '2x gtceu:polytetrafluoroethylene_plate',
                    '#gtceu:circuits/mv' 
                )
                .itemOutputs(
                    '16x ae2:blank_pattern'
                )
                .duration(150)
                .EUt(HV)

            event.recipes.gtceu.assembler('gregitas:patten_pbi')
                .itemInputs(
                    '4x gtceu:red_alloy_fine_wire',
                    '3x gtceu:steel_plate',
                    '2x gtceu:polybenzimidazole_plate',
                    '#gtceu:circuits/mv' 
                )
                .itemOutputs(
                    '16x ae2:blank_pattern'
                )
                .duration(200)
                .EUt(HV)

        //Inscriber
            
            event.recipes.gtceu.assembler('gregitas:me_inscriber')
                .itemInputs(
                    '16x gtceu:red_alloy_fine_wire',
                    '6x gtceu:vanadium_steel_plate',
                    '2x #gtceu:circuits/lv',
                    '2x gtceu:mv_electric_piston',
                    'gtceu:lv_machine_hull'
                )
                .itemOutputs(
                    'ae2:inscriber'
                )
                .duration(100)
                .EUt(MV)

        //Storage Bus

            event.recipes.gtceu.assembler('gregitas:storage_bus')
                .itemInputs(
                    '3x gtceu:vanadium_steel_plate',
                    'gtceu:item_detector_cover',
                    'gtceu:fluid_detector_cover',
                    'ae2:formation_core',
                    'ae2:annihilation_core'
                )
                .inputFluids(
                    Fluid.of('gtceu:soldering_alloy',72)
                )
                .itemOutputs(
                    'ae2:storage_bus'
                )
                .duration(100)
                .EUt(MV)

        //Export Bus

            event.recipes.gtceu.assembler('gregitas:export_bus')
                .itemInputs(
                    '2x gtceu:vanadium_steel_plate',
                    'ae2:formation_core',
                    'gtceu:lv_robot_arm',
                    'gtceu:lv_electric_pump'
                )
                .inputFluids(
                    Fluid.of('gtceu:soldering_alloy',72)
                )
                .itemOutputs(
                    'ae2:export_bus'
                )
                .duration(100)
                .EUt(MV)

        //Import Bus

            event.recipes.gtceu.assembler('gregitas:import_bus')
                .itemInputs(
                    '2x gtceu:vanadium_steel_plate',
                    'ae2:annihilation_core',
                    'gtceu:lv_robot_arm',
                    'gtceu:lv_electric_pump'
                )
                .inputFluids(
                    Fluid.of('gtceu:soldering_alloy',72)
                )
                .itemOutputs(
                    'ae2:import_bus'
                )
                .duration(100)
                .EUt(MV)

        //Basic Upgrades

            event.recipes.gtceu.assembler('gregitas:basic_card')
                .itemInputs(
                    '3x gtceu:aluminium_plate',
                    '2x gtceu:red_alloy_fine_wire',
                    '2x gtceu:gold_fine_wire',
                    'ae2:engineering_processor',
                    '#gtceu:circuits/mv'
                )
                .itemOutputs(
                    '2x ae2:basic_card'
                )
                .duration(50)
                .EUt(MV)

            event.recipes.gtceu.assembler('gregitas:redstone_card')
                .itemInputs(
                    'ae2:basic_card',
                    'gtceu:red_alloy_plate'
                )
                .itemOutputs(
                    'ae2:redstone_card'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:capacity_card')
                .itemInputs(
                    'ae2:basic_card',
                    '#gtceu:circuits/lv'
                )
                .itemOutputs(
                    'ae2:capacity_card'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:void_card')
                .itemInputs(
                    'ae2:basic_card',
                    'gtceu:item_voiding_cover',
                    'gtceu:fluid_voiding_cover'
                )
                .itemOutputs(
                    'ae2:void_card'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:crafting_card')
                .itemInputs(
                    'ae2:basic_card',
                    'gregitas:crafting_core'
                )
                .itemOutputs(
                    'ae2:crafting_card'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:advanced_card')
                .itemInputs(
                    '3x gtceu:stainless_steel_plate',
                    '2x gtceu:red_alloy_fine_wire',
                    '2x gtceu:silver_fine_wire',
                    'ae2:engineering_processor',
                    '#gtceu:circuits/hv'
                )
                .itemOutputs(
                    '2x ae2:advanced_card'
                )
                .duration(50)
                .EUt(MV)

            event.recipes.gtceu.assembler('gregitas:fuzzy_card')
                .itemInputs(
                    'ae2:advanced_card',
                    '#gtceu:circuits/ulv'
                )
                .itemOutputs(
                    'ae2:fuzzy_card'
                )
                .duration(50)
                .EUt(LV)

            event.recipes.gtceu.assembler('gregitas:speed_card')
                .itemInputs(
                    'ae2:advanced_card',
                    '#gtceu:circuits/mv'
                )
                .itemOutputs(
                    'ae2:speed_card'
                )
                .duration(50)
                .EUt(LV)  

            event.recipes.gtceu.assembler('gregitas:inverter_card')
                .itemInputs(
                    'ae2:advanced_card',
                    'gtceu:machine_controller_cover',
                    'gtceu:activity_detector_cover'
                )
                .itemOutputs(
                    'ae2:inverter_card'
                )
                .duration(50)
                .EUt(LV)  

            event.recipes.gtceu.assembler('gregitas:equal_distribution_card')
                .itemInputs(
                    'ae2:advanced_card',
                    'ae2:calculation_processor'
                )
                .itemOutputs(
                    'ae2:equal_distribution_card'
                )
                .duration(50)
                .EUt(LV) 
                
            event.recipes.gtceu.assembler('gregitas:energy_card')
                .itemInputs(
                    'ae2:advanced_card',
                    '#forge:batteries/mv'
                )
                .itemOutputs(
                    'ae2:energy_card'
                )
                .duration(50)
                .EUt(LV) 

    //Generic Remove
        
        event.remove(
            [
                {
                    mod: 'ae2things'
                },
                {
                    mod: 'aeinfinitybooster'
                },
                {
                    mod: 'expatternprovider'
                },
                {
                    mod: 'megacells'
                },
                {
                    id: 'ae2:network/blocks/spatial_anchor'
                },
                {
                    id: 'ae2:network/blocks/spatial_io_port'
                },
                {
                    id: 'ae2:network/blocks/spatial_io_pylon'
                }
            ]
        )
}