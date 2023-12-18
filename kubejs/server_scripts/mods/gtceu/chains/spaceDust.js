// priority 10

let spaceDustChain = (/** @type {Internal.RecipesEventJS} */ event) => {
    // CATALYSTS (etc)
    event.recipes.gtceu.alloy_blast_smelter("hypogen_solder_catalyst")
        .itemInputs([
            '4x gtceu:unobtainium_dust',
            '1x gtceu:neutronium_dust',
        ])
        .inputFluids('gtceu:soldering_alloy 576')
        .outputFluids('gtceu:hypogen_solder_catalyst 1296')
        .EUt(UV).duration(100)

    event.recipes.gtceu.chemical_reactor("ultra_high_grade_hypogen_separation_agent")
        .itemInputs('4x minecraft:redstone')
        .inputFluids([
            'gtceu:star_matter 500',
            'gtceu:fluoroantimonic_acid 1000',
        ])
        .outputFluids('gtceu:ultra_high_grade_hypogen_separation_agent 1500')
        .EUt(UV).duration(100)

    event.recipes.gtceu.chemical_reactor("spacetime_reaction_catalyst")
        .itemInputs('1x gtceu:weapons_grade_naquadah_dust')
        .inputFluids([
            'gtceu:spacetime 288',
            'gtceu:star_matter 1000'
        ])
        .itemOutputs('4x gtceu:spacetime_reaction_catalyst_dust')
        .EUt(UV).duration(100)

    // START
    event.recipes.gtceu.electrolyzer("space_dust")
        .itemInputs('15x gtceu:space_dust')
        .itemOutputs([
            '1x gtceu:trace_minerals_dust',
            '1x gtceu:extraterrestial_materials_dust',
            '3x gtceu:rare_earth_dust',
            '5x gtceu:carbon_dust'
        ])
        .outputFluids([
            'gtceu:hydrogen 2000',
            'gtceu:helium 3000'
        ])
        .EUt(UHV).duration(60)

    event.recipes.gtceu.centrifuge("trace_minerals_dust")
        .itemInputs('6x gtceu:trace_minerals_dust')
        .itemOutputs([
            '1x gtceu:iron_dust',
            '1x gtceu:iodine_dust',
            '1x gtceu:chromium_dust',
            '1x gtceu:manganese_dust',
            '1x gtceu:rare_earth_tiny_dust'
        ])
        .outputFluids('gtceu:fluorine 2000')
        .EUt(UHV).duration(100)

    event.recipes.gtceu.centrifuge("extraterrestial_materials_dust")
        .itemInputs('40x gtceu:extraterrestial_materials_dust')
        .itemOutputs([
            '32x gtceu:ice_dust',
            '3x gtceu:allthemodium_naquadah_mixture_small_dust'
        ])
        .outputFluids([
            'gtceu:hydrogen_plasma 2250',
            'gtceu:helium_plasma 1250',
            'gtceu:raw_hypogen 1000',
            'gtceu:infinity_matter_precursor 250',
            'gtceu:spacetime 250'
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.electromagnetic_separator("allthemodium_naquadah_mixture_dust")
        .itemInputs('5x gtceu:allthemodium_naquadah_mixture_dust')
        .itemOutputs([
            '1x gtceu:allthemodium_dust',
            '4x gtceu:naquadah_dust',
        ])
        .EUt(IV).duration(60)

    // HYPOGEN
    event.recipes.gtceu.chemical_reactor("dirty_hypogen")
        .inputFluids([
            'gtceu:raw_hypogen 1000',
            'gtceu:ultra_high_grade_hypogen_separation_agent 1000',
        ])
        .outputFluids([
            'gtceu:dirty_hypogen 250',
            'gtceu:star_matter_plasma 750',
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.large_chemical_reactor("dirty_hypogen_solution")
        .inputFluids([
            'gtceu:dirty_hypogen 1000',
            'gtceu:fluoroantimonic_acid 1000',
        ])
        .outputFluids([
            'gtceu:dirty_hypogen_solution 1000',
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.gas_centrifuge("hypogen_purification")
        .inputFluids('gtceu:dirty_hypogen_solution 1000')
        .outputFluids([
            'gtceu:purified_hypogen_solution 100',
            'gtceu:impure_hypogen_solution 900',
        ])
        .EUt(UEV).duration(1200)

    // high grade hypogen
    event.recipes.gtceu.mixer("purified_hypogen_acidication")
        .inputFluids([
            'gtceu:purified_hypogen_solution 1000',
            'gtceu:phosphoric_acid 2000',
        ])
        .outputFluids('gtceu:acidic_purified_hypogen_solution 3000')
        .EUt(UEV).duration(200)

    event.recipes.gtceu.centrifuge("purified_hypogen_separation")
        .inputFluids('gtceu:acidic_purified_hypogen_solution 3000')
        .outputFluids([
            'gtceu:purified_hypogen_waste 2000',
            'gtceu:fluorine 500',
            'gtceu:molten_high_grade_hypogen 500',
        ])
        .EUt(UEV).duration(200)

    event.recipes.gtceu.distillation_tower("purified_hypogen_waste_distillation")
        .inputFluids('gtceu:purified_hypogen_waste 1000')
        .itemOutputs('1x gtceu:naquadria_sulfate_dust')
        .outputFluids([
            'gtceu:phosphoric_acid 500',
            'gtceu:purified_hypogen_solution 300',
            'gtceu:weapons_grade_hypogen_solution 100',
        ])
        .EUt(UEV).duration(300)

    event.recipes.gtceu.star_forge("melt_high_grade_hypogen")
        .itemInputs('8x gtceu:hypogen_solder_catalyst_dust')
        .inputFluids('gtceu:purified_hypogen_solution 1000')
        .outputFluids('gtceu:molten_high_grade_hypogen 1000')
        .EUt(UEV).duration(500)


    // low grade hypogen
    event.recipes.gtceu.mixer("impure_hypogen_acidication")
        .inputFluids([
            'gtceu:impure_hypogen_solution 1000',
            'gtceu:phosphoric_acid 2000',
        ])
        .outputFluids('gtceu:acidic_impure_hypogen_solution 3000')
        .EUt(UEV).duration(200)

    event.recipes.gtceu.centrifuge("impure_hypogen_separation")
        .inputFluids('gtceu:acidic_impure_hypogen_solution 3000')
        .outputFluids([
            'gtceu:impure_hypogen_waste 2000',
            'gtceu:fluorine 500',
            'gtceu:molten_low_grade_hypogen 500',
        ])
        .EUt(UEV).duration(200)

    event.recipes.gtceu.distillation_tower("impure_hypogen_waste_distillation")
        .inputFluids('gtceu:impure_hypogen_waste 1000')
        .itemOutputs('1x gtceu:enriched_naquadah_sulfate_dust')
        .outputFluids([
            'gtceu:phosphoric_acid 500',
            'gtceu:impure_hypogen_solution 300',
            'gtceu:purified_hypogen_solution 100',
        ])
        .EUt(UEV).duration(300)

    event.recipes.gtceu.star_forge("melt_low_grade_hypogen")
        .itemInputs('8x gtceu:hypogen_solder_catalyst_dust')
        .inputFluids('gtceu:impure_hypogen_solution 1000')
        .outputFluids('gtceu:molten_low_grade_hypogen 1000')
        .EUt(UEV).duration(500)

    event.recipes.gtceu.star_forge("melt_weapons_grade_hypogen")
        .itemInputs('24x gtceu:hypogen_solder_catalyst_dust')
        .inputFluids('gtceu:weapons_grade_hypogen_solution 1000')
        .outputFluids('gtceu:molten_weapons_grade_hypogen 1000')
        .EUt(UEV).duration(500)

    // INFINITY MATTER
    event.recipes.gtceu.mega_fusion_reactor("infinity_hypogen_alloy")
        .inputFluids([
            'gtceu:infinity_matter_precursor 750',
            'gtceu:molten_weapons_grade_hypogen 250',
        ])
        .outputFluids('gtceu:infinity_hypogen_alloy 1000')
        .EUt(UIV).duration(30)

    event.recipes.gtceu.mega_fusion_reactor("infinity_hypogen_alloy_plasma")
        .inputFluids('gtceu:infinity_hypogen_alloy 10')
        .outputFluids('gtceu:infinity_hypogen_alloy_plasma 10')
        .EUt(UIV).duration(30)

    event.recipes.gtceu.plasma_centrifuge("impure_infinity_matter_plasma")
        .inputFluids('gtceu:infinity_hypogen_alloy_plasma 1000')
        .outputFluids([
            'gtceu:impure_infinity_matter_plasma 750',
            'gtceu:weapons_grade_hypogen_plasma 250'
        ])
        .EUt(UIV).duration(300)

    event.recipes.gtceu.chemical_reactor("reactive_infinity_matter")
        .inputFluids('gtceu:impure_infinity_matter_plasma 1000')
        .itemInputs('2x gtceu:spacetime_reaction_catalyst_dust')
        .outputFluids('gtceu:reactive_infinity_matter 1000')
        .EUt(UIV).duration(100)

    event.recipes.gtceu.chemical_reactor("infinity_matter_sulfate")
        .inputFluids([
            'gtceu:reactive_infinity_matter 1000',
            'gtceu:sulfuric_acid 2000'
        ])
        .outputFluids('gtceu:infinity_matter_sulfate 1000')
        .itemOutputs('2x gtceu:spacetime_junk_dust')
        .EUt(UIV).duration(100)

    event.recipes.gtceu.centrifuge("spacetime_junk_dust")
        .itemInputs('7x gtceu:spacetime_junk_dust')
        .outputFluids([
            'gtceu:star_matter 2000',
            'gtceu:radon 4000'
        ])
        .itemOutputs([
            '2x gtceu:astatine_dust',
            '1x gtceu:darmstadtium_dust'
        ])
        .EUt(UHV).duration(400)

    event.recipes.gtceu.distillation_tower("infinity_matter_sulfate_distillation")
        .inputFluids('gtceu:infinity_matter_sulfate 3000')
        .itemOutputs('1x gtceu:spacetime_dust')
        .outputFluids([
            'gtceu:sulfuric_acid 2000',
            'gtceu:infinity_matter 1000',
        ])
        .EUt(UHV).duration(300)


    // PLASMA TURBINE
    event.recipes.gtceu.plasma_generator("star_matter_plasma")
        .inputFluids('gtceu:star_matter_plasma 1')
        .outputFluids('gtceu:star_matter 1')
        .EUt(-IV).duration(400)

    event.recipes.gtceu.plasma_generator("weapons_grade_hypogen_plasma")
        .inputFluids('gtceu:weapons_grade_hypogen_plasma 1')
        .outputFluids('gtceu:weapons_grade_hypogen 1')
        .EUt(-IV).duration(600)

    event.recipes.gtceu.vacuum_freezer("high_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gtceu:molten_high_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gtceu:high_grade_hypogen_ingot')
        .EUt(IV).duration(1200)

    event.recipes.gtceu.vacuum_freezer("low_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gtceu:molten_low_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gtceu:low_grade_hypogen_ingot')
        .EUt(IV).duration(1200)

    event.recipes.gtceu.vacuum_freezer("weapons_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gtceu:molten_weapons_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gtceu:weapons_grade_hypogen_ingot')
        .EUt(IV).duration(1200)
}
