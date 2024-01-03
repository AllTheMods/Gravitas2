
ServerEvents.tags('item', event => {
    event.remove('forge:ingots/stainless_steel', 'firmalife:metal/ingot/stainless_steel')
    event.remove('forge:double_ingots/stainless_steel', 'firmalife:metal/double_ingot/stainless_steel')
    event.remove('forge:sheets/stainless_steel', 'firmalife:metal/sheet/stainless_steel')
    event.remove('forge:double_sheets/stainless_steel', 'firmalife:metal/double_sheet/stainless_steel')
    event.remove('forge:rods/stainless_steel', 'firmalife:metal/rod/stainless_steel')
    event.remove('tfc:metal_item/stainless_steel', 'firmalife:metal/ingot/stainless_steel')
    event.remove('tfc:metal_item/stainless_steel', 'firmalife:metal/double_ingot/stainless_steel')
    event.remove('tfc:metal_item/stainless_steel', 'firmalife:metal/sheet/stainless_steel')
    event.remove('tfc:metal_item/stainless_steel', 'firmalife:metal/double_sheet/stainless_steel')
    event.remove('tfc:metal_item/stainless_steel', 'firmalife:metal/rod/stainless_steel')
    event.add('forge:ingots/chrome', 'firmalife:metal/ingot/stainless_steel')
    event.add('forge:double_ingots/chrome', 'firmalife:metal/double_ingot/stainless_steel')
    event.add('forge:sheet/chrome', 'firmalife:metal/sheet/stainless_steel')
    event.add('forge:double_sheets/chrome', 'firmalife:metal/double_sheet/stainless_steel')
    event.add('forge:rods/chrome', 'firmalife:metal/rod/stainless_steel')
    event.add('forge:treated_lumber', 'gregitas:creosote_treated_lumber')
    event.add('forge:treated_lumber', 'firmalife:treated_lumber')
})

ServerEvents.recipes(event => {
    event.custom(
        {
            type: 'tfc:anvil',
            input: {
                item:'firmalife:metal/ingot/stainless_steel'
            },
            result: {
                item: ('2x firmalife:metal/rod/stainless_steel')
            },
            tier: 3,
            rules: [
                'hit_last',
                'hit_second_last',
                'punch_not_last'
            ]
        }
    ),
    event.shaped('firmalife:vat', [
        '   ',
        'S S',
        'WSW'
      ], {
        S: 'firmalife:metal/sheet/stainless_steel',
        W: 'firmalife:beeswax'
      })
      event.shaped('firmalife:jarring_station', [
        '   ',
        'S S',
        'TTT'
      ], {
        S: 'firmalife:metal/sheet/stainless_steel',
        T: '#forge:treated_lumber'
      })
      event.custom(
        {
            type: 'tfc:heating',
            ingredient: {
                tag: 'forge:ingots/chrome'
            },
            result_fluid: {
                fluid: 'firmalife:metal/stainless_steel',
                amount: 144.0
            },
            temperature: 1400
        }
    )
    })
