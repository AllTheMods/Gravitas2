
const removeDFCOreVeins = (/** @type {TagEvent.PlacedFeature} */ event) => {
  // Remove DFC ore veins from worldgen - they are already provided by other mods
  const dfcOreVeins = [
    'dfc:vein/deep_native_aluminum',
    'dfc:vein/deep_native_platinum',
    'dfc:vein/normal_native_aluminum',
    'dfc:vein/surface_bauxite',
    'dfc:vein/surface_galena'
  ]

  dfcOreVeins.forEach(vein => {
    event.remove('tfc:in_biome/veins', vein)
  })
}
