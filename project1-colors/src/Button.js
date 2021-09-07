export default function Button({ $target, onClick }) {
  const $button = document.createElement("button");
  $target.append($button);
  $button.textContent = "Click Me!";

  $button.addEventListener("click", (e) => {
    const generateRandomColorCode = () => {
      return Math.floor(Math.random() * 16777215).toString(16);
    };
    onClick(generateRandomColorCode());
  });
}
