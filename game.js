const player = require("./players");
const computer = require("./AI");
// const gesture = require("./gestures");
const prompt = require("prompt-sync")();

class Game {
  constructor() {
    this.player1;
    this.player2;
  }

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
  }
  assignPlayers() {
    let players = this.selectMode();
    // let player1, player2;
    if (players.length > 0) {
      this.player1 = new player();
      this.player2 = players[1] == "Computer" ? new computer() : new player();

      this.player1.name = players[0];
      this.player2.name = players[1];

      console.log(
        `${this.player1.name} Vs. ${this.player2.name}\n\nGame Loading...`
      );
      console.log(`Get ready...`);
      console.log(`GO!!!\n\n`);
    }
    //return [this.player1, this.player2]; // store instances in array
  }
  compareGestures(player1Gesture, player2Gesture) {
    switch (player1Gesture) {
      case "Rock":
        if (player2Gesture === "Paper") {
          console.log(`Paper Covers Rock`);
          this.player2.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`Rock Crushes Scissors`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`Rock Crushes Lizard`);
          this.player1.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`Spock Vaporizes Rock`);
          this.player2.score++;
        }
        break;
      case "Paper":
        if (player2Gesture === "Rock") {
          console.log(`Paper Covers Rock`);
          this.player1.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`Scissors Cuts Paper`);
          this.player2.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`Lizard Eats Paper`);
          this.player2.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`Paper Disproves Spock`);
          this.player1.score++;
        }
        break;
      case "Scissors":
        if (player2Gesture === "Rock") {
          console.log(`Rock Crushes Scissors`);
          this.player2.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`Scissors Cuts Paper`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`Scissors Decapitates Lizard`);
          this.player1.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`Spock Smashes Scissors`);
          this.player2.score++;
        }
        break;
      case "Lizard":
        if (player2Gesture === "Rock") {
          console.log(`Rock Crushes Lizard`);
          this.player2.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`Lizard Eats Paper`);
          this.player1.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`Scissors Decapitates Lizard`);
          this.player2.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`Lizard Poisons Spock`);
          this.player1.score++;
        }
        break;
      case "Spock":
        if (player2Gesture === "Rock") {
          console.log(`Spock Vaporizes Rock`);
          this.player1.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`Paper Disproves Spock`);
          this.player2.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`Spock Smashes Scissors`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`Lizard Poisons Spock`);
          this.player2.score++;
        }
        break;
    }
  }

  startGame() {
    // let [player1, player2] = this.assignPlayers();
    this.assignPlayers();
    this.player1.makeGesture();
    this.player2.makeGesture();

    let round = 0;
    while (this.player1.score < 3 && this.player2.score < 3) {
      this.compareGestures(
        this.player1.currentGesture,
        this.player2.currentGesture
      );
    }
  }
}

module.exports = Game;
