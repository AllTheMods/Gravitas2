const tfcAddItemTags = (/** @type {TagEvent.Item} */ event) => {
  // === ALABASTER TAGS FOR DYEING ===

  // Raw alabaster: base (undyed) block + all 16 colored blocks
  event.add("gregitas:alabaster_raw", "tfc:alabaster/raw")
  dfcColors.forEach(color => {
    event.add("gregitas:alabaster_raw", `tfc:alabaster/raw/${color}`)
  })

  // Alabaster bricks block: base + 16 colored blocks
  // Stairs/slabs/walls only exist as colored variants
  event.add("gregitas:alabaster_bricks_blocks", "tfc:alabaster/bricks")
  dfcColors.forEach(color => {
    event.add("gregitas:alabaster_bricks_blocks", `tfc:alabaster/bricks/${color}`)
    event.add("gregitas:alabaster_bricks_stairs", `tfc:alabaster/bricks/${color}_stairs`)
    event.add("gregitas:alabaster_bricks_slabs", `tfc:alabaster/bricks/${color}_slab`)
    event.add("gregitas:alabaster_bricks_walls", `tfc:alabaster/bricks/${color}_wall`)
  })

  // Polished alabaster block: base + 16 colored blocks
  // Stairs/slabs/walls only exist as colored variants
  event.add("gregitas:alabaster_polished_blocks", "tfc:alabaster/polished")
  dfcColors.forEach(color => {
    event.add("gregitas:alabaster_polished_blocks", `tfc:alabaster/polished/${color}`)
    event.add("gregitas:alabaster_polished_stairs", `tfc:alabaster/polished/${color}_stairs`)
    event.add("gregitas:alabaster_polished_slabs", `tfc:alabaster/polished/${color}_slab`)
    event.add("gregitas:alabaster_polished_walls", `tfc:alabaster/polished/${color}_wall`)
  })
}
