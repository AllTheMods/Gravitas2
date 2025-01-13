let replaceDisc = (/** @type {Internal.RecipesEventJS} */ event) => {
    function replaceDiscRecipe(input,output) {
        event.remove({ output: output, mod: 'scguns' })
        event.custom({
            type: "scguns:mechanical_pressing",
            processingTime: 400,
            ingredients: [
            {
                "item": "gtceu:polyvinyl_chloride_plate"
            },
            {
                "item": "minecraft:charcoal"
            },
            {
                "item": input
            }
        
            ],
            mold: {
            "item": "scguns:disc_mold"
            },
            result: {
            "item": output,
            "count": 1
            }
        })
        event.custom({
            type: "scguns:powered_mechanical_pressing",
            processingTime: 200,
            energyUse: 500,
            ingredients: [
                {
                    "item": "gtceu:polyvinyl_chloride_plate"
                },
                {
                    "item": "minecraft:charcoal"
                },
                {
                    "item": input
                }

            ],
            mold: {
                "item": "scguns:disc_mold"
            },
            result: {
                "item": output,
                "count": 1
            }
        })
    }
    
    replaceDiscRecipe('minecraft:blackstone','minecraft:music_disc_11')
    replaceDiscRecipe('minecraft:gold_ingot','minecraft:music_disc_13')
    replaceDiscRecipe('scguns:peal','minecraft:music_disc_5')
    replaceDiscRecipe('minecraft:redstone','minecraft:music_disc_blocks')
    replaceDiscRecipe('minecraft:string','minecraft:music_disc_cat')
    replaceDiscRecipe('minecraft:feather','minecraft:music_disc_chirp')
    replaceDiscRecipe('minecraft:ender_pearl','minecraft:music_disc_far')
    replaceDiscRecipe('minecraft:emerald','minecraft:music_disc_mall')
    replaceDiscRecipe('scguns:vehement_coal','scguns:music_disc_mass_destruction')
    replaceDiscRecipe('scguns:anthralite_ingot','scguns:music_disc_mass_production')
    replaceDiscRecipe('minecraft:note_block','minecraft:music_disc_mellohi')
    replaceDiscRecipe('minecraft:prismarine_shard','minecraft:music_disc_otherside')
    replaceDiscRecipe('minecraft:porkchop','minecraft:music_disc_pigstep')
    replaceDiscRecipe('scguns:netherite_scrap_chunk','minecraft:music_disc_relic')
    replaceDiscRecipe('minecraft:coal','minecraft:music_disc_stal')
    replaceDiscRecipe('minecraft:tropical_fish','minecraft:music_disc_strad')
    replaceDiscRecipe('minecraft:clock','minecraft:music_disc_wait')
    replaceDiscRecipe('minecraft:nether_wart','minecraft:music_disc_ward')    
}