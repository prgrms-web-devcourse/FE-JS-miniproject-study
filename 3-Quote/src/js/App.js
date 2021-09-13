import { request } from '../service/api.js'

export default function App({ $target }) {
  const $app = document.querySelector('.app')
  const $text = document.querySelector('.quote_text')
  const $author = document.querySelector('.quote_author')
  const $button = document.querySelector('button')

  $button.addEventListener('click', async (e) => {
    const { quote, author } = await request()
    $text.innerText = '"' + quote + '"'

    $author.innerText = author ? '- ' + author : 'anonymous'
  })
}
