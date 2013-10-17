"use strict";

var buster = require("buster");
var csrequire = require('covershot').require.bind(null, require);
var myLibrary = csrequire('../src-instrumented/wheelSaveLoad');
var wheelSaveLoadTestModule = require("../src-instrumented/wheelSaveLoad");
var myLibrary2 = csrequire('../src-instrumented/wheel');
var wheelTestModule = require("../src-instrumented/wheel");

buster.testCase("wheelSaveLoad unit tests", {

  setUp: function () {
    this.wheel = new wheelTestModule.Wheel(100);
  },

  "Test: Wheel state equals loaded wheel state" : function () {
    wheelSaveLoadTestModule.saveState(this.wheel.getState());
    buster.assert.equals(this.wheel.getState(), wheelSaveLoadTestModule.loadState());
  },

  "Test: Modified Wheel state equals loaded wheel state" : function () {
    this.wheel.setWheelDiameter(51);
    wheelSaveLoadTestModule.saveState(this.wheel.getState());
    buster.assert.equals(this.wheel.getState(), wheelSaveLoadTestModule.loadState());
  }
});
