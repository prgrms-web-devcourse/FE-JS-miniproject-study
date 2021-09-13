import { leftOption, rightOption, directOption } from '../utils/Constant.js'
import Background from './Background.js'
import Description from './Description.js'

export default function App({ $target }) {
  this.state = {
    left: 'white',
    right: 'white',
    direction: 'to right',
  }

  const { left, right, direction } = this.state

  const description = new Description({
    $target,
    initialState: {
      left,
      right,
      direction,
    },
    onChangeColor: () => {
      const colorRandomNum = Math.floor(Math.random() * leftOption.length)
      const direcRandomNum = Math.floor(Math.random() * directOption.length)

      const selectedLeft = leftOption[colorRandomNum]
      const selectedRight = rightOption[colorRandomNum]
      const selectedDirection = directOption[direcRandomNum]

      this.setState({
        left: selectedLeft,
        right: selectedRight,
        direction: selectedDirection,
      })
    },
  })

  const background = new Background({
    $target,
    initialState: {
      left,
      right,
      direction,
    },
  })

  this.setState = (nextState) => {
    this.state = nextState

    const { left, right, direction } = this.state
    description.setState({
      left,
      right,
      direction,
    })

    background.setState({
      left,
      right,
      direction,
    })
  }
}
