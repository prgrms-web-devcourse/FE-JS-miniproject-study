import RandomColorButton from '../components/GenerateButton.js'
import { getRandomColor } from '../utils/colors.js'

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
      const color = getRandomColor()

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
