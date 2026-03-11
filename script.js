import { Game } from "./js/game.js";
import { cleanCell } from "./functions-dom.js";

const cells = document.querySelectorAll(".cell");
const metaGame = new Game();
// window.currentMetaGame = metaGame;
// window.currentMetaGame.initGame();
// window.currentMetaGame.playGame();
//metaGame.initGame();
//metaGame.playGame();

// const newGameBtn = document.querySelector(".new-game-btn");
// newGameBtn.addEventListener("click", (e) => {
//   e.preventDefault();
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    console.log(obj);
    cells.forEach((cell) => cleanCell(cell));
  });
});
