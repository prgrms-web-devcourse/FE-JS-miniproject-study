import Header from '../layouts/Header.js';

import HomePage from '../pages/HomePage.js';
import NotFoundPage from '../pages/NotFoundPage.js';
import Project1Page from '../../project1-colors/src/Project1Page.js';
import Project2Page from '../../project2-HexColorsGradient/src/Project2Page.js';
import Project3Page from '../../project3-RandomQuoteGenerator/src/Project3Page.js';
import Project4Page from '../pages/Project4Page.js';
import Project5Page from '../pages/Project5Page.js';
import Project6Page from '../pages/Project6Page.js';

export default function App({ $target }) {
  new Header({ $target });

  const $main = document.createElement('main');
  $target.append($main);

  const homePage = new HomePage({ $target: $main });
  const notFoundPage = new NotFoundPage({ $target: $main });
  const project1Page = new Project1Page({ $target: $main });
  const project2Page = new Project2Page({ $target: $main });
  const project3Page = new Project3Page({ $target: $main });
  const project4Page = new Project4Page({ $target: $main });
  const project5Page = new Project5Page({ $target: $main });
  const project6Page = new Project6Page({ $target: $main });

  this.route = () => {
    $main.innerHTML = ``;
    const { pathname } = location;

    if (pathname === `/`) {
      homePage.render();
    } else if (pathname.indexOf(`/project/`) === 0) {
      const [, , projectId] = pathname.split('/');
      switch (parseInt(projectId)) {
        case 1:
          project1Page.render();
          break;
        case 2:
          project2Page.render();
          break;
        case 3:
          project3Page.render();
          break;
        case 4:
          project4Page.render();
          break;
        case 5:
          project5Page.render();
          break;
        case 6:
          project6Page.render();
          break;
      }
    } else {
      notFoundPage.render();
    }
  };

  this.route();

  window.addEventListener('click', (e) => {
    if (e.target.className === 'link') {
      e.preventDefault();
      history.pushState(null, null, e.target.href);

      this.route();
    }
  });
}
