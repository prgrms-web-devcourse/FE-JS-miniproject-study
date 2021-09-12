export default function GenerateButton({
  $target,
  text = 'Click Me!',
  className,
  onClickGenerate,
}) {
  const $button = document.createElement('button')
  $button.className = className
  $button.textContent = text
  $target.appendChild($button)

  $button.addEventListener('click', (e) => {
    onClickGenerate()
  })
}
