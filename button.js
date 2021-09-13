export default function ColorBtn ({ $target, onClick }) {
  const colorBtn = document.createElement('button')
  colorBtn.innerText = 'Pick Colors!'
  $target.appendChild(colorBtn)

  colorBtn.addEventListener('click', () => {
    onClick()
  })
}