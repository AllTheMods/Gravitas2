// priority 10

const dfcRecipesRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Remove redundant DFC metal recipes
  dfcMetals.forEach((metal) => {
    event.remove({ id: `dfc:welding/${metal}_double_ingot` })
    event.remove({ id: `dfc:anvil/${metal}_sheet` })
    event.remove({ id: `dfc:welding/${metal}_double_sheet` })
    event.remove({ id: `dfc:anvil/${metal}_rod` })
    event.remove({ id: `dfc:heating/metal/${metal}/ingot` })
    event.remove({ id: `dfc:heating/metal/${metal}/double_ingot` })
    event.remove({ id: `dfc:heating/metal/${metal}/sheet` })
    event.remove({ id: `dfc:heating/metal/${metal}/double_sheet` })
    event.remove({ id: `dfc:heating/metal/${metal}/rod` })
    event.remove({ id: `dfc:heating/metal/${metal}/powder` })
  })
  event.remove({ id: `dfc:heating/metal/pewter/powder` })

  tfcOreTypes.forEach((type) => {
    dfcOresToRemove.forEach((ore) => {
      event.remove({ id: `dfc:heating/ore/${type}_${ore}`})
    })
  })
  // DFC - remove all recipes outputting DFC powders
  dfcAllMetals.forEach((metal) => {
    event.remove({ output: `dfc:metal/powder/${metal}` })
  })

  event.remove('dfc:blast_furnace/aluminum')

  // Remove DFC gypsum powder recipes
  event.remove({ id: 'dfc:quern/gypsum_powder' })
  event.remove({ output: 'dfc:powder/gypsum' })
  event.remove({ id: 'dfc:barrel/plaster' })

  // Remove DFC concrete barrel recipes (will remake with plain-only inputs)
  const concreteVariants = ['smooth', 'bricks', 'slab']
  concreteVariants.forEach(variant => {
    dfcColors.forEach(color => {
      event.remove({ id: `dfc:barrel/concrete/${variant}/${color}` })
    })
    event.remove({ id: `dfc:barrel/concrete/${variant}/bleach` })
  })

  // Remove default GT concrete bleaching recipe (will remake with plain concrete output)
  event.remove({ id: 'gtceu:chemical_bath/decolor_concrete' })

  // Remove default glazed tile crafting replace by furnace recipe to fit
  // with glazed terracotta
  dfcColors.forEach(color => {
    event.remove({ id: `dfc:crafting/ceramic/tiles/glazed/${color}` })
  })

  // Remove DFC glass pane crafting recipes (prefer cutter/saw recipes)
  const glassTypes = ['bricks', 'tiles']
  glassTypes.forEach(type => {
    dfcTileColors.concat('foggy').forEach(color => {
      event.remove({ id: `dfc:crafting/glass/panes/${type}/${color}` })
    })
  })

  // Remove DFC glass brick and tile block recipes (will remake with more output)
  event.remove({ output: 'dfc:glass/block/bricks/plain' })
  event.remove({ output: 'dfc:glass/block/tiles/plain' })
  event.remove({ output: 'dfc:glass/block/bricks/foggy' })
  event.remove({ output: 'dfc:glass/block/tiles/foggy' })

  // Remove DFC pewter alloy recipe (will remake with correct metal ids)
  event.remove({ id: 'dfc:alloy/pewter' })
}
