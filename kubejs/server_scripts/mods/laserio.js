let gregifyLaserIO = (/** @type {Internal.RecipesEventJS} */ event) => {

    // Remove most LaserIO recipes
    event.remove({ id: "laserio:logic_chip" })
    event.remove({ id: "laserio:logic_chip_raw" })
    event.remove({ id: "laserio:laser_node" })
    event.remove({ id: "laserio:laser_connector" })
    event.remove({ id: "laserio:laser_connector_advanced" })
    event.remove({ id: "laserio:overclocker_card" })
    event.remove({ id: "laserio:overclocker_node" })
    event.remove({ id: "laserio:card_item" })
    event.remove({ id: "laserio:card_fluid" })
    event.remove({ id: "laserio:card_redstone" })
    event.remove({ id: "laserio:card_energy" })
    event.remove({ id: "laserio:filter_basic" })
    event.remove({ id: "laserio:filter_nbt" })
    event.remove({ id: "laserio:filter_mod" })
    event.remove({ id: "laserio:filter_tag" })
    event.remove({ id: "laserio:filter_count" })

    // Tweak what remains
    event.replaceInput({ mod: "laserio" }, "minecraft:iron_ingot", "#forge:plates/iron")

    // Add new GregTech recipes to replace the ones we just removed
    event.recipes.gtceu
      .chemical_reactor("gregitas:logic_chip_raw")
      .itemInputs(
        "1x gtceu:cpu_wafer",
        "2x #forge:dusts/gold"
      )
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs("4x laserio:logic_chip_raw")
      .cleanroom(CleanroomType.CLEANROOM)
      .duration(1200)
      .EUt(482)

    event.recipes.gtceu
      .laser_engraver("gregitas:logic_chip")
      .itemInputs('1x laserio:logic_chip_raw')
      .notConsumable('1x #forge:lenses/white')
      .itemOutputs('1x laserio:logic_chip')
      .cleanroom(CleanroomType.CLEANROOM)
      .duration(300)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:laser_node")
      .itemInputs(
        '1x laserio:logic_chip',
        '4x #forge:plates/iron',
        '4x gtceu:glass_plate'
      )
      .circuit(1)
      .itemOutputs('1x laserio:laser_node')
      .duration(80)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:laser_connector")
      .itemInputs(
        '1x laserio:logic_chip',
        '3x #forge:plates/iron',
        '1x gtceu:glass_plate'
      )
      .circuit(3)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:laser_connector')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:laser_connector_advanced")
      .itemInputs(
        '1x laserio:laser_connector',
        '3x #forge:plates/gold',
        '1x gtceu:quantum_eye'
      )
      .circuit(1)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:laser_connector_advanced')
      .duration(360)
      .EUt(1024)

    event.recipes.gtceu
      .assembler("gregitas:overclocker_card")
      .itemInputs(
        '1x laserio:logic_chip',
        '4x #forge:plates/gold'
      )
      .circuit(1)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:overclocker_card')
      .duration(320)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:overclocker_node")
      .itemInputs(
        '1x laserio:logic_chip',
        '4x #forge:plates/diamond'
      )
      .circuit(1)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:overclocker_node')
      .duration(320)
      .EUt(1188)

    event.recipes.gtceu
      .assembler("gregitas:card_item")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '1x #forge:plates/steel'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_item')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:card_fluid_lapis")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '1x #forge:plates/lapis'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_fluid')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:card_fluid_lazurite")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '1x #forge:plates/lazurite'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_fluid')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:card_fluid_sodalite")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '1x #forge:plates/sodalite'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_fluid')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:card_redstone")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '4x #forge:fine_wires/red_alloy'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_redstone')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:card_energy")
      .itemInputs(
        '1x laserio:logic_chip',
        '1x #forge:plates/gold',
        '4x gtceu:red_alloy_single_cable'
      )
      .circuit(8)
      .inputFluids(Fluid.of("gtceu:red_alloy", 144))
      .itemOutputs('1x laserio:card_energy')
      .duration(160)
      .EUt(512)

    event.recipes.gtceu
      .assembler("gregitas:filter_basic")
      .itemInputs(
        '1x laserio:logic_chip',
        '3x #forge:rods/iron'
      )
      .circuit(1)
      .inputFluids(Fluid.of("gtceu:glass", 144))
      .itemOutputs('1x laserio:filter_basic')
      .duration(40)
      .EUt(512)

    event.recipes.gtceu
      .canner("gregitas:filter_nbt")
      .itemInputs(
        '1x laserio:filter_basic',
        '1x #minecraft:wool'
      )
      .itemOutputs('1x laserio:filter_nbt')
      .duration(40)
      .EUt(512)

    event.recipes.gtceu
      .canner("gregitas:filter_mod")
      .itemInputs(
        '1x laserio:filter_basic',
        '1x minecraft:book'
      )
      .itemOutputs('1x laserio:filter_mod')
      .duration(40)
      .EUt(512)

    event.recipes.gtceu
      .canner("gregitas:filter_tag")
      .itemInputs(
        '1x laserio:filter_basic',
        '1x minecraft:paper'
      )
      .itemOutputs('1x laserio:filter_tag')
      .duration(40)
      .EUt(512)

    event.recipes.gtceu
      .canner("gregitas:filter_count")
      .itemInputs(
        '1x laserio:filter_basic',
        '1x minecraft:observer'
      )
      .itemOutputs('1x laserio:filter_count')
      .duration(40)
      .EUt(512)
}