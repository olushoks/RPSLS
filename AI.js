"use strict";

const player = require("./players");

class AI extends player {
  // Inherit name, score, and gestures from Parent
  constructor() {
    super();
  }
  randomGesture() {
    let random = Math.trunc(Math.random() * this.gestures.length);
    return random;
  }
  makeGesture() {
    let gestureIndex = this.randomGesture();
    this.currentGesture = this.gestures[gestureIndex];
    console.log(`✅ ${this.name} gestures: ${this.currentGesture}\n`);
  }
}

module.exports = AI;
