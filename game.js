const player = require("./players");
const computer = require("./AI");
const prompt = require("prompt-sync")();

class Game {
  constructor() {}

  gameInit() {
    //Initiliaze Game
    console.log(`... ROCK | PAPER | SCISSORS | LIZARD | SPOCK ...\n`);
    console.log(
      `Please select a mode to play:\n\n1 for Human Vs. Human\n2 for Human Vs. Computer\n3 to Exit`
    );
    let mode = +prompt();
    return mode;
  }

  selectMode() {
    // Select a mode and return players
    let mode = this.gameInit();
    let players = []; // Store players name is array based on users choice

    switch (mode) {
      case 1:
        console.log(`Enter  Player 1's name:`);
        players.push(prompt());
        console.log(`Enter  Player 2's name:`);
        players.push(prompt());
        break;
      case 2:
        console.log(`Enter  Player's name:`);
        players.push(prompt());
        players.push("Computer");
        break;
      // case 3:
      //   console.log(`Game Over`);
      //   return;
      default:
        this.selectMode();
    }
    return players;
    // console.log(players);
  }
  assignPlayers() {
    let players = this.selectMode();
    let player1, player2;
    if (players.length > 0) {
      player1 = new player();
      player2 = players[1] == "Computer" ? new computer() : new player();

      player1.name = players[0];
      player2.name = players[1];

      console.log(`${player1.name} Vs. ${player2.name}\n\nGame Loading...`);
      console.log(`Get ready...`);
      console.log(`GO!!!\n\n`);
    }
    return [player1, player2];
  }
  startGame() {
    let [player1, player2] = this.assignPlayers();
    player1.makeGesture();
    player2.makeGesture();
  }
}

module.exports = Game;
