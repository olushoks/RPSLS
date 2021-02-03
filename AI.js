const player = require("./players");

class AI extends player {
  constructor(name) {
    super(name);
  }
  randomGesture() {
    let random = Math.trunc(Math.random() * 5);
    this.currentGesture = this.gesture[random];
    console.log();
  }
}

module.exports = AI;
