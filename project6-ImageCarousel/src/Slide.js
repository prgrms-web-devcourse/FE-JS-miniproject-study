import { IMG_API_END_POINT, KEYWORDS_FOR_IMAGE } from './constants.js';

export default function Slide({ $target, initialState }) {
  const $slide = document.createElement('div');
  $slide.className = 'slide fade';
  $target.append($slide);

  this.state = initialState;

  const { curIndex, imgLength } = this.state;

  fetch(`${IMG_API_END_POINT}${KEYWORDS_FOR_IMAGE[curIndex - 1]}`).then((res) => {
    $slide.innerHTML = /* html */ `
      <div class="numberText">${curIndex} / ${imgLength}</div>
      <img class="slideImg" src="${res.url}" alt="slide image"/>
    `;
  });
}
