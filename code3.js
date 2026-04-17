gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDWhiteSleekButtonObjects1= [];
gdjs.MenuCode.GDWhiteSleekButtonObjects2= [];
gdjs.MenuCode.GDbloquesolidoObjects1= [];
gdjs.MenuCode.GDbloquesolidoObjects2= [];
gdjs.MenuCode.GDpjObjects1= [];
gdjs.MenuCode.GDpjObjects2= [];
gdjs.MenuCode.GDSummer_9595BackgroundObjects1= [];
gdjs.MenuCode.GDSummer_9595BackgroundObjects2= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects1= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects2= [];
gdjs.MenuCode.GDtrigger_9595arribaObjects1= [];
gdjs.MenuCode.GDtrigger_9595arribaObjects2= [];
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.MenuCode.GDtrigger_9595derechaObjects1= [];
gdjs.MenuCode.GDtrigger_9595derechaObjects2= [];
gdjs.MenuCode.GDAREARIESGOObjects1= [];
gdjs.MenuCode.GDAREARIESGOObjects2= [];
gdjs.MenuCode.GDtxt_9595subvidaObjects1= [];
gdjs.MenuCode.GDtxt_9595subvidaObjects2= [];
gdjs.MenuCode.GDtxtmonedaObjects1= [];
gdjs.MenuCode.GDtxtmonedaObjects2= [];
gdjs.MenuCode.GDCoin_9595GoldObjects1= [];
gdjs.MenuCode.GDCoin_9595GoldObjects2= [];
gdjs.MenuCode.GDtitulo_9595subvidaObjects1= [];
gdjs.MenuCode.GDtitulo_9595subvidaObjects2= [];
gdjs.MenuCode.GDspikes_9595blockObjects1= [];
gdjs.MenuCode.GDspikes_9595blockObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.MenuCode.GDWhiteSleekButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDWhiteSleekButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWhiteSleekButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDWhiteSleekButtonObjects1[k] = gdjs.MenuCode.GDWhiteSleekButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWhiteSleekButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.MenuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects1.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects2.length = 0;
gdjs.MenuCode.GDpjObjects1.length = 0;
gdjs.MenuCode.GDpjObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MenuCode.GDAREARIESGOObjects1.length = 0;
gdjs.MenuCode.GDAREARIESGOObjects2.length = 0;
gdjs.MenuCode.GDtxt_9595subvidaObjects1.length = 0;
gdjs.MenuCode.GDtxt_9595subvidaObjects2.length = 0;
gdjs.MenuCode.GDtxtmonedaObjects1.length = 0;
gdjs.MenuCode.GDtxtmonedaObjects2.length = 0;
gdjs.MenuCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MenuCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MenuCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.MenuCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.MenuCode.GDspikes_9595blockObjects1.length = 0;
gdjs.MenuCode.GDspikes_9595blockObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.MenuCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects1.length = 0;
gdjs.MenuCode.GDbloquesolidoObjects2.length = 0;
gdjs.MenuCode.GDpjObjects1.length = 0;
gdjs.MenuCode.GDpjObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.MenuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MenuCode.GDAREARIESGOObjects1.length = 0;
gdjs.MenuCode.GDAREARIESGOObjects2.length = 0;
gdjs.MenuCode.GDtxt_9595subvidaObjects1.length = 0;
gdjs.MenuCode.GDtxt_9595subvidaObjects2.length = 0;
gdjs.MenuCode.GDtxtmonedaObjects1.length = 0;
gdjs.MenuCode.GDtxtmonedaObjects2.length = 0;
gdjs.MenuCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MenuCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MenuCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.MenuCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.MenuCode.GDspikes_9595blockObjects1.length = 0;
gdjs.MenuCode.GDspikes_9595blockObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
