import { TEXTS } from '../../utils/Constant.js'
import MessageForm from './MessageForm.js'
import MessageView from './MessageView.js'

export default function App({ $target }) {
  // 페이지는 전체 배경을 의미.
  const $page = document.createElement('div')
  $page.className = "msg_page"
  $target.appendChild($page)

  this.state = {
    message : ''
  }

  this.setState = (nextState) => {
    this.state = nextState
    messageView.setState(this.state.message)
  }

  const $container = document.createElement('div')
  $container.className = 'msg_form'
  $container.innerHTML = `
    <h2>${TEXTS.TITLE_TEXT}</h2>
    <p></p>
    <h3>${TEXTS.INFO_TEXT}</h3>
  `

  new MessageForm({
    $target:$container,
    onSubmit : (message) => {
      this.setState({
        ...this.state,
        message
      })
    }
  })

  const messageView = new MessageView({
    $target: $container,
    initialState: this.state.message
  })


  $page.appendChild($container)

}

// 전체 UI를 담당해주는 메세지 쪽?
// 그리고 엔터를 받는 쪽을 해줘야하는건기?