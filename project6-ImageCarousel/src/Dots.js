export default function Dots({ $target, initialState }) {
  const $dotsContainer = document.createElement('div');
  $dotsContainer.className = 'dotsContainer';
  $target.append($dotsContainer);

  this.state = initialState;

  $dotsContainer.innerHTML = /* html */ `
    ${`<span class="dot"></span>`.repeat(this.state.imgLength)}
  `;
}
