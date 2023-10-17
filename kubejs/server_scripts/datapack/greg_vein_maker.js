const addGregVeinData = (/** @type {Internal.DataPackEventJS} */ event) => {
  /**
   *
   * @param {string} toReplace - Block to replace
   * @param {Array<Array<>>} blockToWeightMap - [["modid:block",weight],[etc...]]
   * @param {number} chancePerChunk - spawns 1/x chunks
   * @param {number} minY - Lowest Y
   * @param {number} maxY - Highest Y
   * @param {number} sizeIB - Radius
   * @param {number} densityIB - default 0.2
   * @param {string} veinName - Name.
   */
  const makeTFCDiskVein = (toReplace, blockToWeightMap, chancePerChunk, minY, maxY, sizeIB, densityIB, veinName) => {
    let tempArray = []
    for (const subArray of blockToWeightMap) {
      tempArray.push(
        JsonIO.toObject({
          weight: subArray[1],
          block: subArray[0]
        })
      )
    }
    let json = JsonIO.toObject({
      type: "tfc:cluster_vein",
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
        blocks: [
          {
            replace: [toReplace],
            with: tempArray
          }
        ],
        random_name: veinName
      }
    })
    console.log(json + `as gregitas:worldgen/configured_feature/vein/${veinName}.json`)
    event.addJson(`gregitas:worldgen/configured_feature/vein/${veinName}.json`, json)
    let json2 = JsonIO.toObject({
      feature: `gregitas:vein/${veinName}`,
      placement: []
    })
    event.addJson(`gregitas:worldgen/placed_feature/vein/${veinName}.json`, json2)
  }
  //Make sure to add anything you add here to `greg_vein_tags.js`
  //Below is an example of how to add a new vein.
  tfcStone.forEach((stone) => {
    makeTFCDiskVein(
      `tfc:rock/raw/${stone}`,
      [
        ["gtceu:deepslate_diamond_ore", 1],
        ["gtceu:deepslate_diamond_ore", 1]
      ],
      5,
      -30,
      30,
      10,
      0.2,
      `test_${stone}`
    )
  })
}
