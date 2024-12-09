const banIEMultiblocks = (event) => {
    let mbWhitelist = {
        "immersiveengineering" : [
            "feedthrough",
            "multiblocks/fermenter",
            "multiblocks/mixer",
            "multiblocks/squeezer"
        ],
        "advancedtfctech" : []
    }
    
    let namespace = event.getMultiblock().getUniqueName().namespace;
    let multiblock = event.getMultiblock().getUniqueName().path;

    if (mbWhitelist[namespace] != null && (
        mbWhitelist[namespace].includes(multiblock) || 
        mbWhitelist[namespace].length == 0)
    ) {}
    else {
        event.setCanceled(true)
        console.error("Multiblock not allowed! " + event.getMultiblock().getUniqueName())
        event.getEntity().setStatusMessage(Text.red("Multiblock not allowed!"))
    }
}