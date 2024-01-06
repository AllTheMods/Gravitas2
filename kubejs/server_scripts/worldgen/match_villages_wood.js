// priority: 10

const RandomSource = $Class.forName("net.minecraft.util.RandomSource")

let TREE_FOREST
let FOREST_FEATURE
let replaceVillagesWoodAccordingToClimate = (/** @type {Internal.StructureAfterPlaceEventJS} */ event) => {
  if (event.id.toString().includes("village")) {
    // console.log(`Structure: ${event.structure} is a village with id: ${event.id}`)
    if (!TREE_FOREST) {
      TREE_FOREST = event.worldGenLevel.server
        .registryAccess()
        .registry($Registries.CONFIGURED_FEATURE)
        .get()
        .get("tfc:forest")
      FOREST_FEATURE = new $ForestFeature($ForestConfig.CODEC)
    }
    let chunkData = $ChunkProvider.get(event.chunkGenerator).get(event.worldGenLevel, event.chunkPos.worldPosition)
    let getTreeMethod = FOREST_FEATURE
      .getClass()
      .getDeclaredMethod(
        "getTree",
        chunkData.getClass(),
        RandomSource,
        TREE_FOREST.config().getClass(),
        event.chunkPos.worldPosition.getClass()
      )
    getTreeMethod.setAccessible(true)
    /** @type {Internal.ForestFeature$Entry} */
    let tree = getTreeMethod.invoke(
      FOREST_FEATURE,
      chunkData,
      event.randomSource,
      TREE_FOREST.config(),
      event.chunkPos.worldPosition
    )
    // tree && console.log(tree.treeFeature().key().location())
    let treeId = tree.treeFeature().key().location()
    let level = event.worldGenLevel
    event.intersectionBoxes.forEach((bb) => {
      BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach((pos) => {
        let blockState = level.getBlockState(pos)
        let newWoodBlock = getWoodReplacement(blockState.block.idLocation, treeId)
        if (newWoodBlock) {
          // console.log(`Replacing block ${blockState.block.id} with ${newWoodBlock}`)
          // level.setBlock(pos, getState(newWoodBlock, blockState))
          level.getChunk(pos).setBlockState(pos, getState(newWoodBlock, blockState), false)
        }
      })
    })
  }
}
