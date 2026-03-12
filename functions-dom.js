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
    Game.changeTurn();
  }
}
