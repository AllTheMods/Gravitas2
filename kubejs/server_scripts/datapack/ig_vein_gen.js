var stonesByFormation = {
  IGNEOUS_EXTRUSIVE: ["andesite", "basalt", "dacite", "rhyolite"],
  IGNEOUS_INTRUSIVE: ["diorite", "gabbro", "granite"],
  METAMORPHIC:       ["gneiss", "marble", "phyllite", "quartzite", "schist", "slate"],
  SEDIMENTARY:       ["chalk", "chert", "claystone", "conglomerate", "dolomite", "limestone", "shale"],
}

const addIGVeins = (/** @type {Internal.DataPackEventJS} */ event) => {
  // Disable IG's own placed_features to prevent double-spawning.
  global.igMineralData.minerals.forEach((mineral) => {
    event.addJson(`immersivegeology:worldgen/placed_feature/${mineral.id}.json`, {
      feature: `immersivegeology:${mineral.id}`,
      placement: [{ type: "minecraft:count", count: 0 }],
    })
  })

  const { minerals, globalMult } = global.igMineralData

  minerals.forEach((mineral) => {
    if (mineral.formations.length === 0) return

    mineral.variants.forEach((variant) => {
      var blocks = []
      mineral.formations.forEach((formation) => {
        var stones = stonesByFormation[formation]
        if (!stones) return
        stones.forEach((stone) => {
          blocks.push({
            replace: [`tfc:rock/raw/${stone}`],
            with: [
              { weight: variant.weights[0], block: `immersivegeology:tfc_poor_ore_block_${mineral.id}_${stone}` },
              { weight: variant.weights[1], block: `immersivegeology:tfc_normal_ore_block_${mineral.id}_${stone}` },
              { weight: variant.weights[2], block: `immersivegeology:tfc_rich_ore_block_${mineral.id}_${stone}` },
            ],
          })
        })
      })

      var veinName = `ig_${mineral.id}_${variant.suffix}`
      var rarity = Math.max(1, Math.round(variant.rarity / globalMult))

      event.addJson(`gravitas2:worldgen/configured_feature/vein/${veinName}.json`, {
        type: "tfc:cluster_vein",
        config: {
          rarity: rarity,
          min_y: variant.minY,
          max_y: variant.maxY,
          size: variant.size,
          density: variant.density,
          blocks: blocks,
          random_name: veinName,
        },
      })

      event.addJson(`gravitas2:worldgen/placed_feature/vein/${veinName}.json`, {
        feature: `gravitas2:vein/${veinName}`,
        placement: [],
      })
    })
  })
}
