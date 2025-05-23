let oreVibratingAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
	// Import Gregtech sifter recipes
	event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:sifter'}, (recipe) => {
		// UGLY HACKS are used here to wrangle Gregtech recipes
		let recipe_json = JSON.parse(recipe.json)
				
		let input_item = recipe_json.inputs.item.filter((f) => f.content.type == 'gtceu:sized')[0].content
		let output_items = recipe_json.outputs.item.map((item) => Item.of(item.content.ingredient.item, item.content.count).withChance(item.chance / 10000))

		event.recipes.vintageimprovements.vibrating(output_items, input_item.ingredient, recipe_json.duration)
	})
}