export default function Button({ $target, text, onClick }) {
  const $button = document.createElement("button");
  $button.className = "color-event-button";
  $target.appendChild($button);
  $button.textContent = text;
  $button.addEventListener("click", (e) => {
    onClick();
  });
}
