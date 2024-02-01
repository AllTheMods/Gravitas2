let addGenericData = (/** @type {Internal.DataPackEventJS} */ event) => {
    let addTFCDrinkables = (id, item, thirst, hunger, saturation) => {
        let json = JsonIO.toObject(
            {
                "ingredient": [
                    item
                ],
                "thirst": thirst,
                "food": {
                    "hunger": hunger,
                    "saturation": saturation
                }
            }
        )

        event.addJson(`tfc:tfc/drinkables/${id}.json`, json)
    }

    addTFCDrinkables('maple_syrup', 'gregitas:maple_syrup', 10, 10, 10)

    let addTFCFoodItems = (id, item, hunger, saturation, water, decay, grain, fruit, veg, protein, dairy) => {
        let json = JsonIO.toObject(
            {
                "ingredient": {
                    "item": item
                },
                "hunger": hunger,
                "saturation": saturation,
                "water": water,
                "decay_modifier": decay,
                "grain": grain,
                "fruit": fruit,
                "vegetables": veg,
                "protein": protein,
                "dairy": dairy
            } 
        )

        event.addJson(`tfc:tfc/food_items/${id}.json`, json)
    }

    addTFCFoodItems('chocolate_glazed_berries', 'create:chocolate_glazed_berries', 4, 2, 5, 2.5, 0, 1, 0, 0, 1)
    addTFCFoodItems('honey_cake_slice', 'kubejs:honey_cake_slice', 4, 2.5, 0, 0.7, 1, 2, 0, 0, 0)
    addTFCFoodItems('honeyed_apple', 'create:honeyed_apple', 4, 2.5, 0, 0.7, 0, 2, 0, 0, 0)
    addTFCFoodItems('sweet_roll', 'create:sweet_roll', 4, 3.5, 0, 1.7, 2, 0, 0, 0, 1)

    let addTFCFuels = (id, fuel, duration, temp) => {
        let json = JsonIO.toObject(
            {
                "ingredient": [
                    {
                        "item": fuel
                    }
                ],
                "duration": duration,
                "temperature": temp
            }
        )

        event.addJson(`tfc:tfc/fuels/${id}.json`, json)
    }

    addTFCFuels('coal_coke', 'gtceu:coke_gem', 1100, 1415)
    addTFCFuels('coal_coke_block', 'gtceu:coke_block', 9900, 1415)
    addTFCFuels('coal_coke_chipped', 'gtceu:chipped_coke_gem', 275, 1415)
    addTFCFuels('coal_coke_flawed', 'gtceu:flawed_coke_gem', 550, 1415)
    addTFCFuels('coal_coke_flawless', 'gtceu:flawless_coke_gem', 2200, 1415)
    addTFCFuels('coal_coke_exquisite', 'gtceu:exquisite_coke_gem', 4400, 1415)

    let addTFCItemDamageResistances = (id, item, piercing, slashing, crushing) => {
        let json = JsonIO.toObject(
            {
                "ingredients": [
                    {
                        "item": item
                    }
                ],
                "piercing": piercing,
                "slashing": slashing,
                "crushing": crushing
            }
        )

        event.addJson(`tfc:tfc/item_damage_resistances/${id}.json`, json)
    }

    addTFCItemDamageResistances('create_diving_helmet', 'create:diving_helmet', 2, 2, 2)
    addTFCItemDamageResistances('create_diving_boots', 'create:diving_boots', 2, 2, 2)
    addTFCItemDamageResistances('create_copper_backtank', 'create:copper_backtank', 2, 2, 2)

    addTFCItemDamageResistances('ie_faraday_head', 'immersiveengineering:armor_faraday_head', 5, 3, 5)
    addTFCItemDamageResistances('ie_faraday_chest', 'immersiveengineering:armor_faraday_chest', 5, 3, 5)
    addTFCItemDamageResistances('ie_faraday_legs', 'immersiveengineering:armor_faraday_legs', 5, 3, 5)
    addTFCItemDamageResistances('ie_faraday_feet', 'immersiveengineering:armor_faraday_feet', 5, 3, 5)

    addTFCItemDamageResistances('ie_steel_head', 'immersiveengineering:armor_steel_head', 7, 4, 6)
    addTFCItemDamageResistances('ie_steel_chest', 'immersiveengineering:armor_steel_chest', 7, 4, 6)
    addTFCItemDamageResistances('ie_steel_legs', 'immersiveengineering:armor_steel_legs', 7, 4, 6)
    addTFCItemDamageResistances('ie_steel_feet', 'immersiveengineering:armor_steel_feet', 7, 4, 6)

    let addTFCItemHeatsItem = (id, item, heat, forge, weld) => {
        let json = JsonIO.toObject(
            {
                "ingredient": {
                    "item": item,
                },
                "heat_capacity": heat,
                "forging_temperature": forge,
                "welding_temperature": weld
            }
        )

        event.addJson(`tfc:tfc/item_heats/${id}.json`, json)
    }

    addTFCItemHeatsItem('andesite_alloy', 'create:andesite_alloy', 4.762, 252, 336)
    addTFCItemHeatsItem('compressed_coke_clay', 'gtceu:compressed_coke_clay', 1.0, 1.0, 1.0)
    addTFCItemHeatsItem('igneous_alloy_dust', 'gregitas_core:igneous_alloy_dust', 4.762, 4.762, 4.762)

    let addTFCKnappingTypes = (id, tag, count, sound, consume_after, disabled_texture, particles, icon_item) => {
        let json = JsonIO.toObject(
            {
                "input": {
                    "ingredient": {
                        "tag": tag
                    },
                    "count": count
                },
                "click_sound": sound,
                "consume_after_complete": consume_after,
                "use_disabled_texture": disabled_texture,
                "spawns_particles": particles,
                "jei_icon_item": {
                    "item": icon_item
                }
            }
        )

        event.addJson(`tfc:tfc/knapping_types/${id}.json`, json)
    }

    addTFCKnappingTypes('flint', 'tfc:flint_knapping', 1, 'tfc:item.knapping.stone', false, false, false, 'minecraft:flint')
    addTFCKnappingTypes('rubber', 'tfc:rubber_knapping', 3, 'tfc:item.knapping.leather', false, false, false, 'gtceu:rubber_plate')

    let addTFCLampFuels = (id, fuel, duration) => {
        let json = JsonIO.toObject(
            {
                "fluid": fuel,
                "burn_rate": duration,
                "valid_lamps": {
                    "type": "tfc:tag",
                    "tag": "tfc:lamps"
                }
            }
        )

        event.addJson(`tfc:tfc/lamp_fuels/${id}.json`, json)
    }

    addTFCLampFuels('creosote', 'gtceu:creosote', 4000)

    let addTFCMetals = (id, tier, fluid, meltTemp, heatCapacity, item) => {
        let json = JsonIO.toObject(
            {
                "tier": tier,
                "fluid": fluid,
                "melt_temperature": meltTemp,
                "specific_heat_capacity": heatCapacity,
                "ingots": {
                  "item": item
                }
            }
        )

        event.addJson(`tfc:tfc/metals/${id}.json`, json)
    }

    addTFCMetals('igneous_alloy', 1, 'gregitas_core:igneous_alloy', 420, 0.01429, 'create:andesite_alloy')
}
