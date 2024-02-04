// priority 10

let certusSemiconductors = (/** @type {Internal.RecipesEventJS} */ event) => {
    // PROCESSING THE CERTUS
    event.recipes.gtceu.electric_blast_furnace("certus_separation")
        .itemInputs([
            '1x gtceu:certus_quartz_dust',
            '2x gtceu:carbon_dust'
        ])
        .itemOutputs('1x gregitas_core:certus_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .blastFurnaceTemp(1000)
        .EUt(MV).duration(100)

    event.recipes.gtceu.chemical_reactor("trichlorocertane")
        .itemInputs('1x gregitas:certus_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids([
            'gregitas_core:trichlorocertane 1000',
            'gtceu:hydrogen 2000'
        ])
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("dichlorocertane")
        .inputFluids('gregitas_core:trichlorocertane 2000')
        .outputFluids('gregitas_core:dichlorocertane 1000')
        .itemOutputs('1x gregitas_core:certus_gem')
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("chlorocertane")
        .inputFluids('gregitas_core:dichlorocertane 2000')
        .outputFluids([
            'gregitas_core:chlorocertane 1000',
            'gregitas_core:certus_tetrachloride 1000'
        ])
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("certane")
        .inputFluids('gregitas_core:chlorocertane 2000')
        .outputFluids([
            'gregitas_core:certane 1000',
            'gregitas_core:dichlorocertane 1000'
        ])
        .EUt(MV).duration(40)


    // CIRCUIT STUFF
    event.recipes.gtceu.chemical_vapor_deposition("certus_boule")
        .itemInputs('1x gtceu:silicon_wafer')
        .inputFluids('gregitas_core:certane 16000')
        .itemOutputs('1x gregitas:certus_boule')
        .EUt(MV).duration(1600)

    event.recipes.gtceu.cutter("cut_certus_boule_water")
        .itemInputs('1x gregitas:certus_boule')
        .itemOutputs('16x gregitas:certus_wafer')
        .inputFluids('minecraft:water 45')
        .duration(600).EUt(48)
    event.recipes.gtceu.cutter("cut_certus_boule_distilled_water")
        .itemInputs('1x gregitas:certus_boule')
        .itemOutputs('16x gregitas:certus_wafer')
        .inputFluids('gtceu:distilled_water 34')
        .duration(450).EUt(48)
    event.recipes.gtceu.cutter("cut_certus_boule")
        .itemInputs('1x gregitas:certus_boule')
        .itemOutputs('16x gregitas:certus_wafer')
        .inputFluids('gtceu:lubricant 11')
        .duration(300).EUt(48)

    event.recipes.gtceu.laser_engraver("engrave_engineering_certus")
        .itemInputs('1x gregitas:certus_wafer')
        .notConsumable('1x #forge:lenses/blue')
        .itemOutputs('1x gregitas:engineering_wafer')
        .duration(900).EUt(MV)
    event.recipes.gtceu.laser_engraver("engrave_calculation_certus")
        .itemInputs('1x gregitas:certus_wafer')
        .notConsumable('1x #forge:lenses/light_blue')
        .itemOutputs('1x gregitas:calculation_wafer')
        .duration(900).EUt(MV)
    event.recipes.gtceu.laser_engraver("engrave_logic_certus")
        .itemInputs('1x gregitas:certus_wafer')
        .notConsumable('1x #forge:lenses/red')
        .itemOutputs('1x gregitas:logic_wafer')
        .duration(900).EUt(MV)


    // Cut into printed stuff
    event.remove({id: "ae2:inscriber/engineering_processor_print"})
    event.remove({id: "ae2:inscriber/calculation_processor_print"})
    event.remove({id: "ae2:inscriber/logic_processor_print"})

    event.recipes.gtceu.cutter("cut_engineering_water")
        .itemInputs('1x gregitas:engineering_wafer')
        .itemOutputs('8x ae2:printed_engineering_processor')
        .inputFluids('minecraft:water 338')
        .duration(1800).EUt(MV)
    event.recipes.gtceu.cutter("cut_engineering_distilled_water")
        .itemInputs('1x gregitas:engineering_wafer')
        .itemOutputs('8x ae2:printed_engineering_processor')
        .inputFluids('gtceu:distilled_water 254')
        .duration(1350).EUt(MV)
    event.recipes.gtceu.cutter("cut_engineering")
        .itemInputs('1x gregitas:engineering_wafer')
        .itemOutputs('8x ae2:printed_engineering_processor')
        .inputFluids('gtceu:lubricant 84')
        .duration(900).EUt(MV)

    event.recipes.gtceu.cutter("cut_calculation_water")
        .itemInputs('1x gregitas:calculation_wafer')
        .itemOutputs('8x ae2:printed_calculation_processor')
        .inputFluids('minecraft:water 338')
        .duration(1800).EUt(MV)
    event.recipes.gtceu.cutter("cut_calculation_distilled_water")
        .itemInputs('1x gregitas:calculation_wafer')
        .itemOutputs('8x ae2:printed_calculation_processor')
        .inputFluids('gtceu:distilled_water 254')
        .duration(1350).EUt(MV)
    event.recipes.gtceu.cutter("cut_calculation")
        .itemInputs('1x gregitas:calculation_wafer')
        .itemOutputs('8x ae2:printed_calculation_processor')
        .inputFluids('gtceu:lubricant 84')
        .duration(900).EUt(MV)

    event.recipes.gtceu.cutter("cut_logic_water")
        .itemInputs('1x gregitas:logic_wafer')
        .itemOutputs('8x ae2:printed_logic_processor')
        .inputFluids('minecraft:water 338')
        .duration(1800).EUt(MV)
    event.recipes.gtceu.cutter("cut_logic_distilled_water")
        .itemInputs('1x gregitas:logic_wafer')
        .itemOutputs('8x ae2:printed_logic_processor')
        .inputFluids('gtceu:distilled_water 254')
        .duration(1350).EUt(MV)
    event.recipes.gtceu.cutter("cut_logic")
        .itemInputs('1x gregitas:logic_wafer')
        .itemOutputs('8x ae2:printed_logic_processor')
        .inputFluids('gtceu:lubricant 84')
        .duration(900).EUt(MV)


    event.remove({id: "ae2:inscriber/engineering_processor"})
    event.remove({id: "ae2:inscriber/calculation_processor"})
    event.remove({id: "ae2:inscriber/logic_processor"})

    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "gtceu:plastic_printed_circuit_board"
            },
            middle: {
                item: "gtceu:red_alloy_fine_wire",
            },
            top: {
                item: "ae2:printed_engineering_processor"
            }
        },
        mode: "press",
        result: {
          item: "ae2:engineering_processor"
        }
    }).id("gregitas:inscriber/engineering_processor")
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "gtceu:plastic_printed_circuit_board"
            },
            middle: {
                item: "gtceu:red_alloy_fine_wire",
            },
            top: {
                item: "ae2:printed_calculation_processor"
            }
        },
        mode: "press",
        result: {
          item: "ae2:calculation_processor"
        }
    }).id("gregitas:inscriber/calculation_processor")
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "gtceu:plastic_printed_circuit_board"
            },
            middle: {
                item: "gtceu:red_alloy_fine_wire",
            },
            top: {
                item: "ae2:printed_logic_processor"
            }
        },
        mode: "press",
        result: {
          item: "ae2:logic_processor"
        }
    }).id("gregitas:inscriber/logic_processor")

    event.replaceInput({ mod: "ae2" }, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
}
