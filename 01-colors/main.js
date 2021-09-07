const $button = document.getElementById('button');

const $body = document.querySelector('body');

const randomColorValue = () => Math.floor(Math.random() * 256);

const randomColor = () => `rgba(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()}`;

$button.addEventListener('click', () => {
  $body.style.backgroundColor = randomColor();
});
