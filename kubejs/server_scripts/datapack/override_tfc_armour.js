let overrideTFCArmourFinalWeld = (/** @type {Internal.DataPackEventJS} */ event) => {
    let addTFCWeldingRecipe = (inputA, inputB, tierAnvil, result, path) => {
        let json = JsonIO.toObject({
          type: "tfc:welding",
          first_input: { item: inputA },
          second_input: { item: inputB },
          tier: tierAnvil,
          result: { item: result }
        })
        event.addJson(`tfc:recipes/welding/${path}.json`, json)
    }

    //Bismuth Bronze
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/bismuth_bronze', 'gtceu:bismuth_bronze_plate', 1, 'tfc:metal/helmet/bismuth_bronze', 'bismuth_bronze_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/bismuth_bronze', 'gtceu:bismuth_bronze_plate', 1, 'tfc:metal/chestplate/bismuth_bronze', 'bismuth_bronze_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/bismuth_bronze', 'gtceu:bismuth_bronze_plate', 1, 'tfc:metal/greaves/bismuth_bronze', 'bismuth_bronze_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/bismuth_bronze', 'gtceu:bismuth_bronze_plate', 1, 'tfc:metal/boots/bismuth_bronze', 'bismuth_bronze_boots')
    //Black Bronze
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/black_bronze', 'gtceu:black_bronze_plate', 1, 'tfc:metal/helmet/black_bronze', 'black_bronze_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/black_bronze', 'gtceu:black_bronze_plate', 1, 'tfc:metal/chestplate/black_bronze', 'black_bronze_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/black_bronze', 'gtceu:black_bronze_plate', 1, 'tfc:metal/greaves/black_bronze', 'black_bronze_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/black_bronze', 'gtceu:black_bronze_plate', 1, 'tfc:metal/boots/black_bronze', 'black_bronze_boots')
    //Bronze
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/bronze', 'gtceu:bronze_plate', 1, 'tfc:metal/helmet/bronze', 'bronze_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/bronze', 'gtceu:bronze_plate', 1, 'tfc:metal/chestplate/bronze', 'bronze_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/bronze', 'gtceu:bronze_plate', 1, 'tfc:metal/greaves/bronze', 'bronze_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/bronze', 'gtceu:bronze_plate', 1, 'tfc:metal/boots/bronze', 'bronze_boots')
    //Copper
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/copper', 'gtceu:copper_plate', 0, 'tfc:metal/helmet/copper', 'copper_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/copper', 'gtceu:copper_plate', 0, 'tfc:metal/chestplate/copper', 'copper_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/copper', 'gtceu:copper_plate', 0, 'tfc:metal/greaves/copper', 'copper_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/copper', 'gtceu:copper_plate', 0, 'tfc:metal/boots/copper', 'copper_boots')
    //Wrought Iron
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/wrought_iron', 'gtceu:wrought_iron_plate', 2, 'tfc:metal/helmet/wrought_iron', 'wrought_iron_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/wrought_iron', 'gtceu:wrought_iron_plate', 2, 'tfc:metal/chestplate/wrought_iron', 'wrought_iron_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/wrought_iron', 'gtceu:wrought_iron_plate', 2, 'tfc:metal/greaves/wrought_iron', 'wrought_iron_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/wrought_iron', 'gtceu:wrought_iron_plate', 2, 'tfc:metal/boots/wrought_iron', 'wrought_iron_boots')
    //Steel
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/steel', 'gtceu:steel_plate', 3, 'tfc:metal/helmet/steel', 'steel_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/steel', 'gtceu:steel_plate', 3, 'tfc:metal/chestplate/steel', 'steel_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/steel', 'gtceu:steel_plate', 3, 'tfc:metal/greaves/steel', 'steel_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/steel', 'gtceu:steel_plate', 3, 'tfc:metal/boots/steel', 'steel_boots')
    //Black Steel
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/black_steel', 'gtceu:black_steel_plate', 4, 'tfc:metal/helmet/black_steel', 'black_steel_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/black_steel', 'gtceu:black_steel_plate', 4, 'tfc:metal/chestplate/black_steel', 'black_steel_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/black_steel', 'gtceu:black_steel_plate', 4, 'tfc:metal/greaves/black_steel', 'black_steel_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/black_steel', 'gtceu:black_steel_plate', 4, 'tfc:metal/boots/black_steel', 'black_steel_boots')
    //Blue Steel
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/blue_steel', 'gtceu:blue_steel_plate', 5, 'tfc:metal/helmet/blue_steel', 'blue_steel_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/blue_steel', 'gtceu:blue_steel_plate', 5, 'tfc:metal/chestplate/blue_steel', 'blue_steel_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/blue_steel', 'gtceu:blue_steel_plate', 5, 'tfc:metal/greaves/blue_steel', 'blue_steel_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/blue_steel', 'gtceu:blue_steel_plate', 5, 'tfc:metal/boots/blue_steel', 'blue_steel_boots')
    //Red Steel
        addTFCWeldingRecipe('tfc:metal/unfinished_helmet/red_steel', 'gtceu:red_steel_plate', 5, 'tfc:metal/helmet/red_steel', 'red_steel_helmet')
        addTFCWeldingRecipe('tfc:metal/unfinished_chestplate/red_steel', 'gtceu:red_steel_plate', 5, 'tfc:metal/chestplate/red_steel', 'red_steel_chestplate')
        addTFCWeldingRecipe('tfc:metal/unfinished_greaves/red_steel', 'gtceu:red_steel_plate', 5, 'tfc:metal/greaves/red_steel', 'red_steel_greaves')
        addTFCWeldingRecipe('tfc:metal/unfinished_boots/red_steel', 'gtceu:red_steel_plate', 5, 'tfc:metal/boots/red_steel', 'red_steel_boots')
}