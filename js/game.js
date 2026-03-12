import { BoardGame } from "./boardgame.js";
import { Player } from "./player.js";

export function Game(formObjet) {
  this.state = "inactive";
  this.BoardGame = new BoardGame();
  this.playerOne = null;
  this.playerTwo = null;
  this.playerTurn = null;

  this.initGame = function () {
    this.state = "active";
    this.BoardGame = new BoardGame();

    this.playerOne = new Player(formObjet.playerOne, formObjet.mark);
    const markPlayerTwo = formObjet.mark === "X" ? "O" : "X";
    this.playerTwo = new Player(formObjet.playerTwo, markPlayerTwo);

    this.playerTurn = this.playerOne;
  };

  this.changeTurn = function () {
    this.playerTurn =
      this.playerTurn === this.playerOne ? this.playerTwo : this.playerOne;
  };

  this.playGame = function () {
    let currentState;
    while (this.state === "active") {
      this.playRound();
      currentState = this.BoardGame.checkState();
      if (currentState !== "continue") {
        this.state = "inactive";
      }
    }
    let playerName;
    switch (currentState) {
      case 3:
        playerName =
          this.playerOne.mark === "X"
            ? this.playerOne.name
            : this.playerTwo.name;
        console.log(`${playerName} win !`);
        break;

      case -3:
        playerName =
          this.playerOne.mark === "O"
            ? this.playerOne.name
            : this.playerTwo.name;
        console.log(`${playerName} win !`);

        break;

      case "draw":
        console.log("It's a draw!");
        break;

      default:
        console.log("Error");
    }
  };
}
