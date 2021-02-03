const prompt = require("prompt-sync")();
const gesture = require("./gestures");
const game = require("./game");

let runGame = new game(); // Initializes
runGame.selectMode();
runGame.startPlay();
