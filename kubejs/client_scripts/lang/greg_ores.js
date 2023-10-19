// priority 10

const addGregOresLang = (event) => {
  const blocks = Object.keys(global.gregOreBlockProps)
  blocks.forEach((block) => {
    global.tfcStone.forEach((stone) => {
      event.add(`block.gregitas.ore.${block}.${stone}`, Utils.snakeCaseToTitleCase(`${stone}_${block}`))
      event.add(`block.gregitas.ore.${block}.${stone}.prospected`, Utils.snakeCaseToTitleCase(`${block}`))
    })
  })
}
