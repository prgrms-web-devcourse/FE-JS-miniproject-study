export default function Button({$target, onClick}) {
    const $submitButton = document.createElement('button');
    $submitButton.id = 'submit';
    $submitButton.className = 'btn';
    $submitButton.textContent = 'Click Me';

    $target.appendChild($submitButton);

    let isInitialize = true;

    $submitButton.addEventListener('click', (e) => {
        if (isInitialize) {
            $submitButton.className += ' btn-light';
            isInitialize = false;
        }
        onClick();
    });
}
