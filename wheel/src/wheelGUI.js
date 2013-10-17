"use strict";

var WheelGUI = function() {
  var windowSize = window.innerHeight > window.innerWidth ? window.innerWidth * 0.95 : window.innerHeight * 0.95;
  var aWheel = new Wheel.Wheel(windowSize);
  var canvas, canvas2d;
  var wheelState;
  var startX, startY, endX, endY;

  window.onload = function() {
    canvas = document.getElementById("wheelCanvas");
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
    canvas2d = canvas.getContext("2d");

    document.addEventListener( 'keydown', onDocumentKeyDown, false );
    document.addEventListener( 'keyup', onDocumentKeyUp, false );
  };

  function onDocumentKeyDown( event ) {
    switch( event.keyCode ) {
      case 37: event.preventDefault(); aWheel.setWheelDiameter(wheelState.wheelDiameter - 5); break;
      case 38: event.preventDefault(); aWheel.setHubDiameter(wheelState.hubDiameter + 5); break;
      case 39: event.preventDefault(); aWheel.setWheelDiameter(wheelState.wheelDiameter + 5); break;
      case 40: event.preventDefault(); aWheel.setHubDiameter(wheelState.hubDiameter - 5); break;
      case 65: event.preventDefault(); aWheel.setNumSpokes(wheelState.numSpokes - 1); break;
      case 70: event.preventDefault(); aWheel.setNumSpokes(wheelState.numSpokes + 1); break;
      case 76: event.preventDefault(); aWheel.setState(WheelSaveLoad.loadState()); break;
      case 83: event.preventDefault(); WheelSaveLoad.saveState(aWheel.getState()); break;
    }
  }

  function drawCanvas() {
    wheelState = aWheel.getState();

    canvas2d.clearRect(0, 0, canvas.width, canvas.height);

    canvas2d.strokeStyle = 'black';
    canvas2d.lineWidth = 10;
    drawCircle(canvas2d, canvas.width/2, canvas.height/2, wheelState.wheelDiameter/2);

    canvas2d.strokeStyle = 'silver';
    canvas2d.lineWidth = 3;
    drawCircle(canvas2d, canvas.width/2, canvas.height/2, wheelState.hubDiameter/2);

    canvas2d.fillStyle = 'silver';
    canvas2d.fill();

    for(var curSpoke = 0; curSpoke < wheelState.numSpokes; ++curSpoke) {
      startX =  canvas.width / 2 + wheelState.hubDiameter * 0.5 * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      startY = canvas.height / 2 + wheelState.hubDiameter * 0.5 * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      endX = startX + wheelState.spokeLength * Math.cos((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      endY = startY + wheelState.spokeLength * Math.sin((360 / wheelState.numSpokes * curSpoke) * Math.PI / 180);
      canvas2d.beginPath();
      canvas2d.moveTo(startX, startY);
      canvas2d.lineTo(endX, endY);
      canvas2d.stroke();
    }
  }

  function drawCircle(context, centerX, centerY, radius) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();
  }

  setInterval(drawCanvas, 40);
};

var view = new WheelGUI();
