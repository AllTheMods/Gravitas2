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
        'gregitas:raw_syrup',
        'gregitas:maple_syrup',
        'gregitas:raw_resin'
    ]
    )
    event.add('tfc:usable_in_barrel', [
        'gregitas:raw_syrup',
        'gregitas:maple_syrup',
        'gregitas:raw_resin'
   ]
   )
    event.add('tfc:usable_in_pot', [
        'gregitas:raw_syrup',
        'gregitas:maple_syrup',
        'gregitas:raw_resin'
   ]
   )
   event.add('tfc:usable_in_jug', [
       'gregitas:maple_syrup'
   ]
   )
}