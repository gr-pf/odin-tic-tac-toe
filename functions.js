import { Game } from "./js/game.js";

/**
 *
 * @param {HTMLElement} cell
 */
export function cleanCell(cell) {
  cell.innerText = "";
  cell.setAttribute("fill", "empty");
  cell.setAttribute("win-config", "no");
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
  if (cell.getAttribute("fill") === "full") {
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
  cell.setAttribute("fill", "full");
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
    const cells = getConfigGrid(currentState.win[1]);
    colorWinningCell(cells);
    setTimeout(() => alert(`${currentState.win[0]} player win`), 0);
  } else if (currentState?.draw) {
    alert("It's a draw");
  }
}

/**
 *
 * @param {number} config
 * @returns {Array}
 */
export function getConfigGrid(config) {
  switch (config) {
    case 1:
      return ["cell1-00", "cell2-01", "cell3-02"];
    case 2:
      return ["cell4-10", "cell5-11", "cell6-12"];
    case 3:
      return ["cell7-20", "cell8-21", "cell9-22"];
    case 4:
      return ["cell1-00", "cell4-10", "cell7-20"];
    case 5:
      return ["cell2-01", "cell5-11", "cell8-21"];
    case 6:
      return ["cell3-02", "cell6-12", "cell9-22"];
    case 7:
      return ["cell1-00", "cell5-11", "cell9-22"];
    case 8:
      return ["cell7-20", "cell5-11", "cell3-02"];
  }
}

/**
 *
 * @param {NodeList} cells
 */
export function colorWinningCell(cells) {
  cells.forEach((cellId) => {
    const cell = document.getElementById(cellId);
    cell.setAttribute("win-config", "yes");
  });
}
