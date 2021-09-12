export default function ColorsPage({ $target }) {
  const $page = document.createElement('div')

  this.state = {
    leftColor: '#FFFFFF',
    rightColor: '#FFFFFF',
  }

  this.render = () => {
    $target.appendChild($page)
    $page.innerHTML = '시작합니다..'
  }
}
