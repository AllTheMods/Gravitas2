let recipesTFCGlassblowingLenses = (/** @type {Internal.RecipesEventJS} */ event) => {
	// Replace TFC glass lens with the GT one in all recipes
	event.replaceInput({ input: "tfc:lens" }, "tfc:lens", "gtceu:glass_lens")
	
	const lens_operations = ["blow", "stretch", "roll", "saw"]
	// Replacement for the default TFC lens recipe
	event.recipes.tfc.glassworking("gtceu:glass_lens", "tfc:silica_glass_batch")
		.operations(lens_operations)
		.id("tfc:glassworking/lens")
	
	// Using glass batches with no coloring additives
	event.recipes.tfc.glassworking("gtceu:orange_glass_lens", "tfc:hematitic_glass_batch")
		.operations(lens_operations)
		.id("gregitas:glassworking/lenses/orange_default")
	
	event.recipes.tfc.glassworking("gtceu:green_glass_lens", "tfc:olivine_glass_batch")
		.operations(lens_operations)
		.id("gregitas:glassworking/lenses/green_default")

	event.recipes.tfc.glassworking("gtceu:blue_glass_lens", "tfc:volcanic_glass_batch")
		.operations(lens_operations)
		.id("gregitas:glassworking/lenses/blue_default")

	// Glass batches with coloring additives
	event.recipes.tfc.glassworking("gtceu:orange_glass_lens", "tfc:silica_glass_batch")
		.operations(["pyrite"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/orange")

	event.recipes.tfc.glassworking("gtceu:light_blue_glass_lens", "tfc:silica_glass_batch")
		.operations(["lapis_lazuli"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/light_blue")

	event.recipes.tfc.glassworking("gtceu:yellow_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["lead"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/yellow_lead")

	event.recipes.tfc.glassworking("gtceu:yellow_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["silver"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/yellow_silver")

	event.recipes.tfc.glassworking("gtceu:lime_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["soda_ash", "iron"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/lime")

	event.recipes.tfc.glassworking("gtceu:lime_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["iron", "soda_ash"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/lime_alt")

	event.recipes.tfc.glassworking("gtceu:lime_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["uranium"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/lime_uraninite")

	event.recipes.tfc.glassworking("gtceu:pink_glass_lens", "tfc:silica_glass_batch")
		.operations(["gold"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/pink")
	
	event.recipes.tfc.glassworking("gtceu:gray_glass_lens", "#tfc:glass_batches")
		.operations(["graphite", "soda_ash"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/gray")

	event.recipes.tfc.glassworking("gtceu:gray_glass_lens", "#tfc:glass_batches")
		.operations(["soda_ash", "graphite"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/gray_alt")

	event.recipes.tfc.glassworking("gtceu:cyan_glass_lens", "#tfc:glass_batches_tier_3")
		.operations(["sapphire", "copper"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/cyan")

	event.recipes.tfc.glassworking("gtceu:cyan_glass_lens", "#tfc:glass_batches_tier_3")
		.operations(["copper", "sapphire"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/cyan_alt")

	event.recipes.tfc.glassworking("gtceu:purple_glass_lens", "#tfc:glass_batches")
		.operations(["iron", "copper"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/purple")

	event.recipes.tfc.glassworking("gtceu:purple_glass_lens", "#tfc:glass_batches")
		.operations(["copper", "iron"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/purple_alt")

	event.recipes.tfc.glassworking("gtceu:blue_glass_lens", "tfc:silica_glass_batch")
		.operations(["copper"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/blue")

	event.recipes.tfc.glassworking("gtceu:brown_glass_lens", "#tfc:glass_batches")
		.operations(["nickel"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/brown")

	event.recipes.tfc.glassworking("gtceu:green_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["iron"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/green")

	event.recipes.tfc.glassworking("gtceu:red_glass_lens", "#tfc:glass_batches_tier_2")
		.operations(["tin"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/red")

	event.recipes.tfc.glassworking("gtceu:black_glass_lens", "#tfc:glass_batches")
		.operations(["graphite"].concat(lens_operations))
		.id("gregitas:glassworking/lenses/black")
}