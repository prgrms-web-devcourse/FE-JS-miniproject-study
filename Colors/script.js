const colors = ['SpringGreen', 'DarkGreen', 'SlateBlue', 'Salmon', 'Gold', 'DarkKhaki', 'BlueViolet', 'OliveDrab', 'LightSteelBlue', 'Chocolate', 'SandyBrown', 'AliceBlue']
const button = document.querySelector('button')

button.addEventListener('click', e => {
  const containerElement = e.target.closest('.container')
  containerElement.style.backgroundColor = randomColor(colors)
})

const randomColor = (colors) => {
  const randomNum = Math.floor(Math.random() * colors.length)
  return colors[randomNum]
}