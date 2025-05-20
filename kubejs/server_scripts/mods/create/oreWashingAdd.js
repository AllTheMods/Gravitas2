let oreWashingAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
	const enable_chance_byproducts = false
	
	// Import Gregtech crushed ore washing recipes	
	event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:ore_washer', id: /^gtceu:ore_washer\/wash_.*_crushed_ore_to_purified_ore$/}, (recipe) => {
		// UGLY HACKS are used here to wrangle Gregtech recipes
		let recipe_json = JSON.parse(recipe.json)
		
		let input_fluid = recipe_json.inputs.fluid[0].content

		// Only import the recipes that use water
		if (input_fluid.value[0].tag != 'forge:water')
			return
		
		let input_item = recipe_json.inputs.item.filter((f) => f.content.type == 'gtceu:sized')[0].content		
		let output_items = recipe_json.outputs.item.map((i) => Item.of(i.content.ingredient.item, i.content.count).withChance(i.chance / 10000))
		
		// Remove non-100% outputs if chance byproducts are disabled
		if (!enable_chance_byproducts)
			output_items = output_items.filter((i) => i.chance == 1)
		
		event.recipes.create.splashing(output_items, Item.of(input_item.ingredient))
	})
}