import App from '../../project5-Counter/src/App.js';

export default function Project5Page({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'project5 page';

  new App({ $target: $page });

  this.render = () => {
    $target.append($page);
  };
}
