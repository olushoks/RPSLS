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
    console.log(`${this.name} gestures:\n`);
    this.currentGesture = this.gestures[gestureIndex];
    console.log(this.currentGesture);
  }
}

module.exports = AI;
