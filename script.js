import { Game } from "./js/game.js";
import { cleanCell, clickCell } from "./functions.js";

const cells = document.querySelectorAll(".cell");
let currentGame;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    cells.forEach((cell) => cleanCell(cell));
    currentGame = new Game(obj);
    currentGame.initGame();
    window.currentMetaGame = currentGame;
  });
});

//Il manque l'event listener - clickCell(cell, currentGame)
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => clickCell(cell, currentGame));
});
