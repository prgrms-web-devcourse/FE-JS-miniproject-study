export default function CountView({$target, initialState}) {
  const $count = document.createElement('h3')
  $target.appendChild($count) 

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $count.textContent = this.state
  }

  this.render()
}