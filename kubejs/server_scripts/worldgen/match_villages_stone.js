// priority: 10

let replaceVillagesStoneAccordingRock = (/** @type {Internal.StructureAfterPlaceEventJS} */ event) => {
  if (event.chunkGenerator instanceof $ChunkGeneratorExtension) {
    /** @type {$ChunkGeneratorExtension} */
    let chunkGenerator = event.chunkGenerator
    let center = event.structureBoundingBox.center
    let level = event.worldGenLevel
    let chunkDataGenerator = $ChunkProvider.get(chunkGenerator).generator()
    let rockSettings = chunkDataGenerator.generateRock(center.x, 0, center.z, 0, null)
    let rockId = rockSettings.raw().id
    event.intersectionBoxes.forEach((bb) => {
      BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach((pos) => {
        let blockState = level.getBlockState(pos)
        let newStoneBlock = getStoneReplacement(blockState.block.idLocation, rockId)
        if (newStoneBlock) {
          level.getChunk(pos).setBlockState(pos, getState(newStoneBlock, blockState), false)
        }
      })
    })
  }
}
