let coilingTweak = (/** @type {Internal.RecipesEventJS} */ event) => {

    // Remove coiling machine wheel (snowflake item, only used in a single recipe)
    // Replace iron with wrought iron to make the coiling machine more accessible early game, same as Create press
    event.remove({ id: 'vintage:craft/spring_coiling_machine_wheel' })
    event.replaceInput({ id: 'vintage:craft/spring_coiling_machine' }, 'vintage:spring_coiling_machine_wheel', '#forge:double_ingots/wrought_iron')
    event.replaceInput({ id: 'vintage:craft/spring_coiling_machine' }, 'minecraft:iron_ingot', '#forge:ingots/wrought_iron')
    
    // Replace use of Vintage Improvements iron springs with a Forge tag (the tag points to a Gregtech iron spring)
    event.replaceInput({ mod: 'vintage' }, 'vintage:iron_spring', '#forge:springs/iron')
    
    // Remove crafting of all Vintage Improvements springs
    event.remove({ mod: 'vintage', id: /^vintage:coiling.*/})
    
    
    // Add crafting of every Gregtech spring to Vintage Improvements spring coiling machine
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:bender', id: /^gtceu:bender\/bend_.*_rod_to(_small)?_spring/ }, (recipe) => {
        // UGLY HACKS are used here to wrangle Gregtech recipes
        let recipe_json = JSON.parse(recipe.json)

        let input = recipe_json.inputs.item.filter((i) => i.content.type == "gtceu:sized")[0].content
        let output = recipe_json.outputs.item.filter((i) => i.content.type == "gtceu:sized")[0].content
           
        event.custom({
            type: 'vintage:coiling',
            ingredients: [input.ingredient],
            results: [{
                    item: output.ingredient.item,
                    count: output.count
            }],
            processingTime: recipe_json.duration / 2
        })
    
    })

}