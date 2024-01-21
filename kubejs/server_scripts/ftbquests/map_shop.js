// priority 10
let $MapItem = Java.loadClass("net.minecraft.world.item.MapItem")
let $MapItemSavedData = Java.loadClass("net.minecraft.world.level.saveddata.maps.MapItemSavedData")
let $MapDecoration = Java.loadClass("net.minecraft.world.level.saveddata.maps.MapDecoration")

let handleBiomeMapShop = (/** @type {Internal.CustomRewardEventJS} */ event, /** @type {string} */ tag) => {
  let { level, player } = event
  let biome = tag.replace("biome:", "").replace(".", ":")
  let biomePos = MoreJS.findBiome(player.onPos, level, biome, 64)
  if (biomePos) {
    generateAndGiveMap(level, player, biomePos, biome)
  } else {
    refundPlayer("Couldn't find this biome nearby!", player, event.reward.quest)
  }
}

function refundPlayer(
  /** @type {string} */ msg,
  /** @type {Internal.ServerPlayer} */ player,
  /** @type {Internal.Quest} */ quest
) {
  player.tell(Text.translate(msg).red())
  player.tell(Text.green("Refunding quest ").append(quest.title.aqua()))
  let i = 0
  quest.tasks.forEach((task) => {
    player.server.scheduleInTicks(i * 5, () => {
      player.server.runCommandSilent(`/ftbquests change_progress ${player.username} complete ${task}`)
    })
    i++
  })
}

function generateAndGiveMap(
  /** @type {Internal.ServerLevel} */ level,
  /** @type {Internal.ServerPlayer} */ player,
  /** @type {BlockPos} */ result,
  /** @type {string} */ biome
) {
  let map = $MapItem.create(level, result.getX(), result.getZ(), 2, true, true)
  $MapItemSavedData.addTargetDecoration(map, result, "+", $MapDecoration.Type.RED_X)
  $MapItem.renderBiomePreviewMap(level, map)
  map.setHoverName(Text.translate("gravitas.shop.map.biome." + biome.replace(":", ".")))
  player.give(map)
}
