import GenerateButton from '../components/GenerateButton.js'
import { getRandomColor } from '../utils/colors.js'

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
    onClickGenerate: () => {
      const leftColor = getRandomColor()
      const rightColor = getRandomColor()

      this.setState({
        leftColor,
        rightColor,
      })
    },
  })

  this.render = () => {
    if (!$target.querySelector(`.${$page.className}`)) {
      $target.appendChild($page)
    }

    const { leftColor, rightColor } = this.state
    $page.setAttribute(
      'style',
      `background: linear-gradient(to right, ${leftColor}, ${rightColor});`,
    )

    $gradient.textContent = `background: linear-gradient(to right, ${leftColor}, ${rightColor});`
  }
}
