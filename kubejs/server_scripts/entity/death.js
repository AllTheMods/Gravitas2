// priority 10
const $PlayerStatsJS = Java.loadClass("dev.latvian.mods.kubejs.player.PlayerStatsJS")

let addsTimeOfDeathToPlayer = (/** @type {Internal.LivingEntityDeathEventJS} */event) => {
  /** @type {Internal.Player} */
  let player = event.entity
  let playerStats = new $PlayerStatsJS(player, player.getStats())
  let pData = player.persistentData
  let latestDeathTime = pData.getInt("timeWhenLatestDeath")
  pData.putInt("timeWhenOldestDeath", latestDeathTime)
  pData.putInt("timeWhenLatestDeath", playerStats.playTime)
}
