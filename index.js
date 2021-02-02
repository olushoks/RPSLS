const prompt = require("prompt-sync")();
const gesture = require("./gestures");
const game = require("./game");

let gameInit = new game(); // Initializes
gameInit.selectMode();
gameInit.startPlay();
