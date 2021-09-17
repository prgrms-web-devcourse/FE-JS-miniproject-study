const timeArea = document.querySelector('.time-area');

const setTime = () => {
	const options = {
		weekday: 'short',
		hour: 'numeric',
		minute: 'numeric',
	};

	const time = new Intl.DateTimeFormat('en', options)
		.format(new Date())
		.toUpperCase();
	timeArea.textContent = time;

	setTimeout(setTime, 1000);
};

window.addEventListener('load', setTime);
