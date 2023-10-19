// priority 10

// globals at constants_startup

const OVERLAY_MAP = {
  diamond: "gtceu:block/material_sets/diamond/ore",
  flint: "gtceu:block/material_sets/flint/ore",
  metallic: "gtceu:block/material_sets/dull/ore", // fallbacks to dull
  dull: "gtceu:block/material_sets/dull/ore",
  emerald: "gtceu:block/material_sets/diamond/ore", // fallbacks to diamond
  shiny: "gtceu:block/material_sets/dull/ore", // fallbacks to metallic -> dull
  sand: "gtceu:block/material_sets/fine/ore", // fallbacks to fine
  ruby: "gtceu:block/material_sets/diamond/ore", // fallbacks to emerald -> diamond
  opal: "gtceu:block/material_sets/diamond/ore", // fallbacks to ruby -> emerald -> diamond
  lapis: "gtceu:block/material_sets/lapis/ore",
  fine: "gtceu:block/material_sets/fine/ore",
  rough: "gtceu:block/material_sets/rough/ore",
  gem_vertical: "gtceu:block/material_sets/diamond/ore", // fallbacks to emerald -> diamond
  gem_horizontal: "gtceu:block/material_sets/diamond/ore" // fallbacks to emerald -> diamond
}

const registerGTCOres = (/** @type {Registry.Block} */ event) => {
  const blocks = Object.keys(global.gregOreBlockProps)
  blocks.forEach((block) => {
    global.tfcStone.forEach((stone) => {
      const ore = event
        .create(`gregitas:ore/${block}/${stone}`, "basic")
        .defaultCutout()
        .noDrops()
        .requiresTool()
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("tfc:rock/ores")
        .tagBlock("forge:ores")
        .tagBlock(`forge:ores/${block}`)
        .tagBlock("minecraft:needs_iron_tool")
        .tagBlock("tfc:can_collapse")
        .tagBlock("tfc:can_start_collapse")
        .tagBlock("tfc:can_trigger_collapse")
        .tagBlock("tfc:monster_spawn_on")
        .tagBlock("tfc:prospectable")
        .mapColor(global.gregOreBlockProps[block].color)
        .stoneSoundType()
        .color(1, global.gregOreBlockProps[block].color)
        .item((ib) => ib.color(1, global.gregOreBlockProps[block].color))
      ore.modelJson = {
        parent: "tfc:block/ore",
        textures: {
          all: `tfc:block/rock/raw/${stone}`,
          particle: `tfc:block/rock/raw/${stone}`,
          overlay: OVERLAY_MAP[global.gregOreBlockProps[block].overlay]
        }
      }
      ore.lootTable = (loot) => {
        loot.type = "minecraft:block"
        loot.customId = Utils.id(`gregitas:ore/${block}/${stone}`)
        loot.addPool((pool) => {
          pool.survivesExplosion()
          pool.addEntry({
            type: "minecraft:item",
            name: `gtceu:raw_${block}`,
            functions: [
              {
                function: "minecraft:apply_bonus",
                enchantment: "minecraft:fortune",
                formula: "minecraft:ore_drops"
              },
              {
                function: "minecraft:explosion_decay"
              }
            ]
          })
        })
      }
    })
  })
}
