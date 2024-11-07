const addFluidTags = (/** @type {TagEvent.Fluid} */ event) => {
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
        'gregitas:raw_resin',
        'gtceu:creosote',
        'gtceu:rubber'
    ]
    )
    event.add('tfc:usable_in_barrel', [
        'gregitas:raw_syrup',
        'gregitas:maple_syrup',
        'gregitas:raw_resin',
        'gtceu:creosote'
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
   event.add('tfc:usable_in_ingot_mold',
        [
            'gtceu:tin',
            'gtceu:silver',
            'gtceu:gold',
            'gtceu:copper',
            'gtceu:nickel',
            'gtceu:bismuth',
            'gtceu:rubber',
            'gregitas_core:igneous_alloy',
        ]
    )
    gtceuIngots1.forEach(id => {
        event.add('tfc:usable_in_ingot_mold', `gtceu:${id}`)
    })

    event.add('forge:salt_water', 'tfc:salt_water')
    
    tfcMetalFluids.forEach(fluid => {
        event.add(`forge:${fluid}`, `tfc:metal/${fluid}`)
    })

    event.add('create:bottomless/allow', 'tfc:salt_water')
    event.add('create:bottomless/allow', 'tfc:river_water')

    event.add("forge:water", "tfc:river_water")
    event.add('gregitas:water', "minecraft:water")

    event.add('forge:crude_oil', 'gtceu:oil_medium')
    event.add('forge:diesel', 'gtceu:diesel')
    event.add('forge:bio_diesel', 'gtceu:bio_diesel')
}
