import App from '../../project7-DigitalClock/src/App.js';

export default function Project6Page({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'project7 page';

  new App({ $target: $page });

  this.render = () => {
    $target.append($page);
  };
}
