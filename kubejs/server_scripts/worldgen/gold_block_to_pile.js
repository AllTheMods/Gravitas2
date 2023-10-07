// priority: 10
const metals = ["tfc:metal/ingot/gold","tfc:metal/ingot/copper","tfc:metal/ingot/wrought_iron"]

let replaceGoldBlocksWithPiles = event => {
  let level = event.worldGenLevel
  event.intersectionBoxes.forEach(bb => {
    BlockPos.betweenClosed(bb.minX(), bb.minY(), bb.minZ(), bb.maxX(), bb.maxY(), bb.maxZ()).forEach(pos => {
      if (level.getBlockState(pos).block.id == "minecraft:gold_block"){
        let metal = metals[Utils.random.nextInt(0,metals.length)]
        let count = Utils.random.nextInt(1,65) // not inclusive to exclusive, so 65
        let nbt = generateNbt(metal,count)
        let pileBlockState = Block.getBlock("tfc:ingot_pile").defaultBlockState().setValue($IngotPileBlock.COUNT, $Integer.valueOf(Number(count).toFixed()))
        level.setBlock(pos, pileBlockState, 2)
        let pile = level.getBlockEntity(pos)
        pile.load(nbt)
      }
    })
  })
}

function generateNbt(metal, count){
    let item = `{ForgeCaps: {"tfc:item_heat": {heat: 0,ticks: 0}},id: "${metal}",Count: 1}`
    let array = Array(count).fill(item)
    return `{stacks: [${array}],id: "tfc:ingot_pile"}`
}