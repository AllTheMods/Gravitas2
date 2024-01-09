// priority 10

let addsTimeOfDeathToPlayer = (/** @type {Internal.LivingEntityDeathEventJS} */event) => {
  /** @type {Internal.Player} */
  let player = event.entity
  let playerStats = player.getStats()
  let pData = player.persistentData
  let latestDeathTime = pData.getInt("timeWhenLatestDeath")
  pData.putInt("timeWhenOldestDeath", latestDeathTime)
  pData.putInt("timeWhenLatestDeath", playerStats.playTime)
}
