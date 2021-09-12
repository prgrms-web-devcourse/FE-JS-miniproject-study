const buttonElement = document.querySelector('button');
const colorElement1 = document.querySelector('.hexcode-1');
const colorElement2 = document.querySelector('.hexcode-2');

buttonElement.addEventListener('click', (e) => {
  const containerElement = e.target.closest('.container');
  const color1 = randomColor();
  const color2 = randomColor();

  colorElement1.textContent = color1;
  colorElement2.textContent = color2;

  containerElement.style.background = `linear-gradient(to right, ${color1}, ${color2})`
})

const randomColor = () => {
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
  return color
}