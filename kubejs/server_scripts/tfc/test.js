ServerEvents.recipes(event => {
   /*event.remove({
            type: 'gtceu:alloy_smelter',
            output: 'gtceu:glass_tube'
        }),*/
    event.custom({
            type: "tfc:glassworking",
            "operations": ["blow", "blow", "roll", "pinch", "saw"
            ],
            "batch": {
                "item": "tfc:silica_glass_batch"
            },
            "result": {
                "item": "gtceu:glass_tube"
            }
        })
})