// priority 10

const addTFCBiomesToVanilla = (/** @type {TagEvent.Biome} */ event) => {
  event.add("minecraft:is_badlands", ["tfc:inverted_badlands", "tfc:badlands"])
  event.add("minecraft:is_beach", ["tfc:shore", "tfc:tidal_flats"])
  event.add("minecraft:is_deep_ocean", ["tfc:deep_ocean_trench", "tfc:deep_ocean"])
  event.add("minecraft:is_hill", ["tfc:rolling_hills", "tfc:hills"])
  event.add("minecraft:is_mountain", [
    "tfc:volcanic_oceanic_mountains",
    "tfc:old_mountains",
    "tfc:volcanic_mountains",
    "tfc:mountains",
    "tfc:oceanic_mountains",
    "tfc:highlands"
  ])
  event.add("minecraft:is_ocean", ["tfc:ocean", "tfc:ocean_reef"])
  event.add("minecraft:is_river", ["tfc:river"])
  event.add("minecraft:is_lake", [
    "tfc:volcanic_mountain_lake",
    "tfc:volcanic_oceanic_mountain_lake",
    "tfc:oceanic_mountain_lake",
    "tfc:mountain_lake",
    "tfc:plateau_lake",
    "tfc:lake",
    "tfc:old_mountain_lake"
  ])
  event.add("minecraft:is_savanna", ["tfc:plains", "tfc:plateau"])
  event.add("minecraft:is_lowland", ["tfc:lowlands", "tfc:low_canyons"])
  event.add("minecraft:is_overworld", [
    "#minecraft:is_badlands",
    "#minecraft:is_beach",
    "#minecraft:is_deep_ocean",
    "#minecraft:is_hill",
    "#minecraft:is_mountain",
    "#minecraft:is_ocean",
    "#minecraft:is_river",
    "#minecraft:is_lake",
    "#minecraft:is_savanna",
    "#minecraft:is_lowland"
  ])
}

const addStargateBiomes = (/** @type {TagEvent.Biome} */ event) => {
  event.add("sgjourney:has_structure/buried_stargate/buried_stargate_biomes", ["#minecraft:is_overworld"])
  event.add("sgjourney:has_structure/buried_stargate/buried_stargate_desert_biomes", ["#minecraft:is_badlands"])
  event.add("sgjourney:has_structure/goauld_temple/jungle_pyramid_biomes", ["#minecraft:is_savanna"])
  event.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", ["#minecraft:is_overworld"])
  event.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_desert_biomes", ["#minecraft:is_badlands"])
  event.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_mushroom_biomes", [
    "#minecraft:is_savanna",
    "#minecraft:is_lowland"
  ])
  event.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", ["#minecraft:is_beach"])
}

const removeBiomesFromStructures = (/** @type {TagEvent.Biome} */ event) => {
  event.get("minecraft:has_structure/stronghold").remove("#is_overworld")
  event.get("minecraft:has_structure/mineshaft").removeAll()
  event.get("minecraft:has_structure/mineshaft_mesa").removeAll()
  event.get("ad_astra:has_structure/oil_well_biomes").removeAll()
  event.get("repurposedstructures:has_structure/strongholds/nether").removeAll()
}

const addBiomesToStructures = (/** @type {TagEvent.Biome} */ event) => {
  event.add("repurposed_structures:has_structure/villages/swamp", ["#minecraft:is_lowland"])
  event.add("minecraft:has_structure/village_savanna", ["#minecraft:is_savanna"])
  event.add("minecraft:has_structure/village_desert", ["#minecraft:is_badlands"])
  event.add("repurposed_structures:has_structure/outposts/desert", ["#minecraft:is_badlands"])
  event.add("minecraft:has_structure/swamp_hut", ["#minecraft:is_lowland"])
  event.add("minecraft:has_structure/ruined_portal_swamp", ["#minecraft:is_lowland"])
  event.add("repurposed_structures:has_structure/mineshafts/desert", ["#minecraft:is_badlands"])
  event.get("ae2:has_meteorites").remove("#is_overworld")


}
