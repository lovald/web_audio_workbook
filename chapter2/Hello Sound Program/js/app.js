"use strict";
/**
 * Called by button click, need to do this in 2019
 *
 * @return {void}
 */
function myFunction() {
  console.log("asd");
  var audioContext = new AudioContext();
  var osc = audioContext.createOscillator();
  var waveformType = "sawtooth";
  osc.type = "square";
  osc.connect(audioContext.destination);
  osc.start(audioContext.currentTime);
}
