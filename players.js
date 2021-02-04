const prompt = require("prompt-sync")();
const gesture = require("./gestures");

class Players {
  constructor() {
    this.name;
    this.score = 0;
    this.gestures = gesture; // array of possible gestures
    this.currentGesture;
  }
  makeGesture() {
    let gestureIndex;
    console.log(`🚥 Your turn ${this.name}\n`);
    console.log(
      `Make your gesture: 1 for ROCK🌋 | 2 for PAPER📜 | 3 for SCISSORS✂️ | 4 for Lzard🦎 | 5 for SPOCK🖖\n----`
    );
    gestureIndex = +prompt();
    this.currentGesture = this.gestures[gestureIndex - 1];
    console.log(`✅ ${this.name} gestures ${this.currentGesture}\n----`);
  }
}

module.exports = Players;
