// priority 100

const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty")
const $EventActor = Java.loadClass("dev.architectury.event.EventActor")
const $CustomClickEvent = Java.loadClass("dev.ftb.mods.ftblibrary.ui.CustomClickEvent").EVENT
const $EventResult = Java.loadClass("dev.architectury.event.EventResult")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
/** @type {Internal.Stream} */
const $Stream = Java.loadClass("java.util.stream.Stream")
const $ArrayList = Java.loadClass("java.util.ArrayList")

const pkgJson = {
	"credit": "Made with Blockbench",
	"textures": {
		"0": "kubejs:item/pkg_gh",
		"1": "kubejs:item/pkg_gh1",
		"2": "kubejs:item/pkg_gh2",
		"particle": "kubejs:item/pkg_gh"
	},
	"elements": [
		{
			"from": [0, 0, 0],
			"to": [16, 16, 16],
			"faces": {
				"north": {"uv": [0, 0, 16, 16], "texture": "#0"},
				"east": {"uv": [0, 0, 16, 16], "texture": "#1"},
				"south": {"uv": [0, 0, 16, 16], "texture": "#1"},
				"west": {"uv": [0, 0, 16, 16], "texture": "#0"},
				"up": {"uv": [0, 0, 16, 16], "texture": "#2"},
				"down": {"uv": [0, 0, 16, 16], "texture": "#1"}
			}
		}
	],
	"display": {
		"thirdperson_righthand": {
			"rotation": [75, 45, 0],
			"translation": [0, 2.5, 0],
			"scale": [0.375, 0.375, 0.375]
		},
		"thirdperson_lefthand": {
			"rotation": [75, 45, 0],
			"translation": [0, 2.5, 0],
			"scale": [0.375, 0.375, 0.375]
		},
		"firstperson_righthand": {
			"rotation": [0, 45, 0],
			"scale": [0.4, 0.4, 0.4]
		},
		"firstperson_lefthand": {
			"rotation": [0, 225, 0],
			"scale": [0.4, 0.4, 0.4]
		},
		"ground": {
			"translation": [0, 3, 0],
			"scale": [0.25, 0.25, 0.25]
		},
		"gui": {
			"rotation": [30, 225, 0],
			"scale": [0.625, 0.625, 0.625]
		},
		"fixed": {
			"scale": [0.5, 0.5, 0.5]
		}
	}
}

global.itemsToRemove = [
	"tfc:metal/sheet/steel",
	"immersiveengineering:plate_steel",
	"vintageimprovements:andesite_sheet",
	"alltheores:peridot",
	`/^alltheores:.*_rod/`,
	`/^alltheores:.*_dust/`,
	`/^alltheores:.*_nugget/`,
	`/^alltheores:.*_plate/`,
	`/^alltheores:.*_gear/`,
	`/^alltheores:.*_ore_hammer/`,
	`/^alltheores:.*_block/`,
	`/^alltheores:.*_ingot/`,
	`/^alltheores:raw_.*/`,
	`/^allthemodium:.*allthemodium.*/`,
	`/^allthemodium:.*vibranium.*/`,
	`/^allthemodium:.*unobtainium.*/`,
	`/^allthemodium:alloy_.*/`,
	`/^immersiveengineering:plate_.*/`,
	`/^immersiveengineering:mold_.*/`,
	`/^immersiveengineering:wire_.*/`,
	`/^tfc_ie_addon:metal/sheet/.*/`,
	`/^tfc:metal/sheet/.*/`,
	]

global.fluidsWithBucketsToRemove = [
	"enderio:dew_of_the_void",
]

global.fluidsToRemove = [
	"allthemodium:soul_lava",
	"allthemodium:molten_allthemodium",
	"allthemodium:molten_unobtainium",
	"allthemodium:molten_vibranium",
]

global.gregVeins = [
	{
	  name: "apatite",
	  weight: 40,
	  minY: 10,
	  maxY: 80,
	  validStones: ["basalt", "rhyolite", "andesite", "dacite", "granite", "gabbro", "diorite"], //This should eventually be replaced with what stones its allowed to generate in.
	  oreAndWeight: [
		["apatite", 3],
		["tricalcium_phosphate", 2],
		["pyrochlore", 1]
	  ]
	},
	{
	  name: "cassiterite",
	  weight: 80,
	  minY: 10,
	  maxY: 80,
	  validStones: ["granite", "diorite", "gabbro"],
	  oreAndWeight: [
		["tin", 4],
		["cassiterite", 2]
	  ]
	},
	{
	  name: "copper_tin",
	  weight: 50,
	  minY: -10,
	  maxY: 160,
	  validStones: ["basalt", "rhyolite", "andesite", "dacite"],
	  oreAndWeight: [
		["chalcopyrite", 10],
		["zeolite", 4],
		["cassiterite", 4],
		["realgar", 1]
	  ]
	},
	{
	  name: "galena",
	  weight: 40,
	  minY: -15,
	  maxY: 45,
	  validStones: ["granite", "gneiss"],
	  oreAndWeight: [
		["galena", 3],
		["silver", 2],
		["lead", 1]
	  ]
	},
	{
	  weight: 80,
	  minY: 30,
	  maxY: 60,
	  validStones: ["limestone", "chalk"],
	  name: "garnet_tin",
	  oreAndWeight: [
		["cassiterite_sand", 5],
		["garnet_sand", 2],
		["asbestos", 2],
		["diatomite", 1]
	  ]
	},
	{
	  name: "garnet",
	  weight: 40,
	  minY: -10,
	  maxY: 50,
	  validStones: ["granite", "claystone"],
	  oreAndWeight: [
		["red_garnet", 3],
		["yellow_garnet", 2],
		["amethyst", 2],
		["opal", 1]
	  ]
	},
	{
	  name: "iron",
	  weight: 120,
	  minY: -10,
	  maxY: 60,
	  validStones: ["basalt", "rhyolite", "andesite", "dacite"],
	  oreAndWeight: [
		["goethite", 5],
		["yellow_limonite", 2],
		["hematite", 2],
		["malachite", 1],
		["chromite", 1]
	  ]
	},
	{
	  name: "lubricant",
	  weight: 40,
	  minY: 0,
	  maxY: 50,
	  validStones: ["schist"],
	  oreAndWeight: [
		["soapstone", 3],
		["talc", 2],
		["glauconite_sand", 2],
		["pentlandite", 1]
	  ]
	},
	{
	  name: "magnetite",
	  weight: 80,
	  minY: 10,
	  maxY: 60,
	  validStones: ["basalt", "rhyolite", "andesite", "dacite"],
	  oreAndWeight: [
		["magnetite", 3],
		["vanadium_magnetite", 2],
		["gold", 1]
	  ]
	},
	{
	  name: "mineral_sand",
	  weight: 80,
	  minY: 15,
	  maxY: 60,
	  validStones: ["basalt", "granite"],
	  oreAndWeight: [
		["basaltic_mineral_sand", 5],
		["granitic_mineral_sand", 2],
		["fullers_earth", 2],
		["gypsum", 1]
	  ]
	},
	{
	  name: "nickel",
	  weight: 40,
	  minY: -10,
	  maxY: 60,
	  validStones: ["gabbro", "diorite", "granite"],
	  oreAndWeight: [
		["garnierite", 3],
		["nickel", 2],
		["cobaltite", 2],
		["pentlandite", 1]
	  ]
	},
	{
	  name: "salts",
	  weight: 50,
	  minY: 30,
	  maxY: 70,
	  validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
	  oreAndWeight: [
		["rock_salt", 3],
		["salt", 2],
		["lepidolite", 1],
		["spodumene", 1]
	  ]
	},
	{
	  name: "oilsands",
	  weight: 40,
	  minY: 30,
	  maxY: 80,
	  validStones: ["shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"],
	  oreAndWeight: [["oilsands", 1]]
	},
	{
	  name: "copper",
	  weight: 80,
	  minY: -40,
	  maxY: 10,
	  validStones: ["diorite", "granite"],
	  oreAndWeight: [
		["chalcopyrite", 5],
		["iron", 2],
		["pyrite", 2],
		["copper", 2]
	  ]
	},
	{
	  name: "lapis_lazuli",
	  weight: 40,
	  minY: -65,
	  maxY: -30,
	  validStones: ["basalt", "rhyolite", "andesite", "dacite"],
	  oreAndWeight: [
		["lazurite", 3],
		["sodalite", 2],
		["lapis", 2],
		["calcite", 1]
	  ]
	},
	{
		name: "diamond",
		weight: 40,
		minY: -65,
		maxY: 10,
		validStones: ["gabbro"],
		oreAndWeight: [
		  ["graphite", 3],
		  ["diamond", 2],
		  ["coal", 1]
		]
	},
	{
	  name: "manganese",
	  weight: 20,
	  minY: -30,
	  maxY: 0,
	  validStones: ["phyllite", "granite", "quartzite"],
	  oreAndWeight: [
		["grossular", 3],
		["spessartine", 2],
		["pyrolusite", 2],
		["tantalite", 1]
	  ]
	},
	{
	  name: "mica",
	  weight: 20,
	  minY: -40,
	  maxY: -10,
	  validStones: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble", "gabbro", "diorite", "granite"],
	  oreAndWeight: [
		["kyanite", 2],
		["mica", 1],
		["bauxite", 1],
		["pollucite", 1]
	  ]
	},
	{
	  name: "olivine",
	  weight: 20,
	  minY: -20,
	  maxY: 10,
	  validStones: ["quartzite", "slate", "phyllite", "schist", "gneiss", "marble"],
	  oreAndWeight: [
		["bentonite", 2],
		["magnetite", 1],
		["olivine", 1],
		["glauconite_sand", 1]
	  ]
	},
	{
	  name: "redstone",
	  weight: 60,
	  minY: -65,
	  maxY: -10,
	  validStones: ["rhyolite", "basalt", "andesite", "dacite", "quartzite", "shale"],
	  oreAndWeight: [
		["redstone", 2],
		["ruby", 1],
		["cinnabar", 1],
		["thorium", 1]
	  ]
	},
	{
	  name: "sapphire",
	  weight: 60,
	  minY: -40,
	  maxY: 0,
	  validStones: ["schist", "quartzite"],
	  oreAndWeight: [
		["almandine", 2],
		["pyrope", 1],
		["sapphire", 1],
		["green_sapphire", 1]
	  ]
	},
	{
	  name: "thorium",
	  weight: 80,
	  minY: -50,
	  maxY: 25,
	  validStones: ["basalt", "rhyolite", "dacite", "andesite"],
	  oreAndWeight: [
		["thorium", 2],
		["cinnabar", 1],
		["uraninite", 1]
	  ]
	},
	{
	  name: "chromite",
	  weight: 80,
	  minY: -50,
	  maxY: 55,
	  validStones: ["granite", "diorite", "gabbro", "schist", "phyllite"],
	  oreAndWeight: [
		["chromite", 2],
		["nickel", 1]
	  ]
	}
  ]