import GenerateButton from '../components/GenerateButton.js'
import { fetchQuote } from '../service/quoteApi.js'
import { appendIfPageNotExists } from '../utils/render.js'

export default function RandomQuotePage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'RandomQuote'

  const $quoteContainer = document.createElement('div')
  $quoteContainer.className = 'RandomQuote__container'
  $page.appendChild($quoteContainer)

  new GenerateButton({
    $target: $page,
    text: 'Generate Quote',
    className: 'RandomQuote__button',
    onClickGenerate: async () => {
      const nextState = await fetchQuote()

      this.setState(nextState)
    },
  })

  this.state = {
    quote: '',
    author: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    appendIfPageNotExists($target, $page)

    const { quote, author } = this.state
    $quoteContainer.innerHTML = `
      <p class="RandomQuote__quote">${quote ? `"${quote}"` : ''}</p>
      <div class="RandomQuote__author">${author ? `- ${author}` : ''}</div>
    `
  }
}
