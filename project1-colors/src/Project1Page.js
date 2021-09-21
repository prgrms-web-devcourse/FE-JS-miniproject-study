import Button from "./Button.js";

export default function Project1Page({ $target }) {
  const $page = document.createElement("div");

  $page.className = "project1 page";

  new Button({
    $target: $page,
    onClick: (colorCode) => {
      $page.style.backgroundColor = `#${colorCode}`;
    },
  });

  this.render = () => {
    $target.append($page);
  };
}
