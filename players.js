const prompt = require("prompt-sync")();

class Players {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

class AI extends Players {
  constructor() {
    super();
  }
}

module.exports = {
  player: Players,
  computer: AI,
};
