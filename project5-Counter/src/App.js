import Button from './Button.js';
import * as feature from './Constants.js';
import Count from './Count.js';

export default function App({ $target }) {
  const $container = document.createElement('div');
  $container.className = 'countContainer';
  $target.append($container);
  $container.innerHTML = /* html */ `
    <h2>Counter</h2>
  `;

  const count = new Count({ $target: $container, initialState: 0 });

  new Button({
    $target: $container,
    feature: feature.INCREASE,
    onClick: () => {
      count.setState(count.state + 1);
    },
  });

  new Button({
    $target: $container,
    feature: feature.DECREASE,
    onClick: () => {
      count.setState(count.state - 1);
    },
  });
}
