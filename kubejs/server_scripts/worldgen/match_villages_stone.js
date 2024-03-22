// priority: 10

let replaceVillagesStoneAccordingRock = (/** @type {Internal.StructureAfterPlaceEventJS} */ event) => {
  if (event.chunkGenerator.class.simpleName == "TFCChunkGenerator") {
  // console.log(`Structure: ${event.structure} is a village with id: ${event.id}`)
  let chunkData = $ChunkProvider.get(event.chunkGenerator).get(event.worldGenLevel, event.chunkPos.worldPosition)
  let rockId = chunkData.rockData.getRock(event.chunkPos.worldPosition).raw().id
  let level = event.worldGenLevel
  event.intersectionBoxes.forEach((bb) => {
    BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach((pos) => {
      let blockState = level.getBlockState(pos)
      let newStoneBlock = getStoneReplacement(blockState.block.idLocation, rockId)
      if (newStoneBlock) {
        // console.log(`Replacing block ${blockState.block.id} with ${newWoodBlock}`)
        // level.setBlock(pos, getState(newWoodBlock, blockState))
        level.getChunk(pos).setBlockState(pos, getState(newStoneBlock, blockState), false)
      }
    })
  })
  }
}
