let gregifyAE2 = (/** @type {Internal.RecipesEventJS} */ event) => {
  //Formation & Annihilation Cores
  event.remove([
    {
      id: "ae2:materials/formationcore"
    },
    {
      id: "ae2:materials/annihilationcore"
    }
  ])

  event.recipes.gtceu
    .assembler("gregitas:formation_core")
    .itemInputs("gtceu:certus_quartz_gem", "ae2:fluix_dust", "ae2:logic_processor")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("2x ae2:formation_core")
    .duration(100)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:annihilation_core")
    .itemInputs("minecraft:quartz", "ae2:fluix_dust", "ae2:logic_processor")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("2x ae2:annihilation_core")
    .duration(100)
    .EUt(MV)

  //Fluix
  event.recipes.gtceu
    .polarizer("gregitas:charged_certus")
    .itemInputs("gtceu:certus_quartz_gem")
    .itemOutputs("ae2:charged_certus_quartz_crystal")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .mixer("gregitas:fluix_from_quartz")
    .itemInputs("ae2:charged_certus_quartz_crystal", "minecraft:redstone", "#forge:gems/quartz")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("2x ae2:fluix_crystal")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .mixer("gregitas:fluix_from_dust")
    .itemInputs("ae2:charged_certus_quartz_crystal", "#forge:dusts/fluix")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("2x ae2:fluix_crystal")
    .duration(50)
    .EUt(LV)
  event.recipes.create.mixing("2x ae2:fluix_crystal", [Fluid.of("minecraft:water", 250), "ae2:charged_certus_quartz_crystal", "#forge:dusts/fluix"])
    .id("gregitas:mixing/fluix_from_dust")

  //Cables
  event.remove([
    {
      id: "ae2:network/parts/quartz_fiber_part"
    },
    {
      id: "ae2:network/cables/glass_fluix"
    },
    {
      id: "ae2:network/cables/glass_fluix_clean"
    },
    {
      id: "ae2:network/cables/covered_fluix"
    },
    {
      id: "ae2:network/cables/covered_fluix_clean"
    },
    {
      id: "ae2:network/cables/dense_covered_fluix"
    },
    {
      id: "ae2:network/cables/dense_covered_fluix_clean"
    },
    {
      id: "ae2:network/cables/smart_fluix"
    },
    {
      id: "ae2:network/cables/smart_fluix_clean"
    },
    {
      id: "ae2:network/cables/dense_smart_fluix"
    },
    {
      id: "ae2:network/cables/dense_smart_fluix_clean"
    },
    {
      id: "ae2:network/cables/dense_smart_from_smart"
    }
  ])

  //Quartz Fiber
  event.recipes.gtceu
    .wiremill("gregitas:certus_quartz_fiber")
    .itemInputs("gtceu:certus_quartz_gem")
    .itemOutputs("2x ae2:quartz_fiber")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .wiremill("gregitas:quartz_fiber")
    .itemInputs("#forge:gems/quartz")
    .itemOutputs("2x ae2:quartz_fiber")
    .duration(50)
    .EUt(LV)

  //ME Cables
  event.recipes.gtceu
    .assembler("gregitas:me_fluix_cable_glass")
    .itemInputs("ae2:quartz_fiber", "2x ae2:fluix_crystal")
    .inputFluids(Fluid.of("gtceu:glass", 144))
    .itemOutputs("2x ae2:fluix_glass_cable")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:me_fluix_cable_borosilicate_glass")
    .itemInputs("ae2:quartz_fiber", "2x ae2:fluix_crystal")
    .inputFluids(Fluid.of("gtceu:borosilicate_glass", 72))
    .itemOutputs("4x ae2:fluix_glass_cable")
    .duration(100)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:me_fluix_cable_fiber_glass")
    .itemInputs("ae2:quartz_fiber", "2x ae2:fluix_crystal")
    .inputFluids(Fluid.of("gcyr:fiberglass", 36))
    .itemOutputs("8x ae2:fluix_glass_cable")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .chemical_bath("gregitas:me_fluix_glass_cleaning")
    .itemInputs("#ae2:glass_cable")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("ae2:fluix_glass_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.splashing("ae2:fluix_glass_cable", "#ae2:glass_cable")
    .id("gregitas:splashing/me_fluix_glass_cleaning")

  //Covered Cables
  event.recipes.gtceu
    .assembler("gregitas:me_covered_cable_rubber")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids(Fluid.of("gtceu:rubber", 144))
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.filling("ae2:fluix_covered_cable", ["ae2:fluix_glass_cable", Fluid.of("gtceu:rubber", 144)])
    .id("gregitas:filling/me_covered_cable_rubber")

  event.recipes.gtceu
    .assembler("gregitas:me_covered_cable_silicone")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids(Fluid.of("gtceu:silicone_rubber", 72))
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.filling("ae2:fluix_covered_cable", ["ae2:fluix_glass_cable", Fluid.of("gtceu:silicone_rubber", 72)])
    .id("gregitas:filling/me_covered_cable_silicone")

  event.recipes.gtceu
    .assembler("gregitas:me_covered_cable_styrene")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids(Fluid.of("gtceu:styrene_butadiene_rubber", 36))
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.filling("ae2:fluix_covered_cable", ["ae2:fluix_glass_cable", Fluid.of("gtceu:styrene_butadiene_rubber", 36)])
    .id("gregitas:filling/me_covered_cable_styrene")

  event.recipes.gtceu
    .chemical_bath("gregitas:me_covered_fluix_cleaning")
    .itemInputs("#ae2:covered_cable")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.splashing("ae2:fluix_covered_cable", "#ae2:covered_cable")
    .id("gregitas:splashing/me_covered_fluix_cleaning")

  event.recipes.gtceu
    .assembler("gregitas:me_dense_covered_fluix")
    .circuit(4)
    .itemInputs("4x ae2:fluix_covered_cable")
    .itemOutputs("ae2:fluix_covered_dense_cable")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .chemical_bath("gregitas:me_dense_covered_fluix_cleaning")
    .itemInputs("#ae2:covered_dense_cable")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("ae2:fluix_covered_dense_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.splashing("ae2:fluix_covered_dense_cable", "#ae2:covered_dense_cable")
    .id("gregitas:splashing/me_dense_covered_fluix_cleaning")

  //Smart Cables
  event.recipes.gtceu
    .chemical_bath("gregitas:me_smart_fluix_cleaning")
    .itemInputs("#ae2:smart_cable")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("ae2:fluix_smart_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.splashing("ae2:fluix_smart_cable", "#ae2:smart_cable")
    .id("gregitas:splashing/me_smart_fluix_cleaning")

  event.recipes.gtceu
    .assembler("gregitas:me_smart_dense_fluix")
    .circuit(4)
    .itemInputs("4x ae2:fluix_smart_cable")
    .itemOutputs("ae2:fluix_smart_dense_cable")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .chemical_bath("gregitas:me_smart_dense_fluix_cleaning")
    .itemInputs("#ae2:smart_dense_cable")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("ae2:fluix_smart_dense_cable")
    .duration(50)
    .EUt(LV)
  event.recipes.create.splashing("ae2:fluix_smart_dense_cable", "#ae2:smart_dense_cable")
    .id("gregitas:splashing/me_smart_dense_fluix_cleaning")


  event.recipes.gtceu
    .assembler("gregitas:me_smart_cable")
    .itemInputs("16x ae2:fluix_covered_cable", "32x gtceu:fine_red_alloy_wire")
    .inputFluids(Fluid.of("gtceu:glowstone", 2304))
    .itemOutputs("16x ae2:fluix_smart_cable")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:me_smart_dense_cable")
    .itemInputs("4x ae2:fluix_covered_dense_cable", "16x gtceu:fine_red_alloy_wire")
    .inputFluids(Fluid.of("gtceu:glowstone", 1152))
    .itemOutputs("4x ae2:fluix_smart_dense_cable")
    .duration(50)
    .EUt(LV)
  //Coloured Cables
  let ae2Colours = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
  ]

  ae2Colours.forEach((colour) => {
    event.recipes.gtceu
      .chemical_bath(`gregitas:${colour}_glass_fluix`)
      .itemInputs("8x ae2:fluix_glass_cable")
      .inputFluids(Fluid.of(`gtceu:${colour}_dye`, 144))
      .itemOutputs(`8x ae2:${colour}_glass_cable`)
      .duration(100)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(`ae2:${colour}_glass_cable`, ["ae2:fluix_glass_cable", Fluid.of(`gtceu:${colour}_dye`, 18)])
      .id(`gregitas:filling/${colour}_glass_fluix`)

    event.recipes.gtceu
      .chemical_bath(`gregitas:${colour}_covered_fluix`)
      .itemInputs("8x ae2:fluix_covered_cable")
      .inputFluids(Fluid.of(`gtceu:${colour}_dye`, 144))
      .itemOutputs(`8x ae2:${colour}_covered_cable`)
      .duration(100)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(`ae2:${colour}_covered_cable`, ["ae2:fluix_covered_cable", Fluid.of(`gtceu:${colour}_dye`, 18)])
      .id(`gregitas:filling/${colour}_covered_cable`)

    event.recipes.gtceu
      .chemical_bath(`gregitas:${colour}_smart_fluix`)
      .itemInputs("8x ae2:fluix_smart_cable")
      .inputFluids(Fluid.of(`gtceu:${colour}_dye`, 144))
      .itemOutputs(`8x ae2:${colour}_smart_cable`)
      .duration(100)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(`ae2:${colour}_smart_cable`, ["ae2:fluix_smart_cable", Fluid.of(`gtceu:${colour}_dye`, 18)])
      .id(`gregitas:filling/${colour}_smart_fluix`)

    event.recipes.gtceu
      .chemical_bath(`gregitas:${colour}_dense_covered_fluix`)
      .itemInputs("8x ae2:fluix_covered_dense_cable")
      .inputFluids(Fluid.of(`gtceu:${colour}_dye`, 144))
      .itemOutputs(`8x ae2:${colour}_covered_dense_cable`)
      .duration(100)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(`ae2:${colour}_covered_dense_cable`, ["ae2:fluix_covered_dense_cable", Fluid.of(`gtceu:${colour}_dye`, 18)])
      .id(`gregitas:filling/${colour}_dense_covered_fluix`)

    event.recipes.gtceu
      .chemical_bath(`gregitas:${colour}_dense_smart_fluix`)
      .itemInputs("8x ae2:fluix_smart_dense_cable")
      .inputFluids(Fluid.of(`gtceu:${colour}_dye`, 144))
      .itemOutputs(`8x ae2:${colour}_smart_dense_cable`)
      .duration(100)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(`ae2:${colour}_smart_dense_cable`, ["ae2:fluix_smart_dense_cable", Fluid.of(`gtceu:${colour}_dye`, 18)])
      .id(`gregitas:filling/${colour}_dense_smart_fluix`)

    event.remove([
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
    ])
  })

  //Terminals
  event.remove([
    {
      id: "ae2:network/parts/panels_dark_monitor"
    },
    {
      id: "ae2:network/parts/panels_monitor"
    },
    {
      id: "ae2:network/parts/panels_semi_dark_monitor"
    },
    {
      id: "ae2:network/parts/panels_semi_dark_monitor_alt"
    },
    {
      id: "ae2:network/parts/terminals"
    },
    {
      id: "ae2:network/parts/terminals_crafting"
    },
    {
      id: "ae2:network/parts/terminals_pattern_encoding"
    },
    {
      id: "ae2:network/parts/terminals_pattern_access"
    },
    {
      id: "expatternprovider:epa"
    }
  ])

  event.recipes.gtceu
    .assembler("gregitas:illumination_panel")
    .itemInputs("gtceu:iron_plate", "2x gtceu:glowstone_plate", "2x gtceu:glass_plate")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("2x ae2:semi_dark_monitor")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:me_terminal")
    .itemInputs(
      "ae2:semi_dark_monitor",
      "ae2:formation_core",
      "ae2:annihilation_core",
      "ae2:logic_processor",
      "gtceu:computer_monitor_cover"
    )
    .itemOutputs("ae2:terminal")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:crafting_cover")
    .itemInputs("minecraft:crafting_table", "gtceu:steel_plate", "16x gtceu:fine_red_alloy_wire", "#gtceu:circuits/lv")
    .itemOutputs("gregitas:crafting_core")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:crafting_terminal")
    .itemInputs("ae2:terminal", "gregitas:crafting_core", "ae2:calculation_processor")
    .itemOutputs("ae2:crafting_terminal")
    .duration(100)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_terminal")
    .itemInputs("ae2:crafting_terminal", "gtceu:storage_cover", "ae2:blank_pattern", "ae2:engineering_processor")
    .itemOutputs("ae2:pattern_encoding_terminal")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_access_terminal")
    .itemInputs(
      "ae2:pattern_encoding_terminal",
      "3x ae2:logic_processor",
      "#gtceu:circuits/hv",
      "#ae2:pattern_provider"
    )
    .itemOutputs("expatternprovider:ex_pattern_access_part")
    .duration(100)
    .EUt(HV)

  //Portable Cell
  event.shaped("ae2:portable_item_cell_1k", ["bGb", "tSt", "wcw"], {
    b: "gtceu:red_alloy_bolt",
    G: "#forge:glass_panes",
    t: "#gtceu:circuits/ulv",
    S: "gtceu:bronze_crate",
    w: "gtceu:wrought_iron_plate",
    c: "gtceu:red_alloy_single_cable"
  })

  //Storage Components
  //Housings
  event.remove([
    {
      id: "ae2:network/cells/item_cell_housing"
    },
    {
      id: "ae2:network/cells/fluid_cell_housing"
    },
    {
      id: "ae2:network/crafting/cpu_crafting_unit"
    },
    {
      id: "ae2:network/cells/item_storage_components_cell_1k_part"
    },
    {
      id: "ae2:network/cells/item_storage_components_cell_4k_part"
    },
    {
      id: "ae2:network/cells/item_storage_components_cell_16k_part"
    },
    {
      id: "ae2:network/cells/item_storage_components_cell_64k_part"
    },
    {
      id: "ae2:network/cells/item_storage_components_cell_256k_part"
    },
    {
      id: "ae2:decorative/quartz_glass"
    }
  ])

  event.recipes.gtceu
    .assembler("gregitas:item_cell_housing")
    .itemInputs(
      "8x gtceu:steel_plate",
      "gtceu:lv_field_generator",
      "8x gtceu:fine_red_alloy_wire",
      "2x ae2:quartz_glass"
    )
    .itemOutputs("2x ae2:item_cell_housing")
    .duration(400)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:fluid_cell_housing")
    .itemInputs(
      "8x gtceu:annealed_copper_plate",
      "gtceu:lv_field_generator",
      "8x gtceu:fine_red_alloy_wire",
      "2x ae2:quartz_glass"
    )
    .itemOutputs("2x ae2:fluid_cell_housing")
    .duration(400)
    .EUt(MV)

  event.recipes.gtceu
    .autoclave("gregitas:quartz_glass")
    .itemInputs("5x gtceu:certus_quartz_dust")
    .inputFluids(Fluid.of("gtceu:glass", 576))
    .itemOutputs("4x ae2:quartz_glass")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:cpu_crafting_unit")
    .itemInputs(
      "4x gtceu:aluminium_plate",
      "#gtceu:circuits/mv",
      "2x ae2:fluix_glass_cable",
      "ae2:logic_processor",
      "ae2:calculation_processor"
    )
    .itemOutputs("ae2:crafting_unit")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:1k_storage_component")
    .itemInputs("gtceu:certus_quartz_plate", "ae2:logic_processor", "2x #gtceu:circuits/lv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("ae2:cell_component_1k")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:4k_storage_component")
    .itemInputs("3x ae2:cell_component_1k", "ae2:calculation_processor", "#gtceu:circuits/mv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("ae2:cell_component_4k")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:16k_storage_component")
    .itemInputs("3x ae2:cell_component_4k", "ae2:calculation_processor", "#gtceu:circuits/hv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("ae2:cell_component_16k")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:64k_storage_component")
    .itemInputs("3x ae2:cell_component_16k", "ae2:calculation_processor", "#gtceu:circuits/hv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 288))
    .itemOutputs("ae2:cell_component_64k")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:256k_storage_component")
    .itemInputs("3x ae2:cell_component_64k", "ae2:calculation_processor", "#gtceu:circuits/ev")
    .inputFluids(Fluid.of("gtceu:red_alloy", 288))
    .itemOutputs("ae2:cell_component_256k")
    .duration(200)
    .EUt(EV)

  let ae2Cells = [
    {
      tier: "1k",
      voltage: MV
    },
    {
      tier: "4k",
      voltage: MV
    },
    {
      tier: "16k",
      voltage: MV
    },
    {
      tier: "64k",
      voltage: HV
    },
    {
      tier: "256k",
      voltage: EV
    }
  ]

  ae2Cells.forEach((cell) => {
    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_item_cell`)
      .itemInputs("ae2:item_cell_housing", `ae2:cell_component_${cell.tier}`)
      .itemOutputs(`ae2:item_storage_cell_${cell.tier}`)
      .duration(200)
      .EUt(cell.voltage)

    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_fluid_cell`)
      .itemInputs("ae2:fluid_cell_housing", `ae2:cell_component_${cell.tier}`)
      .itemOutputs(`ae2:fluid_storage_cell_${cell.tier}`)
      .duration(200)
      .EUt(cell.voltage)

    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_crafting_storage`)
      .itemInputs("ae2:crafting_unit", `ae2:cell_component_${cell.tier}`)
      .itemOutputs(`ae2:${cell.tier}_crafting_storage`)
      .duration(200)
      .EUt(cell.voltage)

    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_deep_drive`)
      .itemInputs("ae2things:disk_housing", `ae2:cell_component_${cell.tier}`)
      .itemOutputs(`ae2things:disk_drive_${cell.tier}`)
      .duration(200)
      .EUt(cell.voltage)

    event.remove([
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
      },
      {
        id: `ae2things:cells/disk_drive_${cell.tier}_storage`
      },
      {
        id: `ae2things:cells/disk_drive_${cell.tier}`
      },
      {
        id: `ae2things:cells/disk_housing`
      }
    ])
  })

  //ME Drive
  event.remove({
    id: "ae2:network/blocks/storage_drive"
  })

  event.remove({
    id: "expatternprovider:ex_drive"
  })

  event.remove({
    id: "expatternprovider:ex_drive_upgrade"
  })

  event.recipes.gtceu
    .assembler("gregitas:me_drive")
    .itemInputs(
      "gtceu:lv_machine_hull",
      "4x gtceu:vanadium_steel_plate",
      "2x ae2:fluix_glass_cable",
      "#gtceu:circuits/lv",
      "2x ae2:engineering_processor"
    )
    .itemOutputs("ae2:drive")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:extended_me_drive")
    .circuit(1)
    .itemInputs(
      "ae2:drive",
      "4x gtceu:ultimet_plate",
      "8x #ae2:smart_cable",
      "#gtceu:circuits/hv",
      "2x ae2:engineering_processor"
    )
    .itemOutputs("expatternprovider:ex_drive")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_me_drive_upgrade")
    .circuit(2)
    .itemInputs("4x gtceu:ultimet_plate", "8x #ae2:smart_cable", "#gtceu:circuits/hv", "2x ae2:engineering_processor")
    .itemOutputs("expatternprovider:drive_upgrade")
    .duration(200)
    .EUt(EV)

  //ME Controller
  event.remove({
    id: "ae2:network/blocks/controller"
  })

  event.recipes.gtceu
    .assembler("gregitas:me_controller")
    .itemInputs(
      "gtceu:mv_machine_hull",
      "6x gtceu:vanadium_steel_plate",
      "ae2:engineering_processor",
      "2x #gtceu:circuits/lv",
      "16x gtceu:fine_red_alloy_wire"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:controller")
    .duration(200)
    .EUt(HV)

  //Pattern Provider

  event.remove({
    id: "ae2:network/blocks/pattern_providers_interface"
  })
  event.remove({
    id: "expatternprovider:epp"
  })
  event.remove({
    id: "expatternprovider:epp_upgrade"
  })

  event.recipes.gtceu
    .assembler("gregitas:pattern_provider_steel")
    .itemInputs("4x gtceu:steel_plate", "2x gregitas:crafting_core", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("ae2:pattern_provider")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_provider_aluminium")
    .itemInputs("4x gtceu:aluminium_plate", "2x gregitas:crafting_core", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("2x ae2:pattern_provider")
    .duration(300)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_provider_stainless_steel")
    .itemInputs(
      "4x gtceu:stainless_steel_plate",
      "2x gregitas:crafting_core",
      "ae2:annihilation_core",
      "ae2:formation_core"
    )
    .itemOutputs("3x ae2:pattern_provider")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_provider_tungsten_steel")
    .itemInputs(
      "4x gtceu:tungsten_steel_plate",
      "2x gregitas:crafting_core",
      "ae2:annihilation_core",
      "ae2:formation_core"
    )
    .itemOutputs("4x ae2:pattern_provider")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_provider")
    .circuit(1)
    .itemInputs(
      "2x ae2:pattern_provider",
      "#gtceu:circuits/hv",
      "2x gregitas:crafting_core",
      "ae2:annihilation_core",
      "ae2:formation_core"
    )
    .itemOutputs("expatternprovider:ex_pattern_provider")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_provider_upgrade")
    .circuit(2)
    .itemInputs(
      "ae2:pattern_provider",
      "#gtceu:circuits/hv",
      "2x gregitas:crafting_core",
      "ae2:annihilation_core",
      "ae2:formation_core"
    )
    .itemOutputs("expatternprovider:pattern_provider_upgrade")
    .duration(500)
    .EUt(EV)

  //Interface

  event.remove({
    id: "ae2:network/blocks/interfaces_interface"
  })

  event.remove({
    id: "expatternprovider:ei"
  })

  event.remove({
    id: "expatternprovider:ei_upgrade"
  })

  event.recipes.gtceu
    .assembler("gregitas:interface_steel")
    .itemInputs("4x gtceu:steel_plate", "2x #forge:glass", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("ae2:interface")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:interface_aluminium")
    .itemInputs("4x gtceu:aluminium_plate", "2x #forge:glass", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("2x ae2:interface")
    .duration(300)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:interface_stainless_steel")
    .itemInputs("4x gtceu:stainless_steel_plate", "2x #forge:glass", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("3x ae2:interface")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:interface_tungsten_steel")
    .itemInputs("4x gtceu:tungsten_steel_plate", "2x #forge:glass", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("4x ae2:interface")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_interface")
    .circuit(1)
    .itemInputs(
      "2x ae2:interface",
      "#gtceu:circuits/hv",
      "2x #forge:glass",
      "ae2:annihilation_core",
      "ae2:formation_core"
    )
    .itemOutputs("expatternprovider:ex_interface")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_interface_upgrade")
    .circuit(2)
    .itemInputs("ae2:interface", "#gtceu:circuits/hv", "2x #forge:glass", "ae2:annihilation_core", "ae2:formation_core")
    .itemOutputs("expatternprovider:interface_upgrade")
    .duration(500)
    .EUt(EV)

  //Energy Accepter

  event.remove({
    id: "ae2:network/blocks/energy_energy_acceptor"
  })

  event.recipes.gtceu
    .assembler("gregitas:energy_accepter")
    .itemInputs(
      "gtceu:lv_machine_hull",
      "2x gtceu:lv_voltage_coil",
      "2x ae2:fluix_glass_cable",
      "4x gtceu:vanadium_steel_plate"
    )
    .itemOutputs("ae2:energy_acceptor")
    .duration(200)
    .EUt(LV)

  //Molecular Assembler

  event.remove({
    id: "ae2:network/crafting/molecular_assembler"
  })

  event.remove({
    id: "expatternprovider:ex_molecular_assembler"
  })

  event.recipes.gtceu
    .assembler("gregitas:molecular_assembler_stainless_steel")
    .itemInputs(
      "4x gtceu:stainless_steel_plate",
      "2x ae2:quartz_glass",
      "ae2:annihilation_core",
      "ae2:formation_core",
      "gregitas:crafting_core",
      "gtceu:hv_conveyor_module"
    )
    .itemOutputs("2x ae2:molecular_assembler")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:molecular_assembler_titanium")
    .itemInputs(
      "4x gtceu:titanium_plate",
      "2x ae2:quartz_glass",
      "ae2:annihilation_core",
      "ae2:formation_core",
      "gregitas:crafting_core",
      "gtceu:ev_conveyor_module"
    )
    .itemOutputs("4x ae2:molecular_assembler")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:molecular_assembler_tungsten_steel")
    .itemInputs(
      "4x gtceu:tungsten_steel_plate",
      "2x ae2:quartz_glass",
      "ae2:annihilation_core",
      "ae2:formation_core",
      "gregitas:crafting_core",
      "gtceu:iv_conveyor_module"
    )
    .itemOutputs("16x ae2:molecular_assembler")
    .duration(600)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:extended_assembler")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "#gtceu:circuits/ev",
      "4x ae2:molecular_assembler",
      "2x ae2:crafting_accelerator"
    )
    .itemOutputs("expatternprovider:ex_molecular_assembler")
    .duration(400)
    .EUt(EV)

  //Crafting Monitor

  event.remove({
    id: "ae2:network/crafting/cpu_crafting_monitor"
  })

  event.recipes.gtceu
    .assembler("gregitas:cpu_monitor")
    .itemInputs(
      "ae2:crafting_unit",
      "ae2:semi_dark_monitor",
      "gtceu:computer_monitor_cover",
      "16x gtceu:fine_red_alloy_wire"
    )
    .itemOutputs("ae2:crafting_monitor")
    .duration(200)
    .EUt(HV)

  //Network Tool

  event.remove([
    {
      id: "ae2:tools/certus_quartz_wrench"
    },
    {
      id: "ae2:tools/nether_quartz_wrench"
    },
    {
      id: "ae2:tools/network_tool"
    }
  ])

  event.recipes.gtceu
    .lathe("gregitas:certus_quartz_wrench")
    .itemInputs("gtceu:certus_quartz_block")
    .itemOutputs("ae2:certus_quartz_wrench")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .lathe("gregitas:nether_quartz_wrench")
    .itemInputs("minecraft:quartz_block")
    .itemOutputs("ae2:nether_quartz_wrench")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:network_tool")
    .itemInputs(
      "#ae2:quartz_wrench",
      "ae2:semi_dark_monitor",
      "ae2:calculation_processor",
      "8x gtceu:fine_red_alloy_wire"
    )
    .itemOutputs("ae2:network_tool")
    .duration(200)
    .EUt(LV)

  //Cable Anchor

  event.remove({
    id: "ae2:network/parts/cable_anchor"
  })

  let anchorCutter = [
    {
      type: "water",
      fluid: "minecraft:water",
      amount: 4,
      duration: 120
    },
    {
      type: "distilled_water",
      fluid: "gtceu:distilled_water",
      amount: 4,
      duration: 90
    },
    {
      type: "lubricant",
      fluid: "gtceu:lubricant",
      amount: 1,
      duration: 30
    }
  ]

  anchorCutter.forEach((cut) => {
    event.recipes.gtceu
      .cutter(`gregitas:cable_anchor_steel_${cut.type}`)
      .itemInputs("gtceu:steel_bolt")
      .inputFluids(Fluid.of(cut.fluid, cut.amount))
      .itemOutputs("2x ae2:cable_anchor")
      .duration(cut.duration)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:cable_anchor_aluminium_${cut.type}`)
      .itemInputs("gtceu:aluminium_bolt")
      .inputFluids(Fluid.of(cut.fluid, cut.amount))
      .itemOutputs("4x ae2:cable_anchor")
      .duration(cut.duration)
      .EUt(MV)

    event.recipes.gtceu
      .cutter(`gregitas:cable_anchor_stainless_steel_${cut.type}`)
      .itemInputs("gtceu:stainless_steel_bolt")
      .inputFluids(Fluid.of(cut.fluid, cut.amount))
      .itemOutputs("8x ae2:cable_anchor")
      .duration(cut.duration)
      .EUt(HV)

    event.recipes.gtceu
      .cutter(`gregitas:cable_anchor_titanium_${cut.type}`)
      .itemInputs("gtceu:titanium_bolt")
      .inputFluids(Fluid.of(cut.fluid, cut.amount))
      .itemOutputs("16x ae2:cable_anchor")
      .duration(cut.duration)
      .EUt(HV)
  })

  //Energy Cell

  event.remove([
    {
      id: "ae2:decorative/quartz_vibrant_glass"
    },
    {
      id: "ae2:network/blocks/energy_energy_cell"
    },
    {
      id: "ae2:network/blocks/energy_dense_energy_cell"
    }
  ])

  event.recipes.gtceu
    .chemical_bath("gregitas:vibrant_quartz_glass")
    .itemInputs("ae2:quartz_glass")
    .inputFluids(Fluid.of("gtceu:glowstone", 144))
    .itemOutputs("ae2:quartz_vibrant_glass")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:energy_cell")
    .itemInputs(
      "4x gtceu:certus_quartz_gem",
      "4x gtceu:certus_quartz_plate",
      "2x gtceu:lv_voltage_coil",
      "ae2:quartz_vibrant_glass"
    )
    .itemOutputs("ae2:energy_cell")
    .duration(100)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:dense_energy_cell")
    .itemInputs("8x ae2:energy_cell", "ae2:calculation_processor", "#gtceu:circuits/mv")
    .itemOutputs("ae2:dense_energy_cell")
    .duration(100)
    .EUt(HV)

  //P2P

  event.remove([
    {
      id: "ae2:network/parts/tunnels_me"
    },
    {
      id: "ae2:tools/network_memory_card"
    }
  ])

  event.recipes.gtceu
    .assembler("gregitas:memory_card")
    .itemInputs(
      "2x gtceu:vanadium_steel_plate",
      "gtceu:plastic_printed_circuit_board",
      "gtceu:data_stick",
      "ae2:calculation_processor"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:memory_card")
    .duration(100)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:me_p2p")
    .itemInputs(
      "16x gtceu:fine_red_alloy_wire",
      "4x gtceu:vanadium_steel_plate",
      "ae2:engineering_processor",
      "gtceu:certus_quartz_plate",
      "gtceu:lv_emitter",
      "gtceu:lv_sensor"
    )
    .itemOutputs("2x ae2:me_p2p_tunnel")
    .duration(300)
    .EUt(HV)

  //Wireless

  event.remove([
    {
      id: "ae2:network/wireless_terminal"
    },
    {
      id: "ae2:network/wireless_crafting_terminal"
    },
    {
      id: "ae2:network/upgrade_wireless_crafting_terminal"
    },
    {
      id: "ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal"
    },
    {
      id: "ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal"
    },
    {
      id: "ae2wtlib:pattern_access/wireless_pattern_access_terminal"
    },
    {
      id: "ae2:network/wireless_access_point"
    },
    {
      id: "ae2:misc/fluixpearl"
    },
    {
      id: "ae2:network/wireless_booster"
    },
    {
      id: "ae2:network/wireless_part"
    },
    {
      id: "ae2:network/blocks/quantum_ring"
    },
    {
      id: "ae2:network/blocks/quantum_link"
    },

    {
      id: "expatternprovider:wireless_connector"
    },

    {
      id: "expatternprovider:wireless_tool"
    },

    {
      id: "ae2wtlib:quantum_bridge_card"
    }
  ])

  event.recipes.gtceu
    .chemical_reactor("gregitas:fluix_pearl")
    .itemInputs("ae2:fluix_dust", "minecraft:ender_eye")
    .itemOutputs("ae2:fluix_pearl")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .macerator("gregitas:fluix_dust")
    .itemInputs("ae2:fluix_crystal")
    .itemOutputs("ae2:fluix_dust")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_reciver")
    .itemInputs(
      "2x #gtceu:circuits/ev",
      "2x gtceu:titanium_rod",
      "ae2:fluix_pearl",
      "gtceu:hv_sensor",
      "gtceu:hv_emitter"
    )
    .itemOutputs("ae2:wireless_receiver")
    .duration(100)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_terminal")
    .itemInputs(
      "8x gtceu:fine_red_alloy_wire",
      "2x gtceu:vanadium_steel_plate",
      "2x #gtceu:circuits/hv",
      "ae2:semi_dark_monitor",
      "ae2:formation_core",
      "ae2:annihilation_core",
      "gtceu:computer_monitor_cover",
      "gtceu:lapotron_crystal",
      "ae2:wireless_receiver"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:wireless_terminal")
    .duration(1000)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_crafting_terminal")
    .itemInputs("ae2:wireless_terminal", "gregitas:crafting_core", "ae2:calculation_processor")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2:wireless_crafting_terminal")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_pattern_terminal")
    .itemInputs(
      "ae2:wireless_crafting_terminal",
      "gtceu:storage_cover",
      "ae2:blank_pattern",
      "ae2:engineering_processor"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2wtlib:wireless_pattern_encoding_terminal")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_pattern_access_terminal")
    .itemInputs(
      "ae2wtlib:wireless_pattern_encoding_terminal",
      "3x ae2:logic_processor",
      "#gtceu:circuits/hv",
      "#ae2:pattern_provider"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("ae2wtlib:wireless_pattern_access_terminal")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_access_point")
    .itemInputs(
      "16x gtceu:fine_red_alloy_wire",
      "2x #gtceu:circuits/hv",
      "2x gtceu:mpic_chip",
      "gtceu:epoxy_printed_circuit_board",
      "ae2:calculation_processor",
      "#ae2:glass_cable",
      "gtceu:ev_field_generator",
      "gtceu:ev_machine_hull",
      "ae2:wireless_receiver"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("ae2:wireless_access_point")
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_booster")
    .itemInputs(
      "16x gtceu:fine_red_alloy_wire",
      "3x gtceu:ender_pearl_dust",
      "gtceu:epoxy_printed_circuit_board",
      "#gtceu:circuits/hv",
      "gtceu:hv_field_generator",
      "gtceu:double_vanadium_steel_plate"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("2x ae2:wireless_booster")
    .duration(250)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_connector")
    .itemInputs(
      "2x gtceu:iv_machine_hull",
      "4x #gtceu:circuits/luv",
      "16x gtceu:hpic_chip",
      "2x ae2:wireless_access_point",
      "2x gtceu:iv_field_generator"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("2x expatternprovider:wireless_connect")
    .duration(500)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_tool")
    .itemInputs(
      "4x gtceu:double_tungsten_steel_plate",
      "#gtceu:circuits/luv",
      "4x gtceu:hpic_chip",
      "gtceu:ev_field_generator",
      "ae2:wireless_receiver"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("expatternprovider:wireless_tool")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_link")
    .circuit(1)
    .itemInputs(
      "4x gtceu:ev_machine_hull",
      "32x ae2:quartz_vibrant_glass",
      "2x #gtceu:circuits/luv",
      "gtceu:iv_field_generator",
      "ae2:singularity"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 1152))
    .itemOutputs("2x ae2:quantum_link")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_ring")
    .circuit(2)
    .itemInputs(
      "megacells:mega_energy_cell",
      "2x expatternprovider:wireless_connect",
      "4x #gtceu:circuits/luv",
      "64x gtceu:hpic_chip",
      "2x gtceu:iv_field_generator",
      "ae2:singularity"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 1152))
    .itemOutputs("16x ae2:quantum_ring")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_bridge_card")
    .itemInputs(
      "16x ae2:quantum_ring",
      "2x ae2:quantum_link",
      "4x #gtceu:circuits/luv",
      "2x gtceu:iv_field_generator",
      "ae2:singularity"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("ae2wtlib:quantum_bridge_card")
    .duration(200)
    .EUt(IV)

  //Bits and Bobs

  event.remove([
    {
      id: "ae2:network/crafting/patterns_blank"
    },
    {
      id: "ae2:network/blocks/inscribers"
    },

    {
      id: "ae2:materials/basiccard"
    },
    {
      id: "ae2:materials/advancedcard"
    },
    {
      id: "ae2:materials/cardredstone"
    },
    {
      id: "ae2:materials/cardcapacity"
    },
    {
      id: "ae2:materials/cardvoid"
    },
    {
      id: "ae2:materials/cardcrafting"
    },
    {
      id: "ae2:materials/cardfuzzy"
    },
    {
      id: "ae2:materials/cardspeed"
    },
    {
      id: "ae2:materials/cardinverter"
    },
    {
      id: "ae2:materials/carddistribution"
    },
    {
      id: "ae2:materials/cardenergy"
    },
    {
      id: "ae2:network/parts/storage_bus"
    },
    {
      id: "ae2:network/parts/import_bus"
    },
    {
      id: "ae2:network/parts/export_bus"
    },

    {
      id: "expatternprovider:tape"
    },

    {
      id: "expatternprovider:cobblestone_cell"
    },

    {
      id: "expatternprovider:ingredient_buffer"
    },

    {
      id: "expatternprovider:pattern_modifier"
    },

    {
      id: "expatternprovider:crystal_fixer"
    },

    {
      id: "expatternprovider:ebus_upgrade"
    },

    {
      id: "expatternprovider:ebus_in"
    },

    {
      id: "expatternprovider:ebus_out"
    },

    {
      id: "expatternprovider:epa_upgrade"
    },

    {
      id: "expatternprovider:wireless_ex_pat"
    }
  ])

  //Patterns

  event.recipes.gtceu
    .assembler("gregitas:patten_pe")
    .itemInputs(
      "4x gtceu:fine_red_alloy_wire",
      "3x gtceu:steel_plate",
      "2x gtceu:polyethylene_plate",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("ae2:blank_pattern")
    .duration(50)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:patten_pvc")
    .itemInputs(
      "4x gtceu:fine_red_alloy_wire",
      "3x gtceu:steel_plate",
      "2x gtceu:polyvinyl_chloride_plate",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("4x ae2:blank_pattern")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:patten_ptfe")
    .itemInputs(
      "4x gtceu:fine_red_alloy_wire",
      "3x gtceu:steel_plate",
      "2x gtceu:polytetrafluoroethylene_plate",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("16x ae2:blank_pattern")
    .duration(150)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:patten_pbi")
    .itemInputs(
      "4x gtceu:fine_red_alloy_wire",
      "3x gtceu:steel_plate",
      "2x gtceu:polybenzimidazole_plate",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("16x ae2:blank_pattern")
    .duration(200)
    .EUt(HV)

  //Inscriber

  event.recipes.gtceu
    .assembler("gregitas:me_inscriber")
    .itemInputs(
      "16x gtceu:fine_red_alloy_wire",
      "6x gtceu:vanadium_steel_plate",
      "2x #gtceu:circuits/lv",
      "2x gtceu:mv_electric_piston",
      "gtceu:lv_machine_hull"
    )
    .itemOutputs("ae2:inscriber")
    .duration(100)
    .EUt(MV)

  //Storage Bus

  event.recipes.gtceu
    .assembler("gregitas:storage_bus")
    .itemInputs(
      "3x gtceu:vanadium_steel_plate",
      "gtceu:item_detector_cover",
      "gtceu:fluid_detector_cover",
      "ae2:formation_core",
      "ae2:annihilation_core"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:storage_bus")
    .duration(100)
    .EUt(MV)

  //Export Bus

  event.recipes.gtceu
    .assembler("gregitas:export_bus")
    .itemInputs("2x gtceu:vanadium_steel_plate", "ae2:formation_core", "gtceu:lv_robot_arm", "gtceu:lv_electric_pump")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:export_bus")
    .duration(100)
    .EUt(MV)

  //Import Bus

  event.recipes.gtceu
    .assembler("gregitas:import_bus")
    .itemInputs(
      "2x gtceu:vanadium_steel_plate",
      "ae2:annihilation_core",
      "gtceu:lv_robot_arm",
      "gtceu:lv_electric_pump"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs("ae2:import_bus")
    .duration(100)
    .EUt(MV)

  //Basic Upgrades

  event.recipes.gtceu
    .assembler("gregitas:basic_card")
    .itemInputs(
      "3x gtceu:aluminium_plate",
      "2x gtceu:fine_red_alloy_wire",
      "2x gtceu:fine_gold_wire",
      "ae2:engineering_processor",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("2x ae2:basic_card")
    .duration(50)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:redstone_card")
    .itemInputs("ae2:basic_card", "gtceu:red_alloy_plate")
    .itemOutputs("ae2:redstone_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:capacity_card")
    .itemInputs("ae2:basic_card", "#gtceu:circuits/lv")
    .itemOutputs("ae2:capacity_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:void_card")
    .itemInputs("ae2:basic_card", "gtceu:item_voiding_cover", "gtceu:fluid_voiding_cover")
    .itemOutputs("ae2:void_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:crafting_card")
    .itemInputs("ae2:basic_card", "gregitas:crafting_core")
    .itemOutputs("ae2:crafting_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:advanced_card")
    .itemInputs(
      "3x gtceu:stainless_steel_plate",
      "2x gtceu:fine_red_alloy_wire",
      "2x gtceu:fine_silver_wire",
      "ae2:engineering_processor",
      "#gtceu:circuits/hv"
    )
    .itemOutputs("2x ae2:advanced_card")
    .duration(50)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:fuzzy_card")
    .itemInputs("ae2:advanced_card", "#gtceu:circuits/ulv")
    .itemOutputs("ae2:fuzzy_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:speed_card")
    .itemInputs("ae2:advanced_card", "#gtceu:circuits/mv")
    .itemOutputs("ae2:speed_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:inverter_card")
    .itemInputs("ae2:advanced_card", "gtceu:machine_controller_cover", "gtceu:activity_detector_cover")
    .itemOutputs("ae2:inverter_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:equal_distribution_card")
    .itemInputs("ae2:advanced_card", "ae2:calculation_processor")
    .itemOutputs("ae2:equal_distribution_card")
    .duration(50)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:energy_card")
    .itemInputs("ae2:advanced_card", "#gtceu:batteries/mv")
    .itemOutputs("ae2:energy_card")
    .duration(50)
    .EUt(LV)

  //Misc expatternprovider

  event.recipes.gtceu
    .assembler("gregitas:ingredient_buffer")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "#gtceu:circuits/ev",
      "2x ae2:cell_component_16k",
      "expatternprovider:ex_export_bus_part"
    )
    .itemOutputs("expatternprovider:ingredient_buffer")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_modifier")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "2x #gtceu:circuits/ev",
      "4x ae2:annihilation_core",
      "4x ae2:formation_core",
      "2x ae2:cell_component_64k",
      "32x ae2:blank_pattern"
    )
    .itemOutputs("expatternprovider:pattern_modifier")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:crystal_fixer")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "4x gtceu:ev_robot_arm",
      "16x ae2:formation_core",
      "64x ae2:charged_certus_quartz_crystal"
    )
    .itemOutputs("expatternprovider:crystal_fixer")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_import")
    .itemInputs(
      "ae2:import_bus",
      "4x gtceu:ultimet_plate",
      "4x ae2:annihilation_core",
      "4x ae2:formation_core",
      "gtceu:hv_robot_arm",
      "gtceu:hv_electric_pump"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("expatternprovider:ex_import_bus_part")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_export")
    .itemInputs(
      "ae2:export_bus",
      "4x gtceu:ultimet_plate",
      "4x ae2:annihilation_core",
      "4x ae2:formation_core",
      "gtceu:hv_robot_arm",
      "gtceu:hv_electric_pump"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("expatternprovider:ex_export_bus_part")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:extended_io_upgrade")
    .circuit(1)
    .itemInputs(
      "4x gtceu:ultimet_plate",
      "4x ae2:annihilation_core",
      "4x ae2:formation_core",
      "gtceu:hv_robot_arm",
      "gtceu:hv_electric_pump"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("expatternprovider:io_bus_upgrade")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:pattern_access_upgrade")
    .circuit(1)
    .itemInputs("3x ae2:logic_processor", "#gtceu:circuits/hv", "ae2:pattern_provider")
    .itemOutputs("expatternprovider:pattern_terminal_upgrade")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:wireless_extended_pattern_access")
    .itemInputs(
      "ae2wtlib:wireless_pattern_access_terminal",
      "3x ae2:logic_processor",
      "#gtceu:circuits/hv",
      "#ae2:pattern_provider"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("expatternprovider:wireless_ex_pat")
    .duration(200)
    .EUt(HV)

  //Mega Cells

  event.remove([
    {
      id: "megacells:transform/sky_steel_ingot"
    },
    {
      id: "megacells:cells/mega_item_cell_housing"
    },

    {
      id: "megacells:cells/mega_fluid_cell_housing"
    },
    {
      id: "megacells:inscriber/accumulation_processor_press"
    },
    {
      id: "megacells:inscriber/accumulation_processor_press_extra"
    },
    {
      id: "megacells:inscriber/accumulation_processor"
    },
    {
      id: "megacells:cells/cell_component_1m"
    },
    {
      id: "megacells:cells/cell_component_4m"
    },
    {
      id: "megacells:cells/cell_component_16m"
    },
    {
      id: "megacells:cells/cell_component_64m"
    },
    {
      id: "megacells:cells/cell_component_256m"
    },
    {
      id: "megacells:cells/standard/fluid_storage_cell_1m_with_housing"
    },
    {
      id: "megacells:cells/standard/fluid_storage_cell_4m_with_housing"
    },
    {
      id: "megacells:cells/standard/fluid_storage_cell_16m_with_housing"
    },
    {
      id: "megacells:cells/standard/fluid_storage_cell_64m_with_housing"
    },
    {
      id: "megacells:cells/standard/fluid_storage_cell_256m_with_housing"
    },
    {
      id: "megacells:cells/standard/item_storage_cell_1m_with_housing"
    },
    {
      id: "megacells:cells/standard/item_storage_cell_4m_with_housing"
    },
    {
      id: "megacells:cells/standard/item_storage_cell_16m_with_housing"
    },
    {
      id: "megacells:cells/standard/item_storage_cell_64m_with_housing"
    },
    {
      id: "megacells:cells/standard/item_storage_cell_256m_with_housing"
    },
    {
      id: "megacells:crafting/mega_energy_cell"
    },

    {
      id: "megacells:crafting/mega_crafting_unit"
    },

    {
      id: "megacells:crafting/bulk_cell_component"
    },

    {
      id: "megacells:cells/standard/bulk_item_cell"
    },

    {
      id: "megacells:network/mega_pattern_provider"
    },

    {
      id: "megacells:network/mega_pattern_provider_part"
    },

    {
      id: "megacells:network/mega_interface"
    },

    {
      id: "megacells:network/mega_interface_part"
    },

    {
      id: "megacells:network/mega_pattern_provider_block"
    },

    {
      id: "megacells:network/mega_interface_block"
    }
  ])

  //Mega Cells EBF

  event.recipes.gtceu
    .electric_blast_furnace("sky_steel")
    .itemInputs("gtceu:black_steel_ingot", "4x ae2:sky_stone_block", "4x ae2:charged_certus_quartz_crystal")
    .inputFluids(Fluid.of("gtceu:neon", 25))
    .itemOutputs("megacells:sky_steel_ingot", "ae2:sky_dust")
    .blastFurnaceTemp(4500)
    .duration(400)
    .EUt(EV)

  //Mega Cells Assembler

  event.recipes.gtceu
    .assembler("gregitas:mega_item_cell_housing")
    .circuit(1)
    .itemInputs(
      "megacells:sky_steel_block",
      "gtceu:hv_field_generator",
      "32x gtceu:fine_red_alloy_wire",
      "4x ae2:quartz_vibrant_glass"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("2x megacells:mega_item_cell_housing")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:mega_fluid_cell_housing")
    .circuit(2)
    .itemInputs(
      "megacells:sky_steel_block",
      "gtceu:hv_field_generator",
      "32x gtceu:fine_red_alloy_wire",
      "4x ae2:quartz_vibrant_glass"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("2x megacells:mega_fluid_cell_housing")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:accumulation_processor_press")
    .circuit(1)
    .itemInputs(
      "4x megacells:sky_steel_block",
      "2x gtceu:double_tungsten_steel_plate",
      "16x ae2:logic_processor",
      "16x ae2:calculation_processor",
      "16x ae2:engineering_processor"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("megacells:accumulation_processor_press")
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:superdense_energy_cell")
    .itemInputs("8x ae2:dense_energy_cell", "megacells:accumulation_processor", "#gtceu:circuits/ev")
    .itemOutputs("megacells:mega_energy_cell")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:mega_crafting_unit")
    .itemInputs(
      "4x ae2:crafting_unit",
      "megacells:accumulation_processor",
      "2x #gtceu:circuits/ev",
      "32x #ae2:smart_dense_cable"
    )
    .itemOutputs("megacells:mega_crafting_unit")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:bulk_cell_component")
    .itemInputs(
      "ae2:cell_component_256k",
      "4x megacells:sky_steel_block",
      "4x megacells:accumulation_processor",
      "2x #gtceu:circuits/ev"
    )
    .itemOutputs("megacells:bulk_cell_component")
    .duration(200)
    .EUt(EV)

  //Mega Cells cutter

  //might want to replace with a new type of "wafer" eventually

  event.recipes.gtceu
    .cutter("accumulation_processor")
    .itemInputs("megacells:printed_accumulation_processor")
    .itemOutputs("megacells:accumulation_processor")
    .inputFluids(Fluid.of("gtceu:lubricant", 200))
    .duration(1000)
    .EUt(EV)

  //Mega Cells components

  event.recipes.gtceu
    .assembler("gregitas:1m_storage_component")
    .itemInputs("3x ae2:cell_component_256k", "megacells:accumulation_processor", "#gtceu:circuits/iv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs("megacells:cell_component_1m")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:4m_storage_component")
    .itemInputs("3x megacells:cell_component_1m", "megacells:accumulation_processor", "#gtceu:circuits/iv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs("megacells:cell_component_4m")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:16m_storage_component")
    .itemInputs("3x megacells:cell_component_4m", "megacells:accumulation_processor", "#gtceu:circuits/luv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs("megacells:cell_component_16m")
    .duration(200)
    .EUt(LuV)

  event.recipes.gtceu
    .assembler("gregitas:64m_storage_component")
    .itemInputs("3x megacells:cell_component_16m", "megacells:accumulation_processor", "#gtceu:circuits/luv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs("megacells:cell_component_64m")
    .duration(200)
    .EUt(LuV)

  event.recipes.gtceu
    .assembler("gregitas:256m_storage_component")
    .itemInputs("3x megacells:cell_component_64m", "megacells:accumulation_processor", "#gtceu:circuits/zpm")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs("megacells:cell_component_256m")
    .duration(200)
    .EUt(ZPM)

  event.recipes.gtceu
    .canner("gregitas:bulk_item_cell")
    .itemInputs("megacells:bulk_cell_component", "megacells:mega_item_cell_housing")
    .itemOutputs("megacells:bulk_item_cell")
    .duration(200)
    .EUt(EV)

  //megacells cells

  let megacellscells = [
    {
      tier: "1m",
      voltage: IV
    },
    {
      tier: "4m",
      voltage: IV
    },
    {
      tier: "16m",
      voltage: LuV
    },
    {
      tier: "64m",
      voltage: LuV
    },
    {
      tier: "256m",
      voltage: ZPM
    }
  ]

  megacellscells.forEach((cell) => {
    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_item_cell`)
      .itemInputs("megacells:mega_item_cell_housing", `megacells:cell_component_${cell.tier}`)
      .itemOutputs(`megacells:item_storage_cell_${cell.tier}`)
      .duration(200)
      .EUt(cell.voltage)

    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_fluid_cell`)
      .itemInputs("megacells:mega_fluid_cell_housing", `megacells:cell_component_${cell.tier}`)
      .itemOutputs(`megacells:fluid_storage_cell_${cell.tier}`)
      .duration(200)
      .EUt(cell.voltage)

    event.recipes.gtceu
      .canner(`gregitas:${cell.tier}_crafting_storage`)
      .itemInputs("megacells:mega_crafting_unit", `megacells:cell_component_${cell.tier}`)
      .itemOutputs(`megacells:${cell.tier}_crafting_storage`)
      .duration(200)
      .EUt(cell.voltage)

    event.remove([
      {
        id: `megacells:cells/standard/fluid_storage_cell_${cell.tier}`
      },
      {
        id: `megacells:cells/standard/item_storage_cell_${cell.tier}`
      },
      {
        id: `megacells:cells/portable/portable_fluid_cell_${cell.tier}`
      },
      {
        id: `megacells:cells/portable/portable_item_cell_${cell.tier}`
      },
      {
        id: `megacells:crafting/${cell.tier}_crafting_storage`
      }
    ])
  })

  //ae2things housing

  event.recipes.gtceu
    .assembler("gregitas:deep_drive_housing")
    .itemInputs("2x ae2:item_cell_housing", "gtceu:lv_field_generator")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 288))
    .itemOutputs("2x ae2things:disk_housing")
    .duration(200)
    .EUt(MV)

  //Generic Remove

  event.remove([
    {
      mod: "aeinfinitybooster"
    },
    {
      id: "ae2:network/blocks/spatial_anchor"
    },
    {
      id: "ae2:network/blocks/spatial_io_port"
    },
    {
      id: "ae2:network/blocks/spatial_io_pylon"
    }
  ])

  event.recipes.gtceu
    .assembler("gregitas:logic_processor")
    .itemInputs("ae2:printed_logic_processor", "gtceu:plastic_printed_circuit_board")
    .inputFluids(Fluid.of("gtceu:red_alloy", 18))
    .itemOutputs("ae2:logic_processor")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:calculation_processor")
    .itemInputs("ae2:printed_calculation_processor", "gtceu:plastic_printed_circuit_board")
    .inputFluids(Fluid.of("gtceu:red_alloy", 18))
    .itemOutputs("ae2:calculation_processor")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:engineering_processor")
    .itemInputs("ae2:printed_engineering_processor", "gtceu:plastic_printed_circuit_board")
    .inputFluids(Fluid.of("gtceu:red_alloy", 18))
    .itemOutputs("ae2:engineering_processor")
    .duration(200)
    .EUt(MV)

  //Advanced AE2
  event.remove([
    {
      id: "advanced_ae:quantum_alloy"
    },
    {
      id: 'advanced_ae:quantum_processor_press'
    },
    {
      id: 'advanced_ae:quantum_processor_press_from_iron'
    },
    {
      id: 'advanced_ae:quantum_processor_print'
    },
    {
      id: 'advanced_ae:quantum_processor'
    },
    {
      id: 'advanced_ae:quantum_storage_component'
    },
    {
      id: 'advanced_ae:stock_export_bus'
    },
    {
      id: 'advanced_ae:quantumunit'
    },
    {
      id: 'advanced_ae:quantumstorage128'
    },
    {
      id: 'advanced_ae:quantumstorage256'
    },
    {
      id: 'advanced_ae:smalladvpatpro'
    },
    {
      id: 'advanced_ae:eaeadvpatpro'
    },
    {
      id: 'advanced_ae:smallappupgrade'
    },
    {
      id: 'advanced_ae:largeappupgrade'
    },
    {
      id: 'advanced_ae:reactionchamber'
    },
    {
      id: 'advanced_ae:quantumstructure'
    },
    {
      id: 'advanced_ae:quantumcore'
    },
    {
      id: 'advanced_ae:quantumaccel'
    },
    {
      id: 'advanced_ae:quantummultithreader'
    },
    {
      id: 'advanced_ae:quantumdataentangler'
    },
    {
      id: 'advanced_ae:advpartenc'
    },
    {
      id: 'advanced_ae:strength_card'
    }
  ])

  event.custom({
    type: "advanced_ae:reaction",
    energy: 200000,
    fluid: {
      "fluidStack": {
        "Amount": 1000,
        "FluidName": "advanced_ae:quantum_infusion_source"
      }
    },
    input_items: [
      {
        amount: 4,
        ingredient: {
          item: 'tfc:metal/ingot/copper'
        }
      },
      {
        amount: 4,
        ingredient: {
          item: "advanced_ae:shattered_singularity"
        }
      },
      {
        amount: 4,
        ingredient: {
          item: "ae2:singularity"
        }
      }
    ],
    output: {
      "#": 1,
      "#c": "ae2:i",
      "id": "advanced_ae:quantum_alloy"
    }
  }).id('kubejs:quantum_alloy')

  event.custom({
    type: "ae2:inscriber",
    ingredients: {
      bottom: {
        item: 'megacells:printed_accumulation_processor'
      },
      middle: {
        item: "advanced_ae:quantum_alloy"
      },
      top: {
        item: "advanced_ae:quantum_processor_press"
      }
    },
    mode: "inscribe",
    result: {
      item: "advanced_ae:printed_quantum_processor"
    }
  }).id('kubejs:printed_quantum_processor')

  event.recipes.gtceu
    .macerator("gregitas:quantum_infused_dust")
    .itemInputs('advanced_ae:shattered_singularity')
    .itemOutputs('2x advanced_ae:quantum_infused_dust')
    .duration(50)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_processor_press")
    .circuit(1)
    .itemInputs(
      "2x advanced_ae:quantum_alloy_plate",
      "2x gtceu:double_tungsten_steel_plate",
      "16x ae2:logic_processor",
      "16x ae2:calculation_processor",
      "16x ae2:engineering_processor",
      "2x advanced_ae:shattered_singularity",
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs('advanced_ae:quantum_processor_press')
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .cutter("quantum_processor")
    .itemInputs('advanced_ae:printed_quantum_processor')
    .itemOutputs('advanced_ae:quantum_processor')
    .inputFluids(Fluid.of("gtceu:lubricant", 200))
    .duration(1000)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_storage_component")
    .itemInputs("3x ae2:cell_component_256k", 'advanced_ae:quantum_processor', "#gtceu:circuits/iv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 576))
    .itemOutputs('advanced_ae:quantum_storage_component')
    .duration(200)
    .EUt(IV)

  //Export bus
  event.recipes.gtceu
    .assembler("gregitas:stock_export_bus_part")
    .itemInputs("2x gtceu:vanadium_steel_plate", "ae2:export_bus", 'gtceu:iv_robot_arm', 'gtceu:iv_electric_pump')
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 72))
    .itemOutputs('advanced_ae:stock_export_bus_part')
    .duration(100)
    .EUt(IV)

  //Pattern providers
  event.recipes.gtceu
    .assembler("gregitas:small_adv_pattern_provider")
    .itemInputs(
      '4x gtceu:tungsten_steel_plate',
      'ae2:pattern_provider',
      "#gtceu:circuits/ev",
      'advanced_ae:quantum_processor'
    )
    .itemOutputs('advanced_ae:small_adv_pattern_provider')
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:adv_pattern_provider")
    .itemInputs(
      '4x gtceu:tungsten_steel_plate',
      'expatternprovider:ex_pattern_provider',
      "#gtceu:circuits/ev",
      '4x advanced_ae:quantum_processor'
    )
    .itemOutputs('advanced_ae:adv_pattern_provider')
    .duration(400)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:adv_pattern_provider_upgrade")
    .circuit(2)
    .itemInputs(
      '4x gtceu:tungsten_steel_plate',
      "#gtceu:circuits/ev",
      'advanced_ae:quantum_processor'
    )
    .itemOutputs('advanced_ae:adv_pattern_provider_upgrade')
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:adv_pattern_provider_capacity_upgrade")
    .circuit(2)
    .itemInputs(
      'ae2:pattern_provider',
      "#gtceu:circuits/ev",
      '2x gregitas:crafting_core',
      'ae2:annihilation_core',
      'ae2:formation_core',
      '3x advanced_ae:quantum_processor'
    )
    .itemOutputs('advanced_ae:adv_pattern_provider_capacity_upgrade')
    .duration(500)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:adv_pattern_encoder")
    .itemInputs(
      "gtceu:ev_machine_hull",
      "2x #gtceu:circuits/ev",
      "4x ae2:annihilation_core",
      "4x ae2:formation_core",
      "advanced_ae:quantum_storage_component",
      "32x ae2:blank_pattern"
    )
    .itemOutputs('advanced_ae:adv_pattern_encoder')
    .duration(400)
    .EUt(EV)

  //Crafting Computer
  event.recipes.gtceu
    .assembler("gregitas:reaction_chamber")
    .circuit(2)
    .itemInputs(
      'ae2:condenser',
      'ae2:vibration_chamber',
      "#gtceu:circuits/iv",
      'gtceu:iv_field_generator',
      'gtceu:iv_electric_motor'
    )
    .itemOutputs('advanced_ae:reaction_chamber')
    .duration(100)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_unit")
    .itemInputs(
      "4x gtceu:titanium_tungsten_carbide_plate",
      "#gtceu:circuits/ev",
      "ae2:crafting_unit",
      "2x advanced_ae:quantum_processor"
    )
    .itemOutputs("advanced_ae:quantum_unit")
    .duration(100)
    .EUt(LuV)

  event.recipes.gtceu
    .assembler('gregitas:quantum_structure')
    .itemInputs('4x ae2:sky_stone_block', '4x ae2:quartz_vibrant_glass')
    .inputFluids(Fluid.of("advanced_ae:quantum_infusion_source", 4000))
    .itemOutputs('advanced_ae:quantum_structure')
    .duration(100)
    .EUt(IV)

  event.recipes.gtceu
    .canner("gregitas:quantum_storage_128")
    .itemInputs('advanced_ae:quantum_unit', '2x megacells:cell_component_64m')
    .itemOutputs("advanced_ae:quantum_storage_128")
    .duration(200)
    .EUt(LuV)

  event.recipes.gtceu
    .canner("gregitas:quantum_storage_256")
    .itemInputs('advanced_ae:quantum_unit', 'megacells:cell_component_256m')
    .itemOutputs("advanced_ae:quantum_storage_256")
    .duration(200)
    .EUt(ZPM)

  event.recipes.gtceu
    .assembler("gregitas:quantum_core")
    .itemInputs(
      'advanced_ae:quantum_unit',
      'advanced_ae:quantum_accelerator',
      'advanced_ae:quantum_storage_128',
      'gtceu:luv_emitter',
      '4x ae2:singularity')
    .inputFluids(Fluid.of("advanced_ae:quantum_infusion_source", 2000))
    .itemOutputs('advanced_ae:quantum_core')
    .duration(800)
    .EUt(LuV)

  event.recipes.gtceu
    .assembler("gregitas:quantum_accelerator")
    .itemInputs(
      'advanced_ae:quantum_unit',
      '2x advanced_ae:quantum_processor',
      '4x ae2:logic_processor',
      '4x ae2:calculation_processor',
      '4x ae2:engineering_processor',
      "#gtceu:circuits/luv")
    .itemOutputs('advanced_ae:quantum_accelerator')
    .duration(200)
    .EUt(LuV)

  //Multipliers
  event.recipes.gtceu
    .assembler("gregitas:quantum_multi_threader")
    .itemInputs(
      '4x advanced_ae:quantum_accelerator',
      'advanced_ae:quantum_core',
      '32x gtceu:fine_cobalt_wire',
      '32x gtceu:fine_ruridit_wire')
    .itemOutputs('advanced_ae:quantum_multi_threader')
    .duration(800)
    .EUt(LuV)

  event.recipes.gtceu
    .assembler("gregitas:data_entangler")
    .itemInputs(
      '4x advanced_ae:quantum_storage_128',
      'advanced_ae:quantum_core',
      '32x gtceu:fine_cobalt_wire',
      '32x gtceu:fine_ruridit_wire')
    .itemOutputs('advanced_ae:data_entangler')
    .duration(800)
    .EUt(LuV)

  //Cards
  event.shaped('advanced_ae:strength_card', [" D ", "BAC", " E "], {
    A: 'advanced_ae:quantum_upgrade_base',
    B: Item.of('tfc:metal/sword/red_steel', '{Damage:0}'),
    C: Item.of('tfc:metal/sword/blue_steel', '{Damage:0}'),
    D: Item.of('tfc:metal/sword/black_steel', '{Damage:0}'),
    E: 'gtceu:iv_robot_arm'
  })

}
