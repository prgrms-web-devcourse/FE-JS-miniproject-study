import Button from './Button.js'

export default function ImageCarousel({
  $target,
  initialState,
  onClickNext,
  onClickPrev,
}) {
  const $imageCarousel = document.createElement('div')
  $imageCarousel.className = 'ImageCarousel'

  this.state = initialState

  $target.appendChild($imageCarousel)

  const $image = document.createElement('img')
  $image.className = 'ImageCarousel__image'

  const $buttons = document.createElement('div')
  $buttons.className = 'ImageCarousel__buttons'

  new Button({
    $target: $buttons,
    text: '<i class="fas fa-chevron-left"></i>',
    className: 'ImageCarousel__button',
    onClick: onClickPrev,
  })

  new Button({
    $target: $buttons,
    text: '<i class="fas fa-chevron-right"></i>',
    className: 'ImageCarousel__button',
    onClick: onClickNext,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $imageCarousel.innerHTML = ''

    const { src, name } = this.state.image
    $image.src = src
    $image.alt = name

    $imageCarousel.appendChild($image)
    $imageCarousel.appendChild($buttons)
  }

  this.render()
}
