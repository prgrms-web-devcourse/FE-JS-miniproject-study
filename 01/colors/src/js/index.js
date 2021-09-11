import { COLOR_CHIP } from "../../data/constant.js";

const $container = document.querySelector(".container");
const $clickBtn = document.querySelector(".click-btn");

window.addEventListener("click", (e) => {
  const isClickBtn = e.target.classList.contains("click-btn");
  const randomNum = Math.ceil(Math.random() * 8);

  if (isClickBtn) {
    $clickBtn.classList.add("click-btn-focus");
    $container.style.backgroundColor = COLOR_CHIP[randomNum];
  } else {
    $clickBtn.classList.remove("click-btn-focus");
  }
});
