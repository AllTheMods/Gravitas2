const dfcRecipeAddTerracottaShingles = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Smelting: shingle → terracotta_shingle (10s = 200 ticks)
  event.smelting('gregitas:terracotta_shingle', 'dfc:ceramic/shingle')
    .cookingTime(200)

  event.shaped('4x dfc:ceramic/shingles/terracotta_white', [
    '  A',
    ' AB',
    'ABA'
  ], {
    A: 'gregitas:terracotta_shingle',
    B: 'tfc:mortar'
  })

  // === TERRACOTTA SHINGLE BLOCK PROCESSING ===

  dfcColors.forEach(color => {
    const baseBlock = `dfc:ceramic/shingles/terracotta_${color}`

    // Extractor: terracotta shingles → terracotta shingle (3s = 60 ticks, 120 EU = 2 EU/t)
      event.recipes.gtceu
	.extractor(`dfc_terracotta_shingles_${color}_extract`)
	.itemInputs(baseBlock)
	.itemOutputs('gregitas:terracotta_shingle')
	.duration(60)
	.EUt(2)

    // Macerator: base block → 4 brick dust (3s = 60 ticks, 120 EU = 2 EU/t)
    event.recipes.gtceu
      .macerator(`dfc_terracotta_shingle_${color}_dust`)
      .itemInputs(baseBlock)
      .itemOutputs('4x gtceu:brick_dust')
      .duration(60)
      .EUt(2)
  })

  // === TERRACOTTA SHINGLE DYEING ===

  // Shapeless hand dyeing (white is default, so skip it)
  dfcColors.forEach(color => {
    if (color == "white") return

    event.shapeless(`8x dfc:ceramic/shingles/terracotta_${color}`, [
      "8x dfc:ceramic/shingles/terracotta_white",
      `#forge:dyes/${color}`,
    ])
  })

  // Chemical bath + barrel dyeing, and bleaching
  addDyeRecipes(event, {
    idPrefix: "dfc_terracotta_shingle",
    input: "#gregitas:terracotta_shingles",
    baseInput: "dfc:ceramic/shingles/terracotta_white",
    bleachInput: "#gregitas:terracotta_shingles_colored",
    colors: dfcColors.filter(c => c !== "white"),
    coloredOutput: color => `dfc:ceramic/shingles/terracotta_${color}`,
    bleachedOutput: "dfc:ceramic/shingles/terracotta_white",
  })
}
