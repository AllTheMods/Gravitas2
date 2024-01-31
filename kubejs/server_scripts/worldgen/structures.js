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
  "minecraft:chiseled_red_sandstone": "tfc:cut_sandstone/red",
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
  "minecraft:dirt_path": "tfc:grass_path/sandy_loam"
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
  "minecraft:red_sandstone_stairs": "tfc:raw_sandstone/red_stairs",
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
  "minecraft:stone_brick_slab": "tfc:rock/bricks/granite_slab",
  "minecraft:smooth_stone_slab": "tfc:rock/smooth/granite_slab",
  "minecraft:polished_andesite": 'tfc:rock/smooth/andesite',
  "minecraft:bookshelf": "tfc:wood/planks/spruce_bookshelf",
  "minecraft:iron_bars": "tfc:metal/bars/copper",
  "minecraft:barrel": "tfc:wood/barrel/spruce",
  "minecraft:infested_stone": "tfc:rock/hardened/granite",
  "minecraft:campfire": "tfc:firepit"
}

const jigsawReplacementMap = {
  // "minecraft:oak_wood[axis=y]": "tfc:wood/wood/oak[axis=y]",
  // "minecraft:acacia_planks": "tfc:wood/planks/acacia",
  // "minecraft:mangrove_stairs[facing=north]": "tfc:wood/planks/mangrove_stairs[facing=north]",
  "minecraft:mud": "tfc:mud/loam",
  // "minecraft:acacia_fence[east=true,west=true]": "tfc:wood/planks/acacia_fence[east=true,west=true]",
  "minecraft:red_tulip": "tfc:plant/tulip_red",
  "minecraft:gold_ore": "minecraft:water",
  "minecraft:stone": "tfc:rock/hardened/granite",
  "minecraft:dirt": "tfc:dirt/loam",
  "minecraft:smooth_sandstone": "tfc:smooth_sandstone/yellow",
  "minecraft:grass_block": "tfc:grass/loam",
  // "minecraft:acacia_fence_gate": "tfc:wood/planks/acacia_fence_gate",
  // "minecraft:mangrove_wood": "tfc:wood/wood/mangrove",
  "minecraft:smooth_stone_slab[type=bottom]": "tfc:rock/smooth/granite_slab[type=bottom]",
  "minecraft:muddy_mangrove_roots": "tfc:muddy_roots/loam",
  // "minecraft:acacia_stairs[facing=east]": "tfc:wood/planks/acacia_stairs[facing=east]",
  "minecraft:stone_bricks": "tfc:rock/smooth/granite",
  // "minecraft:spruce_planks": "tfc:wood/planks/spruce",
  // "minecraft:mangrove_stairs[facing=east]": "tfc:wood/planks/mangrove_stairs[facing=east]",
  "minecraft:andesite": "tfc:rock/hardened/andesite",
  "minecraft:infested_stone": "tfc:rock/hardened/granite",
  // "minecraft:acacia_stairs[facing=south]": "tfc:wood/planks/acacia_stairs[facing=south]",
  "minecraft:dirt_path": "tfc:grass_path/loam",
  "minecraft:cobblestone": "tfc:rock/raw/granite",
  // "minecraft:acacia_fence[east=false,north=false,south=false,waterlogged=false,west=false]]": "",
  // "minecraft:mangrove_stairs[facing=south]": "tfc:wood/planks/mangrove_stairs[facing=south]",
  // "minecraft:acacia_log": "tfc:wood/log/acacia",
  "minecraft:stone_slab[type=double]": "tfc:rock/raw/granite_slab[type=double]",
  "minecraft:sandstone": "tfc:raw_sandstone/yellow",
  // "minecraft:acacia_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]": "tfc:wood/planks/acacia_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]",
  // "minecraft:dark_oak_planks": "tfc:wood/planks/hickory",
  // "minecraft:dark_oak_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]": "tfc:wood/planks/hickory_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]"
}

const replaceVanillaBlocks = (/** @type {Internal.StructureLoadEventJS} */ event) => {
  if (
    event.id.startsWith("sgjourney") ||
    event.id.startsWith("minecraft") ||
    event.id.startsWith("repurposed_structures") ||
    event.id.startsWith("apotheosis") ||
    event.id.startsWith("waystones") ||
    event.id.startsWith("immersiveengineering") ||
    event.id.startsWith("ae2") ||
    event.id.startsWith("iceandfire")
  ) {
    event.forEachPalettes((palette) => {
      palette.forEach((struc) => {
        if (struc.block.id == "minecraft:jigsaw") {
          let nbt = struc.nbt()
          nbt.final_state = jigsawReplacementMap[nbt.final_state] || nbt.final_state
        }
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
        if (!event.id.includes("village")) {
          let newWoodBlock = getWoodReplacement(struc.block.idLocation)
          if (newWoodBlock) {
            palette.add(struc.position, getState(newWoodBlock, struc.state()))
            return
          }
        }
      })
    })
  }
}
