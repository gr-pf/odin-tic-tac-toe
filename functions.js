import { Game } from "./js/game.js";

/**
 *
 * @param {HTMLElement} cell
 */
export function cleanCell(cell) {
  cell.innerText = "";
  cell.dataset.fill = "empty";
  cell.dataset.winConfig = "no";
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
 * @returns {Boolean}
 */
export function checkCellAvailable(cell) {
  if (cell.dataset.fill === "full") {
    alert("Cell is already used! Choose another one!");
    return false;
  }
  return true;
}

/**
 *
 * @param {HTMLElement} cell
 * @param {Game} Game
 */
export function playMove(cell, Game) {
  cell.dataset.fill = "full";
  cell.innerText = Game.playerTurn.mark;
  const gridArea = [cell.id.slice(-2, -1), cell.id.slice(-1)];
  Game.BoardGame.markGrid(Game.playerTurn.mark, gridArea);
}

/**
 *
 * @param {HTMLElement} cell
 * @param {Game} game
 */
export function clickCell(cell, Game) {
  if (!Game?.isActive()) {
    alert("You must init the game by completing the form!");
    return;
  }
  if (!checkCellAvailable(cell)) return;
  playMove(cell, Game);

  const currentState = Game.handleGameState();
  if (currentState?.win) {
    const cells = getConfigGrid(currentState.win.config);
    colorWinningCell(cells);
    setTimeout(() => alert(`${currentState.win.name} win`), 0);
  } else if (currentState?.draw) {
    alert("It's a draw");
  }
}

/**
 *
 * @param {Array} coords
 * @returns {Array}
 */
export function getConfigGrid(coords) {
  return coords.map(([r, c]) => {
    const cell = document.querySelector([`[id$="-${r}${c}"]`]);
    return cell.id;
  });
}

/**
 *
 * @param {NodeList} cells
 */
export function colorWinningCell(cells) {
  cells.forEach((cellId) => {
    const cell = document.getElementById(cellId);
    cell.dataset.winConfig = "yes";
  });
}
