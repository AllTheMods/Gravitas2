// priority 10

const $FTBChunksAPI = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI").api()
const $ChunkDimPos = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")

const notifyChunkOwner = (/** @type {Internal.EntityEvent$EnteringSection} */ event) => {
  if (!event.entity.isPlayer()) return
  if (event.entity.level().clientSide) return
  if (!$FTBChunksAPI.isManagerLoaded()) return
  const chunkManager = $FTBChunksAPI.getManager()
  /** @type {Internal.ServerPlayer} */
  const player = event.entity
  const oldChunkDimPos = new $ChunkDimPos(player.level().dimensionKey, event.getOldPos().chunk())
  const newChunkDimPos = new $ChunkDimPos(player.level().dimensionKey, event.getNewPos().chunk())
  const oldTeam = chunkManager.getChunk(oldChunkDimPos)?.teamData?.team
  const newTeam = chunkManager.getChunk(newChunkDimPos)?.teamData?.team
  if (newTeam && (!newTeam.equals(oldTeam))) {
    if (newTeam.getRankForPlayer(player.uuid).isAllyOrBetter()) {
      player.statusMessage = Text.green("You entered an allied area owned by ").append(newTeam.coloredName)
    } else {
      player.statusMessage = Text.red("You entered an area owned by ").append(newTeam.coloredName)
      player.playNotifySound("entity.experience_orb.pickup", "ambient", 0.2, 1)
    }
  } else if (!newTeam && oldTeam) {
    player.statusMessage = Text.green("You left an area owned by ").append(oldTeam.coloredName)
  }
}
