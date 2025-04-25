let advancedCreateRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
	// Advanced and alternate recipes for Create machines and materials

	// Recycling TFC quern parts into a Create millstone
	event.recipes.minecraft.crafting_shaped("create:millstone", [" M ", " C ", " Q "], {
		M: "tfc:handstone",
		C: "create:cogwheel",
		Q: "tfc:quern"
	})
	
	// Coaxial gear variant - saves a shaft
	event.recipes.minecraft.crafting_shaped("create:millstone", [" M ", " C ", " Q "], {
		M: "tfc:handstone",
		C: "petrolsparts:coaxial_gear",
		Q: "tfc:quern"
	})


	// Making and upgrading gears with deployers
	event.recipes.create.deploying("create:cogwheel", ["create:shaft", "#forge:treated_wood"])
	event.recipes.create.deploying("create:large_cogwheel", ["create:cogwheel", "#forge:treated_wood"]) 
	event.recipes.create.deploying("petrolsparts:large_coaxial_gear", ["petrolsparts:coaxial_gear", "#forge:treated_wood"]) 
	
	// A manual recipe too
	event.shapeless("petrolsparts:large_coaxial_gear", ["petrolsparts:coaxial_gear", "#forge:treated_wood"])


	// Making Rose Quartz in Gregtech Alloy Smelter 
	// (uses just 4 redstone - manual crafting uses 8)
	event.recipes.gtceu
		.alloy_smelter("rose_quartz")
		.itemInputs("#forge:gems/quartz", "4x minecraft:redstone")
		.itemOutputs("create:rose_quartz")
		.duration(50)
		.EUt(16)


	// Making Create belts using leather
	event.recipes.minecraft.crafting_shaped("3x create:belt_connector", ["   ", "LLL", "MRM"], {
		L: "#tfc:leather_knapping",
		M: "tfc:brass_mechanisms",
		R: "#forge:rods/wrought_iron"
	})
	event.recipes.minecraft.crafting_shaped("6x create:belt_connector", ["   ", "LLL", "MRM"], {
		L: "#tfc:leather_knapping",
		M: "#forge:gears/steel",
		R: "#forge:rods/steel"
	})
	
	// Making Create belts using Gregtech rubber sheets
	event.recipes.minecraft.crafting_shaped("3x create:belt_connector", ["   ", "LLL", "MRM"], {
		L: "#gregitas:any_rubber_sheet",
		M: "tfc:brass_mechanisms",
		R: "#forge:rods/wrought_iron"
	})
	event.recipes.minecraft.crafting_shaped("6x create:belt_connector", ["   ", "LLL", "MRM"], {
		L: "#gregitas:any_rubber_sheet",
		M: "#forge:gears/steel",
		R: "#forge:rods/steel"
	})

	// Making Create spouts using Gregtech rubber rings
	event.recipes.minecraft.crafting_shaped("create:spout", [" C ", " R ", "   "], {
		C: "create:copper_casing",
		R: "#gregitas:any_rubber_ring"
	})


	// Making Create funnels and tunnels using Gregtech rubber and plastic sheets
	event.recipes.minecraft.crafting_shaped("2x create:andesite_funnel", [" A ", " S ", "   "], {
		A: "create:andesite_alloy",
		S: "#gregitas:any_rubber_sheet"
	})
	event.recipes.minecraft.crafting_shaped("2x create:andesite_funnel", [" A ", " S ", "   "], {
		A: "create:andesite_alloy",
		S: "#gregitas:any_rubber_or_plastic_thin_sheet"
	})

	event.recipes.minecraft.crafting_shaped("2x create:andesite_tunnel", ["AA ", "SS ", "   "], {
		A: "create:andesite_alloy",
		S: "#gregitas:any_rubber_sheet"
	})
	event.recipes.minecraft.crafting_shaped("2x create:andesite_tunnel", ["AA ", "SS ", "   "], {
		A: "create:andesite_alloy",
		S: "#gregitas:any_rubber_or_plastic_thin_sheet"
	})

	// Brass funnels and tunnels can use either Create electron tubes or Gregtech ULV circuits
	event.recipes.minecraft.crafting_shaped("2x create:brass_funnel", [" C ", " B ", " S "], {
		B: "#forge:ingots/brass",
		S: "#gregitas:any_rubber_sheet",
		C: "#gregitas:create_circuit"
	})
	event.recipes.minecraft.crafting_shaped("2x create:brass_funnel", [" C ", " B ", " S "], {
		B: "#forge:ingots/brass",
		S: "#gregitas:any_rubber_or_plastic_thin_sheet",
		C: "#gregitas:create_circuit"
	})
	
	event.recipes.minecraft.crafting_shaped("2x create:brass_tunnel", ["C  ", "BB ", "SS "], {
		C: "#gregitas:create_circuit",
		B: "#forge:ingots/brass",
		S: "#gregitas:any_rubber_or_plastic_thin_sheet"
	})
	event.recipes.minecraft.crafting_shaped("2x create:brass_tunnel", ["C  ", "BB ", "SS "], {
		C: "#gregitas:create_circuit",
		B: "#forge:ingots/brass",
		S: "#gregitas:any_rubber_or_plastic_thin_sheet"
	})
	
	// Making Create hose and elevator pulleys using Gregtech rubber
	event.recipes.minecraft.crafting_shaped("create:hose_pulley", [" C ", " S ", " P "], {
		C: "create:copper_casing",
		S: "#gregitas:any_rubber_sheet",
		P: "#forge:plates/copper"
	})

	event.recipes.minecraft.crafting_shaped("create:elevator_pulley", [" C ", " S ", " P "], {
		C: "create:brass_casing",
		S: "#gregitas:any_rubber_sheet",
		P: "#forge:plates/wrought_iron"
	})
	
	// Making a Create rope pulley using Firmaciv jute rope
	event.recipes.minecraft.crafting_shaped("create:rope_pulley", [" C ", " S ", " P "], {
		C: "create:andesite_casing",
		S: "firmaciv:rope_coil",
		P: "#forge:plates/wrought_iron"
	})

	
	// Making a Create Diesel Generators pumpjack head using Gregtech rubber
	event.recipes.minecraft.crafting_shaped("createdieselgenerators:pumpjack_head", ["A A", "ZSZ", "A A"], {
		A: "create:andesite_alloy",
		Z: "#forge:ingots/zinc",
		S: "#gregitas:any_rubber_sheet"
	})
		
	// Making a Create encased chain drive using TFC wrought iron chains
	event.shapeless("create:encased_chain_drive", ["create:andesite_casing", "2x tfc:metal/chain/wrought_iron"])

}
