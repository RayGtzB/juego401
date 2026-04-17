gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGreenButtonObjects1= [];
gdjs.GameOverCode.GDGreenButtonObjects2= [];
gdjs.GameOverCode.GDbloquesolidoObjects1= [];
gdjs.GameOverCode.GDbloquesolidoObjects2= [];
gdjs.GameOverCode.GDpjObjects1= [];
gdjs.GameOverCode.GDpjObjects2= [];
gdjs.GameOverCode.GDSummer_9595BackgroundObjects1= [];
gdjs.GameOverCode.GDSummer_9595BackgroundObjects2= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.GameOverCode.GDtrigger_9595abajoObjects1= [];
gdjs.GameOverCode.GDtrigger_9595abajoObjects2= [];
gdjs.GameOverCode.GDtrigger_9595arribaObjects1= [];
gdjs.GameOverCode.GDtrigger_9595arribaObjects2= [];
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.GameOverCode.GDtrigger_9595derechaObjects1= [];
gdjs.GameOverCode.GDtrigger_9595derechaObjects2= [];
gdjs.GameOverCode.GDAREARIESGOObjects1= [];
gdjs.GameOverCode.GDAREARIESGOObjects2= [];
gdjs.GameOverCode.GDtxt_9595subvidaObjects1= [];
gdjs.GameOverCode.GDtxt_9595subvidaObjects2= [];
gdjs.GameOverCode.GDtxtmonedaObjects1= [];
gdjs.GameOverCode.GDtxtmonedaObjects2= [];
gdjs.GameOverCode.GDCoin_9595GoldObjects1= [];
gdjs.GameOverCode.GDCoin_9595GoldObjects2= [];
gdjs.GameOverCode.GDtitulo_9595subvidaObjects1= [];
gdjs.GameOverCode.GDtitulo_9595subvidaObjects2= [];
gdjs.GameOverCode.GDspikes_9595blockObjects1= [];
gdjs.GameOverCode.GDspikes_9595blockObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.GameOverCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDGreenButtonObjects1[k] = gdjs.GameOverCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGreenButtonObjects1.length = 0;
gdjs.GameOverCode.GDGreenButtonObjects2.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects1.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects2.length = 0;
gdjs.GameOverCode.GDpjObjects1.length = 0;
gdjs.GameOverCode.GDpjObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.GameOverCode.GDAREARIESGOObjects1.length = 0;
gdjs.GameOverCode.GDAREARIESGOObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595subvidaObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595subvidaObjects2.length = 0;
gdjs.GameOverCode.GDtxtmonedaObjects1.length = 0;
gdjs.GameOverCode.GDtxtmonedaObjects2.length = 0;
gdjs.GameOverCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.GameOverCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.GameOverCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.GameOverCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.GameOverCode.GDspikes_9595blockObjects1.length = 0;
gdjs.GameOverCode.GDspikes_9595blockObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGreenButtonObjects1.length = 0;
gdjs.GameOverCode.GDGreenButtonObjects2.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects1.length = 0;
gdjs.GameOverCode.GDbloquesolidoObjects2.length = 0;
gdjs.GameOverCode.GDpjObjects1.length = 0;
gdjs.GameOverCode.GDpjObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.GameOverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.GameOverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.GameOverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.GameOverCode.GDAREARIESGOObjects1.length = 0;
gdjs.GameOverCode.GDAREARIESGOObjects2.length = 0;
gdjs.GameOverCode.GDtxt_9595subvidaObjects1.length = 0;
gdjs.GameOverCode.GDtxt_9595subvidaObjects2.length = 0;
gdjs.GameOverCode.GDtxtmonedaObjects1.length = 0;
gdjs.GameOverCode.GDtxtmonedaObjects2.length = 0;
gdjs.GameOverCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.GameOverCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.GameOverCode.GDtitulo_9595subvidaObjects1.length = 0;
gdjs.GameOverCode.GDtitulo_9595subvidaObjects2.length = 0;
gdjs.GameOverCode.GDspikes_9595blockObjects1.length = 0;
gdjs.GameOverCode.GDspikes_9595blockObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
