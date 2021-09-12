import ColorsPage from './pages/ColorsPage.js'
import HexColorsGradientPage from './pages/HexColorsGradientPage.js'
import HomePage from './pages/HomePage.js'
import RandomQuotePage from './pages/RandomQuotePage.js'

import RouterUtils from './utils/router.js'

export default function App({ $target }) {
  const homePage = new HomePage({ $target })
  const colorsPage = new ColorsPage({ $target })
  const hexColorsGradientPage = new HexColorsGradientPage({ $target })
  const randomQuotePage = new RandomQuotePage({ $target })

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
    }
  }

  this.route()
  RouterUtils.initRoute(this.route)
}
