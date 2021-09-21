import RouterUtils from '../utils/router.js'

const projects = [
  {
    name: 'Colors',
    path: '/colors',
  },
  {
    name: 'Hex Colors Gradient',
    path: '/hex-colors-gradient',
  },
  {
    name: 'Random Quote Generator',
    path: '/random-quote',
  },
  {
    name: 'The message',
    path: '/the-message',
  },
  {
    name: 'Counter',
    path: '/counter',
  },
]

export default function HomePage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Home'

  this.render = () => {
    $target.appendChild($page)
    $page.innerHTML = `
    <h1>🎉 Javascript Mini Project Study 🎉</h1>
    <ul>  
      ${projects
        .map(
          (project, index) =>
            `<li class="Link" value=${index}>${index + 1}. ${
              project.name
            }</li>`,
        )
        .join('')}
    </ul>
    `
  }

  $page.addEventListener('click', (e) => {
    const { className } = e.target
    const { value } = e.target

    if (className === 'Link') {
      RouterUtils.push(projects[+value].path)
    }
  })
}
