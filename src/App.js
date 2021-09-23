import CarouselPage from './pages/CarouselPage.js'
import ColorsPage from './pages/ColorsPage.js'
import CounterPage from './pages/CounterPage.js'
import DigitalClockPage from './pages/DigitalClockPage.js'
import HexColorsGradientPage from './pages/HexColorsGradientPage.js'
import HomePage from './pages/HomePage.js'
import MessagePage from './pages/MessagePage.js'
import RandomQuotePage from './pages/RandomQuotePage.js'

import RouterUtils from './utils/router.js'

export default function App({ $target }) {
  const homePage = new HomePage({ $target })
  const colorsPage = new ColorsPage({ $target })
  const hexColorsGradientPage = new HexColorsGradientPage({ $target })
  const randomQuotePage = new RandomQuotePage({ $target })
  const messagePage = new MessagePage({ $target })
  const counterPage = new CounterPage({ $target })
  const carouselPage = new CarouselPage({ $target })
  const digitalClockPage = new DigitalClockPage({ $target })

  this.route = () => {
    const { pathname } = location
    $target.innerHTML = ''

    if (pathname === '/') {
      homePage.render()
    } else if (pathname === '/colors') {
      colorsPage.render()
    } else if (pathname === '/hex-colors-gradient') {
      hexColorsGradientPage.render()
    } else if (pathname === '/random-quote') {
      randomQuotePage.render()
    } else if (pathname === '/the-message') {
      messagePage.render()
    } else if (pathname === '/counter') {
      counterPage.render()
    } else if (pathname === '/image-carousel') {
      carouselPage.render()
    } else if (pathname === '/digital-clock') {
      digitalClockPage.render()
    }
  }

  this.route()
  RouterUtils.initRoute(this.route)
}
