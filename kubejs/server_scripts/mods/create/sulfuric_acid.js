let viSulfuricAcid = (/** @type {Internal.RecipesEventJS} */ event) => {
	// This adapts Vintage Improvements recipe chain for Sulfuric Acid to Gregtech
	// The recipes remain the same, but inputs and outputs are replaced with Gregtech compatible ones
	
	
	// Making sulfur dust out of Vintage Improvements sulfur gems
    event.recipes.gtceu.macerator("vintageimprovements:sulfur")
		.itemInputs("#forge:gems/sulfur")
		.itemOutputs("2x gtceu:sulfur_dust")
		.duration(400)
		.EUt(2)
    event.recipes.create.crushing(["2x gtceu:sulfur_dust"], "#forge:gems/sulfur", 250)
    event.recipes.create.milling("2x gtceu:sulfur_dust", "#forge:gems/sulfur", 250)

	
	// Making Sulfur Dioxide with atmospheric O2 and sulfur dust
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/sulfur"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_dust")

	// Same, but at 1/4 the size
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:small_dusts/sulfur"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 250
			}
		],
		processingTime: 100
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_small_dust")

	// A Gregtech compatible version of the original Vintage Improvements recipe for Sulfur Dioxide
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:gems/sulfur"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			}
		],
		processingTime: 600
	}).id("vintageimprovements:pressurizing/sulfur_dioxide")


	// Making Sulfur Trioxide with atmospheric O2 and a consumable metal catalyst
	// Support both nugget (like the original) and dust catalysts
	
	// Vanadium catalyst + heated basin (buffed, 2x output per catalyst)
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				fluidTag: "forge:sulfur_dioxide",
				amount: 500
			},
			{
				tag: "forge:nuggets/vanadium"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 500
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide")

	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				fluidTag: "forge:sulfur_dioxide",
				amount: 500
			},
			{
				tag: "forge:tiny_dusts/vanadium"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 500
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide_dust")

	// Iron catalyst + superheated basin
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "superheated",
		ingredients: [ 
			{
				fluidTag: "forge:sulfur_dioxide",
				amount: 250
			},
			{
				tag: "forge:nuggets/iron"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 250
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide_alt")

	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "superheated",
		ingredients: [ 
			{
				fluidTag: "forge:sulfur_dioxide",
				amount: 250
			},
			{
				tag: "forge:tiny_dusts/iron"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 250
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide_alt_dust")


	// Finally, making Sulfuric Acid
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidInput: 0,
		ingredients: [ 
			{
				fluidTag: "forge:sulfur_trioxide",
				amount: 1000
			},
			{
				fluid: "minecraft:water",
				amount: 1000
			}
		],
		results: [
			{
				fluid: "gtceu:sulfuric_acid",
				amount: 1000
			}
		],
		processingTime: 600
	}).id("vintageimprovements:pressurizing/sulfuric_acid")


	// Gregtech compatible versions of the original Copper Sulfate recipe, just in case
	event.custom({
		type: "vintageimprovements:pressurizing",
		ingredients: [ 
			{
				fluidTag: "forge:sulfuric_acid",
				amount: 200
			},
			{
				fluid: "minecraft:water",
				amount: 200
			},
			{
				tag: "forge:ingots/copper"
			}
		],
		results: [
			{
				item: "vintageimprovements:copper_sulfate"
			}
		],
		processingTime: 800
	}).id("vintageimprovements:pressurizing/copper_sulfate")

	// Same but with copper dust as an input
	event.custom({
		type: "vintageimprovements:pressurizing",
		ingredients: [ 
			{
				fluidTag: "forge:sulfuric_acid",
				amount: 200
			},
			{
				fluid: "minecraft:water",
				amount: 200
			},
			{
				tag: "forge:dusts/copper"
			}
		],
		results: [
			{
				item: "vintageimprovements:copper_sulfate"
			}
		],
		processingTime: 700
	}).id("vintageimprovements:pressurizing/copper_sulfate_from_dust")
	

}