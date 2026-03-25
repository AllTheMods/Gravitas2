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
  const igFormationStones = {
    IGNEOUS_INTRUSIVE: ["granite", "diorite", "gabbro"],
    IGNEOUS_EXTRUSIVE: ["andesite", "basalt", "dacite", "rhyolite"],
    SEDIMENTARY:       ["chalk", "chert", "claystone", "conglomerate", "dolomite", "limestone", "shale"],
    METAMORPHIC:       ["gneiss", "marble", "phyllite", "quartzite", "schist", "slate"],
  }
  const igFormationLabel = {
    IGNEOUS_INTRUSIVE: "Intrusive Igneous",
    IGNEOUS_EXTRUSIVE: "Extrusive Igneous",
    SEDIMENTARY:       "Sedimentary",
    METAMORPHIC:       "Metamorphic",
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

  //IG Ores
  entry.clear()
  entry.put("name", "Immersive Geology Ores")
  entry.put("category", "tfc:gregitas")
  entry.put("icon", "immersivegeology:normal_ore_copper")
  entry.put("read_by_default", true)
  entry.put("sortnum", 2)
  pages.clear()
  pages.add({
    type: "patchouli:text",
    text: "$(1)Immersive Geology$() adds its own ore veins that spawn in $(1)TerraFirmaCraft$() $(thing)rock$() types."
  })
  pages.add({
    type: "patchouli:text",
    text: "Navigate through the $(thing)Veins$() to find in which $(thing)rock$() types those veins spawn."
  })
  global.igBookData.forEach((ore) => {
    let formationDesc = ore.formations
      .map((f) => `$(li)$(thing)${igFormationLabel[f]}$(): ${igFormationStones[f].map((s) => Utils.snakeCaseToTitleCase(s)).join(", ")}`)
      .join("")
    let text = `Found between $(thing)y=${ore.minY}$() and $(thing)y=${ore.maxY}$().$(br)Spawns in:${formationDesc}`
    pages.add(createTextPage(ore.name, text))
    let blocks = Utils.newList()
    ore.formations.forEach((f) => {
      igFormationStones[f].forEach((stone) => {
        let bl = `immersivegeology:tfc_normal_ore_block_${ore.id}_${stone}`
        if (Item.exists(bl)) blocks.add(bl)
        else console.log(`IG book: could not find block ${bl}`)
      })
    })
    pages.add(createMultiblock(blocks, `Normal-quality ore blocks for $(thing)${ore.name}$().`))
  })
  entry.put("pages", pages)
  event.add("tfc:patchouli_books/field_guide/en_us/entries/gregitas/ig_ores", entry)

  //Dragons
  entry.clear()
  entry.put("name", "Ice And Fire Dragons")
  entry.put("category", "tfc:gregitas")
  entry.put("icon", "iceandfire:dragon_skull_fire")
  entry.put("read_by_default", true)
  entry.put("sortnum", 3)
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
