// TFC to GregTech ore conversion recipes

const tfc_ores = ["hematite", "cassiterite", "garnierite", "malachite", "magnetite", "sphalerite", "tetrahedrite"]
const tfc_native_ores = ["silver", "copper", "gold"]
const tfc_ie_addon_ores = ["bauxite", "galena", "uraninite"]

const ore_conversion_duration = 16 * 20
const ore_conversion_eu = 32

let addOreConversions = (/** @type {Internal.RecipesEventJS} */ event) => {
	
	function TFCOreConversion(mod, ore, result) {
		event.recipes.gtceu
			.compressor(`gregitas:conversion_rich_${ore}`)
			.itemInputs(`3x ${mod}:ore/rich_${ore}`)
			.itemOutputs(result)
			.duration(ore_conversion_duration)
			.EUt(ore_conversion_eu)

		event.recipes.gtceu
			.compressor(`gregitas:conversion_normal_${ore}`)
			.itemInputs(`4x ${mod}:ore/normal_${ore}`)
			.itemOutputs(result)
			.duration(ore_conversion_duration)
			.EUt(ore_conversion_eu)

		event.recipes.gtceu
			.compressor(`gregitas:conversion_poor_${ore}`)
			.itemInputs(`6x ${mod}:ore/poor_${ore}`)
			.itemOutputs(result)
			.duration(ore_conversion_duration)
			.EUt(ore_conversion_eu)

		event.recipes.gtceu
			.compressor(`gregitas:conversion_small_${ore}`)
			.itemInputs(`9x ${mod}:ore/small_${ore}`)
			.itemOutputs(result)
			.duration(ore_conversion_duration)
			.EUt(ore_conversion_eu)
	}
	
	tfc_ores.forEach((ore) => {
		TFCOreConversion("tfc", ore, `gtceu:crushed_${ore}_ore`)
	})

	tfc_native_ores.forEach((ore) => {
		TFCOreConversion("tfc", "native_" + ore, `gtceu:crushed_${ore}_ore`,)
	})

	tfc_ie_addon_ores.forEach((ore) => {
		TFCOreConversion("tfc_ie_addon", ore, `gtceu:crushed_${ore}_ore`)
	})

	TFCOreConversion("firmalife", "chromite", "gtceu:crushed_chromite_ore")

	// Special case TFC ores
	// There's no "limonite" ore in GT - only "yellow limonite"
	TFCOreConversion("tfc", "limonite", "gtceu:crushed_yellow_limonite_ore")
	// There's no bismuthinite ore in GT period - fall back to bismuth dust
	TFCOreConversion("tfc", "bismuthinite", "gtceu:bismuth_dust")
}
