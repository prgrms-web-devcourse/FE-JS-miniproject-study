export default function Button({
  $target,
  text = 'Click Me!',
  className,
  onClick,
}) {
  const $button = document.createElement('button')
  $button.className = `GenerateButton ${className}`
  $button.textContent = text
  $target.appendChild($button)

  $button.addEventListener('click', () => {
    onClick()
  })
}
