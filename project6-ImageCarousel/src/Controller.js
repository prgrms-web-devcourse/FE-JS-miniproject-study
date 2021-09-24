export default function Controller({ $target, onClick }) {
  const $prevButton = document.createElement('a');
  const $nextButton = document.createElement('a');
  $prevButton.className = 'prev controlButton';
  $prevButton.textContent = '❮';
  $nextButton.className = 'next controlButton';
  $nextButton.textContent = '❯';
  $target.append($prevButton, $nextButton);

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev')) {
      onClick(-1);
    }

    if (e.target.classList.contains('next')) {
      onClick(1);
    }
  });
}
