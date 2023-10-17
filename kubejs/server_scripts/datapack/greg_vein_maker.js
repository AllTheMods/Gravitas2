const addGregVeinData = (/** @type {Internal.DataPackEventJS} */ event) => {
  /**
   *
   * @param {Array<Array<>>} blockToWeightMap - [["modid:block",weight],[etc...]]
   * @param {number} chancePerChunk - spawns 1/x chunks
   * @param {number} minY - Lowest Y generation level
   * @param {number} maxY - Highest Y generation level
   * @param {number} sizeIB - Radius
   * @param {number} densityIB - default 0.2
   * @param {number} veinHeight - how tall the vein
   * @param {string} veinName - Name.
   */
  const makeTFCDiskVein = (blockToWeightMap, chancePerChunk, minY, maxY, sizeIB, densityIB, veinHeight, veinName) => {
    let tempArray = []
    for (const subArray of blockToWeightMap) {
      tempArray.push(
        JsonIO.toObject({
          weight: subArray[1],
          block: subArray[0]
        })
      )
    }
    let blockarray = []
    tfcStone.forEach((stone) => {
      blockarray.push(JsonIO.toObject({ replace: [`tfc:rock/raw/${stone}`], with: tempArray }))
    })
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
    console.log(json)
    event.addJson(`gregitas:worldgen/configured_feature/vein/${veinName}.json`, json)
    let json2 = JsonIO.toObject({
      feature: `gregitas:vein/${veinName}`,
      placement: []
    })
    event.addJson(`gregitas:worldgen/placed_feature/vein/${veinName}.json`, json2)
  }
  //Make sure to add anything you add here to `greg_vein_tags.js`
  //Below is an example of how to add a new vein.
  makeTFCDiskVein(
    [
      ["gtceu:deepslate_diamond_ore", 1],
      ["gtceu:deepslate_diamond_ore", 1]
    ],
    5,
    -30,
    30,
    10,
    0.2,
    4,
    `test_diamond`
  )
}
