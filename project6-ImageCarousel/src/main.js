import App from './App.js';

const $target = document.querySelector('main');
const $page = document.createElement('div');
$target.append($page);
$page.className = 'project6 page';

new App({ $target: $page });
