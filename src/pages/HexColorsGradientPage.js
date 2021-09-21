import GenerateButton from '../components/Button.js'
import { getRandomColor } from '../utils/colors.js'
import { appendIfPageNotExists } from '../utils/render.js'

const INFO_TEXT =
  'CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION'

export default function HexColorsGradientPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'HexColorsGradient'

  this.state = {
    leftColor: '#e66465',
    rightColor: '#9198e5',
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const $container = document.createElement('div')
  $container.className = 'HexColorsGradient__infoContainer'
  $page.appendChild($container)

  const $info = document.createElement('div')
  $info.className = 'HexColorsGradient__Info'
  $info.textContent = INFO_TEXT
  $container.appendChild($info)

  const $gradient = document.createElement('div')
  $gradient.className = 'HexColorsGradient__Info'
  $container.appendChild($gradient)

  new GenerateButton({
    $target: $page,
    text: 'Click Me!',
    className: 'RandomGradientButton',
    onClick: () => {
      const leftColor = getRandomColor()
      const rightColor = getRandomColor()

      this.setState({
        leftColor,
        rightColor,
      })
    },
  })

  this.render = () => {
    appendIfPageNotExists($target, $page)

    const { leftColor, rightColor } = this.state
    $page.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`

    $gradient.textContent = `background: linear-gradient(to right, ${leftColor}, ${rightColor});`
  }
}
