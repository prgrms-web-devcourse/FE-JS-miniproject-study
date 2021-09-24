import App from '../../project6-ImageCarousel/src/App.js';

export default function Project6Page({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'project6 page';

  const app = new App({ $target: $page });

  this.render = () => {
    $target.append($page);
    app.init();
  };
}
