export default function Header({ $target }) {
  const $header = document.createElement('header');
  $target.append($header);

  this.render = () => {
    $header.innerHTML = /* html */ `
      <h1><a href="/" class="link"> 🏠 Lim's 25 JavaScript Mini Project 🏠</a></h1>
    `;
  };

  this.render();
}
