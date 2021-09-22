export default function Description({ $target, initialState, onChangeColor }) {
  const $itemDiv = document.createElement('div')
  $target.appendChild($itemDiv)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { left, right, direction } = this.state

    $itemDiv.innerHTML = `
      <p class="description">CLICK THE BUTTON BELLOW TO GENERATE</p>
      <p class="subDescription">A RANDOM  HEX COLOR COMBINATION</p>
      <p class="gradient">background liner-gradient(${direction}, ${left}, ${right})</p>
      <button class="color_btn">CLICK ME</button>
    `
  }

  this.render()

  $itemDiv.addEventListener('click', (e) => {
    const { className } = e.target

    if (className === 'color_btn') {
      onChangeColor()
    }
  })
}
