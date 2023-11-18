let certusSemiconductors = (/** @type {Internal.RecipesEventJS} */ event) => {

    event.recipes.gtceu.electric_blast_furnace("certus_separation")
        .itemInputs([
            '1x gtceu:certus_quartz_dust',
            '2x gtceu:carbon_dust'
        ])
        .itemOutputs('1x gtceu:certus_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .EUt(MV).duration(100)

    event.recipes.gtceu.chemical_reactor("trichlorocertane")
        .itemInputs('1x gtceu:certus_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids([
            'gtceu:trichlorocertane 1000',
            'gtceu:hydrogen 2000'
        ])
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("dichlorocertane")
        .inputFluids('gtceu:trichlorocertane 2000')
        .outputFluids('gtceu:dichlorocertane 1000')
        .itemOutputs('1x gtceu:polycertus_gem')
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("chlorocertane")
        .inputFluids('gtceu:dichlorocertane 2000')
        .outputFluids([
            'gtceu:chlorocertane 1000',
            'gtceu:certus_tetrachloride 1000'
        ])
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_reactor("certane")
        .inputFluids('gtceu:chlorocertane 2000')
        .outputFluids([
            'gtceu:certane 1000',
            'gtceu:dichlorocertane 1000'
        ])
        .EUt(MV).duration(40)

    event.recipes.gtceu.chemical_vapor_deposition("certus_boule")
        .itemInputs('1x gtceu:silicon_wafer')
        .inputFluids('gtceu:certane 16000')
        .itemOutputs('1x gregitas:certus_boule')
        .EUt(MV).duration(1600)
}