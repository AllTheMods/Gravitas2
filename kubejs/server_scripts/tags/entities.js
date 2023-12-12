
let canoeWood = [
"pine",
"douglas_fir",
"palm",
"spruce",
"sequoia",
"kapok",
"mangrove",
"white_cedar",
"willow"
]

const entityTags = (/** @type {TagEvent.Entity} */ event) => {
 canoeWood.forEach((wood) => {
  event.add("gravitas:canoes", `firmaciv:dugout_canoe/${wood}`)
  })
}