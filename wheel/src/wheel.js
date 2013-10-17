"use strict";

(function(exports){

  exports.Wheel = function (newMaxWheelDiameter) {
    var MIN_NUM_SPOKES = 8;
    var MAX_NUM_SPOKES = 1000;
    var maxWheelDiameter = newMaxWheelDiameter > 0 ? newMaxWheelDiameter : 100;
    var wheelDiameter = maxWheelDiameter * 0.5;
    var hubDiameter = 0.25 * wheelDiameter;
    var numSpokes = 8;

    this.getState = function () {
      return {maxWheelDiameter : maxWheelDiameter,
        wheelDiameter : wheelDiameter,
        hubDiameter : hubDiameter,
        numSpokes : numSpokes,
        spokeLength : 0.5 * wheelDiameter - 0.5 * hubDiameter};
    };

    this.setState = function (newWheelState) {
      maxWheelDiameter = newWheelState.maxWheelDiameter;
      wheelDiameter = newWheelState.wheelDiameter;
      hubDiameter = newWheelState.hubDiameter;
      numSpokes = newWheelState.numSpokes;
    };

    this.setWheelDiameter = function (newWheelDiameter) {
      return !isNaN(newWheelDiameter) &&
        newWheelDiameter >= 4 * hubDiameter &&
        newWheelDiameter <= maxWheelDiameter ? wheelDiameter = newWheelDiameter : 0;
    };

    this.setHubDiameter = function (newHubDiameter) {
      return !isNaN(newHubDiameter) &&
        newHubDiameter * 4 <= wheelDiameter &&
        newHubDiameter > 0 ? hubDiameter = newHubDiameter : 0;
    };

    this.setNumSpokes = function (newNumSpokes) {
      return !isNaN(newNumSpokes) &&
        newNumSpokes >= MIN_NUM_SPOKES &&
        newNumSpokes <= MAX_NUM_SPOKES ? numSpokes = newNumSpokes : 0;
    };
  };

})(typeof exports === 'undefined' ? this.Wheel = {}: exports);
