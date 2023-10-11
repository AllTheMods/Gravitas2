// priority: 10
const pileMetals = ['tfc:metal/ingot/gold', 'tfc:metal/ingot/copper', 'tfc:metal/ingot/wrought_iron']

const replaceGoldBlocksWithPiles = (event) => {
  const level = event.worldGenLevel
  event.intersectionBoxes.forEach((bb) => {
    let metal, count, nbt, pileBlockState, pile
    BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach((pos) => {
      if (level.getBlockState(pos).block.id === 'minecraft:gold_block') {
        metal = pileMetals[Utils.random.nextInt(0, pileMetals.length)]
        count = Utils.random.nextInt(1, 65) // inclusive to exclusive, so 65
        nbt = generateNbt(metal, count)
        pileBlockState = Block.getBlock('tfc:ingot_pile')
          .defaultBlockState()
          .setValue($IngotPileBlock.COUNT, $Integer.valueOf(Number(count).toFixed()))
        level.setBlock(pos, pileBlockState, 2)
        pile = level.getBlockEntity(pos)
        pile.load(nbt)
      }
    })
  })
}

function generateNbt (metal, count) {
  const item = `{ForgeCaps: {"tfc:item_heat": {heat: 0,ticks: 0}},id: "${metal}",Count: 1}`
  const array = Array(count).fill(item)
  return `{stacks: [${array}],id: "tfc:ingot_pile"}`
}
