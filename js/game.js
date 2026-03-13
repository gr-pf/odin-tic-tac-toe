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
    if (this.state !== "active") {
      alert("You must init the game by completing the form!");
      return false;
    }
    return true;
  };
}
