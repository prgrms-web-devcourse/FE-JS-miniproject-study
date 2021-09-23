export default function Indicators({ $target, initialState, length }) {
  const $indicators = document.createElement('div')
  $indicators.className = 'Carousel__indicators'
  $target.appendChild($indicators)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const indicatorDots = Array.from(new Array(length), (_) => _)
      .map(
        (_, index) => `<div class="Carousel__indicator-dot 
      ${
        index === this.state.index ? 'Carousel__indicator-dot--selected' : ''
      }"></div>`,
      )
      .join('')
    $indicators.innerHTML = indicatorDots
  }

  this.render()
}
