const addIGOresToTags = (/** @type {TagEvent.PlacedFeature} */ event) => {
  // Register IG TFC cluster_vein placed_features with TFC's biome vein system.
  global.igMineralData.minerals.forEach((mineral) => {
    if (mineral.formations.length === 0) return
    mineral.variants.forEach((variant) => {
      event.add("tfc:in_biome/veins", `gravitas2:vein/ig_${mineral.id}_${variant.suffix}`)
    })
  })
}
