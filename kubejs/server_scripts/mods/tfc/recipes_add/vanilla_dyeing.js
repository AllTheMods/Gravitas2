const tfcVanillaDyeing = (/** @type {Internal.RecipesEventJS} */ event) => {
  const nonWhiteColors = dfcColors.filter(c => c !== "white")

  // === VANILLA WOOL ===
  // White wool is treated as the plain/base form.

  addGTMixDye(event, {
    idPrefix: "wool",
    input: "minecraft:white_wool",
    colors: nonWhiteColors,
    coloredOutput: color => `minecraft:${color}_wool`,
  })
  addCreateMixDye(event, {
    idPrefix: "wool",
    input: "minecraft:white_wool",
    colors: nonWhiteColors,
    coloredOutput: color => `minecraft:${color}_wool`,
  })
  addGTMixBleach(event, {
    idPrefix: "wool",
    input: "#tfc:colored_wool",
    bleachedOutput: "minecraft:white_wool",
  })
  addCreateMixBleach(event, {
    idPrefix: "wool",
    input: "#tfc:colored_wool",
    bleachedOutput: "minecraft:white_wool",
  })

  // === VANILLA TERRACOTTA ===
  // White terracotta is treated as the plain/base form even though uncolored terracotta exists.
  // #tfc:colored_terracotta covers all colored terracotta (not plain/uncolored).

  addGTMixDye(event, {
    idPrefix: "terracotta",
    input: "minecraft:white_terracotta",
    colors: nonWhiteColors,
    coloredOutput: color => `minecraft:${color}_terracotta`,
  })
  addCreateMixDye(event, {
    idPrefix: "terracotta",
    input: "minecraft:white_terracotta",
    colors: nonWhiteColors,
    coloredOutput: color => `minecraft:${color}_terracotta`,
  })
  addGTMixBleach(event, {
    idPrefix: "terracotta",
    input: "#tfc:colored_terracotta",
    bleachedOutput: "minecraft:white_terracotta",
  })
  addCreateMixBleach(event, {
    idPrefix: "terracotta",
    input: "#tfc:colored_terracotta",
    bleachedOutput: "minecraft:white_terracotta",
  })
  // Plain (uncolored) terracotta can also be bleached to white
  addGTMixBleach(event, {
    idPrefix: "terracotta_plain",
    input: "minecraft:terracotta",
    bleachedOutput: "minecraft:white_terracotta",
  })
  addCreateMixBleach(event, {
    idPrefix: "terracotta_plain",
    input: "minecraft:terracotta",
    bleachedOutput: "minecraft:white_terracotta",
  })
}
