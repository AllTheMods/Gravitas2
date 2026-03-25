// IG ↔ GT ore processing conversion recipes
// Design: each direction applies the *source* system's processing logic to the *target* system's machine
//
// IG → GT  (GT Compressor): TFC→GT compression ratios applied to IG ore grades
//   6× poor_ore   → 1× GT crushed
//   4× normal_ore → 1× GT crushed
//   3× rich_ore   → 1× GT crushed
//
// GT → IG  (IE Crusher): GT Macerator's 2× baseline + 10% bonus — averages 2.1× dirty crushed
//   1× GT raw ore → 2× IG dirty crushed + 10% chance of 1 more (avg 2.1)
//
// TFC → IG  (IE Crusher): IG's native ore processing odds
//   small  → 1× dirty crushed
//   poor   → 1× dirty crushed + 33% chance of 1 more
//   normal → 1× dirty crushed + 33% + 16.5% chances  (sphalerite: +50% sulfur dust)
//   rich   → 1× dirty crushed + 33% + 16.5% + 16.5% (sphalerite: +50% sulfur dust)

var ig_gt_ores = [
  { ig: "copper",       gt: "copper"           },
  { ig: "chalcopyrite", gt: "chalcopyrite"     },
  { ig: "lead",         gt: "lead"             },
  { ig: "silver",       gt: "silver"           },
  { ig: "gold",         gt: "gold"             },
  { ig: "bauxite",      gt: "bauxite"          },
  { ig: "cassiterite",  gt: "cassiterite"      },
  { ig: "cassiterite",  gt: "cassiterite_sand" },
  { ig: "hematite",     gt: "hematite"         },
  { ig: "magnetite",    gt: "magnetite"        },
  { ig: "sphalerite",   gt: "sphalerite"       },
  { ig: "uraninite",    gt: "uraninite"        },
  { ig: "platinum",     gt: "platinum"         },
  { ig: "galena",       gt: "galena"           },
  { ig: "chromite",     gt: "chromite"         },
  { ig: "cobaltite",    gt: "cobaltite"        },
  { ig: "pyrite",       gt: "pyrite"           },
  { ig: "pyrolusite",   gt: "pyrolusite"       },
  { ig: "molybdenite",  gt: "molybdenite"      },
  { ig: "scheelite",    gt: "scheelite"        },
  { ig: "ilmenite",     gt: "ilmenite"         },
  { ig: "chalcocite",   gt: "chalcocite"       },
  { ig: "apatite",      gt: "apatite"          },
  { ig: "monazite",     gt: "monazite"         },
  { ig: "fluorite",     gt: "fluorite",  ns: "gcyr" },
]

var tfc_ig_ores = [
  { tfc: "native_copper", mod: "tfc",          ig: "copper"      },
  { tfc: "native_gold",   mod: "tfc",          ig: "gold"        },
  { tfc: "hematite",      mod: "tfc",          ig: "hematite"    },
  { tfc: "native_silver", mod: "tfc",          ig: "silver"      },
  { tfc: "cassiterite",   mod: "tfc",          ig: "cassiterite" },
  { tfc: "magnetite",     mod: "tfc",          ig: "magnetite"   },
  { tfc: "sphalerite",    mod: "tfc",          ig: "sphalerite",  sulfur: true },
  { tfc: "bauxite",       mod: "tfc_ie_addon", ig: "bauxite"     },
  { tfc: "galena",        mod: "tfc_ie_addon", ig: "galena"      },
  { tfc: "uraninite",     mod: "tfc_ie_addon", ig: "uraninite"   },
  { tfc: "chromite",      mod: "firmalife",    ig: "chromite"    },
]

let addIgGtConversions = (/** @type {Internal.RecipesEventJS} */ event) => {

  event.remove({ id: "tfc_ie_addon:crusher/cryolite" })
  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "tfc:ore/cryolite" },
    result: { item: "immersivegeology:dirty_crushed_ore_cryolite", count: 1 },
    secondaries: [
      { chance: 0.33, output: { item: "immersivegeology:dirty_crushed_ore_cryolite" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_cryolite" } }
    ],
    time: 100,
  })

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 6000,
    input: { item: "tfc:ore/gypsum" },
    result: { item: "immersivegeology:dirty_crushed_ore_gypsum", count: 1 },
    secondaries: [
      { chance: 0.33, output: { item: "immersivegeology:dirty_crushed_ore_gypsum" } },
      { chance: 0.165, output: { item: "immersivegeology:dirty_crushed_ore_gypsum" } }
    ],
    time: 100,
  })

  ig_gt_ores.forEach(function(ore) {
    var ns = ore.ns || "gtceu"
    var gt_crushed = ns + ":crushed_" + ore.gt + "_ore"
    var gt_raw = (ore.gt === "copper" || ore.gt === "gold")
      ? "minecraft:raw_" + ore.gt
      : ns + ":raw_" + ore.gt
    var ig_dirty = "immersivegeology:dirty_crushed_ore_" + ore.ig

    // IG → GT: GT Compressor — same ratios as TFC→GT compression
    event.recipes.gtceu
      .compressor("gregitas:ig_to_gt/poor_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("6x immersivegeology:poor_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .duration(ore_conversion_duration)
      .EUt(ore_conversion_eu)

    event.recipes.gtceu
      .compressor("gregitas:ig_to_gt/normal_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("4x immersivegeology:normal_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .duration(ore_conversion_duration)
      .EUt(ore_conversion_eu)

    event.recipes.gtceu
      .compressor("gregitas:ig_to_gt/rich_" + ore.ig + "_to_" + ore.gt)
      .itemInputs("3x immersivegeology:rich_ore_" + ore.ig)
      .itemOutputs(gt_crushed)
      .duration(ore_conversion_duration)
      .EUt(ore_conversion_eu)

    // GT → IG: IE Crusher — 2× guaranteed + 10% chance of 1 more (2.1 average)
    event.custom({
      type: "immersiveengineering:crusher",
      energy: 6000,
      input: { item: gt_raw },
      result: { item: ig_dirty, count: 2 },
      secondaries: [{ chance: 0.1, output: { item: ig_dirty } }],
      time: 100,
    })

    // GT → IG: Gravity Separator (water wash) — unlocks TFC ore → IG pipeline
    event.custom({
      type: "immersivegeology:gravity_separator",
      input: { item: ns + ":crushed_" + ore.gt + "_ore" },
      result: { item: "immersivegeology:crushed_ore_" + ore.ig },
      byproduct: { item: "gtceu:stone_dust" },
      byproduct_chance: 0.33,
      water: 100,
      time: 100,
    })
  })

  // TFC → IG: IE Crusher — IG's native ore processing odds per quality tier
  tfc_ig_ores.forEach(function(ore) {
    var ig_dirty = "immersivegeology:dirty_crushed_ore_" + ore.ig

    var qualityConfigs = [
      {
        quality: "small",
        secondaries: [],
      },
      {
        quality: "poor",
        secondaries: [
          { chance: 0.33, output: { item: ig_dirty } },
        ],
      },
      {
        quality: "normal",
        secondaries: [
          { chance: 0.33,  output: { item: ig_dirty } },
          { chance: 0.165, output: { item: ig_dirty } },
        ],
      },
      {
        quality: "rich",
        secondaries: [
          { chance: 0.33,  output: { item: ig_dirty } },
          { chance: 0.165, output: { item: ig_dirty } },
          { chance: 0.165, output: { item: ig_dirty } },
        ],
      },
    ]

    if (ore.sulfur) {
      qualityConfigs[2].secondaries.push({ chance: 0.5, output: { item: "gtceu:sulfur_dust" } })
      qualityConfigs[3].secondaries.push({ chance: 0.5, output: { item: "gtceu:sulfur_dust" } })
    }

    qualityConfigs.forEach(function(qc) {
      event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: { item: ore.mod + ":ore/" + qc.quality + "_" + ore.tfc },
        result: { item: ig_dirty, count: 1 },
        secondaries: qc.secondaries,
        time: 100,
      }).id("gregitas:tfc_to_ig/" + qc.quality + "_" + ore.tfc)
    })
  })
}
