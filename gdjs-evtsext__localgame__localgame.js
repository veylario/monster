
gdjs.evtsExt__LocalGame__LocalGame = gdjs.evtsExt__LocalGame__LocalGame || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__LocalGame__LocalGame.LocalGame = class LocalGame extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__LocalGame__LocalGame.LocalGame.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("LocalGame::LocalGame", gdjs.evtsExt__LocalGame__LocalGame.LocalGame);
