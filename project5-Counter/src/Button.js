export default function Button({ $target, feature, onClick }) {
  const $button = document.createElement('button');
  $target.append($button);

  $button.textContent = feature;
  $button.className = feature;

  $button.addEventListener('click', (e) => {
    onClick();
  });
}
