// priority 10

let gtceuCircuits = (/** @type {Internal.RecipesEventJS} */ event) => {
  //bioware
    event.recipes.gtceu.chemical_reactor("bio_medium")
        .inputFluids('gtceu:sterile_growth_medium 1000')
        .itemInputs([
            '1x #forge:dusts/allthemodium',
            '5x gtceu:plutonium_dust'
        ])
        .outputFluids('gtceu:bio_medium 1000')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(UV).duration(20)

    event.recipes.gtceu.autoclave("bio_cells")
        .inputFluids('gtceu:bio_medium 500')
        .itemInputs('1x gregitas:life_crystal')
        .itemOutputs('8x gregitas:bio_cells')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(UV).duration(200)

    event.recipes.gtceu.circuit_assembler('bio_processor')
        .itemInputs([
            '1x gregitas:bioware_printed_circuit_board',
            '16x gregitas:bio_cells',
            '8x gtceu:polybenzimidazole_pipe_small_fluid',
            '8x gtceu:plutonium_241_plate',
            '16x gtcue:styrene_butadiene_rubber_foil',
            '8x gtceu:hastelloy_c_276_bolt'
        ])
}