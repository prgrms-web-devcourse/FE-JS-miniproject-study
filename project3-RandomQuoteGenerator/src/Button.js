export default function Button({ $target, onClick }) {
  const $button = document.createElement("button");
  $target.append($button);
  $button.textContent = "Generate Quote";

  $button.addEventListener("click", (e) => {
    onClick();
  });
}
