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

    event.recipes.gtceu.circuit_assembler("bio_processor")
        .itemInputs([
            '1x gregitas:bioware_printed_circuit_board',
            '16x gregitas:bio_cells',
            '8x gtceu:kapton_k_pipe_small_fluid',
            '8x gtceu:plutonium_241_plate',
            '16x gtceu:styrene_butadiene_rubber_foil',
            '8x gtceu:hastelloy_c_276_bolt'
        ])
        .inputFluids('gtceu:bio_medium 250')
        .itemOutputs('1x gregitas:bio_processor')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(160000).duration(200)
        
    event.recipes.gtceu.circuit_assembler("bioware_processor_uhv")
        .itemInputs([
            '1x gregitas:bio_processor',
            '1x gtceu:qbit_cpu_chip',
            '8x gregitas:highly_advanced_smd_capacitor',
            '8x gregitas:highly_advanced_smd_transistor',
            '8x gtceu:enriched_naquadah_trinium_europium_duranide_fine_wire'
        ])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x gregitas:bioware_processor')
        .cleanroom(CleanroomType.getByName("cleanerroom"))
        .EUt(153600).duration(200)
        
    event.recipes.gtceu.circuit_assembler("bioware_processor_assembly_uev")
        .itemInputs([
            '1x gregitas:bioware_printed_circuit_board',
            '2x gregitas:bioware_processor',
            '6x gregitas:highly_advanced_smd_inductor',
            '12x gregitas:highly_advanced_smd_capacitor',
            '32x gtceu:ram_chip',
            '16x gtceu:enriched_naquadah_trinium_europium_duranide_fine_wire'
        ])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x gregitas:bioware_processor_assembly')
        .cleanroom(CleanroomType.getByName("cleanerroom"))
        .EUt(153600).duration(400)
        
    event.recipes.gtceu.assembly_line("bioware_super_computer_uiv")
        .itemInputs([
            '1x gregitas:bioware_printed_circuit_board',
            '2x gregitas:bioware_processor_computer',
            '8x gregitas:highly_advanced_smd_diode',
            '32x gtceu:nor_memory_chip',
            '64x gtceu:ram_chip',
            '48x gtceu:enriched_naquadah_trinium_europium_duranide_fine_wire',
            '4x gtceu:neutronium_plate',
        ])
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('1x gregitas:bioware_processor_computer')
        .cleanroom(CleanroomType.getByName("cleanerroom"))
        .EUt(153600).duration(400)
        
    event.recipes.gtceu.assembly_line("bioware_mainframe_uxv")
        .itemInputs([
            '2x gtceu:neutronium_frame', 
            '2x gregitas:bioware_processor_computer',
            '32x gregitas:highly_advanced_smd_diode',
            '32x gregitas:highly_advanced_smd_capacitor',
            '32x gregitas:highly_advanced_smd_transistor',
            '32x gregitas:highly_advanced_smd_resistor',
            '32x gregitas:highly_advanced_smd_inductor',
            '64x gtceu:kapton_k_foil',
            '64x gtceu:ram_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '8x gtceu:neutronium_plate',
        ])
        .inputFluids([
            'gtceu:soldering_alloy 2880',
            'gtceu:kapton_k 1152',
        ])
        .itemOutputs('1x gregitas:bioware_processor_mainframe')
        .cleanroom(CleanroomType.getByName("cleanerroom"))
        .EUt(1200000).duration(2000)

  //sculkware
    event.recipes.gtceu.brewery("cultivate_sculk")
        .
}