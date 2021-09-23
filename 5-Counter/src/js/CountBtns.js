export default function CountBtns({$target, onUpCount, onDownCount}) {

  const $buttons = document.createElement('div')
  $buttons.className = 'buttons_div'

  $buttons.innerHTML = `
    <button class="increase_btn">increase</button>
    <button class="decrease_btn">decrease</button>
  `

  $target.appendChild($buttons)

  $buttons.addEventListener('click', (e) => {
    const { className } = e.target

    if ( className === 'increase_btn') {
      onUpCount()
    } else if ( className === 'decrease_btn') {
      onDownCount()
    }

  })

 
}