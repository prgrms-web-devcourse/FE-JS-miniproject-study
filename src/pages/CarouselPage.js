import { appendIfPageNotExists } from '../utils/render.js'
import ImageCarousel from '../components/ImageCarousel.js'
import Indicators from '../components/Indicators.js'

const images = [
  {
    name: 'Lam0',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam0.jpg',
  },
  {
    name: 'Lam1',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam1.jpg',
  },
  {
    name: 'Lam2',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam2.jpg',
  },
  {
    name: 'Lam3',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam3.jpg',
  },
  {
    name: 'Lam4',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam4.jpg',
  },
  {
    name: 'Lam5',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam5.jpg',
  },
  {
    name: 'Lam5',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam6.jpg',
  },
  {
    name: 'Lam7',
    src: 'https://iamcodefoxx.github.io/ImageCarousel/Lam7.jpg',
  },
]

const IMAGES_LENGTH = images.length

export default function CarouselPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'CarouselPage'

  this.state = {
    index: 0,
  }

  const imageCarousel = new ImageCarousel({
    $target: $page,
    initialState: {
      index: this.state.index,
      image: images[this.state.index],
    },
    onClickNext: () => {
      const index = (this.state.index + 1) % IMAGES_LENGTH

      this.setState({
        ...this.state,
        index,
      })
    },
    onClickPrev: () => {
      const index =
        this.state.index - 1 < 0 ? IMAGES_LENGTH - 1 : this.state.index - 1

      this.setState({
        ...this.state,
        index,
      })
    },
  })

  const indicators = new Indicators({
    $target: $page,
    initialState: {
      index: this.state.index,
    },
    length: IMAGES_LENGTH,
  })

  this.setState = (nextState) => {
    this.state = nextState
    const { index } = this.state

    imageCarousel.setState({
      index,
      image: images[index],
    })

    indicators.setState({
      index,
    })
  }

  this.render = () => {
    appendIfPageNotExists($target, $page)
  }
}
