const prompt = require("prompt-sync")();

class Game {
  constructor() {}

  gameInit() {
    console.log(`... ROCK | PAPER | SCISSORS | LIZARD | SPOCK ...\n`);
    console.log(
      `Please select a mode to play:\n\n1 for Human Vs. Human\n2 for Human Vs. Computer`
    );
    let mode = prompt();
  }
}

module.exports = Game;
