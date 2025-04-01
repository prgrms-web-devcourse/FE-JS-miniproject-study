const $app = document.querySelector(".app");
const $button = document.querySelector(".color-change-button");
const $hexColor = document.querySelector(".hex-color");

$button.addEventListener("click", (e) => {
  const startColor = makeRandomColorinHex();
  const endColor = makeRandomColorinHex();

  $app.style.background = `linear-gradient(to right,${startColor},${endColor})`;
  $hexColor.innerText = `${startColor} ~ ${endColor}`;
});

function getRandomIntWithHexa(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
    .toString(16)
    .padStart(2, "0");
}

function makeRandomColorinHex() {
  const r = getRandomIntWithHexa(0, 255);
  const g = getRandomIntWithHexa(0, 255);
  const b = getRandomIntWithHexa(0, 255);

  return `#${r}${g}${b}`;
}
