import Button from "./Button.js";

const COLOR_LIST = [
  "Orangered",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Cyan",
  "DodgerBlue",
  "Violet",
  "Navy",
  "Purple",
  "YellowGreen",
  "OrangeRed",
  "SlateBlue",
  "Salmon",
  "Crimson",
  "HotPink",
  "Magenta",
];

export default function App({ $target }) {
  const $main = document.createElement("div");
  $main.className = "main-container";
  $target.appendChild($main);

  let ColorListIndex = 0;

  new Button({
    $target: $main,
    text: "Click Me!",
    onClick: () => {
      if (ColorListIndex > COLOR_LIST.length - 1) {
        ColorListIndex = 0;
      }
      $main.style.backgroundColor = COLOR_LIST[ColorListIndex++];
    },
  });
}
