"use strict";

var buster = require("buster");
var csrequire = require('covershot').require.bind(null, require);
var myLibrary = csrequire('../src-instrumented/wheel');
var wheelTestModule = require("../src-instrumented/wheel");

buster.testCase("wheel unit tests", {

  setUp: function () {
    this.wheel = new wheelTestModule.Wheel(100);
  },

  "Test: Buster Canary" : function () {
    buster.assert(true);
  },

  "Test: Set wheel diameter to 51, valid value" : function () {
    buster.assert.equals(51, this.wheel.setWheelDiameter(51));
  },

  "Test: Set wheel diameter to 50, minimum value" : function () {
    buster.assert.equals(50, this.wheel.setWheelDiameter(50));
  },

  "Test: Set wheel diameter to 100, maximum value" : function () {
    buster.assert.equals(100, this.wheel.setWheelDiameter(100));
  },

  "Test: Set wheel diameter to 1, too small for hub diameter" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(1));
  },

  "Test: Set wheel diameter to 10, too small for hub diameter" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(10));
  },

  "Test: Set wheel diameter to 101, above maximum value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(101));
  },

  "Test: Set wheel diameter to 0, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(0));
  },

  "Test: Set wheel diameter to -1, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(-1));
  },

  "Test: Set wheel diameter to 'hihi', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter("hihi"));
  },

  "Test: Set wheel diameter to '', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(""));
  },

  "Test: Set wheel diameter to ' ', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter(' '));
  },

  "Test: Set wheel diameter to nothing, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setWheelDiameter());
  },



  "Test: Set hub diameter to 10, valid value" : function () {
    buster.assert.equals(10, this.wheel.setHubDiameter(10));
  },

  "Test: Set hub diameter to 12.5, maximum value" : function () {
    buster.assert.equals(12.5, this.wheel.setHubDiameter(12.5));
  },

  "Test: Set hub diameter to 13, above maximum value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter(13));
  },

  "Test: Set hub diameter to 0, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter(0));
  },

  "Test: Set hub diameter to -1, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter(-1));
  },

  "Test: Set hub diameter to 'hihi', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter("hihi"));
  },

  "Test: Set hub diameter to '', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter(""));
  },

  "Test: Set hub diameter to ' ', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter(' '));
  },

  "Test: Set hub diameter to nothing, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setHubDiameter());
  },



  "Test: Check spoke length with wheelDiameter 50 and hubDiameter 12.5 diameter to 10" : function () {
    buster.assert.equals(18.75, this.wheel.getState().spokeLength);
  },

  "Test: Check that setState(..) functions as expected" : function () {
    var anotherWheel = new wheelTestModule.Wheel(150);
    this.wheel.setState(anotherWheel.getState());
    buster.assert.equals(this.wheel.getState(), anotherWheel.getState());
  },



  "Test: Set number of spokes to 8 (minimum valid value)" : function () {
    buster.assert.equals(8, this.wheel.setNumSpokes(8));
  },

  "Test: Set number of spokes to 1000 (maximum valid value)" : function () {
    buster.assert.equals(1000, this.wheel.setNumSpokes(1000));
  },

  "Test: Set number of spokes to 9 (valid value)" : function () {
    buster.assert.equals(9, this.wheel.setNumSpokes(9));
  },

  "Test: Set number of spokes to 7 (below the minimum)" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(7));
  },

  "Test: Set number of spokes to 1001 (above max value)" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(1001));
  },

  "Test: Set number of spokes to 0, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(0));
  },

  "Test: Set number of spokes to -1, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(-1));
  },

  "Test: Set number of spokes to 'hihi', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes("hihi"));
  },

  "Test: Set number of spokes to '', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(""));
  },

  "Test: Set number of spokes to ' ', illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes(' '));
  },

  "Test: Set number of spokes to nothing, illegal value" : function () {
    buster.assert.equals(0, this.wheel.setNumSpokes());
  }
});

