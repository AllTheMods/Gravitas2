let create_new_age = (/** @type {Internal.RecipesEventJS} */ event) => {
	// Here, we adapt Create New Age to Gregtech/TFC progression
	
	// Remove Thorium crushing and New Age nuclear fuel (we use Gregtech thorium rods for fuel)
	event.remove({ id: "create_new_age:thorium/thorium_crushing" })
	event.remove({ id: "create_new_age:thorium/nuclear_fuel" })
	
	// Remove Overcharged Iron and replace it in all recipes with Gregtech magnetic iron
	event.remove({ id: "create_new_age:energising/iron_ingot" })
	event.remove({ id: "create_new_age:energising/iron_sheet" })
	event.remove({ id: "create_new_age:pressing/overcharged_iron" })
	event.replaceInput({ mod: "create_new_age" }, "create_new_age:overcharged_iron", "#forge:ingots/magnetic_iron")
	event.replaceInput({ mod: "create_new_age" }, "create_new_age:overcharged_iron_sheet", "#forge:plates/magnetic_iron")
	
	// Remove Overcharged Gold and replace it in all recipes with Gregtech magnetic neodymium
	event.remove({ id: "create_new_age:energising/gold_ingot" })
	event.remove({ id: "create_new_age:energising/golden_sheet" })
	event.remove({ id: "create_new_age:pressing/overcharged_gold" })
	event.replaceInput({ mod: "create_new_age" }, "create_new_age:overcharged_gold", "#forge:ingots/magnetic_neodymium")
	event.replaceInput({ mod: "create_new_age" }, "create_new_age:overcharged_golden_sheet", "#forge:ingots/magnetic_neodymium")
	
	// Remove Blank Circuit / Copper Circuit and replace them with Create electron tubes / Gregtech ULV circuits
	event.remove({ id: "create_new_age:pressing/blank_circuit" })
	event.remove({ id: "create_new_age:deploying/copper_circuit" })
	event.replaceInput({ mod: "create_new_age" }, "create_new_age:copper_circuit", "#gregitas:create_circuit")
	
	// Replace copper in Rotor Coil with Gregtech 1x copper wire
	event.replaceInput({ id: "create_new_age:shaped/generator_coil" }, "#forge:ingots/copper", "gtceu:copper_single_wire")
	
	// An advanced recipe for Electrical Connector - better ratio than the normal recipe, but requires Gregtech annealed copper bolts
	event.recipes.create.deploying("create_new_age:electrical_connector", ["create:andesite_alloy", "#forge:bolts/annealed_copper"])

	// A replacement Heater recipe - using TFC red steel and GT iron bolts
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:heater",
		["   ", "BCB", "PIP"], 
		{
			B: "#forge:bolts/iron",
			C: "#forge:double_ingots/red_steel",
			P: "create_new_age:heat_pipe",
			I: "#forge:ingots/magnetic_iron"
		}
	).id("create_new_age:shaped/boiler_heater")
	
	// A simplified Basic Solar Plate recipe
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:basic_solar_heating_plate",
		["   ", " G ", "IPI"], 
		{
			G: "#forge:glass_panes/colorless",
			P: "create_new_age:heat_pipe",
			I: "#forge:ingots/iron"
		}
	).id("create_new_age:shaped/basic_solar_plate")

	// Advanced Solar Plate recipe
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:advanced_solar_heating_plate",
		["GGG", "I I", "IPI"], 
		{
			G: "#forge:glass_panes/colorless",
			P: "create_new_age:heat_pipe",
			I: "#forge:ingots/magnetic_iron"
		}
	).id("create_new_age:shaped/advanced_solar_plate")

	// Recipes for Carbon Brushes - using carbon/graphite/coal/charcoal dusts, same as Gregtech resistors
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:carbon_brushes",
		["A A", "CSC", "A A"], 
		{
			A: "create:andesite_alloy",
			S: "create:shaft",
			C: ["#forge:dusts/carbon", "#forge:dusts/graphite", "#forge:dusts/coal", "#forge:dusts/charcoal"]
		}
	).id("create_new_age:shaped/carbon_brushes")

	// Recipes for motors
	
	// TBD

	// Recipes for magnet blocks
	
	// Basic Force 1 magnet
	// Renamed "Ferrite Magnet" in this modpack
	// Easiest magnet to mass produce, also required for Basic Motor
	event.recipes.minecraft.crafting_shaped(
		"4x create_new_age:magnetite_block", 
		["PP ", "PP ", "   "],
		{
			P: "#forge:plates/magnetic_iron"
		}
	)
	// Foil recipe - twice as material efficient as the base recipe if you have a Gregtech Bender
	event.recipes.minecraft.crafting_shaped(
		"2x create_new_age:magnetite_block", 
		["PP ", "PP ", "   "],
		{
			P: "#forge:foils/magnetic_iron"
		}
	)

	// Basic Force 2 magnet
	// The only magnet that's available before you get access to electricity
	// Takes both Iron and Wrought Iron for better early game access
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:redstone_magnet", 
		[" P ", " R ", " P "],
		{
			P: ["#forge:plates/iron", "#forge:plates/wrought_iron"],
			R: "minecraft:redstone_block"
		}
	).id("create_new_age:shaped/redstone_magnet")
		
	// Force 4 magnet
	// Renamed "Neodymium Iron Magnet" in this modpack
	event.recipes.minecraft.crafting_shaped(
		"2x create_new_age:layered_magnet", 
		[" I ", " N ", " I "],
		{
			I: "#forge:ingots/magnetic_iron",
			N: "#forge:ingots/magnetic_neodymium"
		}
	).id("create_new_age:shaped/layered_magnet")
	
	// Force 8 magnet
	// Renamed "Advanced Neodymium Magnet" in this modpack
	event.recipes.minecraft.crafting_shaped(
		"2x create_new_age:fluxuated_magnetite", 
		[" I ", " D ", " I "],
		{
			I: "#forge:ingots/magnetic_neodymium",
			D: "create_new_age:overcharged_diamond"
		}
	).id("create_new_age:shaped/fluxuated_magnetite")

	
	// Endgame Force 24 magnet - the very best there is
	// Renamed "Samarium Cobalt Magnet" in this modpack
	event.recipes.minecraft.crafting_shaped(
		"2x create_new_age:netherite_magnet", 
		["PNP", "DSD", "PNP"],
		{
			P: "#forge:ingots/cobalt",
			D: "create_new_age:overcharged_diamond",
			N: "minecraft:netherite_scrap",
			S: "#forge:ingots/magnetic_samarium"
		}
	).id("create_new_age:shaped/netherite_magnet")


	// Reactor Casing recipe
	// Uses fire bricks instead of vanilla bricks and lead plates instead of iron plates
	let t_item = Item.of('create_new_age:incomplete_casing')
	event.recipes.create.sequenced_assembly(
		["4x create_new_age:reactor_casing"], 
		"gtceu:firebricks", 
		[
			event.recipes.create_new_age.energising(t_item, t_item, 500),
			event.recipes.create.deploying(t_item, [t_item, "#forge:plates/lead"]),
			event.recipes.create.pressing(t_item, t_item)
		]
	).transitionalItem(t_item).loops(1).id("create_new_age:reactor/reactor_casing")
	
	// Reactor Heat Vent recipe - using TFC Red Steel Plate
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:reactor_heat_vent", 
		[" H ", " C ", " P "], 
		{
			H: "create_new_age:heat_pipe",
			C: "create_new_age:reactor_casing",
			P: "#forge:plates/red_steel"
		}
	).id("create_new_age:reactor/reactor_heat_vent")
	
	// Reactor Fuel Acceptor recipe
	event.recipes.minecraft.crafting_shaped(
		"create_new_age:reactor_fuel_acceptor", 
		[" E ", " C ", " P "], 
		{
			E: "#gregitas:create_circuit",
			C: "create_new_age:reactor_casing",
			P: "create:brass_funnel"
		}
	).id("create_new_age:reactor/reactor_fuel_acceptor")
	
	// Reactor Rod recipe
	// Uses lead plates instead of gold plates, and omits nuclear fuel
	event.recipes.create.mechanical_crafting(
		"2x create_new_age:reactor_rod",
		[
			"CPPPC",
			" G G ",
			" G G ",
			"CPPPC"
		],
		{
			C: "create_new_age:reactor_casing",
			P: "#forge:plates/lead",
			G: "create_new_age:reactor_glass",
		}
	).id("create_new_age:reactor/reactor_rod")
	
	// Add a Gregtech recipe for Overcharged Diamond
	event.recipes.gtceu
		.polarizer("overcharged_diamond")
		.itemInputs("#forge:gems/diamond")
		.itemOutputs("create_new_age:overcharged_diamond")
		.duration(125)
		.EUt(20)

	
	// Import energizing recipes from Gregtech polarizer
	event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:polarizer'}, (recipe) => {
		// UGLY HACKS are used here to wrangle Gregtech recipes
		let recipe_json = JSON.parse(recipe.json)
		
		let eu_cost = recipe_json.tickInputs.eu[0].content
		let eu_cost_total = eu_cost * recipe_json.duration
		
		let fe_cost_total = (eu_cost_total / 9) * 20
		
		let rounding = 50
		if (fe_cost_total > 1000000)
			rounding = 100000
		else if (fe_cost_total > 100000)
			rounding = 10000
		else if (fe_cost_total > 10000)
			rounding = 1000

		fe_cost_total = Math.ceil(fe_cost_total / rounding) * rounding
		
		let input_item = recipe_json.inputs.item[0].content.ingredient
		let output_item = recipe_json.outputs.item[0].content.ingredient
		
		event.recipes.create_new_age.energising(output_item, input_item, fe_cost_total)
	})

}
