gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.GDLeft_9595arrowObjects1= [];
gdjs.ShopCode.GDLeft_9595arrowObjects2= [];
gdjs.ShopCode.GDLeft_9595arrowObjects3= [];
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1= [];
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects2= [];
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects3= [];
gdjs.ShopCode.GDUpgrate_9595DemageObjects1= [];
gdjs.ShopCode.GDUpgrate_9595DemageObjects2= [];
gdjs.ShopCode.GDUpgrate_9595DemageObjects3= [];
gdjs.ShopCode.GDSwordObjects1= [];
gdjs.ShopCode.GDSwordObjects2= [];
gdjs.ShopCode.GDSwordObjects3= [];
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects1= [];
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects2= [];
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects3= [];
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects1= [];
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects2= [];
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects3= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects1= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects2= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects3= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects1= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects2= [];
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects3= [];
gdjs.ShopCode.GDMore_9595damage_9595indyObjects1= [];
gdjs.ShopCode.GDMore_9595damage_9595indyObjects2= [];
gdjs.ShopCode.GDMore_9595damage_9595indyObjects3= [];
gdjs.ShopCode.GDLevelDemageObjects1= [];
gdjs.ShopCode.GDLevelDemageObjects2= [];
gdjs.ShopCode.GDLevelDemageObjects3= [];
gdjs.ShopCode.GDLevel_9595CounterDemageObjects1= [];
gdjs.ShopCode.GDLevel_9595CounterDemageObjects2= [];
gdjs.ShopCode.GDLevel_9595CounterDemageObjects3= [];
gdjs.ShopCode.GDPriseDemageTextObjects1= [];
gdjs.ShopCode.GDPriseDemageTextObjects2= [];
gdjs.ShopCode.GDPriseDemageTextObjects3= [];
gdjs.ShopCode.GDGold_9595CoinObjects1= [];
gdjs.ShopCode.GDGold_9595CoinObjects2= [];
gdjs.ShopCode.GDGold_9595CoinObjects3= [];
gdjs.ShopCode.GDRoomFloorObjects1= [];
gdjs.ShopCode.GDRoomFloorObjects2= [];
gdjs.ShopCode.GDRoomFloorObjects3= [];
gdjs.ShopCode.GDRoomTrapsObjects1= [];
gdjs.ShopCode.GDRoomTrapsObjects2= [];
gdjs.ShopCode.GDRoomTrapsObjects3= [];
gdjs.ShopCode.GDRoomObjects1= [];
gdjs.ShopCode.GDRoomObjects2= [];
gdjs.ShopCode.GDRoomObjects3= [];
gdjs.ShopCode.GDWesleyObjects1= [];
gdjs.ShopCode.GDWesleyObjects2= [];
gdjs.ShopCode.GDWesleyObjects3= [];
gdjs.ShopCode.GDGunObjects1= [];
gdjs.ShopCode.GDGunObjects2= [];
gdjs.ShopCode.GDGunObjects3= [];
gdjs.ShopCode.GDYellowStarCounterObjects1= [];
gdjs.ShopCode.GDYellowStarCounterObjects2= [];
gdjs.ShopCode.GDYellowStarCounterObjects3= [];
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1= [];
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2= [];
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects3= [];


gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLeft_95959595arrowObjects1Objects = Hashtable.newFrom({"Left_arrow": gdjs.ShopCode.GDLeft_9595arrowObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLarge_95959595Buy_95959595ButtonObjects1Objects = Hashtable.newFrom({"Large_Buy_Button": gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1});
gdjs.ShopCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(30);
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Money", "Money", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("50");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Money", "Money", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText("80");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Money", "Money", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac", false, 50, 1);
}

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(10);
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(30);
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Shop", "LevelDemage", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.ShopCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Total_Money", "Money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


};gdjs.ShopCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ShopCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow"), gdjs.ShopCode.GDLeft_9595arrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLeft_95959595arrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


gdjs.ShopCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Large_Buy_Button"), gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLarge_95959595Buy_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("LevelDemage", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.ShopCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.ShopCode.eventsList6(runtimeScene);
}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.ShopCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.ShopCode.GDLeft_9595arrowObjects3.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects3.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects3.length = 0;
gdjs.ShopCode.GDSwordObjects1.length = 0;
gdjs.ShopCode.GDSwordObjects2.length = 0;
gdjs.ShopCode.GDSwordObjects3.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects1.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects2.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects3.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects1.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects2.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects3.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects1.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects2.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects3.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects1.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects2.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects3.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects1.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects2.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects3.length = 0;
gdjs.ShopCode.GDLevelDemageObjects1.length = 0;
gdjs.ShopCode.GDLevelDemageObjects2.length = 0;
gdjs.ShopCode.GDLevelDemageObjects3.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects3.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects1.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects2.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects3.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects1.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects2.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects3.length = 0;
gdjs.ShopCode.GDRoomFloorObjects1.length = 0;
gdjs.ShopCode.GDRoomFloorObjects2.length = 0;
gdjs.ShopCode.GDRoomFloorObjects3.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects1.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects2.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects3.length = 0;
gdjs.ShopCode.GDRoomObjects1.length = 0;
gdjs.ShopCode.GDRoomObjects2.length = 0;
gdjs.ShopCode.GDRoomObjects3.length = 0;
gdjs.ShopCode.GDWesleyObjects1.length = 0;
gdjs.ShopCode.GDWesleyObjects2.length = 0;
gdjs.ShopCode.GDWesleyObjects3.length = 0;
gdjs.ShopCode.GDGunObjects1.length = 0;
gdjs.ShopCode.GDGunObjects2.length = 0;
gdjs.ShopCode.GDGunObjects3.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects1.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects2.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects3.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects3.length = 0;

gdjs.ShopCode.eventsList7(runtimeScene);
gdjs.ShopCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.ShopCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.ShopCode.GDLeft_9595arrowObjects3.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects2.length = 0;
gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects3.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length = 0;
gdjs.ShopCode.GDUpgrate_9595DemageObjects3.length = 0;
gdjs.ShopCode.GDSwordObjects1.length = 0;
gdjs.ShopCode.GDSwordObjects2.length = 0;
gdjs.ShopCode.GDSwordObjects3.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects1.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects2.length = 0;
gdjs.ShopCode.GDGolden_9595Knight_9595SwordObjects3.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects1.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects2.length = 0;
gdjs.ShopCode.GDLarge_9595Golden_9595Knight_9595SwordObjects3.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects1.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects2.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_95951Objects3.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects1.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects2.length = 0;
gdjs.ShopCode.GDBronze_9595Great_9595Sword_959519Objects3.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects1.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects2.length = 0;
gdjs.ShopCode.GDMore_9595damage_9595indyObjects3.length = 0;
gdjs.ShopCode.GDLevelDemageObjects1.length = 0;
gdjs.ShopCode.GDLevelDemageObjects2.length = 0;
gdjs.ShopCode.GDLevelDemageObjects3.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length = 0;
gdjs.ShopCode.GDLevel_9595CounterDemageObjects3.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects1.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects2.length = 0;
gdjs.ShopCode.GDPriseDemageTextObjects3.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects1.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects2.length = 0;
gdjs.ShopCode.GDGold_9595CoinObjects3.length = 0;
gdjs.ShopCode.GDRoomFloorObjects1.length = 0;
gdjs.ShopCode.GDRoomFloorObjects2.length = 0;
gdjs.ShopCode.GDRoomFloorObjects3.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects1.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects2.length = 0;
gdjs.ShopCode.GDRoomTrapsObjects3.length = 0;
gdjs.ShopCode.GDRoomObjects1.length = 0;
gdjs.ShopCode.GDRoomObjects2.length = 0;
gdjs.ShopCode.GDRoomObjects3.length = 0;
gdjs.ShopCode.GDWesleyObjects1.length = 0;
gdjs.ShopCode.GDWesleyObjects2.length = 0;
gdjs.ShopCode.GDWesleyObjects3.length = 0;
gdjs.ShopCode.GDGunObjects1.length = 0;
gdjs.ShopCode.GDGunObjects2.length = 0;
gdjs.ShopCode.GDGunObjects3.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects1.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects2.length = 0;
gdjs.ShopCode.GDYellowStarCounterObjects3.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length = 0;
gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects3.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
