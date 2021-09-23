import { images } from '../../utils/imageUrl.js'
import CaroselImage from './CarouselImage.js'
import Indicators from './Indicators.js';

const IMAGES_LENGTH = images.length;
export default function CarouselPage({ $target }) {
  const $page = document.createElement('div')
  $target.appendChild($page)
  $page.className = 'CarouselPage'

  this.state = {
    index: 0,
  }

  const carouselImage = new CaroselImage({
    $target: $page,
    initialState: {
      index: this.state.index,
      image: images[this.state.index],
    },
    onPrevClick: () => {
      const index =
        this.state.index - 1 < 0 ? IMAGES_LENGTH - 1 : this.state.index - 1

      this.setState({
        ...this.state,
        index,
      })
    },
    onNextClick: () => {
      const index = (this.state.index + 1) % IMAGES_LENGTH

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

    carouselImage.setState({
      index,
      image: images[index],
    })

    indicators.setState({
      index,
    })
  }
}