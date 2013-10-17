/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['wheelGUI.js']) {
  _$jscoverage['wheelGUI.js'] = [];
  _$jscoverage['wheelGUI.js'][1] = 0;
  _$jscoverage['wheelGUI.js'][3] = 0;
  _$jscoverage['wheelGUI.js'][4] = 0;
  _$jscoverage['wheelGUI.js'][5] = 0;
  _$jscoverage['wheelGUI.js'][6] = 0;
  _$jscoverage['wheelGUI.js'][7] = 0;
  _$jscoverage['wheelGUI.js'][8] = 0;
  _$jscoverage['wheelGUI.js'][10] = 0;
  _$jscoverage['wheelGUI.js'][11] = 0;
  _$jscoverage['wheelGUI.js'][12] = 0;
  _$jscoverage['wheelGUI.js'][13] = 0;
  _$jscoverage['wheelGUI.js'][14] = 0;
  _$jscoverage['wheelGUI.js'][16] = 0;
  _$jscoverage['wheelGUI.js'][17] = 0;
  _$jscoverage['wheelGUI.js'][20] = 0;
  _$jscoverage['wheelGUI.js'][21] = 0;
  _$jscoverage['wheelGUI.js'][22] = 0;
  _$jscoverage['wheelGUI.js'][23] = 0;
  _$jscoverage['wheelGUI.js'][24] = 0;
  _$jscoverage['wheelGUI.js'][25] = 0;
  _$jscoverage['wheelGUI.js'][26] = 0;
  _$jscoverage['wheelGUI.js'][27] = 0;
  _$jscoverage['wheelGUI.js'][28] = 0;
  _$jscoverage['wheelGUI.js'][29] = 0;
  _$jscoverage['wheelGUI.js'][33] = 0;
  _$jscoverage['wheelGUI.js'][34] = 0;
  _$jscoverage['wheelGUI.js'][36] = 0;
  _$jscoverage['wheelGUI.js'][38] = 0;
  _$jscoverage['wheelGUI.js'][39] = 0;
  _$jscoverage['wheelGUI.js'][40] = 0;
  _$jscoverage['wheelGUI.js'][42] = 0;
  _$jscoverage['wheelGUI.js'][43] = 0;
  _$jscoverage['wheelGUI.js'][44] = 0;
  _$jscoverage['wheelGUI.js'][46] = 0;
  _$jscoverage['wheelGUI.js'][47] = 0;
  _$jscoverage['wheelGUI.js'][49] = 0;
  _$jscoverage['wheelGUI.js'][50] = 0;
  _$jscoverage['wheelGUI.js'][51] = 0;
  _$jscoverage['wheelGUI.js'][52] = 0;
  _$jscoverage['wheelGUI.js'][53] = 0;
  _$jscoverage['wheelGUI.js'][54] = 0;
  _$jscoverage['wheelGUI.js'][55] = 0;
  _$jscoverage['wheelGUI.js'][56] = 0;
  _$jscoverage['wheelGUI.js'][57] = 0;
  _$jscoverage['wheelGUI.js'][61] = 0;
  _$jscoverage['wheelGUI.js'][62] = 0;
  _$jscoverage['wheelGUI.js'][63] = 0;
  _$jscoverage['wheelGUI.js'][64] = 0;
  _$jscoverage['wheelGUI.js'][67] = 0;
  _$jscoverage['wheelGUI.js'][70] = 0;
}
_$jscoverage['wheelGUI.js'][1]++;
"use strict";
_$jscoverage['wheelGUI.js'][3]++;
var WheelGUI = (function () {
  _$jscoverage['wheelGUI.js'][4]++;
  var windowSize = window.innerHeight > window.innerWidth? window.innerWidth * 0.95: window.innerHeight * 0.95;
  _$jscoverage['wheelGUI.js'][5]++;
  var aWheel = new Wheel.Wheel(windowSize);
  _$jscoverage['wheelGUI.js'][6]++;
  var canvas, canvas2d;
  _$jscoverage['wheelGUI.js'][7]++;
  var wheelState;
  _$jscoverage['wheelGUI.js'][8]++;
  var startX, startY, endX, endY;
  _$jscoverage['wheelGUI.js'][10]++;
  window.onload = (function () {
  _$jscoverage['wheelGUI.js'][11]++;
  canvas = document.getElementById("wheelCanvas");
  _$jscoverage['wheelGUI.js'][12]++;
  canvas.width = window.innerWidth * 0.95;
  _$jscoverage['wheelGUI.js'][13]++;
  canvas.height = window.innerHeight * 0.95;
  _$jscoverage['wheelGUI.js'][14]++;
  canvas2d = canvas.getContext("2d");
  _$jscoverage['wheelGUI.js'][16]++;
  document.addEventListener("keydown", onDocumentKeyDown, false);
  _$jscoverage['wheelGUI.js'][17]++;
  document.addEventListener("keyup", onDocumentKeyUp, false);
});
  _$jscoverage['wheelGUI.js'][20]++;
  function onDocumentKeyDown(event) {
    _$jscoverage['wheelGUI.js'][21]++;
    switch (event.keyCode) {
    case 37:
      _$jscoverage['wheelGUI.js'][22]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][22]++;
      aWheel.setWheelDiameter(wheelState.wheelDiameter - 5);
      _$jscoverage['wheelGUI.js'][22]++;
      break;
    case 38:
      _$jscoverage['wheelGUI.js'][23]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][23]++;
      aWheel.setHubDiameter(wheelState.hubDiameter + 5);
      _$jscoverage['wheelGUI.js'][23]++;
      break;
    case 39:
      _$jscoverage['wheelGUI.js'][24]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][24]++;
      aWheel.setWheelDiameter(wheelState.wheelDiameter + 5);
      _$jscoverage['wheelGUI.js'][24]++;
      break;
    case 40:
      _$jscoverage['wheelGUI.js'][25]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][25]++;
      aWheel.setHubDiameter(wheelState.hubDiameter - 5);
      _$jscoverage['wheelGUI.js'][25]++;
      break;
    case 65:
      _$jscoverage['wheelGUI.js'][26]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][26]++;
      aWheel.setNumSpokes(wheelState.numSpokes - 1);
      _$jscoverage['wheelGUI.js'][26]++;
      break;
    case 70:
      _$jscoverage['wheelGUI.js'][27]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][27]++;
      aWheel.setNumSpokes(wheelState.numSpokes + 1);
      _$jscoverage['wheelGUI.js'][27]++;
      break;
    case 76:
      _$jscoverage['wheelGUI.js'][28]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][28]++;
      aWheel.setState(WheelSaveLoad.loadState());
      _$jscoverage['wheelGUI.js'][28]++;
      break;
    case 83:
      _$jscoverage['wheelGUI.js'][29]++;
      event.preventDefault();
      _$jscoverage['wheelGUI.js'][29]++;
      WheelSaveLoad.saveState(aWheel.getState());
      _$jscoverage['wheelGUI.js'][29]++;
      break;
    }
}
  _$jscoverage['wheelGUI.js'][33]++;
  function drawCanvas() {
    _$jscoverage['wheelGUI.js'][34]++;
    wheelState = aWheel.getState();
    _$jscoverage['wheelGUI.js'][36]++;
    canvas2d.clearRect(0, 0, canvas.width, canvas.height);
    _$jscoverage['wheelGUI.js'][38]++;
    canvas2d.strokeStyle = "black";
    _$jscoverage['wheelGUI.js'][39]++;
    canvas2d.lineWidth = 10;
    _$jscoverage['wheelGUI.js'][40]++;
    drawCircle(canvas2d, canvas.width / 2, canvas.height / 2, wheelState.wheelDiameter / 2);
    _$jscoverage['wheelGUI.js'][42]++;
    canvas2d.strokeStyle = "silver";
    _$jscoverage['wheelGUI.js'][43]++;
    canvas2d.lineWidth = 3;
    _$jscoverage['wheelGUI.js'][44]++;
    drawCircle(canvas2d, canvas.width / 2, canvas.height / 2, wheelState.hubDiameter / 2);
    _$jscoverage['wheelGUI.js'][46]++;
    canvas2d.fillStyle = "silver";
    _$jscoverage['wheelGUI.js'][47]++;
    canvas2d.fill();
    _$jscoverage['wheelGUI.js'][49]++;
    for (var curSpoke = 0; curSpoke < wheelState.numSpokes; ++curSpoke) {
      _$jscoverage['wheelGUI.js'][50]++;
      startX = canvas.width / 2 + wheelState.hubDiameter * 0.5 * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      _$jscoverage['wheelGUI.js'][51]++;
      startY = canvas.height / 2 + wheelState.hubDiameter * 0.5 * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      _$jscoverage['wheelGUI.js'][52]++;
      endX = startX + wheelState.spokeLength * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      _$jscoverage['wheelGUI.js'][53]++;
      endY = startY + wheelState.spokeLength * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      _$jscoverage['wheelGUI.js'][54]++;
      canvas2d.beginPath();
      _$jscoverage['wheelGUI.js'][55]++;
      canvas2d.moveTo(startX, startY);
      _$jscoverage['wheelGUI.js'][56]++;
      canvas2d.lineTo(endX, endY);
      _$jscoverage['wheelGUI.js'][57]++;
      canvas2d.stroke();
}
}
  _$jscoverage['wheelGUI.js'][61]++;
  function drawCircle(context, centerX, centerY, radius) {
    _$jscoverage['wheelGUI.js'][62]++;
    context.beginPath();
    _$jscoverage['wheelGUI.js'][63]++;
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    _$jscoverage['wheelGUI.js'][64]++;
    context.stroke();
}
  _$jscoverage['wheelGUI.js'][67]++;
  setInterval(drawCanvas, 40);
});
_$jscoverage['wheelGUI.js'][70]++;
var view = new WheelGUI();
_$jscoverage['wheelGUI.js'].source = ["\"use strict\";","","var WheelGUI = function() {","  var windowSize = window.innerHeight &gt; window.innerWidth ? window.innerWidth * 0.95 : window.innerHeight * 0.95;","  var aWheel = new Wheel.Wheel(windowSize);","  var canvas, canvas2d;","  var wheelState;","  var startX, startY, endX, endY;","","  window.onload = function() {","    canvas = document.getElementById(\"wheelCanvas\");","    canvas.width = window.innerWidth * 0.95;","    canvas.height = window.innerHeight * 0.95;","    canvas2d = canvas.getContext(\"2d\");","","    document.addEventListener( 'keydown', onDocumentKeyDown, false );","    document.addEventListener( 'keyup', onDocumentKeyUp, false );","  };","","  function onDocumentKeyDown( event ) {","    switch( event.keyCode ) {","      case 37: event.preventDefault(); aWheel.setWheelDiameter(wheelState.wheelDiameter - 5); break;","      case 38: event.preventDefault(); aWheel.setHubDiameter(wheelState.hubDiameter + 5); break;","      case 39: event.preventDefault(); aWheel.setWheelDiameter(wheelState.wheelDiameter + 5); break;","      case 40: event.preventDefault(); aWheel.setHubDiameter(wheelState.hubDiameter - 5); break;","      case 65: event.preventDefault(); aWheel.setNumSpokes(wheelState.numSpokes - 1); break;","      case 70: event.preventDefault(); aWheel.setNumSpokes(wheelState.numSpokes + 1); break;","      case 76: event.preventDefault(); aWheel.setState(WheelSaveLoad.loadState()); break;","      case 83: event.preventDefault(); WheelSaveLoad.saveState(aWheel.getState()); break;","    }","  }","","  function drawCanvas() {","    wheelState = aWheel.getState();","","    canvas2d.clearRect(0, 0, canvas.width, canvas.height);","","    canvas2d.strokeStyle = 'black';","    canvas2d.lineWidth = 10;","    drawCircle(canvas2d, canvas.width/2, canvas.height/2, wheelState.wheelDiameter/2);","","    canvas2d.strokeStyle = 'silver';","    canvas2d.lineWidth = 3;","    drawCircle(canvas2d, canvas.width/2, canvas.height/2, wheelState.hubDiameter/2);","","    canvas2d.fillStyle = 'silver';","    canvas2d.fill();","","    for(var curSpoke = 0; curSpoke &lt; wheelState.numSpokes; ++curSpoke) {","      startX =  canvas.width / 2 + wheelState.hubDiameter * 0.5 * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);","      startY = canvas.height / 2 + wheelState.hubDiameter * 0.5 * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);","      endX = startX + wheelState.spokeLength * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);","      endY = startY + wheelState.spokeLength * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);","      canvas2d.beginPath();","      canvas2d.moveTo(startX, startY);","      canvas2d.lineTo(endX, endY);","      canvas2d.stroke();","    }","  }","","  function drawCircle(context, centerX, centerY, radius) {","    context.beginPath();","    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);","    context.stroke();","  }","","  setInterval(drawCanvas, 40);","};","","var view = new WheelGUI();"];