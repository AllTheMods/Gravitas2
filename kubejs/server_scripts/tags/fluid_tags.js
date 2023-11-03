const addFluidTags = (/** @type {TagEvent.Fluid} */ event) => {
    event.add('tfc:usable_in_barrel', ['gtceu:creosote'])
    event.add('tfc:usable_in_tool_head_mold', [
            'gtceu:aluminium',
            'gtceu:titanium',
            'gtceu:invar',
            'tfc:metal/sterling_silver',
            'tfc:metal/rose_gold',
            'firmalife:metal/stainless_steel',
            'gtceu:damascus_steel',
            'gtceu:cobalt_brass'
        ]
    )
}