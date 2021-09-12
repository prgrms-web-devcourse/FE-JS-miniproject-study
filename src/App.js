import ColorsPage from './pages/ColorsPage.js'
import HexColorsGradientPage from './pages/HexColorsGradientPage.js'

export default function App({ $target }) {
  const colorsPage = new ColorsPage({ $target })
  const hexColorsGradientPage = new HexColorsGradientPage({ $target })

  this.route = () => {
    const { pathname } = location
    $target.innerHTML = ''
    if (pathname === '/') {
      colorsPage.render()
    } else if (pathname === '/hex-colors-gradient') {
      hexColorsGradientPage.render()
    }
  }

  this.route()
}
