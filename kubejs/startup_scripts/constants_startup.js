// priority 100

const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty")
const $EventActor = Java.loadClass("dev.architectury.event.EventActor")
const $CustomClickEvent = Java.loadClass("dev.ftb.mods.ftblibrary.ui.CustomClickEvent").EVENT
const $EventResult = Java.loadClass("dev.architectury.event.EventResult")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
/** @type {Internal.Stream} */
const $Stream = Java.loadClass("java.util.stream.Stream")

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