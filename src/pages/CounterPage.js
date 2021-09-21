import Button from '../components/Button.js'
import CountNumber from '../components/CountNumber.js'
import { appendIfPageNotExists } from '../utils/render.js'

const TITLE_TEXT = 'COUNTER'

export default function CounterPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Counter'

  this.state = {
    number: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    countNumber.setState(this.state.number)
  }

  const $container = document.createElement('div')
  $container.className = 'CounterContainer'
  $container.innerHTML = `
    <h1 class="Counter__title">${TITLE_TEXT}</h1>
  `

  const countNumber = new CountNumber({
    $target: $container,
    initialState: this.state.number,
  })

  const $buttons = document.createElement('div')
  $buttons.className = 'Counter__buttons'
  $container.appendChild($buttons)

  new Button({
    $target: $buttons,
    text: 'Increase',
    className: 'Counter__button',
    onClick: () => {
      const number = this.state.number + 1
      this.setState({
        ...this.state,
        number,
      })
    },
  })

  new Button({
    $target: $buttons,
    text: 'Decrease',
    className: 'Counter__button',
    onClick: () => {
      const number = this.state.number - 1
      this.setState({
        ...this.state,
        number,
      })
    },
  })

  $page.appendChild($container)

  this.render = () => {
    appendIfPageNotExists($target, $page)
  }
}
