// priority 10
let addTFCPartHeatingRecipes = (/** @type {Internal.DataPackEventJS} */ event) => {
	let addTFCHeatCapability = (item, heat, forgTemp, weldTemp) => {
		/** @type {Internal.LinkedHashMap} */
		let json = JsonIO.toObject({ ingredient: Item.of(item).toJson(), heat_capacity: heat })
		forgTemp && json.put("forging_temperature", forgTemp)
		weldTemp && json.put("welding_temperature", weldTemp)
		let itemLocation = Utils.id(item)
		event.addJson(`${itemLocation.namespace}:tfc/item_heats/metal/${itemLocation.path}.json`, json)
	}
	
	let addTFCHeatingRecipe = (item, fluid, meltTemp, amount) => {
		/** @type {Internal.LinkedHashMap} */	
		let json = JsonIO.toObject({
			type: "tfc:heating",
			ingredient: Ingredient.of(item).toJson(),
			//ingredient: { item: item },
			result_fluid: {
				fluid: fluid,
			amount: amount
			},
			temperature: meltTemp
		})
		let itemLocation = Utils.id(item)
		event.addJson(`tfc:recipes/heating/metal/${itemLocation.path}.json`, json)
	}
  
	let metals = [ 
		// Metal name = GT name for easy part discovery.
		// Properties found in mods' jar files. Heat cap per mb based on heat cap of ingot / 144. 
		// GTCEu metals that are added are those for which the ingot already had a heating recipe.
		// Base Metals
		// // MC|TFC
		{metal:"iron",									heatCap:0.0198,			meltTemp:1535,	fluidId:"tfc:metal/cast_iron"						}, // All iron melts to cast iron
		{metal:"cast_iron",								heatCap:0.0198,			meltTemp:1535,	fluidId:"tfc:metal/cast_iron"						},
		{metal:"wrought_iron",							heatCap:0.0198,			meltTemp:1535,	fluidId:"tfc:metal/cast_iron"						}, // All iron melts to cast iron
		{metal:"gold",									heatCap:0.0116,			meltTemp:1060,	fluidId:"tfc:metal/gold"							},
		{metal:"copper",								heatCap:0.0198,			meltTemp:1080,	fluidId:"tfc:metal/copper"							},
		{metal:"tin",									heatCap:0.0496,			meltTemp:230,	fluidId:"tfc:metal/tin"								},
		{metal:"bismuth",								heatCap:0.0496,			meltTemp:270,	fluidId:"tfc:metal/bismuth"							},
		{metal:"nickel",								heatCap:0.0144,			meltTemp:1453,	fluidId:"tfc:metal/nickel"							},
		{metal:"silver",								heatCap:0.0144,			meltTemp:961,	fluidId:"tfc:metal/silver"							},
		{metal:"zinc",									heatCap:0.0331,			meltTemp:420,	fluidId:"tfc:metal/zinc"							},
		// // TFC addons
		{metal:"chromium",								heatCap:0.0331,			meltTemp:420,	fluidId:"gtceu:chromium"							},
		{metal:"aluminium",								heatCap:0.0198,			meltTemp:650,	fluidId:"tfc_ie_addon:metal/aluminum"				},
		{metal:"lead",									heatCap:0.0198,			meltTemp:500,	fluidId:"gtceu:lead"								},
		// // GTCEu
		{metal:"magnetic_iron",							heatCap:0.0198,			meltTemp:1535,	fluidId:"tfc:metal/cast_iron"						}, // All iron melts to cast iron
		{metal:"annealed_copper",						heatCap:0.0198,			meltTemp:1080,	fluidId:"gtceu:annealed_copper"						},
		{metal:"americium",								heatCap:0.0198,			meltTemp:1219,	fluidId:"gtceu:americium"							},
		{metal:"antimony",								heatCap:0.0198,			meltTemp:674,	fluidId:"gtceu:antimony"							},
		{metal:"beryllium",								heatCap:0.0198,			meltTemp:1219,	fluidId:"gtceu:beryllium"							},
		{metal:"cobalt",								heatCap:0.0198,			meltTemp:1538,	fluidId:"gtceu:cobalt"								},
		{metal:"darmstadtium",							heatCap:0.0198,			meltTemp:1538,	fluidId:"gtceu:darmstadtium"						},
		{metal:"gallium",								heatCap:0.0198,			meltTemp:73,	fluidId:"gtceu:gallium"								},
		{metal:"indium",								heatCap:0.0198,			meltTemp:200,	fluidId:"gtceu:indium"								},
		{metal:"lanthanum",								heatCap:0.0198,			meltTemp:962,	fluidId:"gtceu:lanthanum"							},
		{metal:"manganese",								heatCap:0.0198,			meltTemp:1289,	fluidId:"gtceu:manganese"							},
		{metal:"neodymium",								heatCap:0.0198,			meltTemp:1067,	fluidId:"gtceu:neodymium"							},
		{metal:"plutonium",								heatCap:0.0198,			meltTemp:683,	fluidId:"gtceu:plutonium"							},
		{metal:"plutonium_241",							heatCap:0.0198,			meltTemp:683,	fluidId:"gtceu:plutonium_241"						},
		{metal:"samarium",								heatCap:0.0198,			meltTemp:1115,	fluidId:"gtceu:samarium"							},
		{metal:"thorium",								heatCap:0.0198,			meltTemp:1793,	fluidId:"gtceu:thorium"								},
		{metal:"uranium",								heatCap:0.0198,			meltTemp:1175,	fluidId:"gtceu:uranium"								},
		{metal:"uranium_235",							heatCap:0.0198,			meltTemp:1175,	fluidId:"gtceu:uranium_235"							},
		{metal:"vanadium",								heatCap:0.0198,			meltTemp:1175,	fluidId:"gtceu:vanadium"							},
		{metal:"yttrium",								heatCap:0.0198,			meltTemp:1569,	fluidId:"gtceu:yttrium"								},
		// Alloys
		// // TFC
		{metal:"bronze",								heatCap:0.0198,			meltTemp:950,	fluidId:"tfc:metal/bronze"							},
		{metal:"bismuth_bronze",						heatCap:0.0198,			meltTemp:985,	fluidId:"tfc:metal/bismuth_bronze"					},
		{metal:"black_bronze",							heatCap:0.0198,			meltTemp:1070,	fluidId:"tfc:metal/black_bronze"					},
		{metal:"brass",									heatCap:0.0198,			meltTemp:930,	fluidId:"tfc:metal/brass"							},
		{metal:"rose_gold",								heatCap:0.0198,			meltTemp:960,	fluidId:"tfc:metal/rose_gold"						},
		{metal:"sterling_silver",						heatCap:0.0198,			meltTemp:960,	fluidId:"tfc:metal/sterling_silver"					},
		// // TFC addons
		{metal:"constantan",							heatCap:0.0198,			meltTemp:750,	fluidId:"tfc_ie_addon:metal/constantan"				},
		{metal:"electrum",								heatCap:0.0198,			meltTemp:900,	fluidId:"tfc_ie_addon:metal/electrum"				},
		// // GTCEu
		{metal:"cupronickel",							heatCap:0.0198,			meltTemp:1312,	fluidId:"gtceu:cupronickel"							},
		{metal:"invar",									heatCap:0.0198,			meltTemp:1686,	fluidId:"gtceu:invar"								},
		{metal:"soldering_alloy",						heatCap:0.0198,			meltTemp:900,	fluidId:"gtceu:soldering_alloy"						},
		{metal:"battery_alloy",							heatCap:0.0198,			meltTemp:430,	fluidId:"gtceu:battery_alloy"						},
		{metal:"kanthal",								heatCap:0.0198,			meltTemp:1478,	fluidId:"gtceu:kanthal"								},
		{metal:"magnalium",								heatCap:0.0198,			meltTemp:699,	fluidId:"gtceu:magnalium"							},
		{metal:"tin_alloy",								heatCap:0.0198,			meltTemp:1028,	fluidId:"gtceu:tin_alloy"							},
		{metal:"vanadium_gallium",						heatCap:0.0198,			meltTemp:1482,	fluidId:"gtceu:vanadium_gallium"					},
		{metal:"gallium_arsenide",						heatCap:0.0198,			meltTemp:1281,	fluidId:"gtceu:gallium_arsenide"					},
		{metal:"indium_gallium_phosphide",				heatCap:0.0198,			meltTemp:120,	fluidId:"gtceu:indium_gallium_phosphide"			},
		{metal:"nickel_zinc_ferrite",					heatCap:0.0198,			meltTemp:810,	fluidId:"gtceu:nickel_zinc_ferrite"					},
		{metal:"manganese_phosphide",					heatCap:0.0198,			meltTemp:1138,	fluidId:"gtceu:manganese_phosphide"					},
		{metal:"magnesium_diboride",					heatCap:0.0198,			meltTemp:813,	fluidId:"gtceu:magnesium_diboride"					},
		{metal:"mercury_barium_calcium_cuprate",		heatCap:0.0198,			meltTemp:845,	fluidId:"gtceu:mercury_barium_calcium_cuprate"		},
		{metal:"nichrome",								heatCap:0.0198,			meltTemp:1588,	fluidId:"gtceu:nichrome"							},
		{metal:"samarium_iron_arsenic_oxide",			heatCap:0.0198,			meltTemp:1117,	fluidId:"gtceu:samarium_iron_arsenic_oxide"			},
		{metal:"indium_tin_barium_titanium_cuprate",	heatCap:0.0198,			meltTemp:845,	fluidId:"gtceu:indium_tin_barium_titanium_cuprate"	},
		{metal:"cobalt_brass",							heatCap:0.0198,			meltTemp:972,	fluidId:"gtceu:cobalt_brass"						},
		{metal:"potin",									heatCap:0.0198,			meltTemp:854,	fluidId:"gtceu:potin"								},
		{metal:"red_alloy",								heatCap:0.0198,			meltTemp:1170,	fluidId:"gtceu:red_alloy"							},
		{metal:"blue_alloy",							heatCap:0.0198,			meltTemp:1170,	fluidId:"gtceu:blue_alloy"							},
		// Steels
		// // TFC addons
		{metal:"pig_iron",								heatCap:0.0198,			meltTemp:1540,	fluidId:"tfc:metal/pig_iron"						},
		{metal:"steel",									heatCap:0.0198,			meltTemp:1540,	fluidId:"tfc:metal/steel"							},
		{metal:"black_steel",							heatCap:0.0198,			meltTemp:1485,	fluidId:"tfc:metal/black_steel"						},
		{metal:"red_steel",								heatCap:0.0198,			meltTemp:1540,	fluidId:"tfc:metal/red_steel"						},
		{metal:"blue_steel",							heatCap:0.0198,			meltTemp:1250,	fluidId:"tfc:metal/blue_steel"						},
		{metal:"damascus_steel",						heatCap:0.0198,			meltTemp:1270,	fluidId:"gtceu:damascus_steel"						},
		// // GTCEu
		{metal:"stainless_steel",						heatCap:0.0198,			meltTemp:1181,	fluidId:"gtceu:stainless_steel"						},
		{metal:"vanadium_steel",						heatCap:0.0198,			meltTemp:1175,	fluidId:"gtceu:vanadium_steel"						}		
	]

	let partTypes = [ // Amounts based on part remelting or lowest possible cost of part type.
		{type:"ingot",				fluidAmount:144		}, // 1 ingot
		{type:"ingot2x",			fluidAmount:288		}, // 1 ingot
		{type:"block",				fluidAmount:1296	}, // 9 ingots
		{type:"slab",				fluidAmount:648		}, // 1/2 block
		{type:"stairs",				fluidAmount:972		}, // 3/4 block (although some stairs are made 6:4 instead of 6:8)
		{type:"nugget",				fluidAmount:16		}, // 1/9 ingot
		{type:"frameBlock",			fluidAmount:288		}, // 2 ingots (based on GT scrap resmelting)
		{type:"sheetBlock",			fluidAmount:144		}, // 1 ingot
		{type:"sheetHalf",			fluidAmount:72		}, // 1/2 ingot
		{type:"platedBlock",		fluidAmount:72		}, // 1/2 ingot
		{type:"bars",				fluidAmount:18		}, // As TFC bars
		{type:"chain",				fluidAmount:9		}, // As TFC chains
		{type:"plate",				fluidAmount:144		}, // 1 ingot
		{type:"plate2x",			fluidAmount:288		}, // 2 ingots
		{type:"foil",				fluidAmount:36		}, // 1/4 ingots
		{type:"rod",				fluidAmount:72		}, // 1/2 ingot
		{type:"longRod",			fluidAmount:144		}, // 2 rods
		{type:"bolt",				fluidAmount:16		}, // 1/9 ingot
		{type:"screw",				fluidAmount:16		}, // 1/9 ingot
		{type:"ring",				fluidAmount:36		}, // 1/4 ingot
		{type:"spring",				fluidAmount:144		}, // 1 ingot
		{type:"smallSpring",		fluidAmount:36		}, // 1/4 ingot
		{type:"smallGear",			fluidAmount:144		}, // 1 ingot
		{type:"gear",				fluidAmount:516		}, // 4 ingots
		{type:"coin",				fluidAmount:16		}, // 1 nugget (gt coints get a better ratio from grinding / plasma smelting)
		{type:"mold",				fluidAmount:516		}, // 4 ingots
		{type:"fineWire",			fluidAmount:18		}, // 1/4 ingot
		{type:"createWire",			fluidAmount:36		}, // 1/4 ingot
		{type:"gtWire1x",			fluidAmount:72		}, // 1/2 ingot
		{type:"gtWire2x",			fluidAmount:144		}, // 2 wires
		{type:"gtWire4x",			fluidAmount:576		}, // 4 wires
		{type:"gtWire8x",			fluidAmount:1152	}, // 8 wires
		{type:"gtWire16x",			fluidAmount:2304	}, // 16 wires
		{type:"electrode",			fluidAmount:432		}, // 3 ingots
		{type:"gtPipeTiny",			fluidAmount:72		}, // 1/2 ingot
		{type:"gtPipeSmall",		fluidAmount:144		}, // 1 ingot
		{type:"gtPipeNormal",		fluidAmount:432		}, // 3 ingots
		{type:"gtPipeLarge",		fluidAmount:864		}, // 6 ingots
		{type:"gtPipeHuge",			fluidAmount:1728	}, // 16 ingots
		{type:"gtPipe4x",			fluidAmount:576		}, // 4 small pipes
		{type:"gtPipe9x",			fluidAmount:1296	}, // 9 small pipes
		{type:"rotor",				fluidAmount:576		}, // 4 ingots
		{type:"turbineBlade",		fluidAmount:1440	}, // 10 ingots
		{type:"toolHead1x",			fluidAmount:144		}, // 1 ingot (tools that are forged from 1 ingot or plates)
		{type:"toolHead2x",			fluidAmount:288		}, // 2 ingots (tools that are forged from 2 ingots or plates)
		{type:"toolHead4x",			fluidAmount:576		}, // 4 ingots (tools that are forged from 4+ ingots or plates)
		{type:"toolHead6x",			fluidAmount:864		}, // 6 ingots (tools that are forged from 6+ ingots or plates)		
		{type:"bulletCasingSmall",	fluidAmount:12		}, // 1/12 ingots
		{type:"bulletCasingMedium",	fluidAmount:18		}, // 1/8 ingots
		{type:"bulletCasingLarge",	fluidAmount:28		}  // 1/5 ingots (rounded down)
	]
	
	// These keywords are used in the replaceTFCHeatingAndCasting event to halve TFC recipes which includes recipes from this script.
	// Since this script gives proper liquid values to items, the recipes that would be halved need to be doubled here to cancel the correction.
	let halvingKeywords = ["_sheet", "bars", "block", "bars"]
	
	let hasHalvingKeyword = (itemId) =>
	{
		var hasKeyword = false
		for( let i = 0; i < halvingKeywords.length; i++ ){
			if( itemId.includes(halvingKeywords[i]) ){
				hasKeyword = true
				break;
			}
		} 
		
		return hasKeyword;
	}
	
	var partHeatingDebug = false
	
	let addPartHeatingRecipe = (partId, type, metal) => 
	{		
		if( Item.exists(partId) ){
			let metalProps = metals.find(m => m.metal === metal);
			let partProps = partTypes.find(t => t.type === type);
			
			var fluidAmount = partProps.fluidAmount
			if( hasHalvingKeyword(partId) ){
				fluidAmount = fluidAmount * 2
			}
			
			// Fluid amount is floored to an ingot's worth for the purpose of calculating heat capacity.
			// This protects small items such as nuggets from being vaporized by the create bulk blaster as soon as they are produced.
			let partHeatCap = metalProps.heatCap * Math.max(144, fluidAmount) 
			
			if( partHeatingDebug ){ 
				console.info("Part found !") 
				console.info("PartId: " 	+ partId)
				console.info("Metal: "  	+ metal)
				console.info("Type: " 		+ type)
				console.info("Heat Cap: " 	+ partHeatCap)
				console.info("Melt Temp: " 	+ metalProps.meltTemp)
				console.info("FluidId: " 	+ metalProps.fluidId)
				console.info("Fluid Mb: " 	+ fluidAmount)
			}
			
			addTFCHeatCapability(partId, partHeatCap)
			addTFCHeatingRecipe(partId, metalProps.fluidId, metalProps.meltTemp, fluidAmount)
			
		} else {
			if( partHeatingDebug ){ console.info("Part not found !") }
		}
	}
	
	// GT metals with existing support for plates and rods. Will need to be skipped to avoid duplicate recipes.
	let GT_metalsWithHeating = [
		"wrought_iron", "gold", "copper", "tin", "bismuth", "nickel", "silver", "zinc",
		"bronze", "bismuth_bronze", "black_bronze", "brass",
		"steel", "black_steel", "red_steel", "blue_steel"
	]
	
	// GT parts (will find parts which ID matches the metal's name)
	metals.forEach((metal) => {
		// Nuggets
		addPartHeatingRecipe("gtceu:" + metal.metal + "_nugget", "nugget", metal.metal)
		// Blocks
		addPartHeatingRecipe("gtceu:" + metal.metal + "_block", "block", metal.metal)
		// frames
		addPartHeatingRecipe("gtceu:" + metal.metal + "_frame", "frameBlock", metal.metal)
		// Plates
		if( ! GT_metalsWithHeating.includes(metal.metal) ){
			addPartHeatingRecipe("gtceu:" + metal.metal + "_plate", "plate", metal.metal)
			addPartHeatingRecipe("gtceu:double_" + metal.metal + "_plate", "plate2x", metal.metal)
		}
		// Foils
		addPartHeatingRecipe("gtceu:" + metal.metal + "_foil", "foil", metal.metal)
		// Rods
		if( ! GT_metalsWithHeating.includes(metal.metal) ){
			addPartHeatingRecipe("gtceu:" + metal.metal + "_rod", "rod", metal.metal)
		}
		addPartHeatingRecipe("gtceu:long_" + metal.metal + "_rod", "longRod", metal.metal)
		// Bolts
		addPartHeatingRecipe("gtceu:" + metal.metal + "_bolt", "bolt", metal.metal)
		// Screws
		addPartHeatingRecipe("gtceu:" + metal.metal + "_screw", "screw", metal.metal)
		// Rings
		addPartHeatingRecipe("gtceu:" + metal.metal + "_ring", "ring", metal.metal)
		// Springs
		addPartHeatingRecipe("gtceu:" + metal.metal + "_spring", "spring", metal.metal)
		addPartHeatingRecipe("gtceu:small_" + metal.metal + "_spring", "smallSpring", metal.metal)
		// Gears
		addPartHeatingRecipe("gtceu:" + metal.metal + "_gear", "gear", metal.metal)
		addPartHeatingRecipe("gtceu:small_" + metal.metal + "_gear", "smallGear", metal.metal)
		// Fine Wires
		addPartHeatingRecipe("gtceu:fine_" + metal.metal + "_wire", "fineWire", metal.metal)
		// Wires
		addPartHeatingRecipe("gtceu:" + metal.metal + "_single_wire", "gtWire1x", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_double_wire", "gtWire2x", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_quadruple_wire", "gtWire4x", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_octal_wire", "gtWire8x", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_hex_wire", "gtWire16x", metal.metal)
		// Fluid Pipes
		addPartHeatingRecipe("gtceu:" + metal.metal + "_tiny_fluid_pipe", "gtPipeTiny", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_small_fluid_pipe", "gtPipeSmall", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_normal_fluid_pipe", "gtPipeNormal", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_large_fluid_pipe", "gtPipeLarge", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_huge_fluid_pipe", "gtPipeHuge", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_quadruple_fluid_pipe", "gtPipe4x", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_nonuple_fluid_pipe", "gtPipe9x", metal.metal)
		// Item Pipes
		addPartHeatingRecipe("gtceu:" + metal.metal + "_small_item_pipe", "gtPipeSmall", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_small_restrictive_item_pipe", "gtPipeSmall", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_normal_item_pipe", "gtPipeNormal", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_normal_restrictive_item_pipe", "gtPipeNormal", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_large_item_pipe", "gtPipeLarge", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_large_restrictive_item_pipe", "gtPipeLarge", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_huge_item_pipe", "gtPipeHuge", metal.metal)
		addPartHeatingRecipe("gtceu:" + metal.metal + "_huge_restrictive_item_pipe", "gtPipeHuge", metal.metal)
		// Rotors
		addPartHeatingRecipe("gtceu:" + metal.metal + "_rotor", "rotor", metal.metal)
		// Turbine blades
		addPartHeatingRecipe("gtceu:" + metal.metal + "_turnbine_blade", "turbineBlade", metal.metal)
		// GT Tool parts
		addPartHeatingRecipe("gtceu:" + metal.metal + "_buzz_saw_blade", "toolHead4x", metal.metal)  // made from 1 gear which is worth 4 ingots.
		addPartHeatingRecipe("gtceu:" + metal.metal + "_screwdriver_tip", "toolHead1x", metal.metal) // Made from a long rod which is worth 1 ingots.
		addPartHeatingRecipe("gtceu:" + metal.metal + "_wrench_tip", "toolHead4x", metal.metal)      // Made from 4 plates + small parts.
		addPartHeatingRecipe("gtceu:" + metal.metal + "_chainsaw_head", "toolHead6x", metal.metal)   // Made from 6 plates + small parts.
		// G² Tool parts (gregitas mod uses the same metal names)
		addPartHeatingRecipe("gregitas:" + metal.metal + "_saw_blade", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_file_head", "toolHead2x", metal.metal) // forged from 1 double ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_hammer_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_knife_blade", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_crowbar_base", "toolHead2x", metal.metal) // forged from 1 double ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_cutter_blade", "toolHead2x", metal.metal) // forged from 1 double ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_wrench_base", "toolHead2x", metal.metal) // forged from 1 double plate
		addPartHeatingRecipe("gregitas:" + metal.metal + "_wrench_claw", "toolHead1x", metal.metal) // forged from 1 plate
		addPartHeatingRecipe("gregitas:" + metal.metal + "_axe_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_hoe_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_pickaxe_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_shovel_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_scythe_head", "toolHead1x", metal.metal) // forged from 1 ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_sword_blade", "toolHead2x", metal.metal) // forged from 1 double ingot
		addPartHeatingRecipe("gregitas:" + metal.metal + "_butchery_blade", "toolHead2x", metal.metal) // forged from 1 double plate
		// Drill heads are made of 2 metals so no resmelting
	})
	
	// All the godamme copper blocks...
	partHeatingDebug = false
	let namespaces = ["minecraft:", "create:"]
	let waxings = ["", "waxed_"]
	let oxidizations = ["", "exposed_", "weathered_", "oxidized_"]	
	let cuttings = ["", "cut_"]	
	let shapes = [
		{shape:"",					type:"block"	},
		{shape:"_block",			type:"block"	},
		{shape:"_slab",				type:"slab"		},
		{shape:"_stairs",			type:"stairs"	},		
		{shape:"_tiles",			type:"block"	},
		{shape:"_tile_slab",		type:"slab"		},
		{shape:"_tile_stairs",		type:"stairs"	},
		{shape:"_shingles",			type:"block"	},
		{shape:"_shingle_slab",		type:"slab"		},
		{shape:"_shingle_stairs",	type:"stairs"	}
	]
	
	namespaces.forEach((namespace) => {
		waxings.forEach((waxing) => {
			oxidizations.forEach((oxidization) => {
				cuttings.forEach((cutting) => {
					shapes.forEach((shape) => {			
						addPartHeatingRecipe(namespace + waxing + oxidization + cutting + "copper" + shape.shape, shape.type, "copper")
					})
				})
			})
		})
	})
	
	// All the other parts:
	let parts = [
		// Nuggets
		//{partId:"minecraft:iron_nugget",							type:"nugget",				metal:"iron"			},
		{partId:"gtceu:iron_round",									type:"nugget",				metal:"iron"			}, // worth 1 nugget
		{partId:"gregitas_core:magnetic_wrought_iron_nugget",		type:"nugget",				metal:"wrought_iron"	}, // handle magnetic wrought manually as wrought_iron
		{partId:"thoriumreactors:blasted_iron_nugget",				type:"nugget",				metal:"iron"			},
		{partId:"minecraft:gold_nugget",							type:"nugget",				metal:"gold"			},
		// Ingots
		{partId:"minecraft:iron_ingot",								type:"ingot",				metal:"iron"			},
		{partId:"gtceu:magnetic_iron_ingot",						type:"ingot",				metal:"magnetic_iron"	}, // Ingots not handled by GT loop
		{partId:"gregitas_core:magnetic_wrought_iron_ingot",		type:"ingot",				metal:"wrought_iron"	},
		{partId:"thoriumreactors:blasted_iron_ingot",				type:"ingot",				metal:"iron"			},
		{partId:"vintage:vanadium_ingot",				type:"ingot",				metal:"vanadium"		},
		{partId:"gtceu:thorium_ingot",								type:"ingot",				metal:"thorium"			}, // thorium ingot wasn't heatable even though the ore is
		// Blocks		
		{partId:"minecraft:iron_block",								type:"block",				metal:"iron"			},
		{partId:"gregitas_core:magnetic_wrought_iron_block",		type:"block",				metal:"wrought_iron"	},
		{partId:"thoriumreactors:blasted_iron_block",				type:"block",				metal:"iron"			},
		{partId:"minecraft:gold_block",								type:"block",				metal:"gold"			},
		{partId:"immersiveengineering:storage_aluminum",			type:"block",				metal:"aluminium"		},
		{partId:"thoriumreactors:aluminum_block",					type:"block",				metal:"aluminium"		},
		{partId:"scguns:ancient_brass_block",						type:"block",				metal:"brass"			},
		{partId:"immersiveengineering:storage_constantan",			type:"block",				metal:"constantan"		},
		{partId:"immersiveengineering:storage_steel",				type:"block",				metal:"steel"			},
		// Slabs
		{partId:"immersiveengineering:slab_storage_aluminum",		type:"slab",				metal:"aluminium"		},
		{partId:"immersiveengineering:storage_uranium",				type:"slab",				metal:"uranium"			},
		{partId:"immersiveengineering:slab_storage_silver",			type:"slab",				metal:"silver"			},
		{partId:"immersiveengineering:slab_storage_electrum",		type:"slab",				metal:"electrum"		},
		{partId:"immersiveengineering:slab_storage_constantan",		type:"slab",				metal:"constantan"		},		
		{partId:"immersiveengineering:slab_storage_steel",			type:"slab",				metal:"steel"			},
		// Plates
		{partId:"vintage:cast_iron_sheet",				type:"plate",				metal:"iron"			}, // Fluid amount for this one ends up being halved for an unknown reason.
		{partId:"vintage:vanadium_sheet",				type:"plate",				metal:"vanadium"		}, // Fluid amount for this one ends up being halved for an unknown reason.
		{partId:"vintage:constantan_sheet",				type:"plate",				metal:"constantan"		}, // Fluid amount for this one ends up being halved for an unknown reason.
		{partId:"vintage:pig_iron_sheet",				type:"plate",				metal:"pig_iron"		}, // Fluid amount for this one ends up being halved for an unknown reason.
		{partId:"scguns:ancient_brass",								type:"plate",				metal:"brass"			}, 
		// Foil
		// // NA
		// Rods
		{partId:"gregitas_core:magnetic_wrought_iron_rod",			type:"longRod",				metal:"wrought_iron"	},
		{partId:"vintage:cast_iron_rod",				type:"longRod",				metal:"iron"			},
		// Bolts & Screws
		{partId:"firmaciv:copper_bolt",								type:"bolt",				metal:"copper"			},
		// Rings
		// // NA
		// Gears
		{partId:"railcraft:gold_gear",								type:"gear",				metal:"gold"			},
		{partId:"railcraft:copper_gear",							type:"gear",				metal:"copper"			},
		{partId:"railcraft:tin_gear",								type:"gear",				metal:"tin"				},
		{partId:"railcraft:lead_gear",								type:"gear",				metal:"lead"			},
		{partId:"railcraft:silver_gear",							type:"gear",				metal:"silver"			},
		{partId:"railcraft:nickel_gear",							type:"gear",				metal:"nickel"			},
		{partId:"railcraft:zinc_gear",								type:"gear",				metal:"zinc"			},
		{partId:"railcraft:brass_gear",								type:"gear",				metal:"brass"			},		
		// Coins
		{partId:"createdeco:iron_coin",								type:"coin",				metal:"iron"			},
		{partId:"gtceu:ancient_gold_coin",							type:"coin",				metal:"gold"			},
		{partId:"createdeco:gold_coin",								type:"coin",				metal:"gold"			},
		{partId:"gtceu:copper_credit",								type:"coin",				metal:"copper"			},
		{partId:"createdeco:copper_coin",							type:"coin",				metal:"copper"			},
		{partId:"gtceu:silver_credit",								type:"coin",				metal:"silver"			},
		{partId:"createdeco:zinc_coin",								type:"coin",				metal:"zinc"			},
		{partId:"gtceu:doge_coin",									type:"coin",				metal:"brass"			},
		{partId:"gtceu:cupronickel_credit",							type:"coin",				metal:"cupronickel"		},
		// Rotors
		// // NA
		// Turbine blades
		// // NA
		// Sheet blocks (both sheet slabs and sheet chutes are worth half a sheet block)
		{partId:"immersiveengineering:sheetmetal_iron",				type:"sheetBlock",			metal:"iron"			},
		{partId:"immersiveengineering:slab_sheetmetal_iron",		type:"sheetHalf",			metal:"iron"			},
		{partId:"immersiveengineering:chute_iron",					type:"sheetHalf",			metal:"iron"			},
		{partId:"immersiveengineering:sheetmetal_gold",				type:"sheetBlock",			metal:"gold"			},
		{partId:"immersiveengineering:slab_sheetmetal_gold",		type:"sheetHalf",			metal:"gold"			},
		{partId:"immersiveengineering:sheetmetal_copper",			type:"sheetBlock",			metal:"copper"			},
		{partId:"createdeco:copper_sheet_metal",					type:"sheetBlock",			metal:"copper"			},
		{partId:"immersiveengineering:slab_sheetmetal_copper",		type:"sheetHalf",			metal:"copper"			},
		{partId:"immersiveengineering:chute_copper",				type:"sheetHalf",			metal:"copper"			},
		{partId:"immersiveengineering:sheetmetal_aluminum",			type:"sheetBlock",			metal:"aluminium"		},
		{partId:"immersiveengineering:slab_sheetmetal_aluminum",	type:"sheetHalf",			metal:"aluminium"		},
		{partId:"immersiveengineering:chute_aluminum",				type:"sheetHalf",			metal:"aluminium"		},
		{partId:"immersiveengineering:sheetmetal_lead",				type:"sheetBlock",			metal:"lead"			},
		{partId:"immersiveengineering:slab_sheetmetal_lead",		type:"sheetHalf",			metal:"lead"			},
		{partId:"immersiveengineering:sheetmetal_silver",			type:"sheetBlock",			metal:"silver"			},
		{partId:"immersiveengineering:slab_sheetmetal_silver",		type:"sheetHalf",			metal:"silver"			},
		{partId:"immersiveengineering:sheetmetal_nickel",			type:"sheetBlock",			metal:"nickel"			},
		{partId:"immersiveengineering:slab_sheetmetal_nickel",		type:"sheetHalf",			metal:"nickel"			},
		{partId:"immersiveengineering:sheetmetal_uranium",			type:"sheetBlock",			metal:"uranium"			},
		{partId:"immersiveengineering:slab_sheetmetal_uranium",		type:"sheetHalf",			metal:"uranium"			},
		{partId:"immersiveengineering:sheetmetal_constantan",		type:"sheetBlock",			metal:"constantan"		},
		{partId:"immersiveengineering:slab_sheetmetal_constantan",	type:"sheetHalf",			metal:"constantan"		},
		{partId:"immersiveengineering:sheetmetal_electrum",			type:"sheetBlock",			metal:"electrum"		},
		{partId:"immersiveengineering:slab_sheetmetal_electrum",	type:"sheetHalf",			metal:"electrum"		},		
		{partId:"immersiveengineering:sheetmetal_steel",			type:"sheetBlock",			metal:"steel"			},
		{partId:"immersiveengineering:slab_sheetmetal_steel",		type:"sheetHalf",			metal:"steel"			},
		{partId:"immersiveengineering:chute_steel",					type:"sheetHalf",			metal:"steel"			},
		// // Dyed sheet blocks can be of any above metal so no melting.		
		// Plated Blocks (for some reason the addon ones are meltable but not the TFC ones.
		{partId:"tfc:metal/block/cast_iron",						type:"platedBlock",			metal:"iron"			},
		{partId:"tfc:metal/block/wrought_iron",						type:"platedBlock",			metal:"iron"			},
		{partId:"tfc:metal/block/gold",								type:"platedBlock",			metal:"gold"			},
		{partId:"tfc:metal/block/copper",							type:"platedBlock",			metal:"copper"			},
		{partId:"tfc:metal/block/tin",								type:"platedBlock",			metal:"tin"				},
		{partId:"tfc:metal/block/bismuth",							type:"platedBlock",			metal:"bismuth"			},
		{partId:"tfc:metal/block/nickel",							type:"platedBlock",			metal:"nickel"			},
		{partId:"tfc:metal/block/silver",							type:"platedBlock",			metal:"silver"			},
		{partId:"tfc:metal/block/zinc",								type:"platedBlock",			metal:"zinc"			},
		{partId:"tfc:metal/block/bronze",							type:"platedBlock",			metal:"bronze"			},
		{partId:"tfc:metal/block/bismuth_bronze",					type:"platedBlock",			metal:"bismuth_bronze"	},
		{partId:"tfc:metal/block/black_bronze",						type:"platedBlock",			metal:"black_bronze"	},
		{partId:"tfc:metal/block/brass",							type:"platedBlock",			metal:"brass"			},
		{partId:"tfc:metal/block/rose_gold",						type:"platedBlock",			metal:"rose_gold"		},
		{partId:"tfc:metal/block/sterling_silver",					type:"platedBlock",			metal:"sterling_silver"	},
		{partId:"tfc:metal/block/steel",							type:"platedBlock",			metal:"steel"			},
		{partId:"tfc:metal/block/black_steel",						type:"platedBlock",			metal:"black_steel"		},
		{partId:"tfc:metal/block/blue_steel",						type:"platedBlock",			metal:"blue_steel"		},
		{partId:"tfc:metal/block/red_steel",						type:"platedBlock",			metal:"red_steel"		},
		// Bars
		{partId:"minecraft:iron_bars",								type:"bars",				metal:"iron"			},
		{partId:"create:copper_bars",								type:"bars",				metal:"copper"			},
		{partId:"createdeco:copper_bars",							type:"bars",				metal:"copper"			},
		{partId:"createdeco:copper_bars_overlay",					type:"bars",				metal:"copper"			},
		{partId:"createdeco:zinc_bars",								type:"bars",				metal:"zinc"			},
		{partId:"createdeco:zinc_bars_overlay",						type:"bars",				metal:"zinc"			},
		{partId:"create:brass_bars",								type:"bars",				metal:"brass"			},
		{partId:"createdeco:brass_bars",							type:"bars",				metal:"brass"			},
		{partId:"createdeco:brass_bars_overlay",					type:"bars",				metal:"brass"			},
		// Chains
		{partId:"minecraft:chain",									type:"chain",				metal:"iron"			},
		// Create/IE wires (IE wire coils are converted 1:1 from create wires)
		{partId:"createaddition:iron_wire",							type:"createWire",			metal:"iron"			},
		{partId:"vintage:cast_iron_wire",				type:"createWire",			metal:"iron"			},
		{partId:"createaddition:gold_wire",							type:"createWire",			metal:"gold"			},		
		{partId:"createaddition:copper_wire",						type:"createWire",			metal:"copper"			},
		{partId:"immersiveengineering:wirecoil_copper",				type:"createWire",			metal:"copper"			},
		{partId:"immersiveengineering:wirecoil_copper_ins",			type:"createWire",			metal:"copper"			},
		{partId:"vintage:tin_wire",						type:"createWire",			metal:"tin"				},
		{partId:"vintage:aluminum_wire",				type:"createWire",			metal:"aluminium"		},
		{partId:"vintage:lead_wire",					type:"createWire",			metal:"lead"			},
		{partId:"vintage:silver_wire",					type:"createWire",			metal:"silver"			},
		{partId:"vintage:nickel_wire",					type:"createWire",			metal:"nickel"			},
		{partId:"vintage:zinc_wire",					type:"createWire",			metal:"zinc"			},
		{partId:"vintage:cobalt_wire",					type:"createWire",			metal:"cobalt"			},
		{partId:"vintage:uranium_wire",					type:"createWire",			metal:"uranium"			},
		{partId:"vintage:vanadium_wire",				type:"createWire",			metal:"vanadium"		},
		{partId:"createaddition:electrum_wire",						type:"createWire",			metal:"electrum"		},
		{partId:"immersiveengineering:wirecoil_electrum",			type:"createWire",			metal:"electrum"		},
		{partId:"immersiveengineering:wirecoil_electrum_ins",		type:"createWire",			metal:"electrum"		},
		{partId:"vintage:bronze_wire",					type:"createWire",			metal:"bronze"			},
		{partId:"vintage:brass_wire",					type:"createWire",			metal:"brass"			},
		{partId:"vintage:rose_gold_wire",				type:"createWire",			metal:"rose_gold"		},
		{partId:"vintage:constantan_wire",				type:"createWire",			metal:"constantan"		},
		{partId:"vintage:invar_wire",					type:"createWire",			metal:"invar"			},
		{partId:"vintage:pig_iron_wire",				type:"createWire",			metal:"pig_iron"		},
		{partId:"vintage:steel_wire",					type:"createWire",			metal:"steel"			},
		{partId:"immersiveengineering:wirecoil_steel",				type:"createWire",			metal:"steel"			},
		// Fine wires
		{partId:"create_new_age:overcharged_iron_wire",				type:"fineWire",			metal:"iron"			}, // new age wires have an equivalent cost to fine wires
		{partId:"create_new_age:overcharged_golden_wire",			type:"fineWire",			metal:"neodymium"		},
		{partId:"create_new_age:copper_wire",						type:"fineWire",			metal:"copper"			},		
		// Railcraft electrodes
		{partId:"railcraft:iron_electrode",							type:"electrode",			metal:"iron"			},
		{partId:"railcraft:gold_electrode",							type:"electrode",			metal:"gold"			},
		{partId:"railcraft:copper_electrode",						type:"electrode",			metal:"copper"			},
		{partId:"railcraft:tin_electrode",							type:"electrode",			metal:"tin"				},
		// Pipes
		{partId:"immersiveengineering:fluid_pipe",					type:"gtPipeTiny",			metal:"iron"			}, // Treated as a tiny gtpipe for fluid amount (some return lost)
		{partId:"create:fluid_pipe",								type:"gtPipeTiny",			metal:"copper"			}, // Treated as a tiny gtpipe for fluid amount (some return lost)
		// Bullet casings
		{partId:"scguns:small_iron_casing",							type:"bulletCasingSmall",	metal:"iron"			},
		{partId:"scguns:large_iron_casing",							type:"bulletCasingLarge",	metal:"iron"			},
		{partId:"scguns:small_copper_casing",						type:"bulletCasingSmall",	metal:"copper"			},	
		{partId:"scguns:medium_copper_casing",						type:"bulletCasingMedium",	metal:"copper"			},
		{partId:"scguns:small_brass_casing",						type:"bulletCasingSmall",	metal:"brass"			},	
		{partId:"scguns:medium_brass_casing",						type:"bulletCasingMedium",	metal:"brass"			},		
		// Misc.
		{partId:"sgjourney:golden_idol",							type:"ingot",				metal:"gold"			}  // Treat as ingot for fluid amount
	]
	
	partHeatingDebug = false
	parts.forEach((part) => {
		addPartHeatingRecipe(part.partId, part.type, part.metal)
	})
}
