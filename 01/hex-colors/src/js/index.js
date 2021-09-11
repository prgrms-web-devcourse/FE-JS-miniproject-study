import { COLOR_CODE } from "../data/constant.js";

const $btn = document.querySelector(".click-btn");
const $colorFrom = document.querySelector(".colorFrom");
const $colorTo = document.querySelector(".colorTo");

$btn.addEventListener("click", () => {
  let random_index = 0;

  let colorFrom = "";
  let colorTo = "";

  for (let i = 0; i < 6; i++) {
    random_index = Math.floor(Math.random() * COLOR_CODE.length);
    colorFrom += COLOR_CODE[random_index];

    random_index = Math.floor(Math.random() * COLOR_CODE.length);
    colorTo += COLOR_CODE[random_index];
  }

  document.body.style.background = `linear-gradient(to right, #${colorFrom}, #${colorTo})`;
  $colorFrom.textContent = colorFrom;
  $colorTo.textContent = colorTo;
});
