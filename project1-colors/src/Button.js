export default function Button({ $target, onClick }) {
  const $button = document.createElement('button');
  $target.append($button);
  $button.textContent = 'Click Me!';

  $button.addEventListener('click', () => {
    const generateRandomColorCode = () => {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      return randomHex.length < 6 ? `${'0'.repeat(6 - randomHex.length)}${randomHex}` : randomHex;
    };
    onClick(generateRandomColorCode());
  });
}
