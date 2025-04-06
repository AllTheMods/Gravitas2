let centrifugeAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
    // Remove this one recipe to avoid duplication - it will be replaced by a Gregtech copy
    event.remove({ mod: 'vintageimprovements', id: 'vintageimprovements:centrifugation/magma_cream'})
    
    // This centrifuge doesn't support input count, so we have to repeat the input item N times instead
    // Recipes with 9+ inputs already look bad in JEI
    // Ones with 18+ inputs are completely unreadable
    const maxInputCount = 18
    
    // Progression-relevant recipes that we don't want to make available too early
    const id_blacklist = ['gtceu:centrifuge/rubber_log_separation', 'gtceu:centrifuge/sticky_resin_separation']
    
    // Vintage Improvements centrifuge has no lid - all gas outputs will be lost
    const gas_blacklist = ['gtceu:methane', 'gtceu:oxygen', 'gtceu:hydrogen', 'gtceu:lpg', 'gtceu:helium']
    
    // Import some Gregtech centrifuging recipes to Vintage Improvements centrifuge
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:centrifuge'}, (recipe) => {
        // UGLY HACKS are used here to wrangle Gregtech recipes
        let recipe_json = JSON.parse(recipe.json)
        
        // Exclude all recipes that need more than LV
        let eu_cost = recipe_json.tickInputs.eu[0].content
        if (eu_cost > 32) {
            return
        }
        
        // Exclude blacklisted recipes
        if (id_blacklist.includes(String(recipe.id))) {
            return
        }
        
        // Exclude all recipes that take fluids, or take more than 1 item type
        if (!recipe_json.inputs.item || recipe_json.inputs.item.length != 1) {
            return
        }
        
        // Exclude all recipes that input more than 18 items
        let original_input_item = recipe_json.inputs.item[0]
        if (original_input_item.content.count > maxInputCount) {
            return
        }
        
        let original_output_items = recipe_json.outputs.item ? recipe_json.outputs.item : []
        let original_output_fluids = recipe_json.outputs.fluid ? recipe_json.outputs.fluid : []
        
        // Remove all gas outputs
        original_output_fluids = original_output_fluids.filter((f) => !gas_blacklist.includes(f.content.value[0].fluid))
        
        // Exclude recipes that have no output remaining after gases are removed
        if (!original_output_items.length && !original_output_fluids.length) {
            return
        }
                
        // This recipe type doesn't support item ingridient amount - just repeat the ingridient enough times
        let ingredients = []
        for (let i = 0; i < original_input_item.content.count; i++) {
            ingredients.push(original_input_item.content.ingredient)
        }
        
        // Add output items and fluids to results
        let results = []
        for (let i = 0; i < original_output_items.length; i++) {
            let output = original_output_items[i] 
            results.push({
                item: output.content.ingredient.item,
                count: output.content.count,
                chance: output.chance / 10000
            })
        }
        
        for (let i = 0; i < original_output_fluids.length; i++) {
            let output = original_output_fluids[i]
            results.push({
                fluid: output.content.value[0].fluid, 
                amount: output.content.amount,
                chance: output.chance / 10000
            })
        }
        
        // Runs fast, but needs to be stopped for loading and unloading - clunky to use
        let duration = recipe_json.duration / 2
        
        // 64 RPM (128 SU) for ULV, 128 RPM (256 SU) for LV
        let rpm = eu_cost > 8 ? 128 : 64
        
        event.custom({
            type: 'vintageimprovements:centrifugation',
            ingredients: ingredients,
            results: results,
            processingTime: duration,
            minimalRPM: rpm
        })
    })
}