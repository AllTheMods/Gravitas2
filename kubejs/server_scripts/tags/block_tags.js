const addBlockTags = (/** @type {TagEvent.Block} */ event) => {
  tfcStone.forEach((stone) => {
    event.add('tfc:not_solid_supporting', [`tfc:rock/cobble/${stone}_slab`])
    event.add('tfc:can_collapse', [`tfc:rock/cobble/${stone}_slab`])
  })
}
