// priority: 10

let EROSION
let runErosionFeature = (/** @type {Internal.StructureAfterPlaceEventJS} */ event) => {
  if (event.chunkGenerator.class.simpleName != "TFCChunkGenerator") return
  if (event.intersectionBoxes.isEmpty()) return
  if (event.structureBoundingBox.maxY() >= 64) return
  if (!EROSION) {
    EROSION = event.level.server.registryAccess().registry($Registries.CONFIGURED_FEATURE).get().get("tfc:erosion")
  }
  EROSION.place(event.worldGenLevel, event.chunkGenerator, event.randomSource, event.chunkBoundingBox.center)
}
