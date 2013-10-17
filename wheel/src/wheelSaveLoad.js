"use strict";

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  var localStorage = new LocalStorage('./scratch');
}

(function(exports){

  exports.loadState = function()
  {
    return JSON.parse(localStorage.wheelState);
  };

  exports.saveState = function(stateJSON)
  {
    localStorage.wheelState = JSON.stringify(stateJSON);
  };

})(typeof exports === 'undefined' ? this.WheelSaveLoad = {}: exports);
