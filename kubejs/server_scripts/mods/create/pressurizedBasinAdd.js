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
            let new_output = Item.of(output.content.ingredient, output.content.count)
            
            if (output.chance && output.chance != 10000)
                new_output = new_output.withChance(output.chance / 10000)
            
            recipe_results.push(new_output)
        }
        
        // LV requires a heated basin, MV requires a superheated one
        let heat = eu_cost <= 32 ? "heated" : "superheated"
        
        event.recipes.createdieselgenerators.basin_fermenting(recipe_results, recipe_ingredients)
            .heatRequirement(heat)
            .processingTime(recipe_json.duration)
    })
}