const gtRollingSingleWires = [
	"aluminium", "cobalt", "copper", "europium", "gold",
	"iron", "lead", "nickel", "osmium", "platinum", "silver",
	"tin", "tungsten", "naquadah", "tritanium", "trinium", 
	"annealed_copper", "cupronickel", "electrum",
	"kanthal", "nichrome", "niobium_nitride", "niobium_titanium",
	"rtm_alloy", "steel", "vanadium_gallium",
	"yttrium_barium_cuprate", "black_steel",
	"tungsten_steel", "naquadah_alloy",
	"hssg", "red_alloy", "blue_alloy"
]

let wiresAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
	
	// Add 1x wire rolling out of rods to Create Additions Rolling Mill
	gtRollingSingleWires.forEach((material) => {
		event.recipes.createaddition.rolling(`gtceu:${material}_single_wire`, `#forge:rods/${material}`)
			.id(`gregitas:rolling/${material}_single_wire`)
	})
	
	// Import all Gregtech wire -> cable recipes
	event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:assembler', id: /^gtceu:assembler\/cover_.*_wire_gt_(single|double|quadruple|octal|hex)_(rubber|silicone|styrene_butadiene)/}, (recipe) => {
		// UGLY HACKS are used here to wrangle Gregtech recipes
		let recipe_json = JSON.parse(recipe.json)
		
		let input_fluid = recipe_json.inputs.fluid[0].content
		let output_cable = recipe_json.outputs.item[0].content.ingredient

		let input_items = recipe_json.inputs.item.map((f) => f.content)

		let input_wire = input_items.filter((f) => f.ingredient.item && f.ingredient.item.match(/^gtceu:.*_wire/))[0].ingredient
		let input_sheets = input_items.filter((f) => f.ingredient.tag && f.ingredient.tag.match(/^forge:foils.*/))

		let fluid = {fluidTag: input_fluid.value[0].tag, amount: input_fluid.amount}

		
		if (!input_sheets.length) {			
			// The wire doesn't need any insulation sheets - make a simple spout recipe
			event.recipes.create.filling(output_cable, [input_wire, fluid])
		} else {
			// Make a far more complicated sequenced assembly recipe - impractical but cool
			
			// Transitional item is the same as input item - shouldn't break anything
			let t_item = input_wire
			
			// For cables that require multiple sheets: just loop the whole sequence enough times
			let loop_amount = input_sheets[0].count
			
			// Generate sequenced assembly steps
			let steps = []
			for (let i = 0; i < input_sheets.length; i++) {
				steps.push(event.recipes.create.deploying(t_item, [t_item, input_sheets[i].ingredient]))
			}
			
			// Spouting rubber is the last step
			fluid.amount = fluid.amount / loop_amount
			steps.push(event.recipes.create.filling(t_item, [t_item, fluid]))
			
			// Put together the sequence
			event.recipes.create.sequenced_assembly([output_cable], input_wire, steps).transitionalItem(t_item).loops(loop_amount)
		}

	})
}