import { BoardGame } from "./boardgame.js";
import { Player } from "./player.js";
import { askMark, askName, askMove } from "../functions.js";

export function Game() {
  this.state = "inactive";
  this.BoardGame = new BoardGame();
  this.playerOne = null;
  this.playerTwo = null;
  this.playerTurn = null;

  this.initGame = function () {
    this.state = "active";
    this.BoardGame = new BoardGame();

    //Essayer d'introduire une fonction imbriqué pour avoir une fonction asKNameP1 et askNameP2 tiré de la même fonction
    const namePlayerOne = askName();
    const markPlayerOne = askMark();
    this.playerOne = new Player(namePlayerOne, markPlayerOne);
    const namePlayerTwo = askName();
    const markPlayerTwo = markPlayerOne === "X" ? "O" : "X";
    this.playerTwo = new Player(namePlayerTwo, markPlayerTwo);

    this.playerTurn = this.playerOne;
  };

  this.playRound = function () {
    let round = false;
    while (!round) {
      const move = askMove();
      if (this.playerTurn === this.playerOne) {
        round = this.BoardGame.markGrid(this.playerOne.mark, move);
      } else {
        round = this.BoardGame.markGrid(this.playerTwo.mark, move);
      }
    }
    this.playerTurn =
      this.playerTurn === this.playerOne ? this.playerTwo : this.playerOne;
  };
}
