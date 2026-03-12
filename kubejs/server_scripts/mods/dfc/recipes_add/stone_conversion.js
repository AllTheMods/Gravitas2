const dfcRecipesAddStoneConversion = (/** @type {Internal.RecipesEventJS} */ event) => {
  // DFC stone conversions
  event.recipes.kubejs.shaped("2x dfc:rock/raw/travertine", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/limestone"
  })

  event.recipes.kubejs.shaped("2x dfc:rock/raw/serpentine", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/gabbro"
  })

  event.recipes.kubejs.shaped("2x dfc:rock/raw/arkose", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/gneiss"
  })

  event.recipes.kubejs.shaped("2x dfc:rock/raw/blueschist", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/basalt"
  })

  event.recipes.kubejs.shaped("2x dfc:rock/raw/tuff", ["PPP", "PRP", "PPP"], {
    P: "gtceu:stone_dust",
    R: "tfc:rock/raw/rhyolite"
  })
}
