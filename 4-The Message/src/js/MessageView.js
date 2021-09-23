export default function MessageView({$target, initialState}) {
  const $msgView = document.createElement('div')
  $msgView.className = 'msg_view'
  $target.appendChild($msgView)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $msgView.style.display = this.state ? 'block' : 'none'
    $msgView.textContent = this.state
  }
  
  this.render()

}