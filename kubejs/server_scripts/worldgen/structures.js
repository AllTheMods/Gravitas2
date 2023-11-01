// priority: 10

const strucBlocksReplacementMap = {
  "minecraft:furnace": "minecraft:air",
  "minecraft:blast_furnace": "minecraft:air",
  "minecraft:smoker": "minecraft:air",
  "minecraft:fletching_table": "minecraft:air",
  "minecraft:cartography_table": "minecraft:air",
  "minecraft:cobblestone": "tfc:rock/raw/granite",
  "minecraft:gold_ore": "minecraft:water",
  "minecraft:dirt": "tfc:dirt/loam",
  "minecraft:dirt_path": "tfc:grass_path/loam",
  "minecraft:grass_block": "tfc:grass/loam",
  "minecraft:farmland": "tfc:farmland/loam",
  "minecraft:andesite": "tfc:rock/hardened/andesite",
  "minecraft:mud": "tfc:mud/loam",
  "minecraft:mud_bricks": "tfc:mud_bricks/loam",
  "minecraft:mud_brick_wall": "tfc:mud_bricks/loam",
  "minecraft:rooted_dirt": "tfc:rooted_dirt/loam",
  "minecraft:mangrove_roots": "tfc:rooted_dirt/loam",
  "minecraft:muddy_mangrove_roots": "tfc:muddy_roots/loam",
  "minecraft:stone_bricks": "tfc:rock/smooth/granite",
  "minecraft:red_sandstone": "tfc:raw_sandstone/red",
  "minecraft:chiseled_red_sandstone": "tfc:chiseled_sandstone/red",
  "minecraft:cut_red_sandstone": "tfc:cut_sandstone/red",
  "minecraft:smooth_red_sandstone": "tfc:smooth_sandstone/red",
  "minecraft:sandstone": "tfc:raw_sandstone/yellow",
  "minecraft:cut_sandstone": "tfc:cut_sandstone/yellow",
  "minecraft:smooth_sandstone": "tfc:smooth_sandstone/yellow",
  "minecraft:attached_pumpkin_stem": "tfc:crop/melon",
  "minecraft:pumpkin": "tfc:melon",
  "minecraft:melon": "tfc:melon",
  "minecraft:attached_melon_stem": "tfc:crop/melon",
  "minecraft:stone": "tfc:rock/hardened/granite",
  "minecraft:deepslate": "tfc:rock/hardened/basalt",
  "minecraft:cobbled_deepslate": "tfc:rock/hardened/basalt",
  "minecraft:infested_chiseled_stone_bricks": "tfc:rock/chiseled/granite",
}

const strucBlocksWithPropertiesMap = {
  "minecraft:composter": "tfc:composter",
  "minecraft:beetroots": "tfc:crop/beet",
  "minecraft:carrots": "tfc:crop/carrot",
  "minecraft:wheat": "tfc:crop/wheat",
  "minecraft:potatoes": "tfc:crop/potato",
  "minecraft:cobblestone_wall": "tfc:rock/cobble/granite_wall",
  "minecraft:cobblestone_stairs": "tfc:rock/cobble/granite_stairs",
  "minecraft:cobblestone_slab": "tfc:rock/cobble/granite_slab",
  "minecraft:stone_stairs": "tfc:rock/raw/granite_stairs",
  "minecraft:stone_brick_stairs": "tfc:rock/bricks/granite_stairs",
  "minecraft:stone_brick_wall": "tfc:rock/bricks/granite_wall",
  "minecraft:cut_red_sandstone_slab": "tfc:cut_sandstone/red_slab",
  "minecraft:cobblestone_wall": "tfc:rock/bricks/granite_wall",
  "minecraft:chiseled_stone_bricks": "tfc:rock/chiseled/granite",
  "minecraft:red_sandstone_wall": "tfc:raw_sandstone/red_wall",
  "minecraft:smooth_red_sandstone_stairs": "tfc:smooth_sandstone/red_stairs",
  "minecraft:cut_sandstone_slab": "tfc:cut_sandstone/yellow_slab",
  "minecraft:smooth_sandstone_slab": "tfc:smooth_sandstone/yellow_slab",
  "minecraft:sandstone_wall": "tfc:raw_sandstone/yellow_wall",
  "minecraft:smooth_red_sandstone_slab": "tfc:smooth_sandstone/red_slab",
  "minecraft:red_sandstone_slab": "tfc:sandstone/red_slab",
  "minecraft:smooth_sandstone_stairs": "tfc:smooth_sandstone/yellow_stairs",
  "minecraft:sandstone_stairs": "tfc:raw_sandstone/yellow_stairs",
  "minecraft:white_bed": "tfc:thatch_bed",
  "minecraft:blue_bed": "tfc:thatch_bed",
  "minecraft:red_bed": "tfc:thatch_bed",
  "minecraft:yellow_bed": "tfc:thatch_bed",
  "minecraft:cyan_bed": "tfc:thatch_bed",
  "minecraft:purple_bed": "tfc:thatch_bed",
  "minecraft:orange_bed": "tfc:thatch_bed",
  "minecraft:lime_bed": "tfc:thatch_bed",
  "minecraft:green_bed": "tfc:thatch_bed",
  "minecraft:pink_bed": "tfc:thatch_bed",
  "minecraft:black_bed": "tfc:thatch_bed",
  "minecraft:light_blue_bed": "tfc:thatch_bed",
  "minecraft:light_gray_bed": "tfc:thatch_bed",
  "minecraft:gray_bed": "tfc:thatch_bed",
  "minecraft:brown_bed": "tfc:thatch_bed",
  "minecraft:magenta_bed": "tfc:thatch_bed",
  "minecraft:stone_slab": "tfc:rock/raw/granite_slab",
  "minecraft:smooth_stone_slab": "tfc:rock/smooth/granite_slab",
  "minecraft:polished_andesite": 'tfc:rock/smooth/andesite',
  "minecraft:bookshelf": "tfc:wood/planks/spruce_bookshelf",
  "minecraft:iron_bars": "tfc:metal/bars/copper",
  "minecraft:barrel": "tfc:wood/barrel/spruce",
  "minecraft:campfire": "tfc:firepit",
}

function getState(block, state) {
  if (state == null) return Block.getBlock(block).defaultBlockState()
  return Block.getBlock(block).withPropertiesOf(state)
}

function getWoodReplacement(block) {
  let item = block
  if (!item.namespace.equals("minecraft")) return
  for (let i = 0; i < regexArray.length; i++) {
    let regExp = regexArray[i][0]
    let tfcString = regexArray[i][1]
    let match = item.path.match(regExp)
    if (!match) continue
    if (!tfcWoodVanillaToTFC[match[1]]) return
    let newPath = new String(item.path).replace(match[1], tfcWoodVanillaToTFC[match[1]])
    let newItem = newPath.replace(regExp, tfcString)
    return newItem
  }
}

const regexArray = [
  [new RegExp(/^stripped_(\w+?)_log$/), "tfc:wood/stripped_log/$1"],
  [new RegExp(/^(\w+?)_log$/), "tfc:wood/log/$1"],
  [new RegExp(/^stripped_(\w+?)_wood$/), "tfc:wood/stripped_wood/$1"],
  [new RegExp(/^(\w+?)_leaves$/), "tfc:wood/leaves/$1"],
  [new RegExp(/^(\w+?)_wood$/), "tfc:wood/wood/$1"],
  [new RegExp(/^(\w+?)_sapling$/), "tfc:wood/sapling/$1"],
  [new RegExp(/^(\w+?)_planks$/), "tfc:wood/planks/$1"],
  [new RegExp(/^(\w+?)_stairs$/), "tfc:wood/planks/$1_stairs"],
  [new RegExp(/^(\w+?)_slab$/), "tfc:wood/planks/$1_slab"],
  [new RegExp(/^(\w+?)_fence$/), "tfc:wood/planks/$1_fence"],
  [new RegExp(/^(\w+?)_fence_gate$/), "tfc:wood/planks/$1_fence_gate"],
  [new RegExp(/^(\w+?)_door$/), "tfc:wood/planks/$1_door"],
  [new RegExp(/^(\w+?)_trapdoor$/), "tfc:wood/planks/$1_trapdoor"],
  [new RegExp(/^(\w+?)_pressure_plate$/), "tfc:wood/planks/$1_pressure_plate"],
  [new RegExp(/^(\w+?)_button$/), "tfc:wood/planks/$1_button"],
]

const tfcWoodVanillaToTFC = {
  oak: "oak",
  spruce: "spruce",
  birch: "birch",
  jungle: "palm",
  acacia: "acacia",
  dark_oak: "hickory",
  // no crimson
  // no warped
  mangrove: "mangrove",
  // no bamboo
  cherry: "white_cedar",
}

const replaceVanillaBlocks = (/** @type {Internal.StructureLoadEventJS} */ event) => {
  if (
    event.id.startsWith("sgjourney") ||
    event.id.startsWith("minecraft") ||
    event.id.startsWith("repurposed_structures") ||
    event.id.startsWith("apotheosis") ||
    event.id.startsWith("waystones") ||
    event.id.startsWith("ae2")/* ||
    event.id.startsWith("ad_astra")*/
  ) {
    event.forEachPalettes((palette) => {
      palette.forEach((struc) => {
        let newBlockWithProp = strucBlocksWithPropertiesMap[struc.block.id]
        if (newBlockWithProp) {
          palette.add(struc.position, getState(newBlockWithProp, struc.state()))
          return
        }
        let newBlock = strucBlocksReplacementMap[struc.block.id]
        if (newBlock) {
          palette.add(struc.position, getState(newBlock))
          return
        }
        let newWoodBlock = getWoodReplacement(struc.block.idLocation)
        if (newWoodBlock) {
          palette.add(struc.position, getState(newWoodBlock, struc.state()))
          return
        }
      })
    })
  }
}
