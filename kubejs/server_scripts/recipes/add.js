// priority 10
const fish =[
  "tfc:food/cod",
  "tfc:food/salmon",
  "tfc:food/bluegill",
  "tfc:food/crappie",
  "tfc:food/lake_trout",
  "tfc:food/largemouth_bass",
  "tfc:food/rainbow_trout",
  "tfc:food/smallmouth_bass",
  "tfc:food/tropical_fish"
]
const tfcStone = [
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]
const tfcStone2 = [
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "dacite",
  "slate",
  "phyllite",
  "schist",
  "gneiss"
]
const vanStone = [
  "granite",
  "diorite",
  "andesite",
  "quartzite",
  "marble",
  "basalt"
]
const gemStonesA = [
 "amethyst",
 "diamond",
 "emerald",
 "lapis_lazuli",
 "opal",
 "pyrite",
 "ruby",
 "sapphire",
 "topaz"
]
const tfcSaplings = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow"
]
const TFCGrains = [
 "oat",
 "barley",
 "maize",
 "rye",
 "rice",
 "wheat"
]

const gtVacuumShit = [
  "europium",
  "iridium",
  "niobium",
  "osmium",
  "palladium",
  "rhodium",
  "ruthenium",
  "samarium",
  "silicon",
  "titanium",
  "tungsten",
  "vanadium",
  "yttrium",
  "naquadah",
  "enriched_naquadah",
  "naquadria",
  "trinium",
  "kanthal",
  "nichrome",
  "niobium_nitride",
  "niobium_titanium",
  "black_bronze",
  "ruridit",
  "ultimet",
  "vanadium_gallium",
  "yttrium_barium_cuprate",
  "osmiridium",
  "tungsten_carbide",
  "magnesium_diboride",
  "mercury_barium_calcium_cuprate",
  "uranium_triplatinum",
  "samarium_iron_arsenic_oxide",
  "indium_tin_barium_titanium_cuprate",
  "uranium_rhodium_dinaquadide",
  "enriched_naquadah_trinium_europium_duranide",
  "ruthenium_trinium_americium_neutronate",
  "tungsten_steel",
  "naquadah_alloy",
  "rhodium_plated_palladium",
  "hssg",
  "hsse",
  "hsss",
  "tantalum_carbide",
  "molybdenum_disilicide",
  "zeron_100",
  "watertight_steel",
  "incoloy_ma_956",
  "maraging_steel_300",
  "hastelloy_x",
  "stellite_100",
  "titanium_carbide",
  "titanium_tungsten_carbide",
  "hastelloy_c_276"
]

// ingot/plates/etc. to convert to GT equivalents
const gtMetalReplaceMap = {
  "alltheores:brass_ingot": "gtceu:brass_ingot",
  "alltheores:bronze_ingot": "gtceu:bronze_ingot",
  "alltheores:invar_ingot": "gtceu:invar_ingot",
  "alltheores:lead_ingot": "gtceu:lead_ingot",
  "alltheores:lead_plate": "gtceu:lead_plate",
  "alltheores:nickel_plate": "gtceu:nickel_plate",
  "alltheores:silver_ingot": "gtceu:silver_ingot",
  "alltheores:silver_plate": "gtceu:silver_plate",
  "alltheores:steel_plate": "gtceu:steel_plate",
  "alltheores:tin_ingot": "gtceu:tin_ingot",
  "alltheores:zinc_ingot": "gtceu:zinc_ingot",
  "alltheores:zinc_plate": "gtceu:zinc_plate",
  "create:copper_sheet": "gtceu:copper_plate",
  "create:golden_sheet": "gtceu:gold_plate",
  "create:zinc_ingot": "gtceu:zinc_ingot",
  "createaddition:zinc_sheet": "gtceu:zinc_plate",
  "immersiveengineering:ingot_aluminum": "gtceu:aluminium_ingot",
  "immersiveengineering:ingot_lead": "gtceu:lead_ingot",
  "immersiveengineering:ingot_nickel": "gtceu:nickel_ingot",
  "immersiveengineering:plate_lead": "gtceu:lead_plate",
  "immersiveengineering:plate_nickel": "gtceu:nickel_plate",
  "railcraft:brass_plate": "gtceu:brass_plate",
  "railcraft:bronze_ingot": "gtceu:bronze_ingot",
  "railcraft:gold_plate": "gtceu:gold_plate",
  "railcraft:lead_ingot": "gtceu:lead_ingot",
  "railcraft:silver_ingot": "gtceu:silver_ingot",
  "railcraft:silver_plate": "gtceu:silver_plate",
  "railcraft:tin_plate": "gtceu:tin_plate",
  "tfc:metal/ingot/brass": "gtceu:brass_ingot",
  "tfc:metal/ingot/bronze": "gtceu:bronze_ingot",
  "tfc:metal/ingot/silver": "gtceu:silver_ingot",
  "tfc:metal/ingot/steel": "gtceu:steel_ingot",
  "tfc:metal/ingot/wrought_iron": "gtceu:wrought_iron_ingot",
  "tfc:metal/sheet/silver": "gtceu:silver_plate",
  "tfc:metal/sheet/steel": "gtceu:steel_plate",
  "tfc:metal/sheet/zinc": "gtceu:zinc_plate",
}
const colorMap = [
  "orange",
  "light_gray",
  "cyan",
  "red",
  "magenta",
  "purple",
  "pink",
  "gray",
  "blue",
  "brown",
  "black",
  "lime",
  "light_blue",
  "yellow",
  "green"
]

let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  const tfc = event.recipes.tfc
  const shaped = event.recipes.minecraft.crafting_shaped
  const smoking = event.recipes.minecraft.smoking
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
        {
            tag: "tfc:chisels"
        },
        {
            item: `tfc:rock/button/chalk`
        }
        ],
        result: {
            item: `chalk:white_chalk`
        }
    }
  })

  colorMap.forEach((color) => {
    event.custom({
      type: "tfc:barrel_sealed",
      input_item: {
        ingredient: {
          item: 'chalk:white_chalk'
        }
      },
      input_fluid: {
        ingredient: `tfc:${color}_dye`,
        amount: 25
      },
      output_item: {
        item: `chalk:${color}_chalk`
      },
      duration: 1200
    }).id(`gregitas:barrel/${color}_chalk`)
    event.recipes.gtceu.chemical_bath(`${color}_chalk`)
    .itemInputs('chalk:white_chalk')
    .inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
    .itemOutputs(Item.of(`chalk:${color}_chalk`))
    .duration(500)
    .EUt(LV)

  })
  // event.replaceOutput({ type: "tfc:anvil" }, "gtceu:wrought_iron_rod", "minecraft:apple")
  /*
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/wrought_iron" },
    result: {
      item: "gtceu:wrought_iron_rod",
      count: 2
    },
    tier: 3,
    rules: ["bend_last", "draw_second_last", "draw_third_last"]
  })
  */
  event.recipes.tfc.anvil(
    "treetap:tap",
    "#forge:ingots/copper",
    ["bend_last", "bend_second_last", "bend_third_last"])
    .tier(1)
    .applyBonus(false)
    .id("gregitas:anvil/treetap")
  /*
  event.custom({
    type: "tfc:anvil",
    input: { tag: "forge:ingots/copper" },
    result: {
      item: "treetap:tap",
      count: 1
    },
    tier: 1,
    rules: ["bend_last", "bend_second_last", "bend_third_last"]
  })
  */

  shaped("tfc:bloomery", ["BBB", "B B", "BBB"], {
    B: "#forge:double_sheets/any_bronze"
  })

  event.custom({
    type: "tfc:glassworking",
    operations: ["blow", "blow", "roll", "pinch", "saw"],
    batch: {
      item: "tfc:silica_glass_batch"
    },
    result: {
      item: "gtceu:glass_tube"
    }
  })

  //Create Start

  shaped("create:millstone", [" M ", " G ", " Q "], {
    M: "tfc:handstone",
    G: "create:cogwheel",
    Q: "tfc:quern"
  })
  gemStonesA.forEach((gemStone) => {
      event.custom({
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
              type: "minecraft:crafting_shapeless",
              ingredients: [
              {
                  tag: "create:sandpaper"
              },
              {
                  item: `tfc:ore\/${gemStone}`
              },
              {
                  tag: "tfc:chisels"
              },
              {
                  tag: "forge:tools/hammers"
              }
              ],
              result: {
                  item: `tfc:gem\/${gemStone}`
              }
          }
        })
    })
    event.shapeless('2x minecraft:blaze_powder', [
      '#forge:tools/mortars',
      "minecraft:blaze_rod"
    ])
    event.shapeless('1x gtceu:saltpeter_dust', [
      '4x tfc:powder/saltpeter'
    ])
  event.recipes.create.pressing(
    [
      { item: "tfc:refined_iron_bloom" }
    ],
    [
      {
        type: 'tfc:heatable',
        min_temp: 921,
        ingredient: {
          item: 'tfc:raw_iron_bloom',
        },
      }
    ]
  )
  event.recipes.create.pressing(
    [
      { item: "gtceu:wrought_iron_ingot" }
    ],
    [
      {
        type: 'tfc:heatable',
        min_temp: 921,
        ingredient: {
          item: 'tfc:refined_iron_bloom',
        },
      }
    ]
  )
  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "create:shaft"
      },
      { tag: "forge:treated_wood" }
    ],
    results: [{ item: "create:cogwheel" }]
  })
  shaped("3x create:belt_connector", ["   ", "LLL", "MRM"], {
    L: "#tfc:leather_knapping",
    M: "tfc:brass_mechanisms",
    R: "#forge:rods/wrought_iron"
  })
  shaped("6x create:belt_connector", ["   ", "LLL", "MRM"], {
    L: "#tfc:leather_knapping",
    M: "#forge:gears/wrought_iron",
    R: "#forge:rods/steel"
  })
  event.custom({
    type: "create:deploying",
    ingredients: [
      {
        item: "create:cogwheel"
      },
      { tag: "forge:treated_wood" }
    ],
    results: [{ item: "create:large_cogwheel" }]
  })
  //Create End

  //GTCEU Start
  event.recipes.kubejs.shaped("gtceu:primitive_blast_furnace", ["HRS", "PBR", "DRS"], {
    H: "#forge:tools/hammers",
    R: "#forge:rods/steel",
    S: "#forge:screws/steel",
    P: "#forge:sheets/steel",
    B: "gtceu:firebricks",
    D: "#forge:tools/screwdrivers"
  }).damageIngredient(["#forge:tools"])
  shaped("2x gtceu:coke_oven_bricks", ["BMB","MBM","BMB"], {
    M: "tfc:mortar",
    B: "gtceu:coke_oven_brick"
  })
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
        {
            tag: "tfc:lumber"
        },
        {
            tag: "tfc:lumber"
        },
        {
            tag: "tfc:lumber"
        },
        {
            tag: "tfc:lumber"
        },
        {
            tag: "forge:tools/saws"
        }
        ],
        result: {
            item: "gtceu:empty_wooden_form"
        }
    }
  })
  event.custom({
   type: "create:filling",
   ingredients: [
       {
         tag: "tfc:foods/breads"
       },
       {
         "amount": 250,
         "fluidTag": "forge:milk"
       }
     ],
     results: [
       {
         item: "create:sweet_roll"
       }
     ]
  })
    event.custom({
      type: "tfc:damage_inputs_shapeless_crafting",
      recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
          {
              item: "gtceu:empty_wooden_form"
          },
          {
              tag: "forge:tools/knives"
          }
          ],
          result: {
              item: "gtceu:brick_wooden_form"
          }
      }
    })

    event.recipes.gtceu.assembler("enchanting")
              .circuit(3)
              .itemInputs(
              {
                "type": "forge:partial_nbt",
                "item": "apotheosis:gem",
                "nbt": "{\"affix_data\":{\"rarity\":\"apotheosis:mythic\"}}"
              },
              {
                "type": "forge:partial_nbt",
                "item": "apotheosis:gem",
                "nbt": "{\"affix_data\":{\"rarity\":\"apotheosis:mythic\"}}"
              },
              {
                  tag: "forge:obsidian"
              },
              {
                  tag: "forge:double_plates/red_steel"
              },
              {
                  tag: "forge:plates/blue_steel"
              },
              )
              .itemOutputs("minecraft:enchanting_table")
              .duration(2500)
              .EUt(HV)

  tfcSaplings.forEach((sapling) => {
    shaped(`gregitas:${sapling}_hull_segment`, ["P P", "PLP", "SSS"], {
               P: `tfc:wood/planks/${sapling}`,
               S: `tfc:wood/planks/${sapling}_slab`,
               L: `tfc:wood/stripped_log/${sapling}`
     })
    //Greenhouse
    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}`)
      .circuit(1)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(`64x tfc:wood/log/${sapling}`, `4x tfc:wood/sapling/${sapling}`)
      .duration(640)
      .EUt(MV)

    event.recipes.gtceu
      .greenhouse(`gregitas:${sapling}_boosted`)
      .circuit(2)
      .notConsumable(`tfc:wood/sapling/${sapling}`)
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids(Fluid.of("minecraft:water", 1000))
      .itemOutputs(`64x tfc:wood/log/${sapling}`, `64x tfc:wood/log/${sapling}`, `8x tfc:wood/sapling/${sapling}`)
      .duration(640)
      .EUt(MV)

    //Cutter
    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_water`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("minecraft:water", 4))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(120)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_distilled_water`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:distilled_water", 3))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(80)
      .EUt(LV)

    event.recipes.gtceu
      .cutter(`gregitas:${sapling}_lumber_lubricant`)
      .itemInputs(`tfc:wood/log/${sapling}`)
      .inputFluids(Fluid.of("gtceu:lubricant", 1))
      .itemOutputs(`16x tfc:wood/lumber/${sapling}`)
      .duration(40)
      .EUt(LV)
	  
  })

  shaped('gtceu:treated_wood_planks', ['LL', 'LL'], {L: 'gregitas:creosote_treated_lumber'}).id('gregitas:shaped/treated_wood_planks')
  shaped('gtceu:rubber_planks', ['LL', 'LL'], {L: 'gregitas:rubber_lumber'}).id('gregitas:shaped/rubber_planks')

  event.custom({
    type: "tfc:barrel_sealed",
    input_item: {
      ingredient: {
        tag: 'tfc:lumber'
      }
    },
    input_fluid: {
      ingredient: 'gtceu:creosote',
      amount: 25
    },
    output_item: {
      item: 'gregitas:creosote_treated_lumber'
    },
    duration: 6000
  }).id('gregitas:barrel/creosote_treated_lumber')

  //GTCEU End
  //Computercraft
  shaped('computercraft:computer_normal', ['sps', 'scs', 'OPO'], {
    O: 'gtceu:iron_plate',
    s: '#forge:plates/copper',
    c: 'gtceu:basic_electronic_circuit',
    p: 'gtceu:resin_printed_circuit_board',
    P: '#forge:glass_panes'
  })
  
  event.shapeless("computercraft:wireless_modem_normal",[
    "computercraft:wired_modem",
    "minecraft:ender_pearl"
  ]) 
  event.shapeless("computercraft:wireless_modem_advanced",[
    "computercraft:wireless_modem_normal",
    "minecraft:eye_of_ender"
  ])
  //Rock and Stone!
  tfcStone.forEach((stone) => {
    event.recipes.gtceu
      .rock_breaker(`loose_${stone}`)
      .notConsumable(`tfc:rock/raw/${stone}`)
      .itemOutputs(`tfc:rock/raw/${stone}`)
      .duration(16)
      .EUt(LV)
      ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
      ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
      .addCondition(RockBreakerCondition.INSTANCE)
  })
  //Railcraft Start
  shaped("railcraft:solid_fueled_firebox", ["BBB", "BCB", "BFB"], {
    B: "minecraft:brick",
    C: "minecraft:fire_charge",
    F: "tfc:crucible"
  })

  shaped("framedblocks:framed_chest", ["FRF", "RCR", "FRF"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "#forge:chests/wooden"
  })

  shaped("framedblocks:framed_secret_storage", ["RFR", "FCF", "RFR"], {
    F: "framedblocks:framed_cube",
    R: "#forge:rods/cast_iron",
    C: "framedblocks:framed_chest"
  })
  //Railcraft End
  //ThoriumReactors Start
	event.recipes.gtceu.implosion_compressor('blasted_stone')
		.itemInputs(
			'immersiveengineering:concrete_leaded',
			'minecraft:tnt'
		)
		.itemOutputs(
			'thoriumreactors:blasted_stone'
		)
		.duration(150)
		.EUt(EV)
		   
	event.recipes.gtceu.implosion_compressor('blasted_iron')
		.itemInputs(
			'#forge:ingots/wrought_iron',
			'minecraft:tnt'
		)
		.itemOutputs(
			'thoriumreactors:blasted_iron_ingot'
		)
		.duration(150)
		.EUt(EV)
		
	event.recipes.gtceu.autoclave('enriched_uranium_pellet')
		.inputFluids(
			Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 1000)
		)
		.itemOutputs(
			'thoriumreactors:enriched_uranium'
		)
		.duration(3000)
		.EUt(EV)
	
	event.recipes.gtceu.centrifuge('enriched_uranium_hexafluorite')
		.inputFluids(
			Fluid.of("thoriumreactors:uranium_hexafluorite", 1000)
		)
		.outputFluids(
			Fluid.of("thoriumreactors:enriched_uranium_hexafluorite", 1000)
		)
		.duration(3000)
		.EUt(EV)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.chemical_reactor('enriched_uranium_hexafluorite')
		.itemInputs(
		'thoriumreactors:yellow_cake'
		)
		.inputFluids(
			Fluid.of("thoriumreactors:hydrofluorite", 1000)
		)
		.outputFluids(
			Fluid.of("thoriumreactors:uranium_hexafluorite", 500)
		)
		.duration(500)
		.EUt(EV)
		.cleanroom(CleanroomType.CLEANROOM)
		
	event.recipes.gtceu.chemical_reactor('hydrofluorite')
		.itemInputs(
		'#forge:dusts/fluorite'
		)
		.inputFluids(
			Fluid.of("gtceu:distilled_water", 100)
		)
		.outputFluids(
			Fluid.of("thoriumreactors:hydrofluorite", 100)
		)
		.duration(100)
		.EUt(EV)

	event.recipes.gtceu.compressor('yellow_cake')
		.itemInputs(
			'#forge:dusts/uranium_235'
		)
		.inputFluids(
			Fluid.of("gtceu:distilled_water", 100)
		)
		.itemOutputs(
			'thoriumreactors:yellow_cake'
		)
		.duration(2400)
		.EUt(EV)
		.cleanroom(CleanroomType.CLEANROOM)
		
	event.recipes.gtceu.mixer('molten_salt')
		.itemInputs(
			'#forge:dusts/thorium'
		)
		.inputFluids(
			Fluid.of("gtceu:sodium_potassium", 1000)
		)
		.outputFluids(
			Fluid.of("thoriumreactors:molten_salt", 100)
		)
		.duration(800)
		.EUt(EV)

	event.recipes.gtceu.mixer('molten_salt_from_depleted')
		.itemInputs(
			'#forge:dusts/thorium'
		)
		.inputFluids(
			Fluid.of("thoriumreactors:depleted_molten_salt", 6000)
		)
		.outputFluids(
			Fluid.of("thoriumreactors:molten_salt", 6000)
		)
		.duration(200)
		.EUt(EV)

//Torium Reactors Temporary(?) Recipe to Get fluorite
	event.recipes.gtceu.autoclave('fluorite')
		.itemInputs(
			'#forge:dusts/calcium'
		)
		.inputFluids(
			Fluid.of("gtceu:fluorine", 2000)
		)
		.itemOutputs(
			'3x gcyr:fluorite_gem'
		)
		.duration(800)
		.EUt(EV)
//Thorium Reactors Recipes Phase 2

event.recipes.gtceu.assembler('thoriumreactors:reactor_glass')
	.itemInputs(
    'thoriumreactors:reactor_casing',
    'immersiveengineering:insulating_glass',
    'create_new_age:reactor_glass'
	)
	.itemOutputs(
	  'thoriumreactors:reactor_glass'
	)
	.duration(160)
	.EUt(HV)

event.recipes.gtceu.assembler('thoriumreactors:reactor_graphite_moderator')
	.itemInputs(
	  '25x thoriumreactors:graphite_tube'
	)
	.itemOutputs(
    'thoriumreactors:reactor_graphite_moderator'
	)
	.duration(600)
	.EUt(EV)

event.recipes.gtceu.assembler('thoriumreactors:reactor_core')
	.itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:module_sensor',
    'thoriumreactors:module_storage',
    'thoriumreactors:reactor_graphite_moderator'
	)
	.itemOutputs(
	'thoriumreactors:reactor_core'
	)
	.duration(600)
	.EUt(EV)
  .cleanroom(CleanroomType.CLEANROOM)

event.recipes.gtceu.assembler('thoriumreactors:reactor_rod_controller')
	.itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:reactor_graphite_moderator',
    'gtceu:ev_conveyor_module',
    'thoriumreactors:module_sensor'
	)
	.itemOutputs(
	  'thoriumreactors:reactor_rod_controller'
	)
	.duration(300)
	.EUt(EV)
  .cleanroom(CleanroomType.CLEANROOM)

event.recipes.gtceu.assembler('thoriumreactors:reactor_valve')
	.itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:module_io'
	)
	.itemOutputs(
	'thoriumreactors:reactor_valve'
	)
	.duration(300)
	.EUt(EV)

event.recipes.gtceu.assembler('thoriumreactors:reactor_controller')
	.itemInputs(
    'thoriumreactors:reactor_casing',
    'thoriumreactors:machine_casing',
    'gtceu:computer_monitor_cover'
	)
	.itemOutputs(
	  'thoriumreactors:reactor_controller'
	)
	.duration(600)
	.EUt(EV)
  .cleanroom(CleanroomType.CLEANROOM)

event.recipes.gtceu.assembler('immersiveengineering:insulating_glass')
	.itemInputs(
    '2x gtceu:tempered_glass',
    '4x gtceu:stainless_steel_screw'
	)
  .inputFluids(Fluid.of("gtceu:argon fluid", 1000))
	.itemOutputs(
	  'immersiveengineering:insulating_glass'
	)
	.duration(100)
	.EUt(MV)

event.recipes.gtceu.assembler('thoriumreactors:graphite_tube')
	.itemInputs(
    '4x gtceu:graphite_dust',
    '2x gtceu:carbon_fiber_mesh'
	)
  .inputFluids(Fluid.of("gtceu:reinforced_epoxy_resin", 144))
	.itemOutputs(
	'thoriumreactors:graphite_tube'
	)
	.duration(120)
	.EUt(HV)

event.recipes.gtceu.assembler('thoriumreactors:reactor_casing')
	.itemInputs(
    '4x thoriumreactors:blasted_stone',
    '2x thoriumreactors:double_lead_plate',
    '4x thoriumreactors:blasted_iron',
    'gtceu:titanium_frame'
	)
	.itemOutputs(
	  'thoriumreactors:reactor_casing'
	)
	.duration(160)
	.EUt(EV)

event.recipes.gtceu.assembler('thoriumreactors:machine_casing')
	.itemInputs(
    'thoriumreactors:module_energy',
    'thoriumreactors:module_io',
    'thoriumreactors:module_processing',
    'thoriumreactors:module_storage',
    'thoriumreactors:module_sensor',
    'gtceu:ev_machine_hull'
	)
	.itemOutputs(
	  'thoriumreactors:machine_casing'
	)
	.duration(200)
	.EUt(EV)

event.recipes.gtceu.assembler('thoriumreactors:configurator')
	.itemInputs(
    'thoriumreactors:empty_module',
    'thoriumreactors:data_stick',
    'createdeco:decal_radioactive'
	)
	.itemOutputs(
	  'thoriumreactors:configurator'
	)
	.duration(360)
	.EUt(EV)

// Thorium Reactors Phase 3

event.recipes.gtceu.circuit_assembler('thoriumreactors:module_empty')
  .itemInputs(
    'thoriumreactors:redstone_processor',
    'gtceu:data_stick',
    '#gtceu:circuits/ev'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_empty'
  )
.duration(200)
.EUt(HV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_io')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    'gtceu:item_filter',
    'gtceu:ev_robot_arm'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
   'thoriumreactors:module_io'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_energy')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    'gtceu:advanced_energy_detector_cover',
    'gtceu:engraved_lapotron_crystal_chip'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_energy'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_storage')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    'gtceu:ev_conveyor_module'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_storage'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_tank')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    'gtceu:ev_electric_pump'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_tank'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_sensor')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    'gtceu:advanced_fluid_detector_cover',
    'gtceu:advanced_item_detector_cover'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_sensor'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:module_processing')
  .itemInputs(
    '2x thoriumreactors:redstone_processor',
    '4x gtceu:ram_chip'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:module_processing'
  )
.duration(200)
.EUt(EV)
event.recipes.gtceu.circuit_assembler('thoriumreactors:redstone_processor')
  .itemInputs(
    'gtceu:lpic_chip',
    'create_new_age:copper_circuit',
    'vintageimprovements:redstone_module',
    '#forge:plates/redstone',
    'create:content_observer'
  )
  .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 144))
  .itemOutputs(
    'thoriumreactors:redstone_processor'
  )
.duration(200)
.EUt(MV)


  //ThoriumReactors End
  //Ender Tanks & Chests
  shaped('enderchests:ender_chest', ['eOs', 'cCc', 'OfO'], {
    e: 'gtceu:mv_emitter',
    O: 'gtceu:obsidian_plate',
    s: 'gtceu:mv_sensor',
    c: 'gtceu:mv_conveyor_module',
    C: 'gtceu:lv_super_chest',
    f: 'gtceu:lv_field_generator'
  })

  shaped('endertanks:ender_tank', ['eOs', 'pTp', 'OfO'], {
    e: 'gtceu:mv_emitter',
    O: 'gtceu:obsidian_plate',
    s: 'gtceu:mv_sensor',
    p: 'gtceu:mv_electric_pump',
    T: 'gtceu:lv_super_tank',
    f: 'gtceu:lv_field_generator'
  })
  //ImmersiveEngineering
  shaped('immersiveengineering:wirecutter', ['k k', ' b ', 's s'], {
    k: 'tfc:metal/knife_blade/wrought_iron',
    b: 'gtceu:brass_screw',
    s: '#forge:rods/invar'
  })
  shaped('immersiveengineering:craftingtable', ['ppp', 'rfr', 'rwr'], {
    p: '#forge:treated_wood',
    r: '#forge:rods/treated_wood',
    f: '#forge:frames/treated_wood',
    w: '#tfc:workbenches'
  })
  shaped('immersiveengineering:workbench', [' dq', 'pff', 'crf'], {
    q: '#forge:feathers',
    d: '#forge:dyes/black',
    p: '#forge:plates/wrought_iron',
    r: '#forge:rods/treated_wood',
    f: '#forge:frames/treated_wood',
    c: 'immersiveengineering:craftingtable'
  })
  shaped('railcraft:wooden_tie', ['   ','ppp','   '], {
    p: 'gregitas:creosote_treated_lumber'
    })
  const gemPowders = [
    "amethyst",
    "emerald",
    "lapis_lazuli",
    "opal",
    "pyrite",
    "ruby",
    "sapphire",
    "topaz"
   ]

   gemPowders.forEach(powder => {
    event.recipes.gtceu.centrifuge("tfc_powder_to_dust/" + powder)
    .itemInputs([`4x tfc:powder/${powder}`])
    .itemOutputs([`gtceu:impure_${powder.replace("_lazuli", "")}_dust`])
    .EUt(ULV).duration(200)
   })
   event.recipes.gtceu.alloy_smelter('brick')
           .itemInputs(
               'minecraft:clay_ball'
           )
           .notConsumable('gtceu:ingot_casting_mold')
           .itemOutputs(
               'minecraft:brick'
           )
           .duration(60)
           .EUt(LV)

    tfcStone.forEach(stone => {
        event.recipes.gtceu.alloy_smelter(`${stone}_brick`)
               .itemInputs(
                   `tfc:rock/loose/${stone}`
               )
               .notConsumable('gtceu:ingot_casting_mold')
               .itemOutputs(
                   `tfc:brick/${stone}`               )
               .duration(60)
               .EUt(LV)
        event.recipes.gtceu.forge_hammer(`loose_${stone}`)
                .itemInputs(`tfc:rock/raw/${stone}`)
                .itemOutputs(`4x tfc:rock/loose/${stone}`)
                .duration(60)
                .EUt(LV)
    })
    tfcStone2.forEach(stone => {
      event.recipes.gtceu.macerator(`${stone}_dust`)
                .itemInputs(`tfc:rock/loose/${stone}`)
                .itemOutputs(`gregitas_core:${stone}_dust`)
                .chancedOutput(`gregitas_core:${stone}_dust`,1000,1)
                .duration(60)
                .EUt(LV)
    })
    vanStone.forEach(stone => {
      event.recipes.gtceu.macerator(`${stone}_dust`)
                .itemInputs(`tfc:rock/loose/${stone}`)
                .itemOutputs(`gtceu:${stone}_dust`)
                .chancedOutput(`gtceu:${stone}_dust`,1000,1)
                .duration(60)
                .EUt(LV)
    })

    event.recipes.gtceu.electric_blast_furnace('steel')
    .itemInputs(
              '#forge:ingots/wrought_iron'
    )
    .inputFluids(Fluid.of('gtceu:oxygen',200))
    .chancedOutput('gtceu:ash_dust',1111,1)
    .chancedOutput('immersiveengineering:slag',2000,1)
    .itemOutputs(
        'gtceu:steel_ingot'
    )
    .blastFurnaceTemp(1000)
    .duration(300)
    .EUt(MV)

    event.recipes.gtceu.electric_blast_furnace('steel_from_iron')
    .itemInputs(
              '#forge:ingots/iron'
    )
    .inputFluids(Fluid.of('gtceu:oxygen',200))
    .chancedOutput('gtceu:ash_dust',1111,1)
    .chancedOutput('immersiveengineering:slag',2000,1)
    .itemOutputs(
        'gtceu:steel_ingot'
    )
    .blastFurnaceTemp(1000)
    .duration(300)
    .EUt(MV)

    event.recipes.gtceu.alloy_smelter('copper_alloy')
        .itemInputs(
            '#forge:silicon',
            '#forge:ingots/copper'
        )
        .itemOutputs(
            'enderio:copper_alloy_ingot'
        )
        .duration(500)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('redstone_alloy')
        .itemInputs(
            '#forge:silicon',
            '#forge:dusts/redstone'
        )
        .itemOutputs(
            'enderio:redstone_alloy_ingot'
        )
        .duration(500)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('energetic_alloy')
        .itemInputs(
            'minecraft:redstone_block',
            '#forge:ingots/gold'
        )
        .itemOutputs(
            'enderio:energetic_alloy_ingot'
        )
        .duration(750)
        .EUt(MV)
    event.recipes.gtceu.alloy_smelter('vanilla_iron')
        .itemInputs(
            '#forge:ingots/cast_iron',
            "tfc:powder/lime"
        )
        .itemOutputs(
            'minecraft:iron_ingot'
        )
        .duration(250)
        .EUt(LV)
    event.recipes.gtceu.alloy_smelter('conductive_alloy')
        .itemInputs(
            'enderio:copper_alloy_ingot',
            '#forge:ingots/wrought_iron'
        )
        .itemOutputs(
            'enderio:conductive_alloy_ingot'
        )
        .duration(750)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('vibrant_alloy')
        .itemInputs(
            'enderio:energetic_alloy_ingot',
            '#forge:ender_pearls'
        )
        .itemOutputs(
            'enderio:vibrant_alloy_ingot'
        )
        .duration(750)
        .EUt(MV)

    event.recipes.gtceu.alloy_smelter('pulsating_alloy')
        .itemInputs(
            'enderio:vibrant_alloy_ingot',
            'enderio:energetic_alloy_ingot'
        )
        .itemOutputs(
            'enderio:pulsating_alloy_ingot'
        )
        .duration(750)
        .EUt(MV)


    event.recipes.gtceu.alloy_smelter('dark_steel')
        .itemInputs(
            '#forge:ingots/steel',
            '#forge:dusts/coal'
        )
        .itemOutputs(
            'enderio:dark_steel_ingot'
        )
        .duration(750)
        .EUt(MV)

    event.recipes.gtceu.alloy_smelter('soularium')
        .itemInputs(
            '#forge:ingots/gold',
            '#minecraft:soul_fire_base_blocks'
        )
        .itemOutputs(
            'enderio:soularium_ingot'
        )
        .duration(750)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('clear_glass')
        .itemInputs(
            '#forge:glass/colorless',
            '#tfc:flux'
        )
        .itemOutputs(
            'enderio:clear_glass'
        )
        .duration(500)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('dark_clear_glass')
        .itemInputs(
            '#forge:glass/colorless',
            '4x tfc:gem/amethyst'
        )
        .itemOutputs(
            'enderio:clear_glass_d'
        )
        .duration(500)
        .EUt(LV)

    event.recipes.gtceu.alloy_smelter('fused_quartz')
        .itemInputs(
            'minecraft:quartz_block',
            '#tfc:flux'
        )
        .itemOutputs(
            'enderio:fused_quartz'
        )
        .duration(500)
        .EUt(MV)

    event.recipes.gtceu.alloy_smelter('dark_fused_quartz')
        .itemInputs(
            'enderio:fused_quartz',
            '4x tfc:gem/amethyst'
        )
        .itemOutputs(
            'enderio:fused_quartz_d'
        )
        .duration(500)
        .EUt(MV)

    event.recipes.gtceu.alloy_smelter('enlightened_clear_glass')
        .itemInputs(
            'enderio:clear_glass',
            'minecraft:glowstone'
        )
        .itemOutputs(
            'enderio:clear_glass_e'
        )
        .duration(750)
        .EUt(MV)

    event.recipes.gtceu.alloy_smelter('enlightened_fused_quartz')
         .itemInputs(
             'enderio:fused_quartz',
             'minecraft:glowstone'
         )
         .itemOutputs(
             'enderio:fused_quartz_e'
         )
         .duration(750)
         .EUt(MV)

    // Create Igneous Alloy
    event.recipes.gtceu.alloy_smelter('igneous_alloy')
        .itemInputs(
            '2x gregitas_core:igneous_dust',
            '2x gtceu:small_zinc_dust'
        )
        .itemOutputs(
            'create:andesite_alloy'
        )
        .duration(60)
        .EUt(LV)        

     shaped("computercraft:turtle_normal", ["www", "wpw","wcw"], {
        w: "tfc:metal/ingot/cast_iron",
        p: "computercraft:computer_normal",
        c: "#forge:chests"
     })

     shaped("tombstone:familiar_receptacle", ["twt", "wdw","twt"], {
        w: "tfc:metal/ingot/cast_iron",
        d: "tombstone:impregnated_diamond",
        t: "minecraft:ghast_tear"
     })
     shaped("simpleplanes:liquid_engine", ["iOi","BLB","HcH"], {
         i: "tfc:metal/ingot/cast_iron",
         O: "simpleplanes:propeller",
         B: "minecraft:bucket",
         L: "railcraft:fluid_fueled_firebox",
         H: "minecraft:heavy_weighted_pressure_plate",
         c: "#forge:ingots/copper"
     })

    shaped("create_new_age:magnetite_block", ["PCP", "CRC", "PCP"], {
        C: "immersiveengineering:coil_hv",
        R: "#forge:rods/steel",
        P: "#forge:plates/magnetic_iron"

    })

    //SFM
    shaped("sfm:manager", ["PPP", "LVL", "CCC"], {
        P: "#forge:plates/wrought_iron",
        L: "gtceu:circuits/lv",
        V: "gtceu:vacuum_tube",
        C: "gtceu:resin_printed_circuit_board"
    })
    shaped("8x sfm:cable", ["ppp", "bcb", "ppp"], {
        p: "#forge:plates/rubber",
        b: "gtceu:brass_small_item_pipe",
        c: "minecraft:comparator"
    })

    shaped("sfm:disk", ["RGB", "PDP", "XTX"], {
        R: "#forge:dyes/red",
        G: "#forge:dyes/green",
        B: "#forge:dyes/blue",
        P: "minecraft:paper",
        D: "computercraft:disk",
        X: "#forge:dusts/redstone",
        T: "minecraft:repeater"
    })
    shaped("sfm:labelgun", ["rr ", "ipg", "h  "],{
        h: "gregitas:small_tool_handle",
        r: "#forge:rods/wrought_iron",
        i: "#forge:dyes/black",
        p: "minecraft:paper",
        g: "tfc:glue"

    })
    shaped("sfm:network_tool", [" LS", " IW", "h  "],{
        h: "gregitas:small_tool_handle",
        L: "minecraft:redstone_lamp",
        S: "gtceu:resin_printed_circuit_board",
        I: "gtceu:basic_integrated_circuit",
        W: "gtceu:copper_octal_wire"
    })
    shaped("sfm:printing_press", ["RGB", "PDP", "XTX"], {
        R: "#forge:dyes/red",
        G: "#forge:dyes/green",
        B: "#forge:dyes/blue",
        P: "#forge:plates/rubber",
        D: "tfc:metal/anvil/wrought_iron",
        X: "#forge:dusts/redstone",
        T: "minecraft:piston"
    })

    event.shapeless('storagedrawers:one_stack_upgrade',         ['2x #tfc:rock_knapping','storagedrawers:upgrade_template'])
    event.shapeless('storagedrawers:obsidian_storage_upgrade',  ['2x #forge:plates/any_bronze','storagedrawers:upgrade_template'])
    event.shapeless('storagedrawers:iron_storage_upgrade',      ['2x #forge:double_sheets/any_bronze','storagedrawers:upgrade_template'])
    event.shapeless('storagedrawers:gold_storage_upgrade',      ['2x #forge:plates/steel','storagedrawers:upgrade_template'])
    event.shapeless('storagedrawers:diamond_storage_upgrade',   ['2x #forge:double_plates/steel','storagedrawers:upgrade_template'])
    event.shapeless('storagedrawers:emerald_storage_upgrade',   ['2x #forge:plates/stainless_steel','storagedrawers:upgrade_template'])

    TFCGrains.forEach((grain) => {
      smoking(`firmalife:food\/${grain}_flatbread`,`tfc:food\/${grain}_dough`)
    })

    event.recipes.kubejs.shaped("gtceu:bronze_rotor" , ["PHP", "SRF","PDP"], {
        H: "#forge:tools/hammers",
        D: "#forge:tools/screwdrivers",
        S: "#forge:screws/bronze",
        P: "#forge:plates/any_bronze",
        R: "gtceu:bronze_ring",
        F: "#forge:tools/files"
    }).damageIngredient(["#forge:tools"])

    event.recipes.kubejs.shaped("gtceu:bronze_machine_casing" , ["PPP", "PHP","PPP"], {
        H: "#forge:tools/hammers",
        P: "#forge:plates/any_bronze"
    }).damageIngredient(["#forge:tools"])

    gtVacuumShit.forEach((hot) => {
        event.custom({
          type: "tfc:barrel_instant",
          input_item: {
            ingredient: {
                item: `gtceu:hot_${hot}_ingot`
            }
          },
          input_fluid: {
            ingredient: "minecraft:water",
            amount: 500
          },
          output_item: {
                item: `gtceu:${hot}_ingot`
          },
         sound: "minecraft:block.fire.extinguish"
         })
    })

    for (const [item, replacement] of Object.entries(gtMetalReplaceMap)) {
      event.shapeless(replacement, [item])
    }
    event.shapeless("immersiveengineering:storage_steel","gtceu:steel_block")
    event.shapeless("gtceu:steel_block","immersiveengineering:storage_steel")

    /* Railways Smokestacks */ {
      event.stonecutting("3x railways:smokestack_caboosestyle", "#tfc:lamps")
      event.stonecutting("3x railways:smokestack_long", "#tfc:lamps")
      event.stonecutting("3x railways:smokestack_coalburner", "#tfc:lamps")
      event.stonecutting("3x railways:smokestack_oilburner", "#tfc:lamps")
      event.stonecutting("3x railways:smokestack_streamlined", "#tfc:lamps")
      event.stonecutting("3x railways:smokestack_woodburner", "#tfc:lamps")
    }
    event.recipes.gtceu.alloy_smelter("empty_jar")
    .notConsumable("gtceu:block_casting_mold")
    .itemInputs("#tfc:glass_batches_tier_2")
    .itemOutputs("tfc:empty_jar")
    .duration(60)
    .EUt(LV)

    event.recipes.gtceu.cutter("tin_lid")
    .itemInputs("gtceu:tin_plate")
    .itemOutputs('32x tfc:jar_lid')
    .inputFluids(Fluid.of("minecraft:water", 4))
    .duration(40)
    .EUt(LV)

   fish.forEach((fish) => {
    event.recipes.gtceu.extractor(`${fish}_oil`)
    .itemInputs(`${fish}`)
    .outputFluids(Fluid.of("gtceu:fish_oil", 50))
    .duration(60)
    .EUt(LV)
	
    })
   event.recipes.kubejs.shaped("2x minecraft:moss_block" , ["PPP", "PRP","PPP"], {
        P: "gtceu:fertilizer",
        R: "#tfc:rock/raw",		
    })
	
	event.recipes.gtceu.mixer('liquid_chorus')
    .itemInputs(
        'integrateddynamics:proto_chorus'
    )
    .inputFluids(
        Fluid.of("integrateddynamics:menril_resin", 250)
    )
    .inputFluids(
        Fluid.of("gtceu:methane",250)
    )
    .outputFluids(
        Fluid.of("integrateddynamics:liquid_chorus", 100)
    )
    .duration(50)
    .EUt(HV)
}
