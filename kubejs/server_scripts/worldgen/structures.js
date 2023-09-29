// priority 10

let replaceCollapsableBlocks = (/** @type {Internal.StructureLoadEventJS} */ event) => {
  let dirtArray = ["minecraft:dirt"]
  let dirtpathArray = ["minecraft:dirt_path"]
  let grassArray = ["minecraft:grass_block"]
  let farmArray = ["minecraft:farmland"]
  let composter = ["minecraft:composter"]
  let vanillablocksArray = ["minecraft:furnace","minecraft:blast_furnace", "minecraft:smoker", "minecraft:fletching_table"]

  let carrots = ["minecraft:carrots"]
  let wheat = ["minecraft:wheat"]
  let beetroots = ["minecraft:beetroots"]
  let potatoes = ["minecraft:potatoes"]


  let stoneArray = [ "minecraft:stone_bricks"]
  let stonestairsArray = [ "minecraft:stone_stairs"]
  let stonebrickstairsArray = ["minecraft:stone_brick_stairs"]
  let stonewallsArray = ["minecraft:stone_brick_wall"]
  let chisstone = ["minecraft:chiseled_stone_bricks"]

  let cobblestoneArray = [ "minecraft:cobblestone"]
  let cobblestonewallArray = [ "minecraft:cobblestone_wall"]
  let cobblestonestairsArray = [ "minecraft:cobblestone_stairs"]
  let cobblestoneslabArray = ["minecraft:cobblestone_slab"]

  let redsandstoneArray = ["minecraft:red_sandstone"]
  let redsandstonewallArray = ["minecraft:red_sandstone_wall"]
  let chisredsandstoneArray = ["minecraft:chiseled_red_sandstone"]
  let cutredsandstoneArray = ["minecraft:cut_red_sandstone"]
  let redslabArray = ["minecraft:cut_red_sandstone_slab"]
  let smoothredsandstoneArray = ["minecraft:smooth_red_sandstone"]
  let smoothredslabArray = ["minecraft:smooth_red_sandstone_slab"]
  let smoothredstairsArray = ["minecraft:smooth_red_sandstone_stairs"]

  let sandstoneArray = ["minecraft:sandstone"]
  let sandstonewallArray = ["minecraft:sandstone_wall"]
  let cutsandstoneArray = ["minecraft:cut_sandstone"]
  let sandslabArray = ["minecraft:cut_sandstone_slab"]
  let smoothsandstoneArray = ["minecraft:smooth_sandstone"]
  let smoothsandslabArray = ["minecraft:smooth_sandstone_slab"]
  let sandstairsArray = ["minecraft:sandstone_stairs"]
  let smoothsandstairsArray = ["minecraft:smooth_sandstone_stairs"]

  let darkoakplank = ["minecraft:dark_oak_planks"]
  let darkoakstairs = ["minecraft:dark_oak_stairs"]
  let darkoakslab = ["minecraft:dark_oak_slab"]
  let darkoaktrapdoor = ["minecraft:dark_oak_trapdoor"]
  let darkoaklog = ["minecraft:dark_oak_log"]
  let darkoakfence = ["minecraft:dark_oak_fence"]
  let darkoakdoor = ["minecraft:dark_oak_door"]
  let stripped_darkoakwood = ["minecraft:stripped_dark_oak_wood"]
  let stripped_darkoaklog = ["minecraft:stripped_dark_oak_log"]

  let oakplank = ["minecraft:oak_planks"]
  let oakstairs = ["minecraft:oak_stairs"]
  let oakslab = ["minecraft:oak_slab"]
  let oaktrapdoor = ["minecraft:oak_trapdoor"]
  let oaklog = ["minecraft:oak_log"]
  let oakfence = ["minecraft:oak_fence"]
  let oakdoor = ["minecraft:oak_door"]
  let stripped_oakwood = ["minecraft:stripped_oak_wood"]
  let stripped_oaklog = ["minecraft:stripped_oak_log"]

  let birchplank = ["minecraft:birch_planks"]
  let birchstairs = ["minecraft:birch_stairs"]
  let birchslab = ["minecraft:birch_slab"]
  let birchtrapdoor = ["minecraft:birch_trapdoor"]
  let birchlog = ["minecraft:birch_log"]
  let birchfence = ["minecraft:birch_fence"]
  let birchdoor = ["minecraft:birch_door"]
  let stripped_birchwood = ["minecraft:stripped_birch_wood"]
  let stripped_birchlog = ["minecraft:stripped_birch_log"]


  let junglefence = ["minecraft:jungle_fence"]
  let jungleplanks = ["minecraft:jungle_planks"]
  let junglestairs = ["minecraft:jungle_stairs"]
  let jungleslab = ["minecraft:jungle_slab"]
  let jungletrapdoor = ["minecraft:jungle_trapdoor"]
  let junglelog = ["minecraft:jungle_log"]
  let jungledoor = ["minecraft:jungle_door"]
  let stripped_junglewood = ["minecraft:stripped_jungle_wood"]
  let stripped_junglelog = ["minecraft:stripped_jungle_log"]

  let sprucefence = ["minecraft:spruce_fence"]
  let spruceplanks = ["minecraft:spruce_planks"]
  let sprucestairs = ["minecraft:spruce_stairs"]
  let spruceslab = ["minecraft:spruce_slab"]
  let sprucetrapdoor = ["minecraft:spruce_trapdoor"]
  let sprucelog = ["minecraft:spruce_log"]
  let sprucedoor = ["minecraft:spruce_door"]
  let stripped_sprucewood = ["minecraft:stripped_spruce_wood"]
  let stripped_sprucelog = ["minecraft:stripped_spruce_log"]

  if (event.id.startsWith("sgjourney")||event.id.startsWith("minecraft")||event.id.startsWith("repurposed_structures")||event.id.startsWith("apotheosis")||event.id.startsWith("waystones")||event.id.startsWith("ae2")) {
    event.forEachPalettes((palette) => {
      palette.forEach((struc) => {
        if (vanillablocksArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("minecraft:air").defaultBlockState())
        }
        if (composter.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:composter").withPropertiesOf(struc.state()))
        }
        if (beetroots.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:crop/beet").withPropertiesOf(struc.state()))
        }
        if (carrots.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:crop/carrot").withPropertiesOf(struc.state()))
        }
        if (wheat.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:crop/wheat").withPropertiesOf(struc.state()))
        }
        if (potatoes.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:crop/potato").withPropertiesOf(struc.state()))
        }


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
        if (stripped_sprucewood.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/spruce").withPropertiesOf(struc.state()))
        }
        if (stripped_sprucelog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/spruce").withPropertiesOf(struc.state()))
        }
        if (sprucedoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/spruce_door").withPropertiesOf(struc.state()))
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
        if (stripped_junglewood.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/palm").withPropertiesOf(struc.state()))
        }
        if (stripped_junglelog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/palm").withPropertiesOf(struc.state()))
        }
        if (jungledoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/palm_door").withPropertiesOf(struc.state()))
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
        if (stripped_darkoakwood.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/hickory").withPropertiesOf(struc.state()))
        }
        if (stripped_darkoaklog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/hickory").withPropertiesOf(struc.state()))
        }
        if (darkoakdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/hickory_door").withPropertiesOf(struc.state()))
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
        if (stripped_oakwood.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/oak").withPropertiesOf(struc.state()))
        }
        if (stripped_oaklog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/oak").withPropertiesOf(struc.state()))
        }
        if (oakdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/oak_door").withPropertiesOf(struc.state()))
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
        if (stripped_birchwood.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/birch").withPropertiesOf(struc.state()))
        }
        if (stripped_birchlog.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/stripped_log/birch").withPropertiesOf(struc.state()))
        }
        if (birchdoor.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:wood/planks/birch_door").withPropertiesOf(struc.state()))
        }

        if (cobblestoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/raw/granite").defaultBlockState())
        }
        if (cobblestonewallArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/cobble/granite_wall").defaultBlockState())
        }
        if (cobblestonestairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/cobble/granite_stairs").withPropertiesOf(struc.state()))
        }
        if (cobblestoneslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/cobble/granite_slab").defaultBlockState())
        }

        if (dirtArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:dirt/loam").defaultBlockState())
        }
        if (dirtpathArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:grass_path/loam").withPropertiesOf(struc.state()))
        }
        if (grassArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:grass/loam").defaultBlockState())
        }
        if (farmArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:farmland/loam").defaultBlockState())
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
        if (chisstone.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:rock/chiseled/granite").withPropertiesOf(struc.state()))
        }

        if (redslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:cut_sandstone/red_slab").defaultBlockState())
        }
        if (redsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/red").defaultBlockState())
        }
        if (redsandstonewallArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/red_wall").defaultBlockState())
        }
        if (chisredsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:chiseled_sandstone/red").defaultBlockState())
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

        if (sandslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:cut_sandstone/yellow_slab").defaultBlockState())
        }
        if (sandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/yellow").defaultBlockState())
        }
        if (cutsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:cut_sandstone/yellow").defaultBlockState())
        }
        if (smoothsandslabArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/yellow_slab").defaultBlockState())
        }
        if (smoothsandstoneArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/yellow").defaultBlockState())
        }
        if (smoothsandstairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:smooth_sandstone/yellow_stairs").withPropertiesOf(struc.state()))
        }
        if (sandstairsArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/yellow_stairs").withPropertiesOf(struc.state()))
        }
        if (sandstonewallArray.includes(struc.block.id)) {
              palette.add(struc.position, Block.getBlock("tfc:raw_sandstone/yellow_wall").defaultBlockState())
        }
      })
    })
    }
}
