let viSulfuricAcid = (/** @type {Internal.RecipesEventJS} */ event) => {
	// This adapts Vintage Improvements recipe chain for Sulfuric Acid to Gregtech
	// The recipes remain the same, but inputs and outputs are replaced with Gregtech compatible ones
	
	
	// Making GT sulfur dust out of Vintage Improvements sulfur gems
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
	// Support both nugget (like the original) and dust (GregTech) catalysts
	
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
			[
				{
					tag: "forge:nuggets/vanadium"
				},
				{
					tag: "forge:tiny_dusts/vanadium"
				}
			]
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 500
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide")

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
			[
				{
					tag: "forge:nuggets/iron"
				},
				{
					tag: "forge:tiny_dusts/iron"
				}
			]
		],
		results: [
			{
				fluid: "gtceu:sulfur_trioxide",
				amount: 250
			}
		],
		processingTime: 400
	}).id("vintageimprovements:pressurizing/sulfur_trioxide_alt")

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


	// Gregtech compatible version of the original Copper Sulfate recipe, just in case
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
			[
				{
					tag: "forge:ingots/copper"
				},
				{
					tag: "forge:dusts/copper"
				}
			]
		],
		results: [
			{
				item: "vintageimprovements:copper_sulfate"
			}
		],
		processingTime: 800
	}).id("vintageimprovements:pressurizing/copper_sulfate")
	

	// Making Sulfur Dioxide with atmospheric O2 and GregTech sulfide ores
	// Same recipes as in GregTech EBF
	
	// Pyrite -> Hematite
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/pyrite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 2000
			},
			{
				item: "gtceu:hematite_dust"
			},
			{
				item: "gtceu:ash_dust",
				chance: 0.11
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_pyrite_dust")
	
	// Stibnite -> Antimony Trioxide
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/stibnite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1500
			},
			{
				item: "gtceu:antimony_trioxide_dust"
			},
			{
				item: "gtceu:ash_dust",
				chance: 0.11
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_stibnite_dust")
	
	// Pentlandite -> Garnierite
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/pentlandite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			},
			{
				item: "gtceu:garnierite_dust"
			},
			{
				item: "gtceu:ash_dust",
				chance: 0.11
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_pentlandite_dust")
	
	// Chalcopyrite + Silicon Dioxide -> Cupric Oxide + Ferrosilite
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/chalcopyrite"
			},
			{
				tag: "forge:dusts/silicon_dioxide"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 2000
			},
			{
				item: "gtceu:cupric_oxide_dust"
			},
			{
				item: "gtceu:ferrosilite_dust"
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_chalcopyrite_dust")
	
	// Cobaltite -> Cobalt Oxide + Arsenic Trioxide
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/cobaltite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			},
			{
				item: "gtceu:cobalt_oxide_dust"
			},
			{
				item: "gtceu:arsenic_trioxide_dust"
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_cobaltite_dust")
	
	// Tetrahedrite -> Cupric Oxide + Antimony Trioxide
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/tetrahedrite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 2000
			},
			{
				item: "gtceu:cupric_oxide_dust"
			},
			{
				item: "gtceu:tiny_antimony_trioxide_dust",
				count: 3
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_tetrahedrite_dust")
	
	// Galena -> Massicot + Silver
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/galena"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			},
			{
				item: "gtceu:massicot_dust"
			},
			{
				item: "gtceu:silver_nugget",
				count: 6
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_galena_dust")
	
	// Sphalerite -> Zincite
	event.custom({
		type: "vintageimprovements:pressurizing",
		secondaryFluidOutput: 0,
		heatRequirement: "heated",
		ingredients: [ 
			{
				tag: "forge:dusts/sphalerite"
			}
		],
		results: [
			{
				fluid: "gtceu:sulfur_dioxide",
				amount: 1000
			},
			{
				item: "gtceu:zincite_dust"
			},
			{
				item: "gtceu:ash_dust",
				chance: 0.11
			}
		],
		processingTime: 200
	}).id("vintageimprovements:pressurizing/sulfur_dioxide_from_sphalerite_dust")
}