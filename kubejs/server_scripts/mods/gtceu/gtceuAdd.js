let gtceuAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  //Rubber

  event
    .custom({
      type: "tfc:pot",
      ingredients: [
        {
          tag: "forge:dusts/sulfur"
        }
      ],
      fluid_ingredient: {
        ingredient: "gregitas:raw_resin",
        amount: 1000
      },
      duration: 3000,
      temperature: 300,
      item_output: [
        {
          item: "gtceu:sticky_resin"
        }
      ]
    })
    .id("gregitas:pot/sticky_resin")

  event
    .custom({
      type: "firmalife:vat",
	  input_item: {
        ingredient: {
          tag: "forge:small_dusts/sulfur"
        },
		count: 2
	  },
      input_fluid: {
        ingredient: "gregitas:raw_resin",
        amount: 1000
      },
      output_item: {
        item: "gtceu:sticky_resin"
      }
    })
    .id("gregitas:vat/sticky_resin")

  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          item: "gtceu:sticky_resin"
        }
      ],
      processingTime: 250,
      results: [
        {
          item: "gtceu:raw_rubber_dust"
        },
        {
          chance: 0.5,
          item: "gtceu:raw_rubber_dust"
        },
        {
          chance: 0.25,
          item: "gtceu:raw_rubber_dust"
        }
      ]
    })
    .id("gregitas:crushing/raw_rubber_pulp")

  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          item: "minecraft:quartz"
        }
      ],
      processingTime: 250,
      results: [
        {
          item: "enderio:powdered_quartz"
        },
        {
          chance: 0.5,
          item: "enderio:powdered_quartz"
        },
        {
          chance: 0.25,
          item: "enderio:powdered_quartz"
        }
      ]
    })
    .id("gregitas:crushing/powdered_quartz")

  event
    .custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "gtceu:small_sulfur_dust"
        },
        {
          item: "gtceu:raw_rubber_dust"
        },
        {
          item: "gtceu:raw_rubber_dust"
        },
        {
          item: "gtceu:raw_rubber_dust"
        }
      ],
      results: [
        {
          fluid: "gtceu:rubber",
          nbt: {},
          amount: 144
        }
      ],
      heatRequirement: "heated"
    })
    .id("gregitas:heated_mixing/rubber")

  event
    .custom({
      type: "create:filling",
      ingredients: [
        {
          item: "tfc:ceramic/ingot_mold"
        },
        {
          fluid: "gtceu:rubber",
          nbt: {},
          amount: 144
        }
      ],
      results: [
        {
          item: "tfc:ceramic/ingot_mold",
          nbt: {
            tank: {
              Amount: 144,
              FluidName: "gtceu:rubber"
            }
          },
          count: 1
        }
      ]
    })
    .id("gregitas:filling/mold/ingot_rubber")

  event
    .custom({
      type: "create:compacting",
      ingredients: [
        {
          item: "gtceu:rubber_ingot"
        }
      ],
      results: [
        {
          item: "gtceu:rubber_plate",
          count: 1
        }
      ],
      heatRequirement: "heated"
    })
    .id("gregitas:heated_pressing/rubber_plate")

    /*HAD TO CHANGE FROM TAG black_steel_ingot to specific gtceu:black_steel_ingot*/
    
  const createTfcSteelWelding = [
    {
      ingredients: ["tfc:metal/ingot/weak_steel", "#forge:ingots/pig_iron"],
      result: "high_carbon_black_steel"
    },
    {
      ingredients: ["tfc:metal/ingot/weak_blue_steel", "gtceu:black_steel_ingot"],
      result: "high_carbon_blue_steel"
    },
    {
      ingredients: ["tfc:metal/ingot/weak_red_steel", "gtceu:black_steel_ingot"],
      result: "high_carbon_red_steel"
    }
  ]

  createTfcSteelWelding.forEach((entry) => {
    event
      .custom({
        type: "create:compacting",
        ingredients: entry.ingredients
          .map((itemStr) => ({
            item: itemStr,
            count: 1
          }))
          .concat({
            item: `tfc:powder/flux`,
            count: 1
          }),
        results: [
          {
            item: `tfc:metal/ingot/${entry.result}`,
            count: 1
          }
        ],
        heatRequirement: "superheated"
      })
      .id(`gregitas:heated_pressing/steel/${entry.result}`)
  })

  const createTfcWeldable = [
    {
      ingots: [
        "bismuth",
        "bismuth_bronze",
        "black_bronze",
        "bronze",
        "nickel",
        "rose_gold",
        "silver",
        "tin",
        "zinc",
        "sterling_silver",
        "wrought_iron",
        "cast_iron",
        "steel",
        "black_steel",
        "blue_steel",
        "red_steel"
      ],
      items: (ingot) => `gtceu:${ingot}_ingot`,
      result: (ingot) => `tfc:metal/double_ingot/${ingot}`,
    },
    {
      ingots: ["constantan"],
      items: (ingot) => `immersiveengineering:ingot_${ingot}`,
      result: (ingot) => `tfc_ie_addon:metal/double_ingot/${ingot}`
    },
    {
      ingots: ["gold","copper"],
      items: (ingot) => `tfc:metal/ingot/${ingot}`,
      result: (ingot) => `tfc:metal/double_ingot/${ingot}`,
    },
    {
      ingots: ["stainless_steel","chromium"],
      items: (ingot) => `firmalife:metal/ingot/${ingot}`,
      result: (ingot) => `firmalife:metal/double_ingot/${ingot}`,
    },
    {
      ingots: ["electrum", "lead", "uranium"],
      items: (ingot) => `gtceu:${ingot}_ingot`,
      result: (ingot) => `tfc_ie_addon:metal/double_ingot/${ingot}`
    },
    {
      ingots: [
        "aluminium",
        "titanium",
        "invar",
        "ultimet",
        "tungsten_carbide",
        "damascus_steel",
        "tungsten_steel",
        "cobalt_brass",
        "vanadium_steel"
      ],
      items: (ingot) => `gtceu:${ingot}_ingot`,
      result: (ingot) => `gregitas:double_${ingot}_ingot`
    }
  ]

  createTfcWeldable.forEach((mod) => {
    const { result, items, ingots } = mod
    ingots.forEach((ingot) => {
      event
        .custom({
          type: "create:compacting",
          ingredients: [
            {
              item: items(ingot),
              count: 2
            },
            {
              item: `tfc:powder/flux`
            }
          ],
          results: [
            {
              item: result(ingot),
              count: 1
            }
          ],
          heatRequirement: "superheated"
        })
        .id(`gregitas:heated_pressing/double_ingot/${ingot}`)
    })
  })

  //Coke Oven
  //Normal
  event.recipes.gtceu
    .coke_oven("stick_bundle_to_charcoal")
    .itemInputs("tfc:stick_bundle")
    .itemOutputs("minecraft:charcoal")
    .outputFluids(Fluid.of("gtceu:creosote", 125))
    .duration(1000)

  event.recipes.gtceu
    .coke_oven("gem/bituminous_coal_to_exquisite_coke")
    .itemInputs("tfc:ore/bituminous_coal")
    .itemOutputs("gtceu:exquisite_coke_gem")
    .outputFluids(Fluid.of("gtceu:creosote", 750))
    .duration(1000)

  event.recipes.gtceu
    .coke_oven("gem/lignite_to_coke")
    .itemInputs("tfc:ore/lignite")
    .itemOutputs("gtceu:coke_gem")
    .outputFluids(Fluid.of("gtceu:creosote", 250))
    .duration(1000)

  //Improved
  event.recipes.gtceu
    .improved_coke_oven("stick_bundle_to_charcoal")
    .itemInputs("tfc:stick_bundle")
    .itemOutputs("minecraft:charcoal")
    .outputFluids(Fluid.of("gtceu:creosote", 125))
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .improved_coke_oven("logs_to_charcoal")
    .itemInputs("#minecraft:logs")
    .itemOutputs("minecraft:charcoal")
    .outputFluids(Fluid.of("gtceu:creosote", 250))
    .duration(450)
    .EUt(LV)

  event.recipes.gtceu
    .improved_coke_oven("gem/coal_to_coke")
    .itemInputs("minecraft:coal")
    .itemOutputs("gtceu:coke_gem")
    .outputFluids(Fluid.of("gtceu:creosote", 500))
    .duration(450)
    .EUt(LV)

  event.recipes.gtceu
    .improved_coke_oven("block/coal_to_coke")
    .itemInputs("minecraft:coal_block")
    .itemOutputs("gtceu:coke_block")
    .outputFluids(Fluid.of("gtceu:creosote", 4500))
    .duration(4050)
    .EUt(LV)

  event.recipes.gtceu
    .improved_coke_oven("gem/bituminous_coal_to_exquisite_coke")
    .itemInputs("tfc:ore/bituminous_coal")
    .itemOutputs("gtceu:exquisite_coke_gem")
    .outputFluids(Fluid.of("gtceu:creosote", 750))
    .duration(500)
    .EUt(LV)

  event.recipes.gtceu
    .improved_coke_oven("gem/lignite_to_coke")
    .itemInputs("tfc:ore/lignite")
    .itemOutputs("gtceu:coke_gem")
    .outputFluids(Fluid.of("gtceu:creosote", 250))
    .duration(500)
    .EUt(LV)

  //ALCR
  event.recipes.gtceu
    .assembly_line("advanced_large_chemical_reactor")
    .itemInputs(
      "gtceu:large_chemical_reactor",
      "3x #gtceu:circuits/iv",
      "15x gregitas_core:nitinol_plate",
      "4x gtceu:platinum_single_cable"
    )
    .itemOutputs("gtceu:advanced_large_chemical_reactor")
    .inputFluids(
      Fluid.of("gtceu:copper", 4608),
      Fluid.of("gtceu:tin", 4608),
      Fluid.of("gtceu:soldering_alloy", 2304),
      Fluid.of("gtceu:lubricant", 8000)
    )
    .duration(500)
    .EUt(IV)

  // Star Forge Controller Block Recipe
  event.recipes.gtceu
    .assembly_line("star_forge")
    .itemInputs([
      "gtceu:uhv_machine_hull",
      "4x #gtceu:circuits/uhv",
      "4x gtceu:gravi_star",
      "4x gtceu:uv_field_generator",
      "64x gtceu:uhpic_chip",
      "64x gtceu:ruthenium_trinium_americium_neutronate_single_wire"
    ])
    .inputFluids([Fluid.of("gtceu:europium", 2592), Fluid.of("gtceu:soldering_alloy", 1152)])
    .itemOutputs("gtceu:star_forge")
    .duration(2400)
    .EUt(UV)

  // Machine Recipes
  GTValues.VN.forEach((tier_name, index, arr) => {
    if (index >= 14) {
      return
    }
    let glass = $CraftingComponent.GLASS.getIngredient(index)
    if (glass instanceof $TagKey) {
      glass = "#" + glass.location().toString()
    }
    if (index == 1) {
      event
        .shaped(`gtceu:${tier_name.toLowerCase()}_chemical_vapor_depositor`, ["SCS", "GHG", "PCP"], {
          S: "gtceu:steel_small_fluid_pipe",
          C: `#gtceu:circuits/${tier_name.toLowerCase()}`,
          G: glass,
          H: `gtceu:${tier_name.toLowerCase()}_machine_hull`,
          P: `gtceu:${tier_name.toLowerCase()}_emitter`
        })
        .id(`gregitas:shaped/${tier_name.toLowerCase()}_chemical_vapor_depositor`)
    }
    if (index > 1) {
      event
        .shaped(`gtceu:${tier_name.toLowerCase()}_chemical_vapor_depositor`, ["SCS", "GHG", "PCP"], {
          S: "gtceu:stainless_steel_small_fluid_pipe",
          C: `#gtceu:circuits/${tier_name.toLowerCase()}`,
          G: glass,
          H: `gtceu:${tier_name.toLowerCase()}_machine_hull`,
          P: `gtceu:${tier_name.toLowerCase()}_emitter`
        })
        .id(`gregitas:shaped/${tier_name.toLowerCase()}_chemical_vapor_depositor`)
    }
    if (index >= 4) {
      event
        .shaped(`gtceu:${tier_name.toLowerCase()}_gas_centrifuge`, ["SCS", "PHP", "FCF"], {
          S: "gtceu:steel_normal_fluid_pipe",
          C: `#gtceu:circuits/${tier_name.toLowerCase()}`,
          P: `gtceu:${tier_name.toLowerCase()}_pump`,
          H: `gtceu:${tier_name.toLowerCase()}_machine_hull`,
          F: "gtceu:fluid_filter"
        })
        .id(`gregitas:shaped/${tier_name.toLowerCase()}_gas_centrifuge`)
    }
    if (index >= 7) {
      event.shaped(`gtceu:${tier_name.toLowerCase()}_plasma_centrifuge`, ["SCS", "PHP", "FCF"], {
        S: "gtceu:tungsten_large_fluid_pipe",
        C: `#gtceu:circuits/${tier_name.toLowerCase()}`,
        P: `gtceu:${tier_name.toLowerCase()}_pump`,
        H: `gtceu:${tier_name.toLowerCase()}_machine_hull`,
        F: $CraftingComponent.VOLTAGE_COIL.getIngredient(index)
      })
    }
  })

  // Cobble to gravel
  tfcCobbleToSand.forEach((type) => {
    event.recipes.gtceu
      .forge_hammer(`rock/cobble_${type.stone}_to_gravel`)
      .itemInputs(`tfc:rock/cobble/${type.stone}`)
      .itemOutputs(`tfc:rock/gravel/${type.stone}`)
      .duration(100)
      .EUt(18)
  })

  // Gravel to sand
  tfcCobbleToSand.forEach((type) => {
    event.recipes.gtceu
      .forge_hammer(`sand/${type.stone}_to_${type.sand}_sand`)
      .itemInputs(`tfc:rock/gravel/${type.stone}`)
      .itemOutputs(`tfc:sand/${type.sand}`)
      .duration(100)
      .EUt(8)
  })

  // Rock breaker recipes
  const tfcRockbreakerCobbles = tfcCobbleToSand.map((t) => t.stone).concat(["quartzite"])

  tfcRockbreakerCobbles.forEach((type) => {
    event.recipes.gtceu
      .rock_breaker(`rock/cobble/${type}`)
      .notConsumable(`tfc:rock/cobble/${type}`)
      .itemOutputs(`tfc:rock/cobble/${type}`)
      .addDataString("fluidA", "minecraft:lava")
      .addDataString("fluidB", "minecraft:water")
      .duration(16)
      .EUt(24)
      .addCondition(RockBreakerCondition.INSTANCE)
  })

  //Modification
  event.replaceInput({ mod: "gtceu" }, "minecraft:sand", "#forge:sand")
  event.replaceInput({ mod: "gtceu" }, "minecraft:red_sand", "#forge:sand")
  event.replaceOutput({ mod: "gtceu" }, "minecraft:sand", "tfc:sand/yellow")
  event.replaceInput({ mod: "gtceu" }, "minecraft:dirt", "#minecraft:dirt")
  event.replaceOutput({ mod: "gtceu" }, "minecraft:dirt", "tfc:dirt/loam")
  event.replaceInput({ id: "gtceu:sifter/gravel_sifting" }, "minecraft:gravel", "#tfc:rock/gravel")
  event.replaceOutput({ mod: "gtceu" }, "#minecraft:stone_tool_materials", "#forge:cobblestone")
  event.remove({ id: "gtceu:rock_breaker/deepslate" })
  event.remove({ id: "gtceu:compressor/red_sandstone" })

  enderTC.forEach((ender) => {
    let dye_fluid = Fluid.of(`gtceu:${ender.id}_dye`, 144)
    let color_nbt = `{code:"${ender.colour}",owner:"all"}`

    event.recipes.gtceu
      .chemical_bath(`ender_chest_${ender.id}`)
      .itemInputs("enderchests:ender_chest")
      .inputFluids(dye_fluid)
      .itemOutputs(Item.of("enderchests:ender_chest", color_nbt))
      .duration(5 * 20)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(
        Item.of("enderchests:ender_chest", color_nbt), 
        ["enderchests:ender_chest", dye_fluid]
	  ).id(`gregitas:filling/ender_chest_${ender.id}`)

    event.recipes.gtceu
      .chemical_bath(`ender_tank_${ender.id}`)
      .itemInputs("endertanks:ender_tank")
      .inputFluids(dye_fluid)
      .itemOutputs(Item.of("endertanks:ender_tank", color_nbt))
      .duration(5 * 20)
      .EUt(LV)
      .category("gtceu:chem_dyes")
    event.recipes.create.filling(
        [Item.of("endertanks:ender_tank", color_nbt)], 
        ["endertanks:ender_tank", dye_fluid]
	  ).id(`gregitas:filling/ender_tank_${ender.id}`)
  })

  event.remove({ id: "gtceu:shaped/wooden_barrel" })
  event.recipes.kubejs
    .shaped("gtceu:wood_drum", ["mRs", "PWP", "PWP"], {
      m: "#forge:tools/files",
      R: ["gtceu:sticky_resin", "firmalife:beeswax", "create:super_glue"],
      s: "#forge:tools/saws",
      P: "#minecraft:planks",
      W: ["gtceu:long_iron_rod", "gtceu:long_wrought_iron_rod"]
    })
    .damageIngredient(["#forge:tools"])

  event.recipes.kubejs.shaped("gtceu:lv_electric_motor", ["cwr", "wmw", "rwc"], {
    c: "gtceu:tin_single_cable",
    w: "gtceu:copper_single_wire",
    r: "gtceu:wrought_iron_rod",
    m: "gregitas_core:magnetic_wrought_iron_rod"
  })

  event.recipes.kubejs
    .shaped("2x gtceu:pump_deck", ["   ", "SPS", "sCh"], {
      S: "gtceu:wrought_iron_screw",
      P: "#forge:treated_wood",
      C: "#forge:slabs/cobblestone",
      s: "#forge:tools/screwdrivers",
      h: "#forge:tools/hammers"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("gtceu:pump_hatch", ["SRs", "PLP", "CRC"], {
      S: "gtceu:wrought_iron_screw",
      P: "#forge:treated_wood",
      C: "#forge:slabs/cobblestone",
      R: "gtceu:wrought_iron_ring",
      L: "gtceu:wood_large_fluid_pipe",
      s: "#forge:tools/screwdrivers"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("gtceu:primitive_pump", ["RNS", "BPs", "CLC"], {
      S: "gtceu:wrought_iron_screw",
      P: "#forge:treated_wood",
      C: "#forge:slabs/cobblestone",
      R: "gtceu:wrought_iron_ring",
      L: "gtceu:wood_large_fluid_pipe",
      N: "gtceu:wood_normal_fluid_pipe",
      B: "gtceu:wrought_iron_rotor",
      s: "#forge:tools/screwdrivers"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("gtceu:wood_small_fluid_pipe", ["   ", "sPf", "   "], {
      s: "#forge:tools/saws",
      P: "#minecraft:planks",
      f: "#forge:tools/files"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("gtceu:wood_normal_fluid_pipe", ["   ", "PPP", "s f"], {
      s: "#forge:tools/saws",
      P: "#minecraft:planks",
      f: "#forge:tools/files"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("gtceu:wood_large_fluid_pipe", ["PPP", "s f", "PPP"], {
      s: "#forge:tools/saws",
      P: "#minecraft:planks",
      f: "#forge:tools/files"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs.shaped("gtceu:improved_coke_oven", ["CCC", "LPL", "TLT"], {
    C: "gtceu:lv_voltage_coil",
    P: "gregitas:bronze_plated_bricks",
    T: "gtceu:tin_single_cable",
    L: "#gtceu:circuits/lv"
  })
  event.recipes.kubejs
    .shaped("2x gregitas:bronze_plated_bricks", ["PPP", "hBw", "PPP"], {
      P: "gtceu:bronze_plate",
      B: "minecraft:bricks",
      h: "#forge:tools/hammers",
      w: "#forge:tools/wrenches"
    })
    .damageIngredient(["#forge:tools"])
  event.recipes.kubejs
    .shaped("3x gtceu:compressed_coke_clay", ["CCC", "SFS", "SSS"], {
      C: "minecraft:clay_ball",
      S: "#forge:sand",
      F: "gtceu:brick_wooden_form"
    })
    .damageIngredient(["gtceu:brick_wooden_form"])
    .id("gtceu:shaped/compressed_coke_clay")

  /// Extractor
  /// TFC Ore to GT Fluid
  const TFCFluidGTFluidMap = {
    "tfc:metal/copper": "gtceu:copper",
    "tfc:metal/zinc": "gtceu:zinc",
    "tfc:metal/cast_iron": "tfc:metal/cast_iron",
    "tfc:metal/gold": "gtceu:gold",
    "tfc:metal/nickel": "gtceu:nickel",
    "tfc:metal/bismuth": "gtceu:bismuth",
    "tfc:metal/tin": "gtceu:tin",
    "tfc:metal/silver": "gtceu:silver",
    "gtceu:chromium": "gtceu:chromium",
    "tfc_ie_addon:metal/uranium": "gtceu:uranium",
    "tfc_ie_addon:metal/aluminum": "gtceu:aluminium",
    "tfc_ie_addon:metal/lead": "gtceu:lead"
  }
  /// Mainly here just if someone wants to tweak later
  const TFCFluidEUMap = {
    16: 16, /// 1/9 of 4320 = 480eu
    24: 24, /// 1/6 of 4320 = 720eu
    36: 36, /// 1/4 of 4320 = 1080eu
    48: 48 /// 1/3 of 4320 = 1440eu
  }
  event.forEachRecipe({ input: `/^tfc:ore\/?(small|poor|normal|rich).*/`, type: "tfc:heating" }, (r) => {
    let orePiece = unwrapValue(r.get("ingredient")).get("ingredient").get("item")
    let fluidIngredient = unwrapValue(r.get("result_fluid"))

    let fluidRemap = TFCFluidGTFluidMap[fluidIngredient.getId()]
    if (fluidRemap == null) {
      return
    }
    let orePieceId = orePiece.toString().replace('"', "")
    orePieceId = orePieceId.substring("tfc:ore/".length)

    event.recipes.gtceu
      .extractor(`extract_${orePieceId}`)
      .itemInputs(orePiece)
      .outputFluids(Fluid.of(fluidRemap, fluidIngredient.getAmount()))
      .duration(TFCFluidEUMap[fluidIngredient.getAmount()])
      .EUt(LV)
  })

  event.forEachRecipe({ input: `/^tfc_ie_addon:ore\/?(small|poor|normal|rich).*/`, type: "tfc:heating" }, (r) => {
    let orePiece = unwrapValue(r.get("ingredient")).get("ingredient").get("item")
    let fluidIngredient = unwrapValue(r.get("result_fluid"))

    let fluidRemap = TFCFluidGTFluidMap[fluidIngredient.getId()]
    if (fluidRemap == null) {
      return
    }
    let orePieceId = orePiece.toString().replace('"', "")
    orePieceId = orePieceId.substring("tfc_ie_addon:ore/".length)

    event.recipes.gtceu
      .extractor(`extract_${orePieceId}`)
      .itemInputs(orePiece)
      .outputFluids(Fluid.of(fluidRemap, fluidIngredient.getAmount()))
      .duration(TFCFluidEUMap[fluidIngredient.getAmount()])
      .EUt(LV)
  })

  event.forEachRecipe({ input: `/^firmalife:ore\/?(small|poor|normal|rich).*/`, type: "tfc:heating" }, (r) => {
    let orePiece = unwrapValue(r.get("ingredient")).get("ingredient").get("item")
    let fluidIngredient = unwrapValue(r.get("result_fluid"))

    let fluidRemap = TFCFluidGTFluidMap[fluidIngredient.getId()]
    if (fluidRemap == null) {
      return
    }
    let orePieceId = orePiece.toString().replace('"', "")
    orePieceId = orePieceId.substring("firmalife:ore/".length)

    event.recipes.gtceu
      .extractor(`extract_${orePieceId}`)
      .itemInputs(orePiece)
      .outputFluids(Fluid.of(fluidRemap, fluidIngredient.getAmount()))
      .duration(TFCFluidEUMap[fluidIngredient.getAmount()])
      .EUt(LV)
  })
  event.recipes.gtceu
    .fluid_solidifier("tfc:metal/ingot/cast_iron")
    .inputFluids("tfc:metal/cast_iron 144")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("tfc:metal/ingot/cast_iron")
    .duration(60)
    .EUt(LV)

  event.recipes.gtceu
    .fluid_solidifier("create:andesite_alloy")
    .inputFluids("gregitas_core:igneous_alloy 144")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("create:andesite_alloy")
    .duration(60)
    .EUt(LV)

  event.recipes.gtceu
    .centrifuge("menril_logs")
    .itemInputs("1x integrateddynamics:menril_log")
    .itemOutputs(["2x integrateddynamics:crystalized_menril_chunk"])
    .outputFluids("integrateddynamics:menril_resin 500")
    .EUt(LV)
    .duration(100)

  event.recipes.gtceu
    .assembler("gregitas:packaged_greenhouse")
    .itemInputs(
      "32x firmalife:iron_greenhouse_wall",
      "32x firmalife:iron_greenhouse_wall",
      "32x firmalife:iron_greenhouse_wall",
      "12x firmalife:copper_pipe",
      "4x firmalife:sprinkler",
      "4x firmalife:iron_greenhouse_port",
      "4x gtceu:duct_tape",
      "firmalife:iron_greenhouse_door",
      "gtceu:wood_crate"
    )
    .inputFluids(Fluid.of("gtceu:concrete", 7056))
    .itemOutputs("gregitas:packaged_greenhouse")
    .EUt(MV)
    .duration(100)

  event.recipes.gtceu
    .assembler("gregitas:greenhouse")
    .itemInputs(
      "gregitas:packaged_greenhouse",
      "32x firmalife:iron_greenhouse_wall",
      "11x firmalife:iron_greenhouse_wall",
      "gtceu:solid_machine_casing",
      "3x #gtceu:circuits/mv",
      "2x gtceu:copper_double_cable",
      "2x gtceu:lv_field_generator"
    )
    .itemOutputs("gtceu:greenhouse")
    .EUt(MV)
    .duration(250)

  event.recipes.gtceu
    .chemical_vapor_deposition("gregitas:green_froglight")
    .itemInputs("3x gtceu:zinc_dust", "3x gtceu:sulfur_dust")
    .inputFluids("gtceu:copper 72")
    .itemOutputs("32x minecraft:verdant_froglight")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .chemical_vapor_deposition("gregitas:orange_froglight")
    .itemInputs("3x gtceu:zinc_dust", "3x gtceu:sulfur_dust")
    .inputFluids("gtceu:manganese 72")
    .itemOutputs("32x minecraft:ochre_froglight")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .chemical_vapor_deposition("gregitas:blue_froglight")
    .itemInputs("3x gtceu:zinc_dust", "3x gtceu:sulfur_dust")
    .inputFluids("gtceu:silver 72")
    .itemOutputs("32x minecraft:pearlescent_froglight")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .chemical_vapor_deposition("gregitas:tinted_glass")
    .itemInputs("1x #forge:dusts/amethyst", "4x #forge:glass")
    .itemOutputs("4x minecraft:tinted_glass")
    .EUt(LV)
    .duration(200)

  /* Sugar Refinering */ {
    event.recipes.gtceu
      .extractor("cane_pulp")
      .itemInputs("1x tfc:food/sugarcane")
      .itemOutputs("1x gregitas:cane_pulp")
      .outputFluids(Fluid.of("gregitas:cane_syrup", 15))
      .EUt(LV)
      .duration(50)
    event.recipes.gtceu
      .centrifuge("cane_syrup")
      .itemInputs("1x gregitas:cane_pulp")
      .chancedOutput("1x gtceu:bio_chaff", 2000, 150)
      .outputFluids(Fluid.of("gregitas:cane_syrup", 150))
      .EUt(LV)
      .duration(110)
    event.recipes.gtceu
      .fluid_heater("sugar_syrup")
      .inputFluids(Fluid.of("gregitas:cane_syrup", 100))
      .outputFluids(Fluid.of("gregitas:sugar_syrup", 50))
      .circuit(1)
      .EUt(LV)
      .duration(25)
    event.recipes.gtceu
      .autoclave("sugar_crystallization")
      .inputFluids(Fluid.of("gregitas:sugar_syrup", 225))
      .itemOutputs("1x gtceu:sugar_block")
      .EUt(LV)
      .duration(110)
  }
  event.recipes.gtceu
    .extractor("seed_oil")
    .itemInputs("1x #tfc:seeds")
    .outputFluids(Fluid.of("gtceu:seed_oil", 10))
    .EUt(LV)
    .duration(50)

  const plantballExtractables = ["#tfc:foods", "#tfc:plants"]

  plantballExtractables.forEach((tag) => {
    event.recipes.gtceu
      .compressor(`tfc_plantball_${tag.substring(5)}`)
      .itemInputs(`8x ${tag}`)
      .itemOutputs("1x gtceu:plant_ball")
      .EUt(2)
      .duration(300)
  })

  //yeast starter

  event.recipes.gtceu
    .fermenter("yeast_starter_create")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/fruits"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("minecraft:water", 100))
    .outputFluids(Fluid.of("firmalife:yeast_starter", 100))
    .EUt(LV)
    .duration(2000)

  event.recipes.gtceu
    .fermenter("yeast_starter_duplicate")
    .itemInputs(
      InputItem.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "firmalife:feeds_yeast"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("firmalife:yeast_starter", 100))
    .outputFluids(Fluid.of("firmalife:yeast_starter", 500))
    .EUt(LV)
    .duration(200)

  //dough

  event.recipes.gtceu
    .mixer("gt_mixer_oat_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/oat_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/oat_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_wheat_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/wheat_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/wheat_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_barley_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/barley_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/barley_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_maize_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/maize_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/maize_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_rice_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/rice_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/rice_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_rye_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/rye_flour"
          }
        },
        1
      )
    )
    .itemInputs("#tfc:sweetener")
    .inputFluids(Fluid.of("firmalife:yeast_starter", 1000))
    .itemOutputs("4x firmalife:food/rye_dough")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("gt_mixer_hardtack_dough")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/flour"
          }
        },
        1
      )
    )
    .itemInputs("tfc:powder/salt")
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .itemOutputs("4x firmalife:food/hardtack_dough")
    .EUt(LV)
    .duration(50)

  //limewater

  event.recipes.gtceu
    .mixer("limewater_from_flux")
    .itemInputs("tfc:powder/flux")
    .inputFluids(Fluid.of("minecraft:water", 500))
    .outputFluids(Fluid.of("tfc:limewater", 500))
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .mixer("limewater_from_lime")
    .itemInputs("tfc:powder/lime")
    .inputFluids(Fluid.of("minecraft:water", 500))
    .outputFluids(Fluid.of("tfc:limewater", 500))
    .EUt(LV)
    .duration(50)

  //raw resin

  event.recipes.gtceu
    .mixer("sticky_resin_from_raw")
    .itemInputs("gtceu:small_sulfur_dust")
    .inputFluids(Fluid.of("gregitas:raw_resin", 500))
    .itemOutputs("gtceu:sticky_resin")
    .EUt(LV)
    .duration(50)

  //dry mud bricks

  event.recipes.gtceu
    .alloy_smelter("loam_brick_dry")
    .itemInputs("4x tfc:drying_bricks/loam")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x tfc:mud_brick/loam")
    .EUt(LV)
    .duration(80)

  event.recipes.gtceu
    .alloy_smelter("silty_brick_dry")
    .itemInputs("4x tfc:drying_bricks/silty_loam")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x tfc:mud_brick/silty_loam")
    .EUt(LV)
    .duration(80)

  event.recipes.gtceu
    .alloy_smelter("sandy_brick_dry")
    .itemInputs("4x tfc:drying_bricks/sandy_loam")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x tfc:mud_brick/sandy_loam")
    .EUt(LV)
    .duration(80)


  //wet mud

  event.recipes.gtceu
    .mixer("gt_loam_mud_bricks")
    .itemInputs("1x tfc:dirt/loam")
    .itemInputs("1x tfc:straw")
    .inputFluids(Fluid.of("minecraft:water", 125))
    .itemOutputs("4x tfc:drying_bricks/loam")
    .EUt(ULV)
    .duration(160)

  event.recipes.gtceu
    .mixer("gt_silty_mud_bricks")
    .itemInputs("1x tfc:dirt/silty_loam")
    .itemInputs("1x tfc:straw")
    .inputFluids(Fluid.of("minecraft:water", 125))
    .itemOutputs("4x tfc:drying_bricks/silty_loam")
    .EUt(ULV)
    .duration(160)

  event.recipes.gtceu
    .mixer("gt_sandy_mud_bricks")
    .itemInputs("1x tfc:dirt/sandy_loam")
    .itemInputs("1x tfc:straw")
    .inputFluids(Fluid.of("minecraft:water", 125))
    .itemOutputs("4x tfc:drying_bricks/sandy_loam")
    .EUt(ULV)
    .duration(160)
  //Clay Using Ore Washer

  event.recipes.gtceu
    .ore_washer("gt_sand_to_clay")
    .itemInputs("1x #forge:sand")
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .chancedOutput("1x minecraft:clay_ball", 7500, 1000)
    .chancedOutput("1x minecraft:clay_ball", 2500, 600)
    .duration(100)
    .EUt(8)

  //deepslate

  event.recipes.gtceu
    .rock_breaker("chep_deepslate")
    .notConsumable("minecraft:deepslate")
    .itemOutputs("minecraft:deepslate")
    .addDataString("fluidA", "minecraft:lava")
    .addDataString("fluidB", "minecraft:water")
    .duration(16)
    .EUt(24)
    .addCondition(RockBreakerCondition.INSTANCE)

  //alabaster brick

  event.recipes.gtceu
    .alloy_smelter("alabaster_brick")
    .itemInputs("tfc:ore/gypsum")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x tfc:alabaster_brick")
    .EUt(LV)
    .duration(80)

  event.recipes.gtceu
    .alloy_smelter("alabaster_brick_with_dust")
    .itemInputs("4x gtceu:gypsum_dust")
    .notConsumable("gtceu:ingot_casting_mold")
    .itemOutputs("4x tfc:alabaster_brick")
    .EUt(LV)
    .duration(80)

  //milk vinegar

  //couldnt get fluidtags/array stuff to work with fluids

  event.recipes.gtceu
    .mixer("milk_vinegar")
    .inputFluids(Fluid.of("minecraft:milk", 900))
    .inputFluids(Fluid.of("tfc:vinegar", 100))
    .outputFluids(Fluid.of("tfc:milk_vinegar", 1000))
    .EUt(LV)
    .duration(100)

  event.recipes.gtceu
    .mixer("milk_vinegar_from_goat")
    .inputFluids(Fluid.of("firmalife:goat_milk", 900))
    .inputFluids(Fluid.of("tfc:vinegar", 100))
    .outputFluids(Fluid.of("tfc:milk_vinegar", 1000))
    .EUt(LV)
    .duration(100)

  event.recipes.gtceu
    .mixer("milk_vinegar_from_yak")
    .inputFluids(Fluid.of("firmalife:yak_milk", 900))
    .inputFluids(Fluid.of("tfc:vinegar", 100))
    .outputFluids(Fluid.of("tfc:milk_vinegar", 1000))
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .mixer("milk_vinegar_from_coconut")
    .inputFluids(Fluid.of("firmalife:coconut_milk", 900))
    .inputFluids(Fluid.of("tfc:vinegar", 100))
    .outputFluids(Fluid.of("tfc:milk_vinegar", 1000))
    .EUt(LV)
    .duration(100)

  //vinegar

  event.recipes.gtceu
    .fermenter("vinegar_from_beer")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/fruits"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("tfc:beer", 250))
    .outputFluids(Fluid.of("tfc:vinegar", 250))
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .fermenter("vinegar_from_rum")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/fruits"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("tfc:rum", 250))
    .outputFluids(Fluid.of("tfc:vinegar", 250))
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .fermenter("vinegar_from_whiskey")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/fruits"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("tfc:whiskey", 250))
    .outputFluids(Fluid.of("tfc:vinegar", 250))
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .fermenter("vinegar_from_vodka")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            tag: "tfc:foods/fruits"
          }
        },
        1
      )
    )
    .inputFluids(Fluid.of("tfc:vodka", 250))
    .outputFluids(Fluid.of("tfc:vinegar", 250))
    .EUt(LV)
    .duration(50)

  //curdled milk

  event.recipes.gtceu
    .mixer("curdled_milk")
    .inputFluids(Fluid.of("minecraft:milk", 900))
    .inputFluids(Fluid.of("tfc:milk_vinegar", 100))
    .outputFluids(Fluid.of("tfc:curdled_milk", 1000))
    .EUt(LV)
    .duration(100)

  event.recipes.gtceu
    .mixer("curdled_goat_milk")
    .inputFluids(Fluid.of("firmalife:goat_milk", 900))
    .inputFluids(Fluid.of("tfc:milk_vinegar", 100))
    .outputFluids(Fluid.of("firmalife:curdled_goat_milk", 1000))
    .EUt(LV)
    .duration(100)

  event.recipes.gtceu
    .mixer("curdled_yak_milk")
    .inputFluids(Fluid.of("firmalife:yak_milk", 900))
    .inputFluids(Fluid.of("tfc:milk_vinegar", 100))
    .outputFluids(Fluid.of("firmalife:curdled_yak_milk", 1000))
    .EUt(LV)
    .duration(100)

  //tfc brine

  event.recipes.gtceu
    .mixer("tfc_brine")
    .inputFluids(Fluid.of("tfc:salt_water", 900))
    .inputFluids(Fluid.of("tfc:vinegar", 100))
    .outputFluids(Fluid.of("tfc:brine", 1000))
    .EUt(LV)
    .duration(20)

  //firmalife stuff

  event.recipes.gtceu
    .forming_press("firmalife_copper_pipe")
    .notConsumable("gtceu:small_pipe_extruder_mold")
    .itemInputs("gtceu:copper_plate")
    .itemOutputs("8x firmalife:copper_pipe")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .forming_press("firmalife_sprinkler")
    .notConsumable("gtceu:tiny_pipe_extruder_mold")
    .itemInputs("gtceu:copper_plate")
    .itemOutputs("firmalife:sprinkler")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .forming_press("firmalife_reinforced_glass")
    .notConsumable("gtceu:plate_extruder_mold")
    .itemInputs("#tfc:glass_batches")
    .itemInputs("#tfc:glassworking_potash")
    .itemOutputs("8x firmalife:reinforced_glass")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .forming_press("firmalife_reinforced_glass_gt_materials")
    .notConsumable("gtceu:plate_extruder_mold")
    .itemInputs("#forge:dusts/glass")
    .itemInputs("#forge:dusts/soda_ash")
    .itemOutputs("8x firmalife:reinforced_glass")
    .duration(200)
    .EUt(LV)

  //jute fiber

  event.recipes.gtceu
    .mixer("gt_mixer_jute_fiber")
    .itemInputs("tfc:jute")
    .inputFluids(Fluid.of("minecraft:water", 200))
    .itemOutputs("tfc:jute_fiber")
    .EUt(LV)
    .duration(50)

  //olive oil

  event.recipes.gtceu
    .forge_hammer("olive_crushing")
    .itemInputs(
      Ingredient.of(
        {
          type: "tfc:not_rotten",
          ingredient: {
            item: "tfc:food/olive"
          }
        },
        1
      )
    )
    .itemOutputs("2x tfc:olive_paste")
    .EUt(LV)
    .duration(50)

  event.recipes.gtceu
    .fluid_heater("olive_oil_water")
    .itemInputs("5x tfc:olive_paste")
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .outputFluids(Fluid.of("tfc:olive_oil_water", 1000))
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .mixer("olive_oil_with_jute_net")
    .itemInputs("tfc:jute_net")
    .inputFluids(Fluid.of("tfc:olive_oil_water", 250))
    .outputFluids(Fluid.of("tfc:olive_oil", 50))
    .itemOutputs("tfc:dirty_jute_net")
    .EUt(LV)
    .duration(200)

  event.recipes.gtceu
    .mixer("jute_net_cleaning")
    .itemInputs("tfc:dirty_jute_net")
    .inputFluids(Fluid.of("minecraft:water", 250))
    .itemOutputs("tfc:jute_net")
    .EUt(LV)
    .duration(100)

  //wireless redstone

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_circuit")
    .itemInputs("4x gtceu:gold_plate", "4x gtceu:glowstone_plate", "4x ae2:fluix_pearl", "#gtceu:circuits/mv")
    .inputFluids(Fluid.of("gtceu:red_alloy", 144))
    .itemOutputs("wirelessredstone:circuit")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_remote")
    .itemInputs(
      "4x gtceu:iron_plate",
      "4x gtceu:redstone_plate",
      "wirelessredstone:circuit",
      "create:linked_controller",
      "4x ae2:fluix_pearl"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("wirelessredstone:remote")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_frequency_sniffer")
    .itemInputs(
      "4x gtceu:silver_plate",
      "4x gtceu:redstone_plate",
      "wirelessredstone:circuit",
      "create:linked_controller",
      "4x ae2:fluix_pearl"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("wirelessredstone:frequency_sniffer")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_frequency_tool")
    .itemInputs(
      "4x gtceu:tin_plate",
      "4x gtceu:redstone_plate",
      "wirelessredstone:circuit",
      "create:linked_controller",
      "4x ae2:fluix_pearl"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("wirelessredstone:frequency_tool")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_receiver")
    .itemInputs("8x gtceu:iron_plate", "4x gtceu:redstone_plate", "2x wirelessredstone:circuit", "create:redstone_link")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("wirelessredstone:redstone_receiver")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .assembler("gregitas:wirelessredstone_transmitter")
    .itemInputs(
      "8x gtceu:iron_plate",
      "4x gtceu:glowstone_plate",
      "2x wirelessredstone:circuit",
      "create:redstone_link"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("wirelessredstone:redstone_transmitter")
    .duration(200)
    .EUt(MV)

  event.recipes.gtceu
    .wiremill("gregitas:morered_wire")
    .itemInputs("gtceu:red_alloy_ingot")
    .circuit(5)
    .itemOutputs("4x morered:red_alloy_wire")
    .duration(40)
    .EUt(ULV)

  //honey

  event.recipes.gtceu
    .centrifuge("gregitas:centrifuge_honey")
    .itemInputs("firmalife:raw_honey")
    .outputFluids(Fluid.of("create:honey", 100))
    .duration(40)
    .EUt(ULV)

  //firmalife misc

  event.recipes.gtceu
    .extruder("gregitas:brass_mechanism_extruder")
    .itemInputs("#forge:ingots/brass")
    .notConsumable("gtceu:small_gear_extruder_mold")
    .itemOutputs("2x tfc:brass_mechanisms")
    .duration(80)
    .EUt(64)

  //integrated omni/mono

  event.recipes.gtceu
    .assembler("gregitas:omni_directional")
    .itemInputs(
      "8x #gtceu:circuits/luv",
      "4x gtceu:ev_machine_hull",
      "4x gtceu:iv_field_generator",
      "32x gtceu:hpic_chip",
      "6x integrateddynamics:part_connector_mono_directional"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("2x integrateddynamics:part_connector_omni_directional")
    .duration(200)
    .EUt(IV)

  event.recipes.gtceu
    .assembler("gregitas:mono_directional")
    .itemInputs(
      "4x #gtceu:circuits/ev",
      "2x gtceu:hv_machine_hull",
      "2x gtceu:hv_field_generator",
      "16x gtceu:lpic_chip",
      "16x integrateddynamics:logic_director"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("2x integrateddynamics:part_connector_mono_directional")
    .duration(200)
    .EUt(HV)

  //temporary rocket related recipes until there are proper ones

  event.recipes.gtceu
    .assembler("gregitas:advanced_fuel_tank")
    .itemInputs("4x gcyr:basic_fuel_tank", "2x gtceu:titanium_frame")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("gcyr:advanced_fuel_tank")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .assembler("gregitas:advanced_rocket_motor")
    .itemInputs("4x gcyr:basic_rocket_motor", "2x gtceu:titanium_frame")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("gcyr:advanced_rocket_motor")
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu
    .chemical_reactor("gregitas:potassium_carbonate")
    .itemInputs("2x gtceu:potassium_dust")
    .inputFluids(Fluid.of("gtceu:oxygen", 1000))
    .inputFluids(Fluid.of("gtceu:carbon_dioxide", 1000))
    .itemOutputs("6x gtceu:potassium_carbonate_dust")
    .duration(40)
    .EUt(HV)

  event.recipes.gtceu
    .chemical_reactor("gregitas:potassium_carbonate_potash")
    .itemInputs("3x gtceu:potash_dust")
    .inputFluids(Fluid.of("gtceu:carbon_dioxide", 1000))
    .itemOutputs("6x gtceu:potassium_carbonate_dust")
    .duration(40)
    .EUt(LV)

  event.recipes.gtceu
    .large_chemical_reactor("gregitas:co_mn_br_catalyst")
    .inputFluids(Fluid.of("gcyr:cobalt_bromide", 1000))
    .inputFluids(Fluid.of("gcyr:manganese_bromide", 1000))
    .inputFluids(Fluid.of("gcyr:manganese_acetate", 1000))
    .inputFluids(Fluid.of("gcyr:hydrobromic_acid", 1000))
    .outputFluids(Fluid.of("gcyr:co_mn_br_catalyst", 4000))
    .duration(100)
    .EUt(HV)

  //stuff

  event.recipes.gtceu
    .chemical_reactor("gregitas:sodium_hydroxide")
    .itemInputs("gtceu:sodium_dust")
    .inputFluids(Fluid.of("minecraft:water", 1000))
    .outputFluids(Fluid.of("gtceu:hydrogen", 1000))
    .itemOutputs("3x gtceu:sodium_hydroxide_dust")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .chemical_reactor("gregitas:sodium_bisulfate")
    .itemInputs("gtceu:sodium_dust")
    .inputFluids(Fluid.of("gtceu:sulfuric_acid", 1000))
    .itemOutputs("7x gtceu:sodium_bisulfate_dust")
    .duration(60)
    .EUt(LV)

  // anvils

  event.recipes.gtceu
    .fluid_solidifier("gregitas:wrought_iron_anvil")
    .notConsumable("gtceu:anvil_casting_mold")
    .inputFluids(Fluid.of("gtceu:wrought_iron", 2016))
    .itemOutputs("tfc:metal/anvil/wrought_iron")
    .duration(400)
    .EUt(LV)

  event.recipes.gtceu
    .fluid_solidifier("gregitas:steel_anvil")
    .notConsumable("gtceu:anvil_casting_mold")
    .inputFluids(Fluid.of("gtceu:steel", 2016))
    .itemOutputs("railcraft:steel_anvil")
    .duration(400)
    .EUt(MV)

  //amethyst conversion (cut amethyst only has 1 source as of adding, from tfc ore)

  event.recipes.gtceu
    .laser_engraver("gregitas:cut_amethyst_conversion")
    .itemInputs("minecraft:amethyst_shard")
    .notConsumable("gtceu:purple_glass_lens")
    .itemOutputs("tfc:gem/amethyst")
    .duration(100)
    .EUt(LV)

  //yarn

  event.recipes.gtceu
    .compressor("gregitas:wool_yarn_from_wool")
    .itemInputs("1x tfc:wool")
    .itemOutputs("8x tfc:wool_yarn")
    .duration(100)
    .EUt(ULV)

  event.recipes.gtceu
    .compressor("gregitas:string_from_jute")
    .itemInputs("1x tfc:jute_fiber")
    .itemOutputs("2x minecraft:string")
    .duration(100)
    .EUt(ULV)

  //wool

  event.recipes.gtceu
    .compressor("gregitas:silk_cloth_from_string")
    .itemInputs("32x minecraft:string")
    .itemOutputs("4x tfc:silk_cloth")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .forming_press("gregitas:wool_from_silk_cloth")
    .notConsumable("gtceu:block_extruder_mold")
    .itemInputs("4x tfc:silk_cloth")
    .itemOutputs("minecraft:white_wool")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .compressor("gregitas:wool_cloth_from_yarn")
    .itemInputs("32x tfc:wool_yarn")
    .itemOutputs("4x tfc:wool_cloth")
    .duration(100)
    .EUt(HV)

  event.recipes.gtceu
    .forming_press("gregitas:wool_from_wool_cloth")
    .notConsumable("gtceu:block_extruder_mold")
    .itemInputs("4x tfc:wool_cloth")
    .itemOutputs("2x minecraft:white_wool")
    .duration(100)
    .EUt(HV)
  
  // TFC chains
  
  const TFCChains = ["copper", "bronze", "bismuth_bronze", "black_bronze", "wrought_iron", "steel", "black_steel", "blue_steel", "red_steel"]
  
  TFCChains.forEach((material) => {
    event.recipes.gtceu
      .assembler(`gregitas:chain_${material}`)
      .circuit(4)
      .itemInputs(`4x #forge:rings/${material}`)
      .itemOutputs(`16x tfc:metal/chain/${material}`)
      .duration(4 * 20)
      .EUt(8)
  })

  //wireless chargers

  event.recipes.gtceu
    .assembler("gregitas:basic_wireless_player_charger")
    .circuit(1)
    .itemInputs("4x gtceu:steel_frame", "4x #gtceu:batteries/lv", "2x #gtceu:circuits/lv", "gtceu:lv_field_generator")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("wirelesschargers:basic_wireless_player_charger")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:advanced_wireless_player_charger")
    .circuit(1)
    .itemInputs(
      "4x gtceu:stainless_steel_frame",
      "4x #gtceu:batteries/hv",
      "2x #gtceu:circuits/hv",
      "gtceu:hv_field_generator",
      "wirelesschargers:basic_wireless_player_charger"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("wirelesschargers:advanced_wireless_player_charger")
    .duration(200)
    .EUt(HV)

  event.recipes.gtceu
    .assembler("gregitas:basic_wireless_block_charger")
    .circuit(2)
    .itemInputs("4x gtceu:steel_frame", "4x #gtceu:batteries/lv", "2x #gtceu:circuits/lv", "gtceu:lv_field_generator")
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
    .itemOutputs("wirelesschargers:basic_wireless_block_charger")
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu
    .assembler("gregitas:advanced_wireless_block_charger")
    .circuit(2)
    .itemInputs(
      "4x gtceu:stainless_steel_frame",
      "4x #gtceu:batteries/hv",
      "2x #gtceu:circuits/hv",
      "gtceu:hv_field_generator",
      "wirelesschargers:basic_wireless_block_charger"
    )
    .inputFluids(Fluid.of("gtceu:soldering_alloy", 576))
    .itemOutputs("wirelesschargers:advanced_wireless_block_charger")
    .duration(200)
    .EUt(HV)
}
