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
    event.add('tfc:usable_in_wooden_bucket', [
        'kubejs:raw_syrup',
        'kubejs:maple_syrup',
        'kubejs:raw_resin'
    ]
    )
    event.add('tfc:usable_in_barrel', [
        'kubejs:raw_syrup',
        'kubejs:maple_syrup',
        'kubejs:raw_resin'
   ]
   )
    event.add('tfc:usable_in_pot', [
        'kubejs:raw_syrup',
        'kubejs:maple_syrup',
        'kubejs:raw_resin'
   ]
   )
   event.add('tfc:usable_in_jug', [
       'kubejs:maple_syrup'
   ]
   )
}