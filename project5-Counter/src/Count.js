export default function Count({ $target, initialState }) {
  const $count = document.createElement('p');
  $target.append($count);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $count.textContent = this.state;
  };

  this.render();
}
