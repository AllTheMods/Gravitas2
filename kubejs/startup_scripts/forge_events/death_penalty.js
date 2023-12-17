// priority 10

let runsDeathPenalty = (/** @type {Internal.PlayerEvent$Clone} */ event) => {
  if (event.isWasDeath()) {
    let [server, player] = [event.entity.server, event.entity]

    server.scheduleInTicks(5, () => {
      if (
        player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
        player.persistentData.getInt("timeWhenLatestDeath") - player.persistentData.getInt("timeWhenOldestDeath") <
          3 * 60 * 60 * 20 // 3 hours
      ) {
        server.runCommandSilent(`/tfc player ${player.username} set saturation 0`)
        server.runCommandSilent(`/tfc player ${player.username} set hunger 4`)
        server.runCommandSilent(`/tfc player ${player.username} set water 20`)
        player.tell(Text.red("You've been dying too often recently and now you feel weak..."))
      }
    })
  }
}
