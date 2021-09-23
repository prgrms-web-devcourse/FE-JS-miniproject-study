import { TEXTS } from '../../utils/Constant.js'
import CountView from './CountView.js'
import CountBtns from './CountBtns.js'

export default function App({ $target }) {
  // 페이지는 전체 배경을 의미.
  const $page = document.createElement('div')
  $page.className = "count_page"
  $target.appendChild($page)

  this.state = {
    count : 0
  }

  this.setState = (nextState) => {
    this.state = nextState
    countView.setState(this.state.count)
  }

  const $container = document.createElement('div')
  $page.appendChild($container)
  $container.className = 'counter_container'
  $container.innerHTML = `
    <h2>${TEXTS.TITLE_TEXT}</h2>
  `
  
  const countView = new CountView({
    $target: $container,
    initialState: this.state.count
  })

  new CountBtns({
    $target: $container,
    onUpCount: () => {
      const count = this.state.count + 1
      this.setState({
        ...this.state,
        count
      })
    },
    onDownCount : () => {
      const count = this.state.count - 1
      this.setState({
        ...this.state,
        count
      })
    }
  })


}

// 전체 UI를 담당해주는 메세지 쪽?
// 그리고 엔터를 받는 쪽을 해줘야하는건기?