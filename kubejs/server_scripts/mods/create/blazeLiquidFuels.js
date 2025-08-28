// Liquid fuel burning recipes for Blaze Burner with a Straw (Create Crafts & Additions)

let blazeLiquidFuels = (/** @type {Internal.RecipesEventJS} */ event) => {
	// Remove all existing liquid burning recipes
	event.remove({type: "createaddition:liquid_burning"})
	
	// Add new ones, using the global fuel type table (see: startup_scripts/constants_startup.js)
	global.liquidFuels.forEach(fuel => {
		// Fuels that allow for superheated burn last for half the base duration
		let divider = fuel.superheated ? 2 : 1
		
		event.recipes.createaddition.liquid_burning({fluidTag: fuel.tag, amount: 1000}, fuel.burn_ticks / divider).superheated(fuel.superheated === true)
	})
}