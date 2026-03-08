import { Game } from "./js/game.js";

const newGame = new Game();
window.currentGame = newGame;
currentGame.markGrid("X", [0, 2]);
currentGame.markGrid("O", [1, 1]);
currentGame.markGrid("X", [0, 1]);
currentGame.markGrid("O", [0, 0]);
currentGame.markGrid("X", [1, 0]);
currentGame.markGrid("O", [1, 2]);
currentGame.markGrid("X", [2, 1]);
currentGame.markGrid("O", [2, 0]);
currentGame.markGrid("X", [2, 2]);
currentGame.showGameBoard();
currentGame.checkState();
