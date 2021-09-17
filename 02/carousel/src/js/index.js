import { drawItems, drawIndicators } from './render.js';

const carouselInner = document.querySelector('.carousel-inner');
const carouselIndicator = document.querySelector('.carousel-indicators');

const getPrevIndex = () => {
	const currentCarousel = document.querySelector('.active');
	const prevIndex = Number(currentCarousel.dataset['slideTo']);

	return prevIndex;
};

const getCurrentIndex = (act, currentIndex) => {
	if (act === 'next') {
		return currentIndex === 7 ? 0 : currentIndex + 1;
	}

	return currentIndex === 0 ? 7 : currentIndex - 1;
};

const hideItem = prevIndex => {
	const prevCarousel = document.querySelectorAll('.carousel-item')[prevIndex];
	const prevIndicator = document.querySelectorAll(
		'.carousel-indicators button',
	)[prevIndex];

	prevCarousel.classList.add('hide');
	prevIndicator.classList.remove('active');
};

const showItem = currentIndex => {
	const currentCarousel =
		document.querySelectorAll('.carousel-item')[currentIndex];
	const currentIndicator = document.querySelectorAll(
		'.carousel-indicators button',
	)[currentIndex];

	currentCarousel.classList.remove('hide');
	currentIndicator.classList.add('active');
};

const selectCurrentItem = (prevIndex, currentIndex) => {
	hideItem(prevIndex);
	showItem(currentIndex);
};

carouselInner.addEventListener('click', e => {
	const { act } = e.target.dataset;

	if (!act) {
		return;
	}

	const prevIndex = getPrevIndex();
	const currentIndex = getCurrentIndex(act, prevIndex);
	selectCurrentItem(prevIndex, currentIndex);
});

carouselIndicator.addEventListener('click', e => {
	const { slideTo } = e.target.dataset;

	if (!slideTo) {
		return;
	}

	const prevIndex = getPrevIndex();
	selectCurrentItem(prevIndex, slideTo);
});

const init = () => {
	drawItems();
	drawIndicators();
};

init();
