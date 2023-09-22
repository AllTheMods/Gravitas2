// priority 10

let replaceCollapsableBlocks = (/** @type {Internal.StructureLoadEventJS} */ event) => {
  let banArray = ["minecraft:stone", "minecraft:stone_slab"]
  if (event.id.startsWith("sgjourney:stargate_buried")) {
    event.forEachPalettes((palette) => {
      palette.forEach((struc) => {
        if (banArray.includes(struc.block.id)) {
          palette.add(struc.position, Block.getBlock("tfc:rock/hardened/granite").defaultBlockState())
        }
      })
    })
  }
}
