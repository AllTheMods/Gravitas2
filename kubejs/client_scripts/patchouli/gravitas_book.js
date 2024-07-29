// priority 10

let addTFCBookEntries = (/** @type {Internal.GenerateClientAssetsEventJS} */ event) => {
  const entry = Utils.newMap()
  const createSpotlight = (title, item, text) => {
    return {
      type: "patchouli:spotlight",
      item: item,
      title: title,
      link_recipes: false,
      text: text
    }
  }
  const createTextPage = (title, text) => {
    return {
      type: "patchouli:text",
      text: text,
      title: title
    }
  }
  const createMultiblock = (blocks, text) => {
    let patterns = blocks.map((block) => {
      return {
        pattern: [
          [
            "X"
          ],
          [
            "0"
          ]
        ],
        mapping: {
          X: block
        }
      }
    })
    return {
      type: "tfc:multimultiblock",
      text: text,
      multiblocks: patterns
    }
  }
  //Veins
  entry.put("name", "Gregtech Veins")
  entry.put("category", "tfc:gregitas")
  entry.put("icon", "gtceu:prospector.lv")
  entry.put("read_by_default", true)
  entry.put("sortnum", 1)
  const pages = Utils.newList()
  pages.add({
    type: "patchouli:text",
    text: "$(thing)Gregtech Veins$() have been reworked in this pack to be compatible with $(1)TerraFirmaCraft$()."
  })
  pages.add({
    type: "patchouli:text",
    text: "Navigate through the $(thing)Veins$() to find in which $(thing)Rock$() types those veins spawn."
  })
  const mapping = Utils.newMap()
  global.gregVeins.forEach((vein, i) => {
    let text = `This $(thing)vein$() can be found between $(thing)y=${vein.minY}$() and $(thing)y=${vein.maxY}$().$(br)They spawn at the following $(thing)Rock$() types:$(br)$(li)${vein.validStones.map(rock => Utils.snakeCaseToTitleCase(rock)).join("$(li)")}`
    let textPage = createTextPage(Utils.snakeCaseToTitleCase(vein.name) + " Vein", text)
    pages.add(textPage)
    let blocks = Utils.newList()
    let ores = vein.oreAndWeight.map((oreAndWeight) => Utils.snakeCaseToTitleCase(oreAndWeight[0]))
    vein.oreAndWeight.forEach((ore) => {
      let raw = `gtceu:raw_${ore[0]}`
      if (Item.exists(raw)) mapping.put(raw, i * 2 + 3)
      else mapping.put(`minecraft:raw_${ore[0]}`, i * 2 + 3)
    })
    vein.validStones.forEach((rock) => {
      vein.oreAndWeight.forEach((oreAndWeight) => {
        let bl = `gtceu:${rock}_${oreAndWeight[0]}_ore`
        if (Item.exists(bl)) blocks.add(bl) && mapping.put(bl, i * 2 + 3)
        else console.log(`Could not find block ${bl}`)
      })
    })
    let multiblock = createMultiblock(blocks, `Ores in this vein:$(br)$(thing)${ores.join(", ")}$().`)
    pages.add(multiblock)
  })
  entry.put("pages", pages)
  entry.put("extra_recipe_mappings", mapping)
  event.add("tfc:patchouli_books/field_guide/en_us/entries/gregitas/greg_veins", entry)

  //Dragons
  entry.clear()
  entry.put("name", "Ice And Fire Dragons")
  entry.put("category", "tfc:gregitas")
  entry.put("icon", "iceandfire:dragon_skull_fire")
  entry.put("read_by_default", true)
  entry.put("sortnum", 2)
  pages.clear()
  pages.add({
    type: "patchouli:text",
    text: "This pack includes the $(thing)Ice And Fire$() mod, which adds $(thing)Dragons$() to the game."
  })
  pages.add({
    type: "patchouli:text",
    text: "Dragon Lairs are both $(thing)Biome$() and $(thing)Climate$() specific. Each $(thing)Dragon$() type has its own preference."
  })
  pages.add({
    type: "patchouli:entity",
    title: "Fire Dragon",
    entity: "iceandfire:fire_dragon"
  })
  pages.add({
    type: "patchouli:spotlight",
    item: {
      tag: "gregitas:eggs/dragon/fire",
    },
    text: "Fire Dragons prefer $(thing)Hot (15 degree C Avg temp)$()  and $(thing)Wet (300mm+ rainfall$() $(thing)Climates$() and tend to favor Volcanic Mountain biomes"
  })
  pages.add({
    type: "patchouli:entity",
    title: "Ice Dragon",
    entity: "iceandfire:ice_dragon"
  })
  pages.add({
    type: "patchouli:spotlight",
    item: {
      tag: "gregitas:eggs/dragon/ice",
    },
    text: "Ice Dragons prefer $(thing)Cold (Ar or Below 4 degree C Avg temp)$() and tend to favor mountainous and hill biomes."
  })
  pages.add({
    type: "patchouli:entity",
    title: "Lightning Dragon",
    entity: "iceandfire:lightning_dragon"
  })
  pages.add({
    type: "patchouli:spotlight",
    item: {
      tag: "gregitas:eggs/dragon/lightning",
    },
    text: "Lightning Dragons prefer $(thing)Hot (15 degree C Avg temp)$()  and $(thing)Dry (Below 200mm rainfall$() $(thing)Climates$() amd tend to favor low lying areas"
  })

  entry.put("pages", pages)
  event.add("tfc:patchouli_books/field_guide/en_us/entries/gregitas/ice_and_fire_dragons", entry)

  
}
