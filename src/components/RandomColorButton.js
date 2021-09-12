export default function RandomColorButton({ $target, onClickColorGenerate }) {
  const $button = document.createElement('button')
  $button.className = 'RandomColorButton'
  $button.textContent = 'Click Me!'

  $target.appendChild($button)

  $button.addEventListener('click', (e) => {
    onClickColorGenerate()
  })
}
