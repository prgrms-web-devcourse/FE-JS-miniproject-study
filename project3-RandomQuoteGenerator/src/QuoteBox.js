export default function QuoteBox({ $target }) {
  const $box = document.createElement('div');
  $target.append($box);
  $box.className = 'quoteContainer';

  this.state = {
    quote: '',
    author: '',
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { quote, author } = this.state;
    $box.innerHTML = /* html */ `
      <p class="quoteArea">${quote}</p>
      <p class="authorArea">${author}</p>
    `;
  };

  this.render();
}
