const tfcStoneStart = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'limestone',
    'conglomerate',
    'dolomite',
    'chert',
    'chalk',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble'
]

let TagPrefix = (/** @type {Registry.Tag_Prefix} */ event) => {
    tfcStoneStart.forEach((stone) => {
        event.create(`${stone}_tfc`, 'ore')
            .stateSupplier(() => Block.getBlock(`tfc:rock/raw/${stone}`).defaultBlockState())
            //.material(Material.STONE)
            //.color(MaterialColor.STONE)
            //.sound(SoundType.STONE)
            //.langValue(`%s ${stone}`)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty);
    }) 
}