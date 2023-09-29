// priority 10

let replaceCollapsableBlocks = (/** @type {Internal.StructureLoadEventJS} */ event) => {
  let stoneArray = [ "minecraft:stone_bricks"]
  let stonestairsArray = [ "minecraft:stone_stairs"]
  let stonebrickstairsArray = ["minecraft:stone_brick_stairs"]
  let stonewallsArray = ["minecraft:stone_brick_wall"]

  let redsandstoneArray = ["minecraft:red_sandstone"]
  let cutredsandstoneArray = ["minecraft:cut_red_sandstone"]
  let redslabArray = ["minecraft:cut_red_sandstone_slab"]
  let smoothredsandstoneArray = ["minecraft:smooth_red_sandstone"]
  let smoothredslabArray = ["minecraft:smooth_red_sandstone_slab"]
  let smoothredstairsArray = ["minecraft:smooth_red_sandstone_stairs"]

  let darkoakplank = ["minecraft:dark_oak_planks"]
  let darkoakstairs = ["minecraft:dark_oak_stairs"]
  let darkoakslab = ["minecraft:dark_oak_slab"]
  let darkoaktrapdoor = ["minecraft:dark_oak_trapdoor"]
  let darkoaklog = ["minecraft:dark_oak_log"]
  let darkoakfence = ["minecraft:dark_oak_fence"]

  let oakplank = ["minecraft:oak_planks"]
  let oakstairs = ["minecraft:oak_stairs"]
  let oakslab = ["minecraft:oak_slab"]
  let oaktrapdoor = ["minecraft:oak_trapdoor"]
  let oaklog = ["minecraft:oak_log"]
  let oakfence = ["minecraft:oak_fence"]

  let birchplank = ["minecraft:birch_planks"]
  let birchstairs = ["minecraft:birch_stairs"]
  let birchslab = ["minecraft:birch_slab"]
  let birchtrapdoor = ["minecraft:birch_trapdoor"]
  let birchlog = ["minecraft:birch_log"]
  let birchfence = ["minecraft:birch_fence"]

  let junglefence = ["minecraft:jungle_fence"]
  let jungleplanks = ["minecraft:jungle_planks"]
  let junglestairs = ["minecraft:jungle_stairs"]
  let jungleslab = ["minecraft:jungle_slab"]
  let jungletrapdoor = ["minecraft:jungle_trapdoor"]
  let junglelog = ["minecraft:jungle_log"]

  let sprucefence = ["minecraft:spruce_fence"]
  let spruceplanks = ["minecraft:spruce_planks"]
  let sprucestairs = ["minecraft:spruce_stairs"]
  let spruceslab = ["minecraft:spruce_slab"]
  let sprucetrapdoor = ["minecraft:spruce_trapdoor"]
  let sprucelog = ["minecraft:spruce_log"]
  if (event.id.startsWith("sgjourney")||event.id.startsWith("minecraft")||event.id.startsWith("rep")) {
    event.forEachPalettes((palette) => {
      palette.forEach((struc) => {
        if (sprucefence.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce_fence").withPropertiesOf(struc.state()))
        }
        if (spruceplanks.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce").withPropertiesOf(struc.state()))
        }
        if (sprucestairs.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce_stairs").withPropertiesOf(struc.state()))
        }
        if (spruceslab.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce_slab").withPropertiesOf(struc.state()))
        }
        if (sprucetrapdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce_trapdoor").withPropertiesOf(struc.state()))
        }
        if (sprucelog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/log/spruce").withPropertiesOf(struc.state()))
        }

        if (junglefence.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm_fence").withPropertiesOf(struc.state()))
        }
        if (jungleplanks.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm").withPropertiesOf(struc.state()))
        }
        if (junglestairs.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm_stairs").withPropertiesOf(struc.state()))
        }
        if (jungleslab.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm_slab").withPropertiesOf(struc.state()))
        }
        if (jungletrapdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm_trapdoor").withPropertiesOf(struc.state()))
        }
        if (junglelog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/log/palm").withPropertiesOf(struc.state()))
        }

        if (darkoakfence.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory_fence").withPropertiesOf(struc.state()))
        }
        if (darkoakplank.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory").withPropertiesOf(struc.state()))
        }
        if (darkoakstairs.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory_stairs").withPropertiesOf(struc.state()))
        }
        if (darkoakslab.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory_slab").withPropertiesOf(struc.state()))
        }
        if (darkoaktrapdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory_trapdoor").withPropertiesOf(struc.state()))
        }
        if (darkoaklog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/log/hickory").withPropertiesOf(struc.state()))
        }

        if (oakfence.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak_fence").withPropertiesOf(struc.state()))
        }
        if (oakplank.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak").withPropertiesOf(struc.state()))
        }
        if (oakstairs.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak_stairs").withPropertiesOf(struc.state()))
        }
        if (oakslab.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak_slab").withPropertiesOf(struc.state()))
        }
        if (oaktrapdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak_trapdoor").withPropertiesOf(struc.state()))
        }
        if (oaklog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/log/oak").withPropertiesOf(struc.state()))
        }

        if (birchfence.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch_fence").withPropertiesOf(struc.state()))
        }
        if (birchplank.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch").withPropertiesOf(struc.state()))
        }
        if (birchstairs.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch_stairs").withPropertiesOf(struc.state()))
        }
        if (birchslab.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch_slab").withPropertiesOf(struc.state()))
        }
        if (birchtrapdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch_trapdoor").withPropertiesOf(struc.state()))
        }
        if (birchlog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/log/birch").withPropertiesOf(struc.state()))
        }

        if (stoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/hardened/granite").defaultBlockState())
        }
        if (stonestairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/raw/granite_stairs").withPropertiesOf(struc.state()))
        }
        if (stonebrickstairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/bricks/granite_stairs").withPropertiesOf(struc.state()))
        }
        if (stonewallsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/bricks/granite_wall").withPropertiesOf(struc.state()))
        }
        if (redslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:cut_sandstone/red_slab").defaultBlockState())
        }
        if (redsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/red").defaultBlockState())
        }
        if (cutredsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:cut_sandstone/red").defaultBlockState())
        }
        if (smoothredslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/red_slab").defaultBlockState())
        }
        if (smoothredsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/red").defaultBlockState())
        }
        if (smoothredstairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/red_stairs").withPropertiesOf(struc.state()))
        }
      })
    })
    }
}
