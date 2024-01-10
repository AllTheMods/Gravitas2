
let tfcWoodTracks = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow"
]

let registerBlocks = (/** @type {Registry.Block} */ event) => {
    event.create('gregitas:bronze_plated_bricks')
          .tagBlock('minecraft:mineable/pickaxe')
          .soundType('stone')
          .textureAll('kubejs:block/casings/bronze_plated_bricks')


}