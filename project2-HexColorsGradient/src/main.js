import Button from "./Button.js";
import Sign from "./Sign.js";

const $app = document.querySelector("#app");

const signBoard = new Sign({ $target: $app });

new Button({
  $target: $app,
  onClick: (direction, startColor, endColor) => {
    $app.style.background = `linear-gradient(to ${direction}, #${startColor}, #${endColor})`;
    signBoard.setState({
      ...signBoard.state,
      direction,
      colorCode: { start: startColor, end: endColor },
    });
  },
});
