// priority 10

const addCollapse = (/** @type {Internal.RecipesEventJS} */ event) => {
  const add = (ingredients, result) => {
    event.custom({
      type: "tfc:collapse",
      ingredient: ingredients,
      result: result
    })
  }
  global.tfcStone.forEach(stone => {
    const rockArray = []
    Object.keys(global.gregOreBlockProps).forEach(block => {
      rockArray.push(`gregitas:ore/${block}/${stone}`)
    })
    add(rockArray, `tfc:rock/cobble/${stone}`)
    add([`tfc:rock/cobble/${stone}_slab`], `tfc:rock/cobble/${stone}_slab`)
  })
}
