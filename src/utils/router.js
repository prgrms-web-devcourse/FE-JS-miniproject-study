const ROUTE_CHANGE = 'route-change'

const push = (nextUrl) => {
  history.pushState(null, null, nextUrl)
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE))
}

const initRoute = (route) => {
  window.addEventListener(ROUTE_CHANGE, route)
  window.addEventListener('popstate', (e) => {
    e.preventDefault()
    route()
  })
}

const RouterUtils = {
  push,
  initRoute,
}

export default RouterUtils
