// priority 10

let registerBlocks = (/** @type {Registry.Block} */ event) => {
  event.create('gregitas:bronze_plated_bricks')
    .tagBlock('minecraft:mineable/pickaxe')
    .soundType('stone')
    .textureAll('kubejs:block/casings/bronze_plated_bricks')
}
