import RandomColorButton from '../components/RandomColorButton.js'
import { MAX_RGB_NUMBER } from '../constants.js'

export default function ColorsPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Colors'

  $target.appendChild($page)
  this.state = {
    color: '#ffffff',
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  new RandomColorButton({
    $target: $page,
    onClickColorGenerate: () => {
      const rgb = Math.floor(Math.random() * MAX_RGB_NUMBER).toString(16)
      const color = `#${rgb}`

      this.setState({ color })
    },
  })

  this.render = () => {
    $page.setAttribute('style', `background-color: ${this.state.color};`)
  }
}
