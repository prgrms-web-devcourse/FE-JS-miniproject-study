import RandomColorButton from '../components/Button.js'
import { getRandomColor } from '../utils/colors.js'
import { appendIfPageNotExists } from '../utils/render.js'

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
    onClick: () => {
      const color = getRandomColor()

      this.setState({ color })
    },
  })

  this.render = () => {
    appendIfPageNotExists($target, $page)

    $page.style.backgroundColor = this.state.color
  }
}
