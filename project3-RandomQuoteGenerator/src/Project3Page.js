import App from './App.js';

export default function Project3Page({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'project3 page';

  new App({ $target: $page });

  this.render = () => {
    $target.append($page);
  };
}
