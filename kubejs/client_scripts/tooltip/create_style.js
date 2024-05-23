const addExtraCreateTooltips = (event) => {
    const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
    const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
    const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");
    /// I hate this much :|
    const FakeNewLine = "                                ";


    // Credits to Uncandango for the builder pattern script :3

    function createTooltip(/** @type {Special.Item} */ itemId) {
        return new CreateTooltipBuilder(itemId)
    }

    function CreateTooltipBuilder(itemId) {
        this.itemId = Item.of(itemId).idLocation
        this.descriptionId = Item.of(itemId).descriptionId
        this.summary = ""
        this.conditions = []
        this.behaviours = []
        this.controls = []
        this.actions = []
        this.palette = Palette.STANDARD_CREATE
    }
    CreateTooltipBuilder.prototype = {
        addSummary: function (/**@type {string} */ summary) {
            this.summary = summary
            return this
        },
        addBehaviour: function (/**@type {string[]} */ conditionAndBehaviour) {
            this.conditions.push(conditionAndBehaviour[0])
            this.behaviours.push(conditionAndBehaviour[1])
            return this
        },
        addAction: function (/**@type {string[]} */ controlsAndActions) {
            this.controls.push(controlsAndActions[0])
            this.actions.push(controlsAndActions[1])
            return this
        },
        setPalette: function (/**@type {Internal.TooltipHelper$Palette} */ palette) {
            this.palette = palette
            return this
        },
        build: function () {
            TooltipModifier.REGISTRY.registerDeferred(this.itemId, (item) => new ItemDescription(item, this.palette))
            let map = Utils.newMap()
            if (this.summary != "") {
                map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
            }
            for (let index = 0; index < this.conditions.length; index++) {
                map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
            }
            for (let index = 0; index < this.behaviours.length; index++) {
                map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
            }
            for (let index = 0; index < this.controls.length; index++) {
                map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
            }
            for (let index = 0; index < this.actions.length; index++) {
                map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
            }
            return map
        }
    }

    /// Things to note
    /// \n character doesn't work with Create tooltips, auto wraps ~30 characters
    /// 

    /* ICE AND FIRE SPAWN LOCATION INFO */ {
        /// LIGHTNING DRAGON
        event.addAll(
            createTooltip("iceandfire:spawn_egg_lightning_dragon")
                .addSummary("Here be _Lightning Dragons_")
                .addBehaviour([
                    "Avg. Temp",
                    "_Above_ or _Equal_ 15°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Below_ 200mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_Salt Marsh_, _Shore_, _Lowlands_, _Highlands_, _Low Canyons_, _Mountains_, _Mountain Lake_, _Old Mountains_, _Rolling Hills_"
                ])
                .build()
        )

        /// FIRE DRAGON
        event.addAll(
            createTooltip("iceandfire:spawn_egg_fire_dragon")
                .addSummary("Here be _Fire Dragons_")
                .addBehaviour([
                    "Avg. Temp",
                    "_Above_ or _Equal_ 15°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Above_ 300mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_Volcanic Oceanic Mountains_,         _Volcanic Oceanic Mountain Lake_, _Volcanic Mountains_, _Mountains_,  _Volcanic Mountain Lake_, _Mountain Lake_, _Old Mountains_, _Rolling Hills_"
                ])
                .build()
        )

        /// ICE DRAGON
        event.addAll(
            createTooltip("iceandfire:spawn_egg_ice_dragon")
                .addSummary("Here be _Ice Dragons_")
                .addBehaviour([
                    "Avg. Temp",
                    "_Below_ or _Equal_ 4°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Below_ 400mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_Mountains_, _Mountain Lake_,                 _Old Mountains_, _Rolling Mountains_"
                ])
                .build()
        )

        /// HIPPOGRYPH
        event.addAll(
            createTooltip("iceandfire:spawn_egg_hippogryph")
                .addSummary("Gryffindor! Oh, it's a _Hippogryph_")
                .addBehaviour([
                    "Avg. Temp",
                    "_Above_ or _Equal_ 18°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Above_ or _Equal_ 300mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_Mountains_"
                ])
                .build()
        )

        /// CYCLOPS
        event.addAll(
            createTooltip("iceandfire:spawn_egg_cyclops")
                .addSummary("_Cyclops_, Oh reminds me, my order from Planet Express is here!")
                .addBehaviour([
                    "Avg. Temp",
                    "_Above_ or _Equal_ 12°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Above_ or _Equal_ 350mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_WIP_"
                ])
                .build()
        )

        /// AMPHITHERE
        event.addAll(
            createTooltip("iceandfire:spawn_egg_amphithere")
                .addSummary("Ohm's law is _Amphithere_ * Resistance = Voltage")
                .addBehaviour([
                    "Avg. Temp",
                    "_Above_ or _Equal_ 4°C"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "_Below_ 150mm"
                ])
                .addBehaviour([
                    "TFC Biome Whitelist",
                    "_WIP_"
                ])
                .build()
        )
    }

    /* TFC FRUITING CALENDAR INFO */ {
        /// TFC SNOWBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/snowberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒§d▓▓§5█§7☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_-7_°C - _18_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC BUNCHBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/bunchberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐☐☐§2▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_15_°C - _35_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC GOOSEBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/gooseberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐☐§2▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_5_°C - _27_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC CLOUDBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/cloudberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒§d▓▓▓§5█§7☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_-2_°C - _17_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_80_mm - _380_mm]"
                ])
                .build()
        )

        /// TFC STRAWBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/strawberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§d▓▓§5█§7☐☐☐☐☐☐§2▒▒▒"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_5_°C - _28_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC WINTERGREEN BUSH
        event.addAll(
            createTooltip("tfc:plant/wintergreen_berry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐☐§2▒▒▒▒▒§d▓▓§5█§7☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_-6_°C - _17_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC CRANBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/cranberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒§d▓▓§5█§7☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_-5_°C - _17_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_250_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC BLACKBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/blackberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒§d▓▓§5█§7☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_7_°C - _24_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC RASPBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/raspberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐☐§2▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_5_°C - _25_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC BLUEBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/blueberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒§d▓▓§5█§7☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_7_°C - _29_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC ELDERBERRY BUSH
        event.addAll(
            createTooltip("tfc:plant/elderberry_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒§d▓▓§5█§7☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_10_°C - _33_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC CHERRY SAPLING
        event.addAll(
            createTooltip("tfc:plant/cherry_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§2▒▒▒§d▓▓§5█§7☐☐☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_5_°C - _25_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _350_mm]"
                ])
                .build()
        )

        /// TFC GREEN APPLE SAPLING
        event.addAll(
            createTooltip("tfc:plant/green_apple_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_1_°C - _25_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_110_mm - _280_mm]"
                ])
                .build()
        )

        /// TFC LEMON SAPLING
        event.addAll(
            createTooltip("tfc:plant/lemon_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting " + FakeNewLine +
                    "§8§oWhen life gives you lemons you make..." +
                    "§8§oFruity Fluid?")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒§d▓▓§5█§7☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_10_°C - _30_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_180_mm - _470_mm]"
                ])
                .build()
        )

        /// TFC OLIVE SAPLING
        event.addAll(
            createTooltip("tfc:plant/olive_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_5_°C - _30_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_150_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC ORANGE SAPLING
        event.addAll(
            createTooltip("tfc:plant/orange_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒§d▓▓§5█§7☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_15_°C - _36_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_250_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC PEACH SAPLING
        event.addAll(
            createTooltip("tfc:plant/peach_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting " + FakeNewLine +
                    "§8§oWhy does a spiky turtle like me?§r")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§2▒▒▒§d▓▓§5█§7☐☐☐☐☐§2▒"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_4_°C - _27_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_60_mm - _230_mm]"
                ])
                .build()
        )

        /// TFC PLUM SAPLING
        event.addAll(
            createTooltip("tfc:plant/plum_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§2▒▒▒▒§d▓▓§5█§7☐☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_15_°C - _31_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_250_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC BANANA SAPLING
        event.addAll(
            createTooltip("tfc:plant/banana_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐☐§2▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_17_°C - _35_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_280_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC RED APPLE SAPLING
        event.addAll(
            createTooltip("tfc:plant/red_apple_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒▒§d▓▓§5█§7☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_1_°C - _25_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _280_mm]"
                ])
                .build()
        )

        /// FIRMALIFE NIGHTSHADE BUSH
        event.addAll(
            createTooltip("firmalife:plant/nightshade_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐§2▒▒▒▒▒§d▓§5█§7☐☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_7_°C - _24_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _400_mm]"
                ])
                .build()
        )

        /// FIRMALIFE PINEAPPLE BUSH
        event.addAll(
            createTooltip("firmalife:plant/pineapple_bush")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§7☐☐§2▒▒▒▒§d▓▓§5█§7☐☐☐"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_20_°C - _32_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_250_mm - _500_mm]"
                ])
                .build()
        )

        /// FIRMALIFE FIG SAPLING
        event.addAll(
            createTooltip("firmalife:plant/fig_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§2▒▒§d▓▓§5█§7☐☐☐☐☐§2▒▒"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_20_°C - _35_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_125_mm - _215_mm]"
                ])
                .build()
        )

        /// FIRMALIFE COCOA SAPLING
        event.addAll(
            createTooltip("firmalife:plant/cocoa_sapling")
                .addSummary(
                    "§7☐§r = Dormant  " + FakeNewLine +
                    "§2▒§r = Growing  " + FakeNewLine +
                    "§d▓§r = Flowering" + FakeNewLine +
                    "§5█§r = Fruiting ")
                .addBehaviour([
                    "Fruiting Calendar",
                    "§2▒▒▒§d▓▓§5█§7☐☐☐☐☐§2▒"
                ])
                .addBehaviour([
                    "Avg. Temp",
                    "[_20_°C - _35_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_220_mm - _400_mm]"
                ])
                .build()
        )
    }

    /* TFC MISC INFO */ {
        /// TFC BLOWPIPE
        event.addAll(
            createTooltip("tfc:blowpipe")
                .addSummary("Never Breaks")
                .build()
        )

        /// TFC CERAMIC BLOWPIPE
        event.addAll(
            createTooltip("tfc:ceramic_blowpipe")
                .addSummary("Has a _10%% Chance_ of _Breaking_ for _Every_ operation")
                .build()
        )

        /// TFC INGOT MOLD
        event.addAll(
            createTooltip("tfc:ceramic/ingot_mold")
                .addSummary("Has a _10%% Chance_ of _Breaking_ upon _Casting_")
                .build()
        )

        /// TFC FIRE INGOT MOLD
        event.addAll(
            createTooltip("tfc:ceramic/fire_ingot_mold")
                .addSummary("Has a _1%% Chance_ of _Breaking_ upon _Casting_")
                .build()
        )

        /// TFC CHANNELS CASTING MOLD TABLE
        event.addAll(
            createTooltip("tfcchannelcasting:mold_table")
                .addSummary("_TFC Bellows_ can help _Cool_ faster")
                .build()
        )
    }

    /* TFC WOOD SAPLINGS INFO */ {
        /// TFC WOOD ACACIA SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/acacia")
                .addSummary("_Acacia_, commonly known as the _Wattles_ or _Acacias_, is a genus of about _1084 Species_ of shrubs and trees in the subfamily _Mimosoideae_ of the pea family _Fabaceae_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_8_°C - _38_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_90_mm - _275_mm]"
                ])
                .build()
        )

        /// TFC WOOD ASH SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/ash")
                .addSummary("_Ash_ trees are medium to large trees of the genus _Fraxinus_ of the family _Oleaceae_. The family contains between _45_ - _65 Species_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-1.1_°C - _13.4_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_60_mm - _240_mm]"
                ])
                .build()
        )

        /// TFC WOOD ASPEN SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/aspen")
                .addSummary("_Aspen_, deciduous, hardwood tree in genus _Populus_ of _Willow_ family. _Trembling Aspen_ and _Largetooth Aspen_ are native to _Canada_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-15.7_°C - _-1.1_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_350_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC WOOD BIRCH SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/birch")
                .addSummary("_Birch_ genus _Betula_ of _Betulaceae_ family. Commonly known as _Downy Birch_, with other common names including _Moor Birch_, _White Birch_, _European White Birch_ or _Hairy Birch_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-12.1_°C - _6.1_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_125_mm - _310_mm]"
                ])
                .build()
        )

        /// TFC WOOD BLACKWOOD SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/blackwood")
                .addSummary("The African _Blackwood_ tree is a member of the rosewood family, with taxonomic classification in the family _Leguminosae_, genus _Dalbergia_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_8_°C - _38_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_35_mm - _180_mm]"
                ])
                .build()
        )

        /// TFC WOOD CHESTNUT SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/chestnut")
                .addSummary("The _Chestnuts_ are the deciduous trees and shrubs in the genus _Castanea_, in the family _Fagaceae_.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-3_°C - _11.6_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_150_mm - _340_mm]"
                ])
                .build()
        )

        /// TFC WOOD DOUGLAS FIR SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/douglas_fir")
                .addSummary("The largest coast _Douglas Firs_ regularly live _Over 500_ years, with the oldest specimens living for _Over 1,300_ years.")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-15.7_°C - _6.1_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_305_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC WOOD HICKORY SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/hickory")
                .addSummary("_Hickory_ trees can grow up to _100_ feet in height and about _25_ feet wide, with common species known as _Shagbark_, _Shellbark_, _Pignut_ and _Bitternut_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_4.3_°C - _15.3_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_210_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC WOOD KAPOK SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/kapok")
                .addSummary("In ancient times, the _Maya_ believed that the _Kapok_ tree stood at the center of the _Earth_.")
                
                .addBehaviour([
                    "Avg. Temp",
                    "[_17.1_°C - _38_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_320_mm - _500_mm]"
                ])
                .addAction([
                    "Tapping Calendar",
                    "§7☐§2█████§7☐§2███§7☐☐"
                ])
                .addAction([
                    "When Tapped",
                    "Produces _Resin_, crucial when combined with _Sulfur_, making _Rubber_"
                ])
                .build()
        )

        /// TFC WOOD MANGROVE SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/mangrove")
                .addSummary('_Mangroves_ can survive in waters up to _100x Salinity_ than other plants by filtering up to _90%%_ of the salt out of the water that enter its roots')
                .addBehaviour([
                    "Avg. Temp",
                    "[_15.7_°C - _28.2_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC WOOD MAPLE SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/maple")
                .addSummary("_Maple_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-8.4_°C - _8_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_240_mm - _470_mm]"
                ])
                .addBehaviour([
                    "Tapping Calendar",
                    "§7☐☐§2███§7☐☐☐☐☐☐☐"
                ])
                .build()
        )

        /// TFC WOOD OAK SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/oak")
                .addSummary("_Oak_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-3_°C - _15.3_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_210_mm - _320_mm]"
                ])
                .build()
        )

        /// TFC WOOD PALM SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/palm")
                .addSummary("_Palm_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_15.3_°C - _38_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_200_mm - _405_mm]"
                ])
                .build()
        )

        /// TFC WOOD PINE SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/pine")
                .addSummary("_Pine_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-8.4_°C - _9.8_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_185_mm - _320_mm]"
                ])
                .build()
        )

        /// TFC WOOD ROSEWOOD SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/rosewood")
                .addSummary("_Rosewood_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_9.8_°C - _38_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_210_mm - _400_mm]"
                ])
                .build()
        )

        /// TFC WOOD SEQUOIA SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/sequoia")
                .addSummary("_Sequoia_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_4.3_°C - _11.6_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_320_mm - _500_mm]"
                ])
                .build()
        )

        /// TFC WOOD SPRUCE SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/spruce")
                .addSummary("_Spruce_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-17.5_°C - _-6.6_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_220_mm - _470_mm]"
                ])
                .build()
        )

        /// TFC WOOD SYCAMORE SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/sycamore")
                .addSummary("_Sycamore_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-6.6_°C - _13.4_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_330_mm - _480_mm]"
                ])
                .build()
        )

        /// TFC WOOD WHITE CEDAR SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/white_cedar")
                .addSummary("_White Cedar_")
                .addBehaviour([
                    "Avg. Temp",
                    "[_-15.7_°C - _0.7_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_100_mm - _285_mm]"
                ])
                .build()
        )

        /// TFC WOOD WILLOW SAPLING
        event.addAll(
            createTooltip("tfc:wood/sapling/willow")
                .addSummary("Do not worry this isn't a Whomping _Willow Tree_ it will not do any harm")
                .addBehaviour([
                    "Avg. Temp",
                    "[_6.1_°C - _24.4_°C]"
                ])
                .addBehaviour([
                    "Annual Rainfall",
                    "[_330_mm - _500_mm]"
                ])
                .build()
        )
    }

    /* GTCEU MISC INFO */ {
        /// GTCEU FIREBRICKS
        event.addAll(
            createTooltip("gtceu:firebricks")
                .addSummary("Line the _Outside_ with _Twelve_ T3+ Plates (_Wrought Iron_) for each layer of the _TFC Blast Furnace_")
                .build()
        )

        /// GTCEU TERMINAL
        event.addAll(
            createTooltip("gtceu:terminal")
                .addSummary("A terminal that will aid you on your _GregTech_ journey across _Gravitas²_ You must construct additional... _Multiblocks?_")
                .addBehaviour([
                    "R-Click",
                    "Opens the In-game _GTCEU Manual_ that is currently _Work In Progress_"
                ])
                .addBehaviour([
                    "R-Click while Sneaking on Controller",
                    "Will attempt to _Construct_ the corresponding multiblock of the _Gregtech Controller_ with all available blocks inside the _Player Inventory_"
                ])
                .build()
        )
    }

    /* MISC INFO */ {
        event.addAll(
            createTooltip("immersiveengineering:hammer")
                .addSummary("Immersive Engineering _Default Multiblocks_ have been _Disabled_")
                .addBehaviour([
                    "Whitelisted Multiblocks",
                    "Beamhouse" + FakeNewLine +
                    "Grist Mill" + FakeNewLine +
                    "Power Loom" + FakeNewLine +
                    "Thresher"
                ])
                .build()
        )
    }
}
