// priority 99

let config

if (!Platform.isClientEnvironment()) {
  let configPath = "kubejs/config/modpack_config.json"
  let defaultConfig = {
    server: {
      banned_block_entities: Utils.newList(),
      banned_items: Utils.newList(),
      banned_entities: Utils.newList(),
      remove_recipes_by: Utils.newList()
    }
  }

  config = JsonIO.read(configPath)
  if (config == null) {
    JsonIO.write(configPath, defaultConfig)
    config = defaultConfig
  }

  /** @type {Internal.ArrayList<string>} */
  let bannedBlockEntities = config?.server.banned_block_entities
  /** @type {Internal.ArrayList<string>} */
  let bannedItems = config?.server.banned_items
  /** @type {Internal.ArrayList<string>} */
  let bannedEntities = config?.server.banned_entities

  if (bannedEntities instanceof $ArrayList) {
    bannedEntities.forEach(entity => {
      EntityEvents.spawned(entity, (event) => sendMessageAndCancel(event, "entity"))
    })
  }

  let bannedList = new $HashSet()
  bannedList.addAll(bannedBlockEntities)
  bannedList.addAll(bannedItems)

  if (!bannedList.isEmpty()) {
    bannedList.forEach(item => {
      ItemEvents.rightClicked(item, (event) => sendMessageAndCancel(event, "item"))
    })

    BlockEvents.rightClicked((event) => {
      if (bannedList.contains(event.item.id)) sendMessageAndCancel(event, "item")
    })

    PlayerEvents.loggedIn((event) => {
      let data = bannedList
      console.log("Banned items: " + data)
      console.log("Sending banned items to " + event.player.username)
      event.player.sendData("banned_items", { banned_items: data })
    })
  }
}

function sendMessageAndCancel(event, type) {
  switch (type) {
    case "item":
      event.player.setStatusMessage(Text.red("You are not allowed to use this item!"))
      event.cancel()
      break
    case "entity":
      Utils.server.tell(Text.red("Removed banned entity: " + event.entity.type + " at " + event.entity.blockPosition().toShortString()))
      event.cancel()
      break
    default:
      break
  }
}
