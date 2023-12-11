// priority 10

const replaceItemEntity = {
  "minecraft:chest": "tfc:wood/chest/oak"
}

let replaceSpawnedItem = (event) => {
  let replacement = replaceItemEntity[event.entity.item.id]
  if (replacement) {
    event.entity.setItem(Item.of(replacement, event.entity.item.count))
  }
}
