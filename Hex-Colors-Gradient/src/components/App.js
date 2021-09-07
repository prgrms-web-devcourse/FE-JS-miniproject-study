import Button from "./Button.js";
import ColorText from "./ColorText.js";

export default function App({ $target }) {
  const $main = document.createElement("div");
  $main.className = "main-container";
  $target.appendChild($main);

  this.state = {
    firstColor: "#ffffff",
    secondColor: "#ffffff",
  };

  const colorText = new ColorText({ $target: $main, init: this.state });

  new Button({
    $target: $main,
    text: "Click Me",
    onClick: () => {
      const firstColor = randHexColorCode();
      const secondColor = randHexColorCode();
      const nextBackgroundColor = `background: linear-gradient(to right, ${firstColor}, ${secondColor});`;
      colorText.setState({ firstColor, secondColor });
      $main.style = nextBackgroundColor;
    },
  });

  const randHexColorCode = () =>
    `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
}
