/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['wheelSaveLoad.js']) {
  _$jscoverage['wheelSaveLoad.js'] = [];
  _$jscoverage['wheelSaveLoad.js'][1] = 0;
  _$jscoverage['wheelSaveLoad.js'][3] = 0;
  _$jscoverage['wheelSaveLoad.js'][4] = 0;
  _$jscoverage['wheelSaveLoad.js'][5] = 0;
  _$jscoverage['wheelSaveLoad.js'][8] = 0;
  _$jscoverage['wheelSaveLoad.js'][10] = 0;
  _$jscoverage['wheelSaveLoad.js'][12] = 0;
  _$jscoverage['wheelSaveLoad.js'][15] = 0;
  _$jscoverage['wheelSaveLoad.js'][17] = 0;
}
_$jscoverage['wheelSaveLoad.js'][1]++;
"use strict";
_$jscoverage['wheelSaveLoad.js'][3]++;
if (typeof localStorage === "undefined" || localStorage === null) {
  _$jscoverage['wheelSaveLoad.js'][4]++;
  var LocalStorage = require("node-localstorage").LocalStorage;
  _$jscoverage['wheelSaveLoad.js'][5]++;
  var localStorage = new LocalStorage("./scratch");
}
_$jscoverage['wheelSaveLoad.js'][8]++;
(function (exports) {
  _$jscoverage['wheelSaveLoad.js'][10]++;
  exports.loadState = (function () {
  _$jscoverage['wheelSaveLoad.js'][12]++;
  return JSON.parse(localStorage.wheelState);
});
  _$jscoverage['wheelSaveLoad.js'][15]++;
  exports.saveState = (function (stateJSON) {
  _$jscoverage['wheelSaveLoad.js'][17]++;
  localStorage.wheelState = JSON.stringify(stateJSON);
});
})(typeof exports === "undefined"? this.WheelSaveLoad = {}: exports);
_$jscoverage['wheelSaveLoad.js'].source = ["\"use strict\";","","if (typeof localStorage === \"undefined\" || localStorage === null) {","  var LocalStorage = require('node-localstorage').LocalStorage;","  var localStorage = new LocalStorage('./scratch');","}","","(function(exports){","","  exports.loadState = function()","  {","    return JSON.parse(localStorage.wheelState);","  };","","  exports.saveState = function(stateJSON)","  {","    localStorage.wheelState = JSON.stringify(stateJSON);","  };","","})(typeof exports === 'undefined' ? this.WheelSaveLoad = {}: exports);"];
