
gdjs.evtsExt__UnbenannteErweiterung__GoTOLocalGame = gdjs.evtsExt__UnbenannteErweiterung__GoTOLocalGame || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__UnbenannteErweiterung__GoTOLocalGame.GoTOLocalGame = class GoTOLocalGame extends gdjs.CustomRuntimeObject2D {
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

gdjs.evtsExt__UnbenannteErweiterung__GoTOLocalGame.GoTOLocalGame.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("UnbenannteErweiterung::GoTOLocalGame", gdjs.evtsExt__UnbenannteErweiterung__GoTOLocalGame.GoTOLocalGame);
