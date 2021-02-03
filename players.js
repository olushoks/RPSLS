const prompt = require("prompt-sync")();
const gesture = require("./gestures");

class Players {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gestures = gesture; // array of possible gestures
    this.currentGesture = this.currentGesture;
  }
}

class AI extends Players {
  constructor(name) {
    super(name);
  }
  randomGesture() {
    let random = Math.trunc(Math.random() * 5);
    return this.gesture[random];
  }
}

module.exports = {
  player: Players,
  computer: AI,
};
