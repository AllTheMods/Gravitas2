
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

    tfcWoodTracks.forEach((wood) => {
    event.create(`railways:track_tfc_${wood}`).model(`railways:block/track/compat/tfc/track_tfc_${wood}`)
    event.create(`railways:track_tfc_${wood}_narrow`).model(`railways:block/track/compat/tfc/track_tfc_${wood}_narrow`)
    event.create(`railways:track_tfc_${wood}_wide`).model(`railways:block/track/compat/tfc/track_tfc_${wood}_wide`)
    })
}