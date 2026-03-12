import { Game } from "./js/game.js";

/**
 *
 * @param {HTMLElement} cell
 */
export function cleanCell(cell) {
  cell.innerText = "";
  cell.setAttribute("fill", "empty");
}

/**
 *
 * @param {string} mark
 * @param {Game} Game
 * @returns
 */
export function checkMarkId(mark, Game) {
  return mark === Game.playerOne.mark
    ? Game.playerOne.name
    : Game.playerTwo.name;
}

/**
 *
 * @param {HTMLElement} cell
 * @param {Game} game
 */
export function clickCell(cell, Game) {
  if (Game?.state !== "active") {
    alert("You must init the game by completing the form!");
    return;
  }
  if (cell.getAttribute("fill") === "full") {
    alert("Cell is already used! Choose another one!");
    return;
  }
  if (cell.getAttribute("fill") === "empty") {
    cell.setAttribute("fill", "full");
    cell.innerText = Game.playerTurn.mark;
    const gridArea = [cell.id.slice(-2, -1), cell.id.slice(-1)];
    Game.BoardGame.markGrid(Game.playerTurn.mark, gridArea);
    Game.BoardGame.showGameBoard();
  }
  const currentPlayerName = checkMarkId(Game.playerTurn.mark, Game);
  switch (Game.BoardGame.checkState()) {
    case 3:
    case -3:
      alert(`${currentPlayerName} player win`);
      Game.state = "inactive";
      break;

    case "draw":
      alert("It's a draw");
      Game.state = "inactive";
      break;

    default:
      Game.changeTurn();
  }
}
