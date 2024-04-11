
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
            type: 'create:crushing',
            ingredients: [
                {
                    item: 'minecraft:quartz'
                }
            ],
            processingTime: 250,
            results: [
                {
                    item: 'enderio:powdered_quartz'
                },
                {
                    chance: 0.5,
                    item: 'enderio:powdered_quartz'
                },
                {
                    chance: 0.25,
                    item: 'enderio:powdered_quartz'
                }
            ]
        }
    ).id('gregitas:crushing/powdered_quartz')

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    item: 'gtceu:small_sulfur_dust'
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

    //Coke Oven
        //Normal
            event.recipes.gtceu.coke_oven('stick_bundle_to_charcoal')
                .itemInputs('tfc:stick_bundle')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 125))
                .duration(1000)


            event.recipes.gtceu.coke_oven('gem/bituminous_coal_to_exquisite_coke')
                .itemInputs('tfc:ore/bituminous_coal')
                .itemOutputs('gtceu:exquisite_coke_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 750))
                .duration(1000)
        //Improved
            event.recipes.gtceu.improved_coke_oven('stick_bundle_to_charcoal')
                .itemInputs('tfc:stick_bundle')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 125))
                .duration(500)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('logs_to_charcoal')
                .itemInputs('#minecraft:logs')
                .itemOutputs('minecraft:charcoal')
                .outputFluids(Fluid.of('gtceu:creosote', 250))
                .duration(450)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('gem/coal_to_coke')
                .itemInputs('minecraft:coal')
                .itemOutputs('gtceu:coke_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 500))
                .duration(450)
                .EUt(LV)

            event.recipes.gtceu.improved_coke_oven('block/coal_to_coke')
                .itemInputs('minecraft:coal_block')
                .itemOutputs('gtceu:coke_block')
                .outputFluids(Fluid.of('gtceu:creosote', 4500))
                .duration(4050)
                .EUt(LV)


            event.recipes.gtceu.improved_coke_oven('gem/bituminous_coal_to_exquisite_coke')
                .itemInputs('tfc:ore/bituminous_coal')
                .itemOutputs('gtceu:exquisite_coke_gem')
                .outputFluids(Fluid.of('gtceu:creosote', 750))
                .duration(500)
                .EUt(LV)

    //ALCR
    event.recipes.gtceu.assembly_line('advanced_large_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', '3x #gtceu:circuits/iv', '15x gregitas_core:nitinol_plate', '4x gtceu:platinum_single_cable')
        .itemOutputs('gtceu:advanced_large_chemical_reactor')
        .inputFluids(
            Fluid.of('gtceu:copper', 4608),
            Fluid.of('gtceu:tin', 4608),
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 8000)
        )
        .duration(500)
        .EUt(IV)

    // Star Forge Controller Block Recipe
    event.recipes.gtceu.assembly_line('star_forge')
        .itemInputs([
            'gtceu:uhv_machine_hull',
            '4x #gtceu:circuits/uhv',
            '4x gtceu:gravi_star',
            '4x gtceu:uv_field_generator',
            '64x gtceu:uhpic_chip',
            '64x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        ])
        .inputFluids([
            Fluid.of('gtceu:europium', 2592),
            Fluid.of('gtceu:soldering_alloy', 1152)
        ])
        .itemOutputs('gtceu:star_forge')
        .duration(2400)
        .EUt(UV)

    // Machine Recipes
    GTValues.VN.forEach((tier_name, index, arr) => {
        if (index >= 14) { return; }
        let glass = $CraftingComponent.GLASS.getIngredient(index)
        if (glass instanceof $TagKey) {
            glass = '#' + glass.location().toString()
        }
        if (index == 1) {
           event.shaped(`gtceu:${tier_name.toLowerCase()}_chemical_vapor_depositor`, ["SCS", "GHG", "PCP"], {S: "gtceu:steel_small_fluid_pipe", C: `#gtceu:circuits/${tier_name.toLowerCase()}`, G: glass, H: `gtceu:${tier_name.toLowerCase()}_machine_hull`, P: `gtceu:${tier_name.toLowerCase()}_emitter`}).id(`gregitas:shaped/${tier_name.toLowerCase()}_chemical_vapor_depositor`)
        }
        if (index > 1) {
           event.shaped(`gtceu:${tier_name.toLowerCase()}_chemical_vapor_depositor`, ["SCS", "GHG", "PCP"], {S: "gtceu:stainless_steel_small_fluid_pipe", C: `#gtceu:circuits/${tier_name.toLowerCase()}`, G: glass, H: `gtceu:${tier_name.toLowerCase()}_machine_hull`, P: `gtceu:${tier_name.toLowerCase()}_emitter`}).id(`gregitas:shaped/${tier_name.toLowerCase()}_chemical_vapor_depositor`)
        }
        if (index >= 4) {
           event.shaped(`gtceu:${tier_name.toLowerCase()}_gas_centrifuge`, ["SCS", "PHP", "FCF"], {S: "gtceu:steel_normal_fluid_pipe", C: `#gtceu:circuits/${tier_name.toLowerCase()}`, P: `gtceu:${tier_name.toLowerCase()}_pump`, H: `gtceu:${tier_name.toLowerCase()}_machine_hull`, F: "gtceu:fluid_filter"}).id(`gregitas:shaped/${tier_name.toLowerCase()}_gas_centrifuge`)
        }
        if (index >= 7) {
           event.shaped(`gtceu:${tier_name.toLowerCase()}_plasma_centrifuge`, ["SCS", "PHP", "FCF"], {S: "gtceu:tungsten_large_fluid_pipe", C: `#gtceu:circuits/${tier_name.toLowerCase()}`, P: `gtceu:${tier_name.toLowerCase()}_pump`, H: `gtceu:${tier_name.toLowerCase()}_machine_hull`, F: $CraftingComponent.VOLTAGE_COIL.getIngredient(index)})
        }
    })

    //Modification
    event.replaceInput({ mod: 'gtceu', }, 'minecraft:sand', '#forge:sand')
    event.replaceInput({ mod: 'gtceu', },'minecraft:red_sand', '#forge:sand')
    event.replaceOutput({ mod: 'gtceu' }, 'minecraft:sand', 'tfc:sand/yellow')  
    event.replaceInput({ mod: 'gtceu' }, 'minecraft:dirt', '#minecraft:dirt')
    event.replaceOutput({ mod: 'gtceu' }, 'minecraft:dirt', 'tfc:dirt/loam')
    event.remove({ id: 'gtceu:compressor/red_sandstone' })

    enderTC.forEach((ender) => {
        event.recipes.gtceu.chemical_bath(`ender_chest_${ender.id}`)
            .itemInputs('enderchests:ender_chest')
            .inputFluids(Fluid.of(`gtceu:${ender.id}_dye`, 216))
            .itemOutputs(Item.of('enderchests:ender_chest', `{code:"${ender.colour}",owner:"all"}`))
            .duration(500)
            .EUt(LV)

        event.recipes.gtceu.chemical_bath(`ender_tank_${ender.id}`)
            .itemInputs('endertanks:ender_tank')
            .inputFluids(Fluid.of(`gtceu:${ender.id}_dye`, 216))
            .itemOutputs(Item.of('endertanks:ender_tank', `{code:"${ender.colour}",owner:"all"}`))
            .duration(500)
            .EUt(LV)
    })

    event.recipes.kubejs.shaped('gtceu:wood_drum', [ 'mRs', 'PWP', 'PWP' ], { m: '#forge:tools/mallets', R: 'gtceu:sticky_resin', s: '#forge:tools/saws', P: '#minecraft:planks', W: 'gtceu:long_wrought_iron_rod'}).damageIngredient(['#forge:tools'])

    event.recipes.kubejs.shaped('gtceu:lv_electric_motor', ['cwr', 'wmw', 'rwc'], { c: 'gtceu:tin_single_cable', w: 'gtceu:copper_single_wire', r: 'gtceu:wrought_iron_rod', m: 'gregitas_core:magnetic_wrought_iron_rod' })

    event.recipes.kubejs.shaped('2x gtceu:pump_deck', ['   ', 'SPS', 'sCh'], { S: 'gtceu:wrought_iron_screw', P: 'gtceu:treated_wood_planks', C: '#forge:slabs/cobblestone', s: '#forge:tools/screwdrivers', h: '#forge:tools/hammers' }).damageIngredient(['#forge:tools'])
    event.recipes.kubejs.shaped('gtceu:pump_hatch', ['SRs', 'PLP', 'CRC'], { S: 'gtceu:wrought_iron_screw', P: 'gtceu:treated_wood_planks', C: '#forge:slabs/cobblestone', R: 'gtceu:wrought_iron_ring', L: 'gtceu:wood_large_fluid_pipe', s: '#forge:tools/screwdrivers' }).damageIngredient(['#forge:tools'])
    event.recipes.kubejs.shaped('gtceu:primitive_pump', ['RNS', 'BPs', 'CLC'], { S: 'gtceu:wrought_iron_screw', P: 'gtceu:treated_wood_planks', C: '#forge:slabs/cobblestone', R: 'gtceu:wrought_iron_ring', L: 'gtceu:wood_large_fluid_pipe', N: 'gtceu:wood_normal_fluid_pipe', B: 'gtceu:wrought_iron_rotor', s: '#forge:tools/screwdrivers' }).damageIngredient(['#forge:tools'])
    event.recipes.kubejs.shaped('gtceu:improved_coke_oven', ['CCC', 'LPL', 'TLT'], { C: 'gtceu:lv_voltage_coil', P: 'gregitas:bronze_plated_bricks', T: 'gtceu:tin_single_cable', L: '#gtceu:circuits/lv'})
    event.recipes.kubejs.shaped('2x gregitas:bronze_plated_bricks', ['PPP', 'hBw', 'PPP'], { P: 'gtceu:bronze_plate', B: 'minecraft:bricks', h: '#forge:tools/hammers', w: '#forge:tools/wrenches'}).damageIngredient(['#forge:tools'])
    event.recipes.kubejs.shaped('3x gtceu:compressed_coke_clay', ['CCC', 'SFS', 'SSS'], { C: 'tfc:fire_clay', S: '#forge:sand', F: 'gtceu:brick_wooden_form' }).damageIngredient(['gtceu:brick_wooden_form']).id('gtceu:shaped/compressed_coke_clay')

    /// Extractor
        /// TFC Ore to GT Fluid
        const TFCFluidGTFluidMap = {
            "tfc:metal/copper":     "gtceu:copper",         
            "tfc:metal/zinc":       "gtceu:zinc",           
            "tfc:metal/cast_iron":  "tfc:metal/cast_iron",  
            "tfc:metal/gold":       "gtceu:gold",           
            "tfc:metal/nickel":     "gtceu:nickel",         
            "tfc:metal/bismuth":    "gtceu:bismuth",        
            "tfc:metal/tin":        "gtceu:tin",            
            "tfc:metal/silver":     "gtceu:silver",
            "gtceu:chromium": "gtceu:chromium",
        }
        /// Mainly here just if someone wants to tweak later
        const TFCFluidEUMap = {
            16: 16, /// 1/9 of 4320 = 480eu
            24: 24, /// 1/6 of 4320 = 720eu
            36: 36, /// 1/4 of 4320 = 1080eu
            48: 48, /// 1/3 of 4320 = 1440eu
        }
    event.forEachRecipe( {input: `/^tfc:ore\/?(small|poor|normal|rich).*/`, type: "tfc:heating"}, r => {
        let orePiece = unwrapValue(r.get("ingredient")).get("ingredient").get("item")
        let fluidIngredient = unwrapValue(r.get("result_fluid"))

        let fluidRemap = TFCFluidGTFluidMap[fluidIngredient.getId()];
        if (fluidRemap == null) { return }
        let orePieceId = orePiece.toString().replace("\"", "");
        orePieceId = orePieceId.substring("tfc:ore/".length);
        
        event.recipes.gtceu.extractor(`extract_${orePieceId}`)
            .itemInputs(orePiece)
            .outputFluids(Fluid.of(fluidRemap,fluidIngredient.getAmount()))
            .duration(TFCFluidEUMap[fluidIngredient.getAmount()])
            .EUt(LV)
    })
    event.forEachRecipe( {input: `/^firmalife:ore\/?(small|poor|normal|rich).*/`, type: "tfc:heating"}, r => {
            let orePiece = unwrapValue(r.get("ingredient")).get("ingredient").get("item")
            let fluidIngredient = unwrapValue(r.get("result_fluid"))

            let fluidRemap = TFCFluidGTFluidMap[fluidIngredient.getId()];
            if (fluidRemap == null) { return }
            let orePieceId = orePiece.toString().replace("\"", "");
            orePieceId = orePieceId.substring("firmalife:ore/".length);

            event.recipes.gtceu.extractor(`extract_${orePieceId}`)
                .itemInputs(orePiece)
                .outputFluids(Fluid.of(fluidRemap,fluidIngredient.getAmount()))
                .duration(TFCFluidEUMap[fluidIngredient.getAmount()])
                .EUt(LV)
        })
    event.recipes.gtceu.fluid_solidifier("tfc:metal/ingot/cast_iron")
    .inputFluids('tfc:metal/cast_iron 144')
    .notConsumable('gtceu:ingot_casting_mold')
    .itemOutputs('tfc:metal/ingot/cast_iron')
    .duration(60)
    .EUt(LV)


        event.recipes.gtceu.centrifuge("menril_logs")
            .itemInputs('1x integrateddynamics:menril_log')
            .itemOutputs([
                '2x integrateddynamics:crystalized_menril_chunk'
            ])
            .outputFluids('integrateddynamics:menril_resin 500')
            .EUt(LV).duration(100)

    event.recipes.gtceu.assembler('gregitas:packaged_greenhouse')
        .itemInputs(
            '32x firmalife:iron_greenhouse_wall',
            '32x firmalife:iron_greenhouse_wall',
            '32x firmalife:iron_greenhouse_wall',
            '12x firmalife:copper_pipe',
            '4x firmalife:sprinkler',
            '4x firmalife:iron_greenhouse_port',
            '4x gtceu:duct_tape',
            'firmalife:iron_greenhouse_door',
            'gtceu:wood_crate'
        )
        .inputFluids(
            Fluid.of('gtceu:concrete', 7056)
        )
        .itemOutputs(
            'gregitas:packaged_greenhouse'
        )
        .EUt(MV)
        .duration(100)
        
    event.recipes.gtceu.assembler('gregitas:greenhouse')
        .itemInputs(
            'gregitas:packaged_greenhouse',
            '32x firmalife:iron_greenhouse_wall',
            '11x firmalife:iron_greenhouse_wall',
            'gtceu:solid_machine_casing',
            '3x #gtceu:circuits/mv',
            '2x gtceu:copper_double_cable',
            '2x gtceu:lv_field_generator' 
        )
        .itemOutputs(
            'gtceu:greenhouse'
        )
        .EUt(MV)
        .duration(250)

    event.recipes.gtceu.chemical_vapor_deposition("gregitas:green_froglight")
        .itemInputs('3x gtceu:zinc_dust', '3x gtceu:sulfur_dust')
        .inputFluids('gtceu:copper 72')
        .itemOutputs('32x minecraft:verdant_froglight')
        .EUt(LV).duration(200)

    event.recipes.gtceu.chemical_vapor_deposition("gregitas:orange_froglight")
        .itemInputs('3x gtceu:zinc_dust', '3x gtceu:sulfur_dust')
        .inputFluids('gtceu:manganese 72')
        .itemOutputs('32x minecraft:ochre_froglight')
        .EUt(LV).duration(200)

    event.recipes.gtceu.chemical_vapor_deposition("gregitas:blue_froglight")
        .itemInputs('3x gtceu:zinc_dust', '3x gtceu:sulfur_dust')
        .inputFluids('gtceu:silver 72')
        .itemOutputs('32x minecraft:pearlescent_froglight')
        .EUt(LV).duration(200)
    
    event.recipes.gtceu.chemical_vapor_deposition("gregitas:tinted_glass")
        .itemInputs('1x #forge:dusts/amethyst', '4x #forge:glass')
        .itemOutputs('4x minecraft:tinted_glass')
        .EUt(LV).duration(200)
        
    /* Sugar Refinering */ {
        event.recipes.gtceu.extractor('cane_pulp')
            .itemInputs('1x tfc:food/sugarcane')
            .itemOutputs('1x gregitas:cane_pulp')
            .outputFluids(Fluid.of('gregitas:cane_syrup', 15))
            .EUt(LV)
            .duration(50)
        event.recipes.gtceu.centrifuge('cane_syrup')
            .itemInputs('1x gregitas:cane_pulp')
            .chancedOutput('1x gtceu:bio_chaff', 2000, 150)
            .outputFluids(Fluid.of('gregitas:cane_syrup', 150))
            .EUt(LV)
            .duration(110)
        event.recipes.gtceu.fluid_heater('sugar_syrup')
            .inputFluids(Fluid.of('gregitas:cane_syrup', 100))
            .outputFluids(Fluid.of('gregitas:sugar_syrup', 50))
            .circuit(1)
            .EUt(LV)
            .duration(25)
        event.recipes.gtceu.autoclave('sugar_crystallization')
            .inputFluids(Fluid.of('gregitas:sugar_syrup', 225))
            .itemOutputs('1x gtceu:sugar_block')
            .EUt(LV)
            .duration(110)
    }
    event.recipes.gtceu.extractor('seed_oil')
            .itemInputs('1x #tfc:seeds')
            .outputFluids(Fluid.of('gtceu:seed_oil', 10))
            .EUt(LV)
            .duration(50)
}
