import Controller from './Controller.js';
import Dots from './Dots.js';
import Slide from './Slide.js';

export default function App({ $target }) {
  const $container = document.createElement('div');
  const $slideContainer = document.createElement('div');
  $container.className = 'container';
  $slideContainer.className = 'slideContainer';
  $target.append($container);
  $container.append($slideContainer);

  this.state = {
    imgLength: 7,
    slideIndex: 1,
  };

  const { imgLength } = this.state;
  let { slideIndex } = this.state;

  for (let i = 1; i <= imgLength; i++) {
    new Slide({
      $target: $slideContainer,
      initialState: {
        curIndex: i,
        imgLength,
      },
    });
  }

  new Dots({ $target: $container, initialState: { imgLength } });

  const showSlides = (n) => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > imgLength) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = imgLength;
    }
    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => (dot.className = dot.className.replace(' active', '')));

    const curSlide = slides[slideIndex - 1];
    const curdot = dots[slideIndex - 1];
    curSlide.style.display = 'block';
    curdot.className += ' active';
  };

  // slide가 렌더되기 전에 showSlides()가 실행되는 문제가 있어서
  // wep API를 이용해 slide 렌더 이후에 showSlides()를 처리할 수 있게끔 함
  setTimeout(() => showSlides(slideIndex), 0);

  new Controller({ $target: $slideContainer, onClick: (n) => showSlides((slideIndex += n)) });
}
