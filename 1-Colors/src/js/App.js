export default function App({ $target }) {
  const $button = document.createElement('button')
  $button.className = 'color-btn'
  $button.innerText = 'Click me'
  $target.appendChild($button)

  $button.addEventListener('click', (e) => {
    colorChange()
  })
}

function colorChange() {
  const color = ['#FC5C7D', '#6A82FB', '#38ef7d', '#fffbd5']

  let num = Math.floor(Math.random() * color.length)

  const $background = document.getElementById('app')
  $background.style.backgroundColor = color[num]
}
