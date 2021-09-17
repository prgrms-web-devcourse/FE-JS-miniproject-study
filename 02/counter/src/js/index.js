const counterBtn = document.querySelector('.counter-btn');
const counterNum = document.querySelector('.counter-num');

window.addEventListener('click', e => {
	let currentNumValue = Number(counterNum.textContent);

	const activeBtn = document.querySelector('.active');
	activeBtn?.classList.remove('active');

	const { act } = e.target.dataset;
	if (!act) {
		return;
	}

	e.target.classList.add('active');

	if (act === 'increase') {
		counterNum.textContent = currentNumValue + 1;
	} else {
		counterNum.textContent = currentNumValue - 1;
	}
});
