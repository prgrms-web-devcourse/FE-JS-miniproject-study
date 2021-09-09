import { $setProperty } from '../utils/document.js'

export default function Background({ $target, initialState }) {
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $setProperty($target, '--left', this.state.left)
    $setProperty($target, '--right', this.state.right)
    $setProperty($target, '--direction', this.state.direction)
  }
}
