import RandomColorButton from '../components/GenerateButton.js'
import { MAX_RGB_NUMBER } from '../constants.js'

export default function ColorsPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Colors'

  this.state = {
    color: '#ffffff',
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  new RandomColorButton({
    $target: $page,
    text: 'Click Me!',
    className: 'RandomColorButton',
    onClickGenerate: () => {
      const rgb = Math.floor(Math.random() * MAX_RGB_NUMBER).toString(16)
      const color = `#${rgb}`

      this.setState({ color })
    },
  })

  this.render = () => {
    if (!$target.querySelector(`.${$page.className}`)) {
      $target.appendChild($page)
    }

    $page.setAttribute('style', `background-color: ${this.state.color};`)
  }
}
