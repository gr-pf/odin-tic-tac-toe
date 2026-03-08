import { BoardGame } from "./boardgame.js";
import { Player } from "./player.js";
import { askMark, askName } from "../functions.js";

export function Game() {
  this.state = "active";
  this.BoardGame = new BoardGame();
  this.playerOne = null;
  this.playerTwo = null;

  this.initGame = function () {
    this.state = "active";
    this.BoardGame = new BoardGame();

    const namePlayerOne = askName();
    const markPlayerOne = askMark();
    this.playerOne = new Player(namePlayerOne, mark);
    const namePlayerTwo = askName();
    const markPlayerTwo = markPlayerOne === "X" ? "O" : "X";
    this.playerTwo = new Player(namePlayerTwo, mark);
  };
}
