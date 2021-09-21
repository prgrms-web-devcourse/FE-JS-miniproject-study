import Button from "./Button.js";
import Sign from "./Sign.js";

export default function Project2Page({ $target }) {
  const $page = document.createElement("div");

  $page.className = "project2 page";

  const signBoard = new Sign({ $target: $page });

  new Button({
    $target: $page,
    onClick: (direction, startColor, endColor) => {
      $page.style.background = `linear-gradient(to ${direction}, #${startColor}, #${endColor})`;
      signBoard.setState({
        ...signBoard.state,
        direction,
        colorCode: { start: startColor, end: endColor },
      });
    },
  });

  this.render = () => {
    $target.append($page);
  };
}
