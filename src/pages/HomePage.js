import { projectList } from '../data/projectList.js';

export default function HomePage({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'home';

  this.state = projectList;

  this.render = () => {
    $page.innerHTML = /* html */ `
      <ul class="homeList">
        ${this.state
          .map(
            (project) => /* html */ `
              <li><a href="/project/${project.id}" class="link">${project.id}. ${project.title}</a></li>
            `,
          )
          .join('')}
      </ul>
    `;

    $target.append($page);
  };
}
