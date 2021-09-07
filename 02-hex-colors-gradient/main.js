const INITIAL_BODY_BACKGROUND = 'linear-gradient(to right, #ffffff, #ffffff)';

const $body = document.querySelector('body');
$body.style.background = INITIAL_BODY_BACKGROUND;

const $currentStyle = document.querySelector('.current-style');
$currentStyle.textContent = $body.style.background;

const $button = document.getElementById('button');

const randomHexColor = () => `#${Math.floor(Math.random() * (256 ** 3)).toString(16)}`;

$button.addEventListener('click', () => {
  const currentColor = `linear-gradient(to right, ${randomHexColor()}, ${randomHexColor()})`;
  $body.style.background = currentColor;
  $currentStyle.textContent = currentColor;
});

const $guideMessage = document.querySelector('.guide-message');

setInterval(() => {
  $guideMessage.classList.toggle('change-color');
  $currentStyle.classList.toggle('change-color');
}, 2000);
