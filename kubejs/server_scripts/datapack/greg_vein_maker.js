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
   * @param {number} veinHeight - how tall the vein
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
    veinHeight,
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
                : `gregitas:ore/${subArray[0]}/${stone}`
          })
        )
      }
      blockarray.push(JsonIO.toObject({ replace: [`tfc:rock/raw/${stone}`], with: tempArray }))
    }
    let json = JsonIO.toObject({
      type: "tfc:disc_vein",
      config: {
        rarity: chancePerChunk,
        min_y: {
          absolute: minY
        },
        max_y: {
          absolute: maxY
        },
        size: sizeIB,
        density: densityIB,
        blocks: blockarray,
        random_name: veinName,
        height: veinHeight
      }
    })
    event.addJson(`gregitas:worldgen/configured_feature/vein/${veinName}.json`, json)
    let json2 = JsonIO.toObject({
      feature: `gregitas:vein/${veinName}`,
      placement: []
    })
    event.addJson(`gregitas:worldgen/placed_feature/vein/${veinName}.json`, json2)
  }
  //Make sure to add anything you add here to `greg_vein_tags.js`
  //Below is an example of how to add a new vein.
  global.gregVeins.forEach((vein) => {
    makeTFCDiskVein(vein.oreAndWeight, vein.validStones, vein.weight, vein.minY, vein.maxY, 15, 0.4, 4, vein.name)
  })
}
