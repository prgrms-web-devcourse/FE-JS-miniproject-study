const BASE_IMG_URL = '/02/carousel/src/assets/images/';

const drawItems = () => {
	const carouselInner = document.querySelector('.carousel-inner');
	let html = '';

	for (let idx = 0; idx < 8; idx++) {
		const carouselClass = idx ? 'carousel-item hide' : 'carousel-item';

		html += `<div class="${carouselClass}" data-id="${idx}">
              <img src="${BASE_IMG_URL}${idx + 1}.jpeg" alt="${idx}번" />
            </div>`;
	}

	carouselInner.innerHTML += html;
};

const drawIndicators = () => {
	const indicators = document.querySelector('.carousel-indicators');
	let html = '';

	for (let idx = 0; idx < 8; idx++) {
		const indicatorClass = !idx ? 'class="active"' : '';
		html += `<button ${indicatorClass} data-slide-to="${idx}"></button>`;
	}

	indicators.innerHTML = html;
};

export { drawItems, drawIndicators };
