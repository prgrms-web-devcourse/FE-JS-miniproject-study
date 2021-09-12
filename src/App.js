import ColorsPage from './pages/ColorsPage.js'

export default function App({ $target }) {
  const colorsPage = new ColorsPage({ $target })

  this.route = () => {
    const { pathname } = location

    if (pathname === '/') {
      colorsPage.render()
    }
  }

  this.route()
}
