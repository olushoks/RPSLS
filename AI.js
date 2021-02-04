const player = require("./players");

class AI extends player {
  constructor() {
    super();
  }
  randomGesture() {
    let random = Math.trunc(Math.random() * 5);
    return random;
  }
  makeGesture() {
    let gestureIndex = this.randomGesture();
    this.currentGesture = this.gestures[gestureIndex];
    console.log(`✅ ${this.name} gestures: ${this.currentGesture}\n`);
    /// console.log(this.currentGesture);
  }
}

module.exports = AI;
