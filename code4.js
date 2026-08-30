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
gdjs.ShopCode.GDBlendeDemageObjects1= [];
gdjs.ShopCode.GDBlendeDemageObjects2= [];
gdjs.ShopCode.GDBlendeDemageObjects3= [];
gdjs.ShopCode.GDRetryObjects1= [];
gdjs.ShopCode.GDRetryObjects2= [];
gdjs.ShopCode.GDRetryObjects3= [];
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1= [];
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects2= [];
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects3= [];
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(30);
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(1);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(7);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("50");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(2);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(12);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("70");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(3);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(20);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("100");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(4);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects2);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(6);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(30);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("180");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects2[i].getBehavior("Animation").setAnimationIndex(5);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlendeDemage"), gdjs.ShopCode.GDBlendeDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gold_Coin"), gdjs.ShopCode.GDGold_9595CoinObjects1);
/* Reuse gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1);
gdjs.copyArray(runtimeScene.getObjects("More_damage_indy"), gdjs.ShopCode.GDMore_9595damage_9595indyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(50);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("HighestLevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText("180");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").setAnimationIndex(5);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Total_Money", "Money", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGold_9595CoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText("No more levels available");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMore_9595damage_9595indyObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMore_9595damage_9595indyObjects1[i].getBehavior("Text").setText("Highest Level");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDBlendeDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBlendeDemageObjects1[i].hide(false);
}
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "aa204fe221c7547db2278bd11d6d0e7f773000fa408555920e06b947b0ee001d_Confirm_05.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 20, 20, 15, 0.08, false, null);
}
}
{gdjs.deviceVibration.startVibration(500);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
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
{
}

}


};gdjs.ShopCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("LevelDemage", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("HighestLevelDemage", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
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
gdjs.copyArray(runtimeScene.getObjects("Money_Bag_Pixel"), gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDMoney_9595Bag_9595PixelObjects2[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlendeDemage"), gdjs.ShopCode.GDBlendeDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDBlendeDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBlendeDemageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i].hide();
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

};gdjs.ShopCode.eventsList8 = function(runtimeScene) {

};gdjs.ShopCode.eventsList9 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


gdjs.ShopCode.eventsList7(runtimeScene);
}


{


gdjs.ShopCode.eventsList8(runtimeScene);
}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("10");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("30");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("50");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(7);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("70");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(18);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("100");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(30);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects2);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects2[i].getBehavior("Text").setText("180");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(50);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlendeDemage"), gdjs.ShopCode.GDBlendeDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gold_Coin"), gdjs.ShopCode.GDGold_9595CoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Large_Buy_Button"), gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("More_damage_indy"), gdjs.ShopCode.GDMore_9595damage_9595indyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText("No more levels available");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGold_9595CoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMore_9595damage_9595indyObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMore_9595damage_9595indyObjects1[i].getBehavior("Text").setText("Highest Level");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDBlendeDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBlendeDemageObjects1[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.ShopCode.eventsList10 = function(runtimeScene) {

};gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.ShopCode.GDRetryObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDGold_95959595CoinObjects1Objects = Hashtable.newFrom({"Gold_Coin": gdjs.ShopCode.GDGold_9595CoinObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLarge_95959595Buy_95959595ButtonObjects1Objects = Hashtable.newFrom({"Large_Buy_Button": gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1});
gdjs.ShopCode.eventsList11 = function(runtimeScene) {

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
{gdjs.evtTools.storage.readNumberFromJSONFile("LevelDemage", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("HighestLevelDemage", "Shop", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
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


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Level_CounterDemage"), gdjs.ShopCode.GDLevel_9595CounterDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 1);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLevel_9595CounterDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLevel_9595CounterDemageObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}

{ //Subevents
gdjs.ShopCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.eventsList10(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.ShopCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i].IsYesClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[k] = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlendeDemage"), gdjs.ShopCode.GDBlendeDemageObjects1);
gdjs.copyArray(runtimeScene.getObjects("More_damage_indy"), gdjs.ShopCode.GDMore_9595damage_9595indyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PriseDemageText"), gdjs.ShopCode.GDPriseDemageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrate_Demage"), gdjs.ShopCode.GDUpgrate_9595DemageObjects1);
gdjs.ShopCode.GDGold_9595CoinObjects1.length = 0;

gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "8458c22286133f7b078c2455d4b636ed86d48e57f31915e50c985434c8ebb0c4_sfx_coin.ogg", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "db697220b0d8e5a160d7bb4376feb30edafb48fff8c406736eebcd4911edc6d2_Coins 4.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "e851d6f530d5cca3b5cf7cc6820e94d6718cbeab11f397d5cf2becef07fa2fed_Coins 7.aac", false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("HighestLevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("LevelDemage", "Shop", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.ShopCode.GDUpgrate_9595DemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDUpgrate_9595DemageObjects1[i].getBehavior("Animation").setAnimationName("Upgrate 1");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDBlendeDemageObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDBlendeDemageObjects1[i].hide();
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDGold_95959595CoinObjects1Objects, 158, 157, "");
}
{for(var i = 0, len = gdjs.ShopCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGold_9595CoinObjects1[i].getBehavior("Resizable").setHeight(21);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDGold_9595CoinObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGold_9595CoinObjects1[i].getBehavior("Resizable").setWidth(21);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLarge_95959595Buy_95959595ButtonObjects1Objects, 68, 307, "");
}
{for(var i = 0, len = gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1[i].getBehavior("Resizable").setHeight(58);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1[i].getBehavior("Resizable").setWidth(155);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDLarge_9595Buy_9595ButtonObjects1[i].setPosition(68,307);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDPriseDemageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriseDemageTextObjects1[i].getBehavior("Text").setText("10");
}
}
{for(var i = 0, len = gdjs.ShopCode.GDMore_9595damage_9595indyObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDMore_9595damage_9595indyObjects1[i].getBehavior("Text").setText("More Demage");
}
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TwoChoicesDialogBox"), gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i].IsNoClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[k] = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1[i].hide();
}
}
}

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
gdjs.ShopCode.GDBlendeDemageObjects1.length = 0;
gdjs.ShopCode.GDBlendeDemageObjects2.length = 0;
gdjs.ShopCode.GDBlendeDemageObjects3.length = 0;
gdjs.ShopCode.GDRetryObjects1.length = 0;
gdjs.ShopCode.GDRetryObjects2.length = 0;
gdjs.ShopCode.GDRetryObjects3.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects3.length = 0;
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

gdjs.ShopCode.eventsList11(runtimeScene);
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
gdjs.ShopCode.GDBlendeDemageObjects1.length = 0;
gdjs.ShopCode.GDBlendeDemageObjects2.length = 0;
gdjs.ShopCode.GDBlendeDemageObjects3.length = 0;
gdjs.ShopCode.GDRetryObjects1.length = 0;
gdjs.ShopCode.GDRetryObjects2.length = 0;
gdjs.ShopCode.GDRetryObjects3.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.ShopCode.GDTwoChoicesDialogBoxObjects3.length = 0;
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
