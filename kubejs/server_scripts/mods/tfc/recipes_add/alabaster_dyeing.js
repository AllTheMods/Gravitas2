const tfcAlabasterDyeing = (/** @type {Internal.RecipesEventJS} */ event) => {
  // Remove WoodenCog alabaster Create mixing recipes (wrong dye/lye amounts — replaced below)
  const woodencogTypes = ["raw_alabaster", "alabaster_bricks", "polished_alabaster"]
  dfcColors.forEach(function(color) {
    woodencogTypes.forEach(function(type) {
      event.remove({ id: `woodencog:mixing/dyeing_${color}_${type}` })
    })
  })
  woodencogTypes.forEach(function(type) {
    event.remove({ id: `woodencog:mixing/lye_${type}` })
  })

  // === RAW ALABASTER ===
  // Raw only has a base block form (no stairs/slab/wall for colored variants either).
  // TFC provides barrel dyeing for tfc:alabaster/raw natively, so only add GT chemical bath here.

  addChemBathDye(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "#gregitas:alabaster_raw",
    coloredOutput: color => `tfc:alabaster/raw/${color}`,
  })
  addChemBathBleach(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "#gregitas:alabaster_raw",
    bleachedOutput: "tfc:alabaster/raw",
  })
  addGTMixDye(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "tfc:alabaster/raw",
    coloredOutput: color => `tfc:alabaster/raw/${color}`,
  })
  addCreateMixDye(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "tfc:alabaster/raw",
    coloredOutput: color => `tfc:alabaster/raw/${color}`,
  })
  // TFC provides barrel bleaching for base raw natively — only add GT mix + Create mix bleach
  addGTMixBleach(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "#gregitas:alabaster_raw",
    bleachedOutput: "tfc:alabaster/raw",
  })
  addCreateMixBleach(event, {
    idPrefix: "tfc_alabaster_raw",
    input: "#gregitas:alabaster_raw",
    bleachedOutput: "tfc:alabaster/raw",
  })

  // === ALABASTER BRICKS ===
  // TFC provides barrel dyeing for tfc:alabaster/bricks natively — skip barrel for the base block.
  // Stairs/slabs/walls: dye + barrel only; no bleach since no undyed stair/slab/wall exists.

  addChemBathDye(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "#gregitas:alabaster_bricks_blocks",
    coloredOutput: color => `tfc:alabaster/bricks/${color}`,
  })
  addChemBathBleach(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "#gregitas:alabaster_bricks_blocks",
    bleachedOutput: "tfc:alabaster/bricks",
  })
  addGTMixDye(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "tfc:alabaster/bricks",
    coloredOutput: color => `tfc:alabaster/bricks/${color}`,
  })
  addCreateMixDye(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "tfc:alabaster/bricks",
    coloredOutput: color => `tfc:alabaster/bricks/${color}`,
  })
  // TFC provides barrel bleaching for base bricks natively — only add GT mix + Create mix bleach
  addGTMixBleach(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "#gregitas:alabaster_bricks_blocks",
    bleachedOutput: "tfc:alabaster/bricks",
  })
  addCreateMixBleach(event, {
    idPrefix: "tfc_alabaster_bricks_blocks",
    input: "#gregitas:alabaster_bricks_blocks",
    bleachedOutput: "tfc:alabaster/bricks",
  })

  const alabasterBricksVariants = [
    { idSuffix: "stairs", tag: "gregitas:alabaster_bricks_stairs", suffix: "_stairs", fluidScale: 0.75 },
    { idSuffix: "slabs",  tag: "gregitas:alabaster_bricks_slabs",  suffix: "_slab",   fluidScale: 0.5 },
    { idSuffix: "walls",  tag: "gregitas:alabaster_bricks_walls",  suffix: "_wall",   fluidScale: 1 },
  ]
  alabasterBricksVariants.forEach(variant => {
    addChemBathDye(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      coloredOutput: color => `tfc:alabaster/bricks/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addBarrelDye(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `tfc:alabaster/bricks/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/bricks/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addGTMixDye(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `tfc:alabaster/bricks/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/bricks/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addCreateMixDye(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `tfc:alabaster/bricks/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/bricks/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addBarrelBleach(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/bricks/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addGTMixBleach(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/bricks/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addCreateMixBleach(event, {
      idPrefix: `tfc_alabaster_bricks_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/bricks/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
  })

  // === POLISHED ALABASTER ===
  // TFC provides barrel dyeing for tfc:alabaster/polished natively — skip barrel for the base block.
  // Stairs/slabs/walls: dye + barrel only; no bleach since no undyed stair/slab/wall exists.

  addChemBathDye(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "#gregitas:alabaster_polished_blocks",
    coloredOutput: color => `tfc:alabaster/polished/${color}`,
  })
  addChemBathBleach(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "#gregitas:alabaster_polished_blocks",
    bleachedOutput: "tfc:alabaster/polished",
  })
  addGTMixDye(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "tfc:alabaster/polished",
    coloredOutput: color => `tfc:alabaster/polished/${color}`,
  })
  addCreateMixDye(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "tfc:alabaster/polished",
    coloredOutput: color => `tfc:alabaster/polished/${color}`,
  })
  // TFC provides barrel bleaching for base polished natively — only add GT mix + Create mix bleach
  addGTMixBleach(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "#gregitas:alabaster_polished_blocks",
    bleachedOutput: "tfc:alabaster/polished",
  })
  addCreateMixBleach(event, {
    idPrefix: "tfc_alabaster_polished_blocks",
    input: "#gregitas:alabaster_polished_blocks",
    bleachedOutput: "tfc:alabaster/polished",
  })

  const alabasterPolishedVariants = [
    { idSuffix: "stairs", tag: "gregitas:alabaster_polished_stairs", suffix: "_stairs", fluidScale: 0.75 },
    { idSuffix: "slabs",  tag: "gregitas:alabaster_polished_slabs",  suffix: "_slab",   fluidScale: 0.5 },
    { idSuffix: "walls",  tag: "gregitas:alabaster_polished_walls",  suffix: "_wall",   fluidScale: 1 },
  ]
  alabasterPolishedVariants.forEach(variant => {
    addChemBathDye(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      coloredOutput: color => `tfc:alabaster/polished/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addBarrelDye(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `tfc:alabaster/polished/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/polished/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addGTMixDye(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `tfc:alabaster/polished/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/polished/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addCreateMixDye(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `tfc:alabaster/polished/white${variant.suffix}`,
      colors: dfcColors.filter(c => c !== "white"),
      coloredOutput: color => `tfc:alabaster/polished/${color}${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addBarrelBleach(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/polished/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addGTMixBleach(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/polished/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
    addCreateMixBleach(event, {
      idPrefix: `tfc_alabaster_polished_${variant.idSuffix}`,
      input: `#${variant.tag}`,
      bleachedOutput: `tfc:alabaster/polished/white${variant.suffix}`,
      fluidScale: variant.fluidScale,
    })
  })
}
