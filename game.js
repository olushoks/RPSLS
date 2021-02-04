const player = require("./players");
const computer = require("./AI");
// const gesture = require("./gestures");
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
    return [player1, player2]; // store instances in array
  }
  compareGestures(player1Gesture, player2Gesture) {
    switch (player1Gesture) {
      case "Rock":
        (function () {
          if (player2Gesture === "Paper") {
            console.log(`Paper Covers Rock`);
            player2.score++;
          }
          if (player2Gesture === "Scissors") {
            console.log(`Rock Crushes Scissors`);
            player1.score++;
          }
          if (player2Gesture === "Lizard") {
            console.log(`Rock Crushes Lizard`);
            player1.score++;
          }
          if (player2Gesture === "Spock") {
            console.log(`Spock Vaporizes Rock`);
            player2.score++;
          }
        })();
        break;
      case "Paper":
        (function () {
          if (player2Gesture === "Rock") {
            console.log(`Paper Covers Rock`);
            player1.score++;
          }
          if (player2Gesture === "Scissors") {
            console.log(`Scissors Cuts Paper`);
            player2.score++;
          }
          if (player2Gesture === "Lizard") {
            console.log(`Lizard Eats Paper`);
            player2.score++;
          }
          if (player2Gesture === "Spock") {
            console.log(`Paper Disproves Spock`);
            player1.score++;
          }
        })();
        break;
      case "Scissors":
        (function () {
          if (player2Gesture === "Rock") {
            console.log(`Rock Crushes Scissors`);
            player2.score++;
          }
          if (player2Gesture === "Paper") {
            console.log(`Scissors Cuts Paper`);
            player1.score++;
          }
          if (player2Gesture === "Lizard") {
            console.log(`Scissors Decapitates Lizard`);
            player1.score++;
          }
          if (player2Gesture === "Spock") {
            console.log(`Spock Smashes Scissors`);
            player2.score++;
          }
        })();
        break;
      case "Lizard":
        (function () {
          if (player2Gesture === "Rock") {
            console.log(`Rock Crushes Lizard`);
            player2.score++;
          }
          if (player2Gesture === "Paper") {
            console.log(`Lizard Eats Paper`);
            player1.score++;
          }
          if (player2Gesture === "Scissors") {
            console.log(`Scissors Decapitates Lizard`);
            player2.score++;
          }
          if (player2Gesture === "Spock") {
            console.log(`Lizard Poisons Spock`);
            player1.score++;
          }
        })();
        break;
      case "Spock":
        (function () {
          if (player2Gesture === "Rock") {
            console.log(`Spock Vaporizes Rock`);
            player1.score++;
          }
          if (player2Gesture === "Paper") {
            console.log(`Paper Disproves Spock`);
            player2.score++;
          }
          if (player2Gesture === "Scissors") {
            console.log(`Spock Smashes Scissors`);
            player1.score++;
          }
          if (player2Gesture === "Lizard") {
            console.log(`Lizard Poisons Spock`);
            player2.score++;
          }
        })();
        break;
    }
  }

  startGame() {
    let [player1, player2] = this.assignPlayers(); // Destructure Array
    player1.makeGesture();
    player2.makeGesture();
    this.compareGestures(player1.currentGesture, player2.currentGesture);
  }
}

module.exports = Game;
