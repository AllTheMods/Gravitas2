let pressurizedBasinAdd = (/** @type {Internal.RecipesEventJS} */ event) => {

    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:autoclave'}, (recipe) => {
        // UGLY HACKS are used here to wrangle Gregtech recipes
        let recipe_json = JSON.parse(recipe.json)
        
        // Exclude all recipes that need more than MV
        let eu_cost = recipe_json.tickInputs.eu[0].content
        if (eu_cost > 128) {
            return
        }
        
        let recipe_ingredients = []
        for (let i = 0; i < recipe_json.inputs.item.length; i++) {
            let input = recipe_json.inputs.item[i]
            let new_input = input.content.ingredient
            for (let j = 0; j < input.content.count; j++)
                recipe_ingredients.push(new_input)
        }
        
        for (let i = 0; i < recipe_json.inputs.fluid.length; i++) {
            let input = recipe_json.inputs.fluid[i]
            let new_input = {
                amount: input.content.amount
            }
            if (input.content.value[0].type)
                new_input.fluid = input.content.value[0].type
            if (input.content.value[0].tag)
                new_input.fluidTag = input.content.value[0].tag
            recipe_ingredients.push(new_input)
        }
        
        let recipe_results = []
        for (let i = 0; i < recipe_json.outputs.item.length; i++) {
            let output = recipe_json.outputs.item[i]
            let new_output = output.content.ingredient
            
            if (output.chance && output.chance != 10000)
                new_output.chance = output.chance / 10000
            
            if (output.content.count && output.content.count > 1)
                new_output.count = output.content.count
            
            recipe_results.push(new_output)
        }
        
        // LV requires a heated basin, MV requires a superheated one
        let heat = eu_cost <= 32 ? "heated" : "superheated"
        
        event.custom({
            type: "createdieselgenerators:basin_fermenting",
            ingredients: recipe_ingredients,
            results: recipe_results,
            heatRequirement: heat,
            processingTime: recipe_json.duration
        })
    })
}