export default function App({ $target }) {
  const $background = document.getElementById('app')
  const $button = document.createElement('button')
  $button.className = 'color-btn'
  $button.innerText = 'Click me'
  $target.appendChild($button)

  $button.addEventListener('click', () => {
    onColorChange()
  })

  function onColorChange() {
    const colors = ['#FC5C7D', '#6A82FB', '#38ef7d', '#fffbd5', 'eee8aa', '#ffdab9', '#fffaf0']
    let num = Math.floor(Math.random() * colors.length)
    $background.style.backgroundColor = colors[num]
  }
}
