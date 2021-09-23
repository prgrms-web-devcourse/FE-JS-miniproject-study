export default function ImageCarousel({$target, initialState, onPrevClick, onNextClick}) {
  const $carouselImage = document.createElement('div')
  $carouselImage.className = 'carouselImage'

  this.state = initialState

  $target.appendChild($carouselImage)

  const $image = document.createElement('img')
  $image.className = 'carouselImage__image'

  const $buttons = document.createElement('div')
  $buttons.className = 'carouselImage__buttons'

  $buttons.innerHTML = `
    <button class="prevBtn">
     <i class="fas fa-chevron-left"></i>
    </button>
    <button class="nextBtn">
      <i class="fas fa-chevron-right"></i>
    </button>

  `

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $carouselImage.innerHTML = ''

    const { src, name } = this.state.image
    $image.src = src
    $image.alt = name

    $carouselImage.appendChild($image)
    $carouselImage.appendChild($buttons)
  }

  this.render()

  $buttons.addEventListener('click', (e) => {
    const {className} = e.target.closest('button')
    
    if ( className === 'prevBtn') {
      onPrevClick()
    } else if ( className === 'nextBtn' ) {
      onNextClick()
    }
  })
}