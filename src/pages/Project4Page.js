import App from '../../project4-TheMessage/src/App.js';

export default function Project4Page({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'project4 page';

  new App({ $target: $page });

  this.render = () => {
    $target.append($page);
  };
}
