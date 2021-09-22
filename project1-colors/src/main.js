import Button from './Button.js';

const $app = document.querySelector('#app');

new Button({
  $target: $app,
  onClick: (colorCode) => {
    $app.style.backgroundColor = `#${colorCode}`;
  },
});
