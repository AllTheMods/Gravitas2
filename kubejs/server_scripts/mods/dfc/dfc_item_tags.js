let dfcAddItemTags = (/** @type {TagEvent.Item} */ event) => {
  // Pewter plate tags
  event.add("forge:plates", "dfc:metal/sheet/pewter")
  event.add("forge:plates/pewter", "dfc:metal/sheet/pewter")
  event.add("forge:double_plates", "dfc:metal/double_sheet/pewter")
  event.add("forge:double_plates/pewter", "dfc:metal/double_sheet/pewter")
  
  dfcTileTypes.forEach(type => {
    dfcTileColors.forEach(color => {
      // Skip plain glazed (doesn't exist)
      if (type === 'glazed' && color === 'plain') return

      event.add(`gregitas:ceramic_tile_blocks/${type}`, `dfc:ceramic/tiles/${type}/${color}`)
      event.add(`gregitas:ceramic_tile_slabs/${type}`, `dfc:ceramic/tiles/${type}/${color}_slab`)
      event.add(`gregitas:ceramic_tile_stairs/${type}`, `dfc:ceramic/tiles/${type}/${color}_stairs`)
    })
    // Colored-only tags (no plain) for lye bleach inputs
    dfcColors.forEach(color => {
      event.add(`gregitas:ceramic_tile_blocks_colored/${type}`, `dfc:ceramic/tiles/${type}/${color}`)
      event.add(`gregitas:ceramic_tile_slabs_colored/${type}`, `dfc:ceramic/tiles/${type}/${color}_slab`)
      event.add(`gregitas:ceramic_tile_stairs_colored/${type}`, `dfc:ceramic/tiles/${type}/${color}_stairs`)
    })
  })
  
  // Colored brick tags for dyeing

  event.add('gregitas:colored_brick_blocks', 'minecraft:bricks')
  event.add('gregitas:colored_brick_slabs', 'minecraft:brick_slab')
  event.add('gregitas:colored_brick_stairs', 'minecraft:brick_stairs')
  event.add('gregitas:colored_brick_walls', 'minecraft:brick_wall')

  dfcColors.forEach(color => {
    event.add('gregitas:colored_brick_blocks', `dfc:ceramic/bricks/${color}`)
    event.add('gregitas:colored_brick_slabs', `dfc:ceramic/bricks/${color}_slab`)
    event.add('gregitas:colored_brick_stairs', `dfc:ceramic/bricks/${color}_stairs`)
    event.add('gregitas:colored_brick_walls', `dfc:ceramic/bricks/${color}_wall`)
  })
  // DFC-only colored brick tags (no vanilla bricks) for lye bleach inputs
  dfcColors.forEach(color => {
    event.add('gregitas:dfc_colored_brick_blocks', `dfc:ceramic/bricks/${color}`)
    event.add('gregitas:dfc_colored_brick_slabs', `dfc:ceramic/bricks/${color}_slab`)
    event.add('gregitas:dfc_colored_brick_stairs', `dfc:ceramic/bricks/${color}_stairs`)
    event.add('gregitas:dfc_colored_brick_walls', `dfc:ceramic/bricks/${color}_wall`)
  })

  // Ceramic shingle tags for dyeing

  dfcTileColors.forEach(color => {
    event.add('gregitas:ceramic_shingles', `dfc:ceramic/shingles/${color}`)
  })
  // Colored-only shingle tag (no plain) for lye bleach inputs
  dfcColors.forEach(color => {
    event.add('gregitas:ceramic_shingles_colored', `dfc:ceramic/shingles/${color}`)
  })

  // Terracotta tile tags for dyeing and processing

  const terracottaTileTypes = ['normal', 'small']

  terracottaTileTypes.forEach(type => {
    dfcColors.forEach(color => {
      event.add(`gregitas:terracotta_tile_blocks/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}`)
      event.add(`gregitas:terracotta_tile_slabs/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}_slab`)
      event.add(`gregitas:terracotta_tile_stairs/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}_stairs`)
    })
    // Colored-only tags (no white) for lye bleach inputs
    dfcColors.filter(c => c !== 'white').forEach(color => {
      event.add(`gregitas:terracotta_tile_blocks_colored/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}`)
      event.add(`gregitas:terracotta_tile_slabs_colored/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}_slab`)
      event.add(`gregitas:terracotta_tile_stairs_colored/${type}`, `dfc:ceramic/tiles/${type}/terracotta_${color}_stairs`)
    })
  })

  // Terracotta brick tags for dyeing and processing

  dfcColors.forEach(color => {
    event.add('gregitas:terracotta_brick_blocks', `dfc:ceramic/bricks/terracotta_${color}`)
    event.add('gregitas:terracotta_brick_slabs', `dfc:ceramic/bricks/terracotta_${color}_slab`)
    event.add('gregitas:terracotta_brick_stairs', `dfc:ceramic/bricks/terracotta_${color}_stairs`)
    event.add('gregitas:terracotta_brick_walls', `dfc:ceramic/bricks/terracotta_${color}_wall`)
  })
  // Colored-only tags (no white) for lye bleach inputs
  dfcColors.filter(c => c !== 'white').forEach(color => {
    event.add('gregitas:terracotta_brick_blocks_colored', `dfc:ceramic/bricks/terracotta_${color}`)
    event.add('gregitas:terracotta_brick_slabs_colored', `dfc:ceramic/bricks/terracotta_${color}_slab`)
    event.add('gregitas:terracotta_brick_stairs_colored', `dfc:ceramic/bricks/terracotta_${color}_stairs`)
    event.add('gregitas:terracotta_brick_walls_colored', `dfc:ceramic/bricks/terracotta_${color}_wall`)
  })

  // Terracotta shingle tags for dyeing

  dfcColors.forEach(color => {
    event.add('gregitas:terracotta_shingles', `dfc:ceramic/shingles/terracotta_${color}`)
  })
  // Colored-only tag (no white) for lye bleach inputs
  dfcColors.filter(c => c !== 'white').forEach(color => {
    event.add('gregitas:terracotta_shingles_colored', `dfc:ceramic/shingles/terracotta_${color}`)
  })

  // Plaster block tags for bleaching

  dfcColors.forEach(color => {
    event.add('gregitas:plaster_blocks/smooth', `dfc:plaster/smooth/${color}`)
    event.add('gregitas:plaster_slabs/smooth', `dfc:plaster/smooth/${color}_slab`)
    event.add('gregitas:plaster_stairs/smooth', `dfc:plaster/smooth/${color}_stairs`)
    event.add('gregitas:plaster_blocks/pillar', `dfc:plaster/pillar/${color}`)
  })

  // Concrete blocks tag for dyeing and bleaching
  event.add('forge:concretes', 'dfc:concrete/smooth/plain')
  // Colored-only vanilla concrete tag (no plain) for bleach inputs
  dfcColors.forEach(color => {
    event.add('gregitas:colored_concrete', `minecraft:${color}_concrete`)
  })

  // Leaded glass tags for dyeing and bleaching
  dfcTileColors.forEach(color => {
    event.add('gregitas:leaded_glass_blocks', `dfc:glass/block/leaded/${color}`)
    event.add('gregitas:leaded_glass_panes', `dfc:glass/pane/leaded/${color}`)
  })

  // Glass brick tags for dyeing and bleaching
  dfcTileColors.forEach(color => {
    event.add('gregitas:glass_brick_items', `dfc:glass/brick/${color}`)
    event.add('gregitas:glass_brick_blocks', `dfc:glass/block/bricks/${color}`)
    event.add('gregitas:glass_brick_panes', `dfc:glass/pane/bricks/${color}`)
    event.add('gregitas:glass_brick_tiles', `dfc:glass/block/tiles/${color}`)
    event.add('gregitas:glass_brick_tile_panes', `dfc:glass/pane/tiles/${color}`)
  })
}
