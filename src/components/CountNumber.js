export default function CountNumber({ $target, initialState }) {
  const $number = document.createElement('div')
  $number.className = 'Counter__number'

  $target.appendChild($number)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $number.textContent = this.state
  }

  this.render()
}
