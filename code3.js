gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDBuyObjects1= [];
gdjs.MenuCode.GDBuyObjects2= [];
gdjs.MenuCode.GDConfigObjects1= [];
gdjs.MenuCode.GDConfigObjects2= [];
gdjs.MenuCode.GDRoomFloorObjects1= [];
gdjs.MenuCode.GDRoomFloorObjects2= [];
gdjs.MenuCode.GDRoomTrapsObjects1= [];
gdjs.MenuCode.GDRoomTrapsObjects2= [];
gdjs.MenuCode.GDRoomObjects1= [];
gdjs.MenuCode.GDRoomObjects2= [];
gdjs.MenuCode.GDWesleyObjects1= [];
gdjs.MenuCode.GDWesleyObjects2= [];
gdjs.MenuCode.GDGunObjects1= [];
gdjs.MenuCode.GDGunObjects2= [];
gdjs.MenuCode.GDYellowStarCounterObjects1= [];
gdjs.MenuCode.GDYellowStarCounterObjects2= [];
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1= [];
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBuyObjects1Objects = Hashtable.newFrom({"Buy": gdjs.MenuCode.GDBuyObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_auswahl", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Total_Money", "Money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buy"), gdjs.MenuCode.GDBuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBuyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Shop");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "b3ea98d934998faa8211a5baf54b4334d0b9ec359ff8c4f2807d900d6222e5c3_Painting Room.aac", true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1[0].Score(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Money", "Money", (( gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1[0].Score(null)));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Points", "Points", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Total_Money", "Money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDBuyObjects1.length = 0;
gdjs.MenuCode.GDBuyObjects2.length = 0;
gdjs.MenuCode.GDConfigObjects1.length = 0;
gdjs.MenuCode.GDConfigObjects2.length = 0;
gdjs.MenuCode.GDRoomFloorObjects1.length = 0;
gdjs.MenuCode.GDRoomFloorObjects2.length = 0;
gdjs.MenuCode.GDRoomTrapsObjects1.length = 0;
gdjs.MenuCode.GDRoomTrapsObjects2.length = 0;
gdjs.MenuCode.GDRoomObjects1.length = 0;
gdjs.MenuCode.GDRoomObjects2.length = 0;
gdjs.MenuCode.GDWesleyObjects1.length = 0;
gdjs.MenuCode.GDWesleyObjects2.length = 0;
gdjs.MenuCode.GDGunObjects1.length = 0;
gdjs.MenuCode.GDGunObjects2.length = 0;
gdjs.MenuCode.GDYellowStarCounterObjects1.length = 0;
gdjs.MenuCode.GDYellowStarCounterObjects2.length = 0;
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length = 0;
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDBuyObjects1.length = 0;
gdjs.MenuCode.GDBuyObjects2.length = 0;
gdjs.MenuCode.GDConfigObjects1.length = 0;
gdjs.MenuCode.GDConfigObjects2.length = 0;
gdjs.MenuCode.GDRoomFloorObjects1.length = 0;
gdjs.MenuCode.GDRoomFloorObjects2.length = 0;
gdjs.MenuCode.GDRoomTrapsObjects1.length = 0;
gdjs.MenuCode.GDRoomTrapsObjects2.length = 0;
gdjs.MenuCode.GDRoomObjects1.length = 0;
gdjs.MenuCode.GDRoomObjects2.length = 0;
gdjs.MenuCode.GDWesleyObjects1.length = 0;
gdjs.MenuCode.GDWesleyObjects2.length = 0;
gdjs.MenuCode.GDGunObjects1.length = 0;
gdjs.MenuCode.GDGunObjects2.length = 0;
gdjs.MenuCode.GDYellowStarCounterObjects1.length = 0;
gdjs.MenuCode.GDYellowStarCounterObjects2.length = 0;
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects1.length = 0;
gdjs.MenuCode.GDMoney_9595Bag_9595PixelObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
