// priority 10

const addItems = (/** @type {Internal.AddJEIEventJS}*/ event) => {
    event.add("framedblocks:framed_double_slab")
    event.add("framedblocks:framed_double_panel")
}

const addItemTooltips = (/** @type {Internal.ItemTooltipEventJS} */ event) => {
    event.add("framedblocks:framed_double_slab", Text.gray("Needed for use with the Schematicannon. Otherwise, just combine slabs in-world."))
    event.add("framedblocks:framed_double_panel", Text.gray("Needed for use with the Schematicannon. Otherwise, just combine panels in-world."))
}