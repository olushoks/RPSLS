const prompt = require("prompt-sync")();
const gesture = require("./gestures");
const game = require("./game");

console.log(`RPSLS ✂️: ${gesture}`);

let gameStart = new game();
gameStart.gameInit();
