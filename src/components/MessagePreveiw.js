export default function MessagePreview({ $target, initialState }) {
  const $preview = document.createElement('div')
  $preview.className = 'MessageForm__preview'

  $target.appendChild($preview)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $preview.style.display = this.state ? 'block' : 'none'
    $preview.textContent = this.state
  }

  this.render()
}
