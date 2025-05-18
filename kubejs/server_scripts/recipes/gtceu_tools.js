const tfcRockKnapping = ["igneous_extrusive", "igneous_intrusive", "metamorphic", "sedimentary"]

const gtMortars = [
  {
    id: "bronze",
    tier: 2,
    double: "#forge:double_ingots/any_bronze"
  },
  {
    id: "invar",
    tier: 3,
    double: "gregitas:double_invar_ingot"
  },
  {
    id: "steel",
    tier: 4,
    double: "tfc:metal/double_ingot/steel"
  },
  {
    id: "wrought_iron",
    tier: 3,
    double: "tfc:metal/double_ingot/wrought_iron"
  },
  {
    id: "damascus_steel",
    tier: 5,
    double: "gregitas:double_damascus_steel_ingot"
  },
  {
    id: "cobalt_brass",
    tier: 3,
    double: "gregitas:double_cobalt_brass_ingot"
  }
]

const gtceuToolsTFC = [
  {
    id: "aluminium",
    fluid: "gtceu:aluminium",
    tier: 3,
    double: 'gregitas:double_aluminium_ingot'
  },
  {
    id: "titanium",
    fluid: "gtceu:titanium",
    tier: 6,
    double: "gregitas:double_titanium_ingot"
  },
  {
    id: "bronze",
    fluid: "tfc:metal/bronze",
    tier: 2,
    double: "tfc:metal/double_ingot/bronze"
  },
  {
    id: "invar",
    fluid: "gtceu:invar",
    tier: 3,
    double: "gregitas:double_invar_ingot"
  },
  {
    id: "sterling_silver",
    fluid: "tfc:metal/sterling_silver",
    tier: 4,
    double: "tfc:metal/double_ingot/sterling_silver"
  },
  {
    id: "rose_gold",
    fluid: "tfc:metal/rose_gold",
    tier: 4,
    double: "tfc:metal/double_ingot/rose_gold"
  },
  {
    id: "stainless_steel",
    fluid: "firmalife:metal/stainless_steel",
    tier: 5,
    double: "firmalife:metal/double_ingot/stainless_steel"
  },
  {
    id: "steel",
    fluid: "tfc:metal/steel",
    tier: 4,
    double: "tfc:metal/double_ingot/steel"
  },
  {
    id: "wrought_iron",
    fluid: "tfc:metal/wrought_iron",
    tier: 3,
    double: "tfc:metal/double_ingot/wrought_iron"
  },
  {
    id: "damascus_steel",
    fluid: "gtceu:damascus_steel",
    tier: 5,
    double: "gregitas:double_damascus_steel_ingot"
  },
  {
    id: "cobalt_brass",
    fluid: "gtceu:cobalt_brass",
    tier: 3,
    double: "gregitas:double_cobalt_brass_ingot"
  },
  {
    id: "red_steel",
    fluid: "tfc:metal/red_steel",
    tier: 6,
    double: "tfc:metal/double_ingot/red_steel"
  },
  {
    id: "blue_steel",
    fluid: "tfc:metal/blue_steel",
    tier: 6,
    double: "tfc:metal/double_ingot/blue_steel"
  }
]

const gtceuToolsGT = [
  {
    id: "aluminium",
    fluid: "gtceu:aluminium",
    tier: 3,
    double: "gregitas:double_aluminium_ingot"
  },
  {
    id: "titanium",
    fluid: "gtceu:titanium",
    tier: 6,
    double: "gregitas:double_titanium_ingot"
  },
  {
    id: "invar",
    fluid: "gtceu:invar",
    tier: 3,
    double: "gregitas:double_invar_ingot"
  },
  {
    id: "sterling_silver",
    fluid: "tfc:metal/sterling_silver",
    tier: 4,
    double: "tfc:metal/double_ingot/sterling_silver"
  },
  {
    id: "rose_gold",
    fluid: "tfc:metal/rose_gold",
    tier: 4,
    double: "tfc:metal/double_ingot/rose_gold"
  },
  {
    id: "stainless_steel",
    fluid: "firmalife:metal/stainless_steel",
    tier: 5,
    double: "firmalife:metal/double_ingot/stainless_steel"
  },
  {
    id: "damascus_steel",
    fluid: "gtceu:damascus_steel",
    tier: 5,
    double: "gregitas:double_damascus_steel_ingot"
  },
  {
    id: "cobalt_brass",
    fluid: "gtceu:cobalt_brass",
    tier: 3,
    double: "gregitas:double_cobalt_brass_ingot"
  }
]

const gtceuALLToolMetalsID = [
  "aluminium",
  "titanium",
  "bronze",
  "invar",
  "sterling_silver",
  "rose_gold",
  "stainless_steel",
  "steel",
  "ultimet",
  "wrought_iron",
  "tungsten_carbide",
  "damascus_steel",
  "tungsten_steel",
  "cobalt_brass",
  "vanadium_steel",
  "red_steel",
  "blue_steel"
]

let tfcGregTools = (/** @type {Internal.RecipesEventJS} */ event) => {
  //Mortar
  tfcRockKnapping.forEach((rock) => {
    event.custom({
      type: "tfc:knapping",
      knapping_type: "tfc:rock",
      outside_slot_required: false,
      pattern: ["     ", "X   X", "XXXXX", " XXX ", "     "],
      result: {
        item: "gregitas:stone_bowl"
      },
      ingredient: {
        tag: `tfc:${rock}_rock`
      }
    })
  })

  event
    .custom({
      type: "tfc:knapping",
      knapping_type: "tfc:flint",
      outside_slot_required: false,
      pattern: ["   XX", "  XXX", "XXXX ", "XXX  ", "XXX  "],
      result: {
        item: "gregitas:flint_pestle"
      }
    })
    .id("gregitas:flint_knapping/flint_pestle")

  event.shapeless("gtceu:flint_mortar", ["gregitas:stone_bowl", "gregitas:flint_pestle"])

  gtMortars.forEach((metal) => {
    event.recipes.tfc
      .anvil(`gregitas:${metal.id}_pestle`, metal.double, ["shrink_last", "draw_second_last", "hit_third_last"])
      .tier(metal.tier)
    /*
    event.custom({
      type: "tfc:anvil",
      input: {
        item: metal.double
      },
      result: {
        item: `gregitas:${metal.id}_pestle`,
        count: 1
      },
      tier: metal.tier,
      rules: ["shrink_last", "draw_second_last", "hit_third_last"]
    })
    */
    event
      .shapeless(`gtceu:${metal.id}_mortar`, ["gregitas:stone_bowl", `gregitas:${metal.id}_pestle`])
      .id(`gregitas:shapeless/${metal.id}_mortar`)
    event.remove({ id: `gtceu:shaped/mortar_${metal.id}` })
  })
  event.remove({ id: "gtceu:shaped/mortar_flint" })
  event.remove({ id: "gtceu:shaped/mortar_iron" })

  //File
  gtceuToolsTFC.forEach((metal) => {
    event.recipes.tfc
      .anvil(`gregitas:${metal.id}_file_head`, metal.double, ["shrink_last", "draw_second_last", "hit_third_last"])
      .tier(metal.tier)
    /*
    event.custom({
      type: "tfc:anvil",
      input: {
        item: metal.double
      },
      result: {
        item: `gregitas:${metal.id}_file_head`,
        count: 1
      },
      tier: metal.tier,
      rules: ["shrink_last", "draw_second_last", "hit_third_last"]
    })
    */
    event
      .shaped(`gtceu:${metal.id}_file`, ["F", "H"], {
        F: `gregitas:${metal.id}_file_head`,
        H: "gregitas:small_tool_handle"
      })
      .id(`gregitas:shaped/${metal.id}_file`)
  })

  //Screwdriver
  gtceuToolsTFC.forEach((metal) => {
    if (["damascus_steel", "red_steel", "blue_steel"].includes(metal.id)) return
    event.custom({
      type: "tfc:welding",
      first_input: {
        item: `gtceu:${metal.id}_rod`
      },
      second_input: {
        item: `gtceu:${metal.id}_rod`
      },
      tier: metal.tier,
      result: {
        item: `gtceu:long_${metal.id}_rod`
      }
    })
    event.recipes.tfc
      .anvil(`gtceu:${metal.id}_screwdriver_tip`, `gtceu:long_${metal.id}_rod`, [
        "shrink_last",
        "draw_second_last",
        "draw_third_last"
      ])
      .tier(metal.tier)
    /*
    event.custom({
      type: "tfc:anvil",
      input: {
        item: `gtceu:${metal.id}_long_rod`
      },
      result: {
        item: `gtceu:${metal.id}_screwdriver_tip`,
        count: 1
      },
      tier: metal.tier,
      rules: ["shrink_last", "draw_second_last", "draw_third_last"]
    })
    */
    event
      .shaped(`gtceu:${metal.id}_screwdriver`, ["S", "H"], {
        S: `gtceu:${metal.id}_screwdriver_tip`,
        H: "gregitas:small_tool_handle"
      })
      .id(`gregitas:shaped/${metal.id}_screwdriver`)
  })

  //Hammer
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_hammer_head`
      },
      tier: metal.tier,
      rules: ["punch_last", "shrink_not_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_hammer`, ["RH"], { H: `gregitas:${metal.id}_hammer_head`, R: "#forge:rods/wooden" })
      .id(`gregitas:shaped/${metal.id}_hammer`)
  })

  //Saw
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_saw_blade`
      },
      tier: metal.tier,
      rules: ["hit_last", "hit_second_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_saw`, ["HR"], { H: `gregitas:${metal.id}_saw_blade`, R: "gtceu:long_wood_rod" })
      .id(`gregitas:shaped/${metal.id}_saw`)
  })

  //Wire Cutters
  gtceuToolsTFC.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        item: metal.double
      },
      result: {
        item: `gregitas:${metal.id}_cutter_blade`,
        count: 1
      },
      tier: metal.tier,
      rules: ["bend_last", "draw_second_last", "hit_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_wire_cutter`, ["SB", "Bs"], {
        S: `gtceu:${metal.id}_screw`,
        B: `gregitas:${metal.id}_cutter_blade`,
        s: "#forge:tools/screwdrivers"
      })
      .id(`gregitas:shaped/${metal.id}_wire_cutter`)
  })

  // Soft Mallet and Plunger
  const gtToolPolymers = ["rubber", "silicone_rubber", "styrene_butadiene_rubber", "polyethylene", "polytetrafluoroethylene", "polybenzimidazole"]
  
  function gtAddPolymerTool(tool_type, material, knapping_pattern, casting_mold) {
    let result_tool = `gtceu:${material}_${tool_type}`
    let tool_head = `gregitas:${material}_${tool_type}_head`
	
    if (knapping_pattern) {
      event.custom({
        type: "tfc:knapping",
        knapping_type: "tfc:rubber",
        outside_slot_required: false,
        pattern: knapping_pattern,
        result: {
          item: tool_head
        },
        ingredient: {
          item: `gtceu:${material}_plate`
        }
      }).id(`gregitas:rubber_knapping/${material}_${tool_type}_head`)
    }
    
    if (casting_mold) {
      let casting_fluid = `gtceu:${material}`
      event.custom({
        type: "tfc:casting",
        mold: {
          item: casting_mold
        },
        fluid: {
          ingredient: casting_fluid,
          amount: 144
        },
        result: {
          item: tool_head
        },
        break_chance: 0.5
      }).id(`gregitas:rubber_casting/${material}_${tool_type}_head`)
	  
      event.recipes.create.deploying(
        [tool_head, Item.of(casting_mold).withChance(0.5)],
        [
          {
            type: "tfc:heatable",
            ingredient: {
              type: "forge:partial_nbt",
              item: casting_mold,
              nbt: {
                tank: {
                  Amount: 144, 
                  FluidName: casting_fluid
                }
              }
	        }
          },
          {
            tag: "tfc:chisels"
          }
        ]
      )
	  
      event.recipes.gtceu
        .fluid_solidifier(tool_head)
        .inputFluids(casting_fluid + " 144")
        .notConsumable(casting_mold)
        .itemOutputs(tool_head)
        .duration(60)
        .EUt(LV)
	}
    
    event.shapeless(result_tool, ["gtceu:long_wood_rod", tool_head])
	event.recipes.create.deploying(result_tool, ["gtceu:long_wood_rod", tool_head])
  }
  
  gtToolPolymers.forEach((material) => {
    gtAddPolymerTool(
      "mallet", 
      material, 
      [
        " XX  ", 
        "XXXX ", 
        "XXXXX", 
        " XXXX", 
        "  XX "
      ],
	  "tfc:ceramic/hammer_head_mold"
	)
    gtAddPolymerTool(
      "plunger", 
      material, 
      [
        " X   ",
        "XXX  ",
        "XXXX ",
        "XXXXX",
        " XXX "
      ],
	  null
	)
  })

  //Wrench
  gtceuToolsTFC.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        item: `gtceu:double_${metal.id}_plate`
      },
      result: {
        item: `gregitas:${metal.id}_wrench_base`,
        count: 1
      },
      tier: metal.tier,
      rules: ["bend_last", "shrink_second_last", "hit_third_last"]
    })

    event.custom({
      type: "tfc:anvil",
      input: {
        item: `gtceu:${metal.id}_plate`
      },
      result: {
        item: `gregitas:${metal.id}_wrench_claw`,
        count: 1
      },
      tier: metal.tier,
      rules: ["bend_last", "shrink_second_last", "hit_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_wrench`, ["Ls", "SB"], {
        L: `gregitas:${metal.id}_wrench_claw`,
        B: `gregitas:${metal.id}_wrench_base`,
        S: `gtceu:${metal.id}_screw`,
        s: "#forge:tools/screwdrivers"
      })
      .id(`gregitas:shaped/${metal.id}_wrench`)
  })

  //Crowbar
  gtceuToolsTFC.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        item: metal.double
      },
      result: {
        item: `gregitas:${metal.id}_crowbar_base`,
        count: 1
      },
      tier: metal.tier,
      rules: ["bend_last", "draw_second_last", "hit_third_last"]
    })

    event.shaped(`gtceu:${metal.id}_crowbar`, ["CW", "WD"], {
      C: `gregitas:${metal.id}_crowbar_base`,
      W: "#tfc:high_quality_cloth",
      D: "#forge:dyes/blue"
    })
  })

  //Knife
  gtceuToolsTFC.forEach((metal) => {
    if (["bronze", "steel", "wrought_iron", "red_steel", "blue_steel"].includes(metal.id)) return
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_knife_blade`
      },
      tier: metal.tier,
      rules: ["hit_last", "draw_second_last", "draw_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_knife`, [" B", "H "], {
        B: `gregitas:${metal.id}_knife_blade`,
        H: "gregitas:small_tool_handle"
      })
      .id(`gregitas:shaped/${metal.id}_knife`)
  })

  //Sword
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:double_ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_sword_blade`
      },
      tier: metal.tier,
      rules: ["hit_last", "bend_second_last", "bend_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_sword`, [" H", "R "], { H: `gregitas:${metal.id}_sword_blade`, R: "#forge:rods/wood" })
      .id(`gregitas:shaped/${metal.id}_sword`)
  })

  //Pickaxe
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_pickaxe_head`
      },
      tier: metal.tier,
      rules: ["punch_last", "bend_not_last", "draw_not_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_pickaxe`, [" H", "R "], {
        H: `gregitas:${metal.id}_pickaxe_head`,
        R: "#forge:rods/wood"
      })
      .id(`gregitas:shaped/${metal.id}_pickaxe`)
  })

  //Axe
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_axe_head`
      },
      tier: metal.tier,
      rules: ["punch_last", "hit_second_last", "upset_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_axe`, [" H", "R "], { H: `gregitas:${metal.id}_axe_head`, R: "#forge:rods/wood" })
      .id(`gregitas:shaped/${metal.id}_axe`)
  })

  //Shovel
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_shovel_head`
      },
      tier: metal.tier,
      rules: ["punch_last", "hit_not_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_shovel`, [" H", "R "], {
        H: `gregitas:${metal.id}_shovel_head`,
        R: "#forge:rods/wood"
      })
      .id(`gregitas:shaped/${metal.id}_shovel`)
  })

  //Hoe
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_hoe_head`
      },
      tier: metal.tier,
      rules: ["punch_last", "hit_not_last", "bend_not_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_hoe`, [" H", "R "], { H: `gregitas:${metal.id}_hoe_head`, R: "#forge:rods/wood" })
      .id(`gregitas:shaped/${metal.id}_hoe`)
  })

  //Scythe
  gtceuToolsGT.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        tag: `forge:ingots/${metal.id}`
      },
      result: {
        item: `gregitas:${metal.id}_scythe_head`
      },
      tier: metal.tier,
      rules: ["bend_third_last", "draw_second_last", "bend_third_last"]
    })

    event
      .shaped(`gtceu:${metal.id}_scythe`, [" H", "R "], {
        H: `gregitas:${metal.id}_scythe_head`,
        R: "#forge:rods/wood"
      })
      .id(`gregitas:shaped/${metal.id}_scythe`)
  })

  //Buchery Knife
  gtceuToolsTFC.forEach((metal) => {
    event.custom({
      type: "tfc:anvil",
      input: {
        item: `gtceu:double_${metal.id}_plate`
      },
      result: {
        item: `gregitas:${metal.id}_butchery_blade`,
        count: 1
      },
      tier: metal.tier,
      rules: ["shrink_last", "draw_second_last", "hit_third_last"]
    })

    event
      .shaped(Item.of(`gtceu:${metal.id}_butchery_knife`).enchant("looting", 3), [" B", "H "], {
        B: `gregitas:${metal.id}_butchery_blade`,
        H: "gregitas:small_tool_handle"
      })
      .id(`gregitas:shaped/${metal.id}_butchery_knife`)
  })

  //Aluminum sheet fix
  event.recipes.tfc.anvil('tfc_ie_addon:metal/sheet/aluminum', 'gregitas:double_aluminium_ingot',  ["hit_last", "hit_second_last", "hit_third_last"]).tier(1)
  event.custom({
    type: "tfc:welding",
    first_input: {
      tag: "forge:ingots/aluminum"
    },
    second_input: {
      tag: "forge:ingots/aluminum"
    },
    tier: 0,
    result: {
      "item": 'gregitas:double_aluminium_ingot'
    }
  })

  //Removal & Misc

  event.recipes.kubejs
    .shaped("gregitas:small_tool_handle", ["Ls"], { L: "#tfc:lumber", s: "#forge:tools/saws" })
    .damageIngredient("#forge:tools/saws")
    .id("gregitas:shaped/small_tool_handle")

  event.recipes.kubejs
    .shaped("2x gtceu:long_wood_rod", ["s", "L"], { L: "#tfc:lumber", s: "#forge:tools/saws" })
    .damageIngredient("#forge:tools/saws")
    .id("gregitas:shaped/long_wood_rod")

  event.remove({ id: /gtceu:shaped\/file_.*/ })
  event.remove({ not: { output: /gtceu:.*_wrench/ }, id: /gtceu:shaped\/wrench_.*/ })
  event.remove({ id: /gtceu:shaped\/saw_.*/ })
  event.remove({ id: /gtceu:shaped\/plunger_.*/ })
  event.remove({ id: /gtceu:shaped\/hammer_.*/ })
  event.remove({ id: /gtceu:shaped\/knife_.*/ })
  event.remove({ id: /gtceu:shaped\/screwdriver_.*/ })
  event.remove({ id: /gtceu:shaped\/crowbar_.*/ })
  event.remove({ id: /gtceu:shaped\/soft_mallet_.*/ })
  event.remove({ id: /gtceu:shaped\/wire_cutter_.*/ })
  event.remove({ id: /gtceu:shaped\/sword_.*/ })
  event.remove({ id: /gtceu:shaped\/pickaxe_.*/ })
  event.remove({ id: /gtceu:shaped\/axe_.*/ })
  event.remove({ id: /gtceu:shaped\/shovel_.*/ })
  event.remove({ id: /gtceu:shaped\/hoe_.*/ })
  event.remove({ id: /gtceu:shaped\/scythe_.*/ })
  event.remove({ id: /gtceu:shaped\/butchery_knife_.*/ })
  event.remove({ id: /gtceu:shaped\/plate_.*/ })
  event.remove({ id: /gtceu:shaped\/plate_double_.*/ })
  event.remove({ id: /gtceu:shaped\/stick_.*/ })
  event.remove({ id: /gtceu:shaped\/stick_long_.*/ })
  event.remove({ id: /gtceu:shaped\/stick_long_stick_.*/ })

  event.forEachRecipe({ id: /gtceu:shaped\// }, (r) => {
    let isTool = false
    r.originalRecipeIngredients.forEach((ingredient) => {
      if (Ingredient.of(["#forge:tools/hammers", "#forge:tools/saws", "#forge:tools/knives"]).test(ingredient)) {
        isTool = true
      }
    })
    isTool &&
      event.recipes.kubejs
        .shaped(r.json.asMap().result, r.json.asMap().pattern, r.json.asMap().key)
        .damageIngredient(["#forge:tools"])
        .noShrink()
        .noMirror()
        .id(r.getId())
  })
  event.forEachRecipe({ id: /gtceu:shapeless\// }, (r) => {
    let isTool = false
    r.originalRecipeIngredients.forEach((ingredient) => {
      if (Ingredient.of(["#forge:tools/hammers", "#forge:tools/saws", "#forge:tools/knives"]).test(ingredient)) {
        isTool = true
      }
    })
    isTool &&
      event.recipes.kubejs
        .shapeless(r.json.asMap().result, r.json.asMap().ingredients)
        .damageIngredient(["#forge:tools"])
        .id(r.getId())
  })
}
