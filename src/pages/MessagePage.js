import MessageForm from '../components/MessageForm.js'
import MessagePreview from '../components/MessagePreveiw.js'
import { appendIfPageNotExists } from '../utils/render.js'

const TITLE_TEXT = 'Pass the message'
const INFO_TEXT = 'Enter a message'

export default function MessagePage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Message'

  this.state = {
    message: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    messagePreview.setState(this.state.message)
  }

  const $container = document.createElement('div')
  $container.className = 'MessageForm'
  $container.innerHTML = `
      <h3 class="MessageForm__title">${TITLE_TEXT}</h3>
      <div class="MessageForm__divider"></div>
      <p class="MessageForm__info">${INFO_TEXT}</p>
  `

  new MessageForm({
    $target: $container,
    onSubmit: (message) => {
      this.setState({
        ...this.state,
        message,
      })
    },
  })

  const messagePreview = new MessagePreview({
    $target: $container,
    initialState: this.state.message,
  })

  $page.appendChild($container)

  this.render = () => {
    appendIfPageNotExists($target, $page)
  }
}
