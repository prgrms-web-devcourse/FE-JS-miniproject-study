const postInput = document.querySelector('.post-input input');
const postDisplay = document.querySelector('.post-display');
const postSubmitBtn = document.querySelector('.submit-btn');

postInput.addEventListener('keyup', e => {
	if (e.key === 'Enter') {
		postDisplay.textContent = e.target.value;
	}
});

postSubmitBtn.addEventListener('click', e => {
	postDisplay.textContent = postInput.value;
});
