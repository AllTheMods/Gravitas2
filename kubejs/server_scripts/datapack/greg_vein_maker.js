const gregVeins = [
  {
    name: "apatite",
    weight: 40,
    minY: 10,
    maxY: 80,
    validStones: ["basalt", "rhyolite", "andesite", "dacite", "granite", "gabbro", "diorite"], //This should eventually be replaced with what stones its allowed to generate in.
    oreAndWeight: [
      ["apatite", 3],
      ["tricalcium_phosphate", 2],
      ["pyrochlore", 1]
    ]
  },
  {
    name: "cassiterite",
    weight: 80,
    minY: 10,
    maxY: 80,
    validStones: ["granite", "diorite", "gabbro"],
    oreAndWeight: [
      ["tin", 4],
      ["cassiterite", 2]
    ]
  },
  {
    name: "copper_tin",
    weight: 50,
    minY: -10,
    maxY: 160,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["chalcopyrite", 10],
      ["zeolite", 4],
      ["cassiterite", 4],
      ["realgar", 1]
    ]
  },
  {
    name: "galena",
    weight: 40,
    minY: -15,
    maxY: 45,
    validStones: ["granite", "gneiss"],
    oreAndWeight: [
      ["galena", 3],
      ["silver", 2],
      ["lead", 1]
    ]
  },
  {
    weight: 80,
    minY: 30,
    maxY: 60,
    validStones: ["limestone", "chalk"],
    name: "garnet_tin",
    oreAndWeight: [
      ["cassiterite_sand", 5],
      ["garnet_sand", 2],
      ["asbestos", 2],
      ["diatomite", 1]
    ]
  },
  {
    name: "garnet",
    weight: 40,
    minY: -10,
    maxY: 50,
    validStones: ["granite", "claystone"],
    oreAndWeight: [
      ["red_garnet", 3],
      ["yellow_garnet", 2],
      ["amethyst", 2],
      ["opal", 1]
    ]
  },
  {
    name: "iron",
    weight: 120,
    minY: -10,
    maxY: 60,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["goethite", 5],
      ["yellow_limonite", 2],
      ["hematite", 2],
      ["malachite", 1],
      ["chromite", 1]
    ]
  },
  {
    name: "lubricant",
    weight: 40,
    minY: 0,
    maxY: 50,
    validStones: ["schist"],
    oreAndWeight: [
      ["soapstone", 3],
      ["talc", 2],
      ["glauconite_sand", 2],
      ["pentlandite", 1]
    ]
  },
  {
    name: "magnetite",
    weight: 80,
    minY: 10,
    maxY: 60,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["magnetite", 3],
      ["vanadium_magnetite", 2],
      ["gold", 1]
    ]
  },
  {
    name: "mineral_sand",
    weight: 80,
    minY: 15,
    maxY: 60,
    validStones: ["basalt", "granite"],
    oreAndWeight: [
      ["basaltic_mineral_sand", 5],
      ["granitic_mineral_sand", 2],
      ["fullers_earth", 2],
      ["gypsum", 1]
    ]
  },
  {
    name: "nickel",
    weight: 40,
    minY: -10,
    maxY: 60,
    validStones: ["gabbro", "diorite", "granite"],
    oreAndWeight: [
      ["garnierite", 3],
      ["nickel", 2],
      ["cobaltite", 2],
      ["pentlandite", 1]
    ]
  },
  {
    name: "salts",
    weight: 50,
    minY: 30,
    maxY: 70,
    validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
    oreAndWeight: [
      ["rock_salt", 3],
      ["salt", 2],
      ["lepidolite", 1],
      ["spodumene", 1]
    ]
  },
  {
    name: "oilsands",
    weight: 40,
    minY: 30,
    maxY: 80,
    validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
    oreAndWeight: [["oilsands", 1]]
  },
  {
    name: "copper",
    weight: 80,
    minY: -40,
    maxY: 10,
    validStones: ["diorite", "granite"],
    oreAndWeight: [
      ["chalcopyrite", 5],
      ["iron", 2],
      ["pyrite", 2],
      ["copper", 2]
    ]
  },
  {
    name: "diamond",
    weight: 40,
    minY: -65,
    maxY: -30,
    validStones: ["basalt", "rhyolite", "andesite", "dacite"],
    oreAndWeight: [
      ["lazurite", 3],
      ["sodalite", 2],
      ["lapis", 2],
      ["calcite", 1]
    ]
  },
  {
    name: "manganese",
    weight: 20,
    minY: -30,
    maxY: 0,
    validStones: ["phyllite", "granite", "quartzite"],
    oreAndWeight: [
      ["grossular", 3],
      ["spessartine", 2],
      ["pyrolusite", 2],
      ["tantalite", 1]
    ]
  },
  {
    name: "mica",
    weight: 20,
    minY: -40,
    maxY: -10,
    validStones: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble", "gabbro", "diorite", "granite"],
    oreAndWeight: [
      ["kyanite", 2],
      ["mica", 1],
      ["bauxite", 1],
      ["pollucite", 1]
    ]
  },
  {
    name: "olivine",
    weight: 20,
    minY: -20,
    maxY: 10,
    validStones: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
    oreAndWeight: [
      ["bentonite", 2],
      ["magnetite", 1],
      ["olivine", 1],
      ["glauconite_sand", 1]
    ]
  },
  {
    name: "redstone",
    weight: 60,
    minY: -65,
    maxY: -10,
    validStones: ["rhyolite", "basalt", "andesite", "dacite", "quartzite", "shale"],
    oreAndWeight: [
      ["redstone", 2],
      ["ruby", 1],
      ["cinnabar", 1],
      ["thorium", 1]
    ]
  },
  {
    name: "sapphire",
    weight: 60,
    minY: -40,
    maxY: 0,
    validStones: ["schist", "quartzite"],
    oreAndWeight: [
      ["almandine", 2],
      ["pyrope", 1],
      ["sapphire", 1],
      ["green_sapphire", 1]
    ]
  },
  {
    name: "thorium",
    weight: 80,
    minY: -50,
    maxY: 25,
    validStones: ["basalt", "rhyolite", "dacite", "andesite"],
    oreAndWeight: [
      ["thorium", 2],
      ["cinnabar", 1],
      ["chromite", 1]
    ]
  },
  {
    name: "chromite",
    weight: 80,
    minY: -50,
    maxY: 55,
    validStones: ["granite", "diorite", "gabbro", "schist", "phyllite"],
    oreAndWeight: [
      ["chromite", 2],
      ["thorium", 1]
    ]
  }
]

const addGregVeinData = (/** @type {Internal.DataPackEventJS} */ event) => {
  const replacementMap = {
    gold: "tfc:ore/rich_native_gold/",
    iron: "tfc:ore/rich_hematite/",
    copper: "tfc:ore/rich_native_copper/"
  }

  /**
   *
   * @param {Array<Array<>>} blockToWeightMap - [["modid:block",weight],[etc...]]
   * @param {Array} validStones - Stonetype[s] its allowed to spawn in
   * @param {number} chancePerChunk - spawns 1/x chunks
   * @param {number} minY - Lowest Y generation level
   * @param {number} maxY - Highest Y generation level
   * @param {number} sizeIB - Radius
   * @param {number} densityIB - default 0.2
   * @param {string} veinName - Name.
   */
  const makeTFCDiskVein = (
    blockToWeightMap,
    validStones,
    chancePerChunk,
    minY,
    maxY,
    sizeIB,
    densityIB,
    veinName
  ) => {
    let blockarray = []
    for (const stone of validStones) {
      let tempArray = []
      for (const subArray of blockToWeightMap) {
        tempArray.push(
          JsonIO.toObject({
            weight: subArray[1],
            block:
              replacementMap[subArray[0]] != null
                ? `${replacementMap[subArray[0]]}${stone}`
                : `gtceu:tfc_${stone}_${subArray[0]}_ore`
          })
        )
      }
      blockarray.push(JsonIO.toObject({ replace: [`tfc:rock/raw/${stone}`], with: tempArray }))
    }
    let json = JsonIO.toObject({
      type: "tfc:cluster_vein",
      config: {
        rarity: chancePerChunk,
        min_y: minY,
        max_y: maxY,
        size: sizeIB,
        density: densityIB,
        blocks: blockarray,
        random_name: veinName
      }
    })
    event.addJson(`gtceu:worldgen/configured_feature/vein/${veinName}.json`, json)
    let json2 = JsonIO.toObject({
      feature: `gtceu:vein/${veinName}`,
      placement: []
    })
    event.addJson(`gtceu:worldgen/placed_feature/vein/${veinName}.json`, json2)
  }
  //Make sure to add anything you add here to `greg_vein_tags.js`
  //Below is an example of how to add a new vein.
  gregVeins.forEach((vein) => {
    makeTFCDiskVein(vein.oreAndWeight, vein.validStones, vein.weight, vein.minY, vein.maxY, 25, 0.4, vein.name)
  })
}
