const $app = document.querySelector(".app");
const $button = $app.querySelector(".change-color");

$button.addEventListener("click", (e) => {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  $app.style.backgroundColor = `rgb(${r},${g},${b})`;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
