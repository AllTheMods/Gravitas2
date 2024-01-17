// priority 10
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
let recipeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
  const tfc = event.recipes.tfc
  const shaped = event.recipes.minecraft.crafting_shaped
  const smoking = event.recipes.minecraft.smoking
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

  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "tfc:raw_iron_bloom" }],
    results: [{ item: "tfc:refined_iron_bloom" }]
  })
  event.custom({
    type: "create:pressing",
    ingredients: [{ item: "tfc:refined_iron_bloom" }],
    results: [{ item: "tfc:metal/ingot/wrought_iron" }]
  })
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
  shaped("gtceu:primitive_blast_furnace", ["HRS", "PBR", "DRS"], {
    H: "#forge:tools/hammers",
    R: "#forge:rods/steel",
    S: "#forge:screws/steel",
    P: "#forge:sheets/steel",
    B: "gtceu:firebricks",
    D: "#forge:tools/screwdrivers"
  })
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
    .itemOutputs([`gtceu:${powder.replace("_lazuli", "")}_impure_dust`])
    .EUt(ULV).duration(200)
   })
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
    shaped("sfm:manager", ["PPP", "BVI", "CCC"], {
        P: "#forge:plates/wrought_iron",
        B: "gtceu:basic_electronic_circuit",
        V: "gtceu:vacuum_tube",
        I: "gtceu:basic_integrated_circuit",
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

    TFCGrains.forEach((grain) => {
    smoking(`firmalife:food\/${grain}_flatbread`,`tfc:food\/${grain}_dough`)
    smoking(`tfc:food\/${grain}_bread`,`firmalife:food\/${grain}_dough`)
    })

}