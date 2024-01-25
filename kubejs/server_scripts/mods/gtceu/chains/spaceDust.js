// priority 10

let spaceDustChain = (/** @type {Internal.RecipesEventJS} */ event) => {
    // CATALYSTS (etc)
    event.recipes.gtceu.alloy_blast_smelter("hypogen_solder_catalyst")
        .itemInputs([
            '4x gtceu:unobtainium_dust',
            '1x gtceu:neutronium_dust',
        ])
        .inputFluids('gtceu:soldering_alloy 576')
        .outputFluids('gregitas_core:hypogen_solder_catalyst 1296')
        .EUt(UV).duration(100)

    event.recipes.gtceu.chemical_reactor("ultra_high_grade_hypogen_separation_agent")
        .itemInputs('4x minecraft:redstone')
        .inputFluids([
            'gtceu:star_matter 500',
            'gtceu:fluoroantimonic_acid 1000',
        ])
        .outputFluids('gregitas_core:ultra_high_grade_hypogen_separation_agent 1500')
        .EUt(UV).duration(100)

    event.recipes.gtceu.chemical_reactor("spacetime_reaction_catalyst")
        .itemInputs('1x gtceu:weapons_grade_naquadah_dust')
        .inputFluids([
            'gtceu:spacetime 288',
            'gtceu:star_matter 1000'
        ])
        .itemOutputs('4x gregitas_core:spacetime_reaction_catalyst_dust')
        .EUt(UV).duration(100)

    // START
    event.recipes.gtceu.electrolyzer("space_dust")
        .itemInputs('15x gtceu:space_dust')
        .itemOutputs([
            '1x gregitas_core:trace_minerals_dust',
            '1x gregitas_core:extraterrestial_materials_dust',
            '3x gtceu:rare_earth_dust',
            '5x gtceu:carbon_dust'
        ])
        .outputFluids([
            'gtceu:hydrogen 2000',
            'gtceu:helium 3000'
        ])
        .EUt(UHV).duration(60)

    event.recipes.gtceu.centrifuge("trace_minerals_dust")
        .itemInputs('6x gregitas_core:trace_minerals_dust')
        .itemOutputs([
            '1x gtceu:iron_dust',
            '1x gtceu:iodine_dust',
            '1x gtceu:chromium_dust',
            '1x gtceu:manganese_dust',
            '1x gtceu:tiny_rare_earth_dust'
        ])
        .outputFluids('gtceu:fluorine 2000')
        .EUt(UHV).duration(100)

    event.recipes.gtceu.centrifuge("extraterrestial_materials_dust")
        .itemInputs('40x gregitas_core:extraterrestial_materials_dust')
        .itemOutputs([
            '32x gtceu:ice_dust',
            '3x gregitas_core:small_allthemodium_naquadah_mixture_dust'
        ])
        .outputFluids([
            'gtceu:hydrogen_plasma 2250',
            'gtceu:helium_plasma 1250',
            'gregitas_core:raw_hypogen 1000',
            'gregitas_core:infinity_matter_precursor 250',
            'gregitas_core:spacetime 250'
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.electromagnetic_separator("allthemodium_naquadah_mixture_dust")
        .itemInputs('5x gregitas_core:allthemodium_naquadah_mixture_dust')
        .itemOutputs([
            '1x gregitas_core:allthemodium_dust',
            '4x gtceu:naquadah_dust',
        ])
        .EUt(IV).duration(60)

    // HYPOGEN
    event.recipes.gtceu.chemical_reactor("dirty_hypogen")
        .inputFluids([
            'gregitas_core:raw_hypogen 1000',
            'gregitas_core:ultra_high_grade_hypogen_separation_agent 1000',
        ])
        .outputFluids([
            'gregitas_core:dirty_hypogen 250',
            'gregitas_core:star_matter_plasma 750',
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.large_chemical_reactor("dirty_hypogen_solution")
        .inputFluids([
            'gregitas_core:dirty_hypogen 1000',
            'gtceu:fluoroantimonic_acid 1000',
        ])
        .outputFluids([
            'gregitas_core:dirty_hypogen_solution 1000',
        ])
        .EUt(UHV).duration(200)

    event.recipes.gtceu.gas_centrifuge("hypogen_purification")
        .inputFluids('gregitas_core:dirty_hypogen_solution 1000')
        .outputFluids([
            'gregitas_core:purified_hypogen_solution 100',
            'gregitas_core:impure_hypogen_solution 900',
        ])
        .EUt(UEV).duration(1200)

    // high grade hypogen
    event.recipes.gtceu.mixer("purified_hypogen_acidication")
        .inputFluids([
            'gregitas_core:purified_hypogen_solution 1000',
            'gtceu:phosphoric_acid 2000',
        ])
        .outputFluids('gregitas_core:acidic_purified_hypogen_solution 3000')
        .EUt(UEV).duration(200)

    event.recipes.gtceu.centrifuge("purified_hypogen_separation")
        .inputFluids('gregitas_core:acidic_purified_hypogen_solution 3000')
        .outputFluids([
            'gregitas_core:purified_hypogen_waste 2000',
            'gtceu:fluorine 500',
            'gregitas_core:molten_high_grade_hypogen 500',
        ])
        .EUt(UEV).duration(200)

    event.recipes.gtceu.distillation_tower("purified_hypogen_waste_distillation")
        .inputFluids('gregitas_core:purified_hypogen_waste 1000')
        .itemOutputs('1x gtceu:naquadria_sulfate_dust')
        .outputFluids([
            'gtceu:phosphoric_acid 500',
            'gregitas_core:purified_hypogen_solution 300',
            'gregitas_core:weapons_grade_hypogen_solution 100',
        ])
        .EUt(UEV).duration(300)

    event.recipes.gtceu.star_forge("melt_high_grade_hypogen")
        .itemInputs('8x gregitas_core:hypogen_solder_catalyst_dust')
        .inputFluids('gregitas_core:purified_hypogen_solution 1000')
        .outputFluids('gregitas_core:molten_high_grade_hypogen 1000')
        .EUt(UEV).duration(500)


    // low grade hypogen
    event.recipes.gtceu.mixer("impure_hypogen_acidication")
        .inputFluids([
            'gregitas_core:impure_hypogen_solution 1000',
            'gtceu:phosphoric_acid 2000',
        ])
        .outputFluids('gregitas_core:acidic_impure_hypogen_solution 3000')
        .EUt(UEV).duration(200)

    event.recipes.gtceu.centrifuge("impure_hypogen_separation")
        .inputFluids('gregitas_core:acidic_impure_hypogen_solution 3000')
        .outputFluids([
            'gregitas_core:impure_hypogen_waste 2000',
            'gtceu:fluorine 500',
            'gregitas_core:molten_low_grade_hypogen 500',
        ])
        .EUt(UEV).duration(200)

    event.recipes.gtceu.distillation_tower("impure_hypogen_waste_distillation")
        .inputFluids('gregitas_core:impure_hypogen_waste 1000')
        .itemOutputs('1x gtceu:enriched_naquadah_sulfate_dust')
        .outputFluids([
            'gtceu:phosphoric_acid 500',
            'gregitas_core:impure_hypogen_solution 300',
            'gregitas_core:purified_hypogen_solution 100',
        ])
        .EUt(UEV).duration(300)

    event.recipes.gtceu.star_forge("melt_low_grade_hypogen")
        .itemInputs('8x gregitas_core:hypogen_solder_catalyst_dust')
        .inputFluids('gregitas_core:impure_hypogen_solution 1000')
        .outputFluids('gregitas_core:molten_low_grade_hypogen 1000')
        .EUt(UEV).duration(500)

    event.recipes.gtceu.star_forge("melt_weapons_grade_hypogen")
        .itemInputs('24x gregitas_core:hypogen_solder_catalyst_dust')
        .inputFluids('gregitas_core:weapons_grade_hypogen_solution 1000')
        .outputFluids('gregitas_core:molten_weapons_grade_hypogen 1000')
        .EUt(UEV).duration(500)

    // INFINITY MATTER
    event.recipes.gtceu.mega_fusion_reactor("infinity_hypogen_alloy")
        .inputFluids([
            'gregitas_core:infinity_matter_precursor 750',
            'gregitas_core:molten_weapons_grade_hypogen 250',
        ])
        .outputFluids('gregitas_core:infinity_hypogen_alloy 1000')
        .EUt(UIV).duration(30)

    event.recipes.gtceu.mega_fusion_reactor("infinity_hypogen_alloy_plasma")
        .inputFluids('gregitas_core:infinity_hypogen_alloy 10')
        .outputFluids('gregitas_core:infinity_hypogen_alloy_plasma 10')
        .EUt(UIV).duration(30)

    event.recipes.gtceu.plasma_centrifuge("impure_infinity_matter_plasma")
        .inputFluids('gregitas_core:infinity_hypogen_alloy_plasma 1000')
        .outputFluids([
            'gregitas_core:impure_infinity_matter_plasma 750',
            'gregitas_core:weapons_grade_hypogen_plasma 250'
        ])
        .EUt(UIV).duration(300)

    event.recipes.gtceu.chemical_reactor("reactive_infinity_matter")
        .inputFluids('gregitas_core:impure_infinity_matter_plasma 1000')
        .itemInputs('2x gregitas_core:spacetime_reaction_catalyst_dust')
        .outputFluids('gregitas_core:reactive_infinity_matter 1000')
        .EUt(UIV).duration(100)

    event.recipes.gtceu.chemical_reactor("infinity_matter_sulfate")
        .inputFluids([
            'gregitas_core:reactive_infinity_matter 1000',
            'gtceu:sulfuric_acid 2000'
        ])
        .outputFluids('gregitas_core:infinity_matter_sulfate 1000')
        .itemOutputs('2x gregitas_core:spacetime_junk_dust')
        .EUt(UIV).duration(100)

    event.recipes.gtceu.centrifuge("spacetime_junk_dust")
        .itemInputs('7x gregitas_core:spacetime_junk_dust')
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
        .inputFluids('gregitas_core:infinity_matter_sulfate 3000')
        .itemOutputs('1x gregitas_core:spacetime_dust')
        .outputFluids([
            'gtceu:sulfuric_acid 2000',
            'gregitas_core:infinity_matter 1000',
        ])
        .EUt(UHV).duration(300)


    // PLASMA TURBINE
    event.recipes.gtceu.plasma_generator("star_matter_plasma")
        .inputFluids('gtceu:star_matter_plasma 1')
        .outputFluids('gtceu:star_matter 1')
        .EUt(-IV).duration(400)

    event.recipes.gtceu.plasma_generator("weapons_grade_hypogen_plasma")
        .inputFluids('gregitas_core:weapons_grade_hypogen_plasma 1')
        .outputFluids('gregitas_core:weapons_grade_hypogen 1')
        .EUt(-IV).duration(600)

    event.recipes.gtceu.vacuum_freezer("high_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gregitas_core:molten_high_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gregitas_core:high_grade_hypogen_ingot')
        .EUt(IV).duration(1200)

    event.recipes.gtceu.vacuum_freezer("low_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gregitas_core:molten_low_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gregitas_core:low_grade_hypogen_ingot')
        .EUt(IV).duration(1200)

    event.recipes.gtceu.vacuum_freezer("weapons_grade_hypogen")
        .itemInputs('1x gtceu:ingot_casting_mold')
        .inputFluids([
            'gregitas_core:molten_weapons_grade_hypogen 144',
            'gtceu:liquid_nitrogen 500'
        ])
        .outputFluids('gtceu:nitrogen 250')
        .itemOutputs('1x gregitas_core:weapons_grade_hypogen_ingot')
        .EUt(IV).duration(1200)
}
