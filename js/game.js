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

  this.isActive = function () {
    return this.state === "active";
  };

  this.handleGameState = function () {
    const currentPlayerName = this.playerTurn.name;
    const state = this.BoardGame.checkState();
    switch (state[0]) {
      case 3:
      case -3:
        this.state = "inactive";
        return { win: [currentPlayerName, state[1]] };

      case "draw":
        this.state = "inactive";
        return { draw: true };

      default:
        this.changeTurn();
        return false;
    }
  };
}
