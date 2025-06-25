const gtCreatePressablePlates = [
	"steel", "wrought_iron", "black_bronze", "bismuth_bronze", "americium", "beryllium", "bismuth", "chromium",
	"darmstadtium", "europium", "gallium", "iridium", "iron", "manganese", "molybdenum", "neodymium", 
	"palladium", "plutonium_241", "rhodium", "ruthenium", "silicon", "tantalum", "thorium", "titanium",
	"tungsten", "uranium_235", "naquadah", "enriched_naquadah", "naquadria", "neutronium", "tritanium",
	"duranium", "trinium", "annealed_copper", "battery_alloy", "cupronickel", "kanthal", "magnalium",
	"nichrome", "niobium_nitride", "niobium_titanium", "sterling_silver", "ruridit", "stainless_steel",
	"tin_alloy", "ultimet", "vanadium_gallium", "yttrium_barium_cuprate", "graphene", "osmiridium",
	"gallium_arsenide", "indium_gallium_phosphide", "magnetic_iron", "tungsten_carbide",
	"indium_tin_barium_titanium_cuprate", "uranium_rhodium_dinaquadide", "enriched_naquadah_trinium_europium_duranide",
	"black_steel", "damascus_steel", "tungsten_steel", "cobalt_brass", "magnetic_steel", "vanadium_steel",
	"potin", "naquadah_alloy", "rhodium_plated_palladium", "red_steel", "blue_steel", "hssg", "red_alloy",
	"hsse", "hsss", "blue_alloy", "tantalum_carbide", "hsla_steel", "molybdenum_disilicide", "zeron_100", 
	"watertight_steel", "incoloy_ma_956", "maraging_steel_300", "hastelloy_x", "stellite_100", "titanium_carbide", 
	"titanium_tungsten_carbide", "hastelloy_c_276"
]

const gtRollingIngots = [
	"americium", "bismuth", "darmstadtium", "europium", "iridium", "manganese", "molybdenum", 
	"neodymium", "palladium", "plutonium_241", "rhodium", "ruthenium", "samarium", "thorium",
	"titanium", "tungsten", "uranium_235", "naquadah", "enriched_naquadah", "naquadria", "neutronium",
	"tritanium", "duranium", "trinium", "annealed_copper", "battery_alloy", "cupronickel", "kanthal",
	"magnalium", "nichrome", "niobium_nitride", "niobium_titanium", "sterling_silver", 
	"black_bronze", "bismuth_bronze", "rtm_alloy", "ruridit", "tin_alloy", "ultimet", "vanadium_gallium",
	"wrought_iron", "yttrium_barium_cuprate", "osmiridium", "nickel_zinc_ferrite", 
	"magnetic_iron", "magnetic_neodymium", "magnetic_samarium", "black_steel", "damascus_steel", 
	"tungsten_steel", "cobalt_brass", "magnetic_steel", "vanadium_steel", "potin", "naquadah_alloy",
	"rhodium_plated_palladium", "red_steel", "blue_steel", "hssg", "red_alloy", "hsse", "hsss", 
	"blue_alloy", "hsla_steel", "molybdenum_disilicide", "watertight_steel", "incoloy_ma_956", 
	"maraging_steel_300", "hastelloy_x", "titanium_tungsten_carbide", "hastelloy_c_276"
]

let createMaterialProcessingAdd = (/** @type {Internal.RecipesEventJS} */ event) => {
	
	// Add ingot -> plate recipes using Create press
	gtCreatePressablePlates.forEach((material) => {
		event.recipes.create.pressing(
			`gtceu:${material}_plate`,
			[`#forge:ingots/${material}`]
		).id(`gregitas:pressing/${material}_plate`)
	})
	
	// Add ingot -> 2x rod recipes using Create Crafts and Additions rolling mill
	gtRollingIngots.forEach((material) => {
		event.recipes.createaddition.rolling(Item.of(`gtceu:${material}_rod`, 2), `#forge:ingots/${material}`)
			.id(`gregitas:rolling/${material}_rod`)
	})
	
}