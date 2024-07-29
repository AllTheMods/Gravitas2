// priority: 10

let replaceVillagesWoodAccordingToClimate = (/** @type {Internal.StructureAfterPlaceEventJS} */ event) => {
  if (event.chunkGenerator instanceof $ChunkGeneratorExtension) {
    /** @type {$ChunkGeneratorExtension} */
    let chunkGenerator = event.chunkGenerator
    let level = event.worldGenLevel
    let pieceCenter = event.structureBoundingBox.center
    let treeId = getTreeFromPosition(chunkGenerator, event.worldGenLevel, pieceCenter)
    event.intersectionBoxes.forEach((bb) => {
      BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach((pos) => {
        let blockState = level.getBlockState(pos)
        let newWoodBlock = getWoodReplacement(blockState.block.idLocation, treeId)
        if (newWoodBlock) {
          level.getChunk(pos).setBlockState(pos, getState(newWoodBlock, blockState), false)
        }
      })
    })
  }
}

function getTreeFromPosition(chunkgen, level, blockPos) {
  let chunkData = $ChunkProvider.get(chunkgen).get(level, blockPos)
  let getTree = ForestFeature$getTree
  getTree.setAccessible(true)
  let salt = level.seed
  let seed = $Helpers.hash(salt, blockPos)
  let randomSource = $RandomSource.create(seed)
  /** @type {Internal.ForestFeature$Entry} */
  let tree = getTree.invoke(
    $ForestFeatureObj,
    chunkData,
    randomSource,
    $ForestConfigObj,
    blockPos
  )
  if (tree == null) return null
  let treeId = tree.treeFeature().key().location()
  return treeId
}
