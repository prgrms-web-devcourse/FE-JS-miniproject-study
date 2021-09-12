export default function GenerateButton({
  $target,
  text = 'Click Me!',
  className,
  onClickGenerate,
}) {
  const $button = document.createElement('button')
  $button.className = `GenerateButton ${className}`
  $button.textContent = text
  $target.appendChild($button)

  $button.addEventListener('click', (e) => {
    onClickGenerate()
  })
}
