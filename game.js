const player = require("./players");
const computer = require("./AI");
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
      `Please select a mode to play:\n\n1 for Human👱 Vs. Human👱\n2 for Human👱 Vs. Computer👾\n3 to Exit\n----`
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
        console.log(`Enter  Player 1's name:\n----`);
        players.push(prompt());
        console.log(`Enter  Player 2's name:\n----`);
        players.push(prompt());
        break;
      case 2:
        console.log(`Enter  Player's name:\n----`);
        players.push(prompt());
        players.push("Computer");
        break;
      case 3:
        console.log(`Exiting...Goodbye `);
        break;
      default:
        this.selectMode();
    }
    return players;
  }
  assignPlayers() {
    let players = this.selectMode();
    if (players.length > 0) {
      //Assign players only if user chooses to play
      this.player1 = new player();
      this.player2 = players[1] == "Computer" ? new computer() : new player();

      this.player1.name = players[0];
      this.player2.name = players[1];

      console.log(
        `${this.player1.name} Vs. ${this.player2.name}\nGame Loading...`
      );
      console.log(`Get ready...`);
      console.log(`GO!!!\n\n----`);
    }
  }

  compareGestures(player1Gesture, player2Gesture) {
    switch (player1Gesture) {
      case "Rock":
        if (player2Gesture === "Paper") {
          console.log(`---> Paper📜 Covers Rock🌋 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`---> Rock🌋 Crushes Scissors✄ <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`---> Rock🌋 Crushes Lizard🦎 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`---> Spock🖖 Vaporizes Rock🌋 <----\n----`);
          this.player2.score++;
        }
        break;
      case "Paper":
        if (player2Gesture === "Rock") {
          console.log(`---> Paper📜 Covers Rock🌋 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`---> Scissors✂️ Cuts Paper📜 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`---> Lizard🦎 Eats Paper📜 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`---> Paper📜 Disproves Spock🖖 <----\n----`);
          this.player1.score++;
        }
        break;
      case "Scissors":
        if (player2Gesture === "Rock") {
          console.log(`---> Rock🌋 Crushes Scissors✂️ <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`---> Scissors✂️ Cuts Paper📜 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`---> Scissors✂️ Decapitates Lizard🦎 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`---> Spock🖖 Smashes Scissors✂️ <----\n----`);
          this.player2.score++;
        }
        break;
      case "Lizard":
        if (player2Gesture === "Rock") {
          console.log(`---> Rock🌋 Crushes Lizard🦎 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`---> Lizard🦎 Eats Paper📜 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`---> Scissors✂️ Decapitates Lizard🦎 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Spock") {
          console.log(`---> Lizard🦎 Poisons Spock🖖 <----\n----`);
          this.player1.score++;
        }
        break;
      case "Spock":
        if (player2Gesture === "Rock") {
          console.log(`---> Spock🖖 Vaporizes Rock🌋 <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Paper") {
          console.log(`---> Paper📜 Disproves Spock🖖 <----\n----`);
          this.player2.score++;
        }
        if (player2Gesture === "Scissors") {
          console.log(`---> Spock🖖 Smashes Scissors✂️ <----\n----`);
          this.player1.score++;
        }
        if (player2Gesture === "Lizard") {
          console.log(`---> Lizard🦎 Poisons Spock🖖 <----\n----`);
          this.player2.score++;
        }
        break;
    }
  }
  restartGame() {
    // Function to play again after game ends
    console.log(`Would you  like to play again?\nEnter 1 for YES 2 for NO`);
    let response = prompt();
    if (response === 1) {
      this.startGame();
    } else if (response === 2) {
      console.log(`Thanks for playing this version of RPSLS. Goodbye!`);
    }
  }

  startGame() {
    // let [player1, player2] = this.assignPlayers();
    let winner;
    this.assignPlayers();

    if (this.player1 && this.player2) {
      //Start game only if players are defined
      let round = 0;
      while (this.player1.score < 3 && this.player2.score < 3) {
        // Game is a best of 3, Game ends when any of the players gets 3 points
        this.player1.makeGesture();
        this.player2.makeGesture();
        if (this.player1.currentGesture === this.player2.currentGesture) {
          console.log(`VOILA! You both made same gesture. Go again!\n----`);
        }
        this.compareGestures(
          this.player1.currentGesture,
          this.player2.currentGesture
        );
        round++;
      }
      winner =
        this.player1.score > this.player2.score
          ? this.player1.name
          : this.player2.name;
      console.log(
        `\nTotal Rounds Played: ${round}\nFINAL SCORE --> ${this.player1.name}: ${this.player1.score} | ${this.player2.name}: ${this.player2.score}\n\nWINNER: ${winner} 🏆\n----`
      );
    }
    //this.restartGame();
  }
}

module.exports = Game;
