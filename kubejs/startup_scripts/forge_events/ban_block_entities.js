// priority 10
const $LevelChunk = Java.loadClass("net.minecraft.world.level.chunk.LevelChunk")

let removeBlockEntities = (/** @type {Internal.ChunkEvent$Load} */ event) => {
  if (event.isNewChunk()) return
  let blocksToRemove = Utils.newList()
  if (event.chunk instanceof $LevelChunk) {
    event.chunk.getBlockEntities().forEach((pos, be) => {
      /** @type {ResourceLocation} */
      let beRL = be.type.getKey(be.type)
      if (bannedBlockEntities.contains(beRL.toString())) {
        blocksToRemove.add(pos)
      }
    })
  }
  blocksToRemove.forEach(pos => {
    Utils.server.tell("Removing banned block entity at " + pos.toShortString())
    event.level.removeBlock(pos, false)
  })
}
