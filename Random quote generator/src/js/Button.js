export default function Button({$target, onClick}) {
    const $quoteButton = document.createElement('div');
    $quoteButton.className = 'quote-btn';
    $target.appendChild($quoteButton);

    this.render = () => {
        $quoteButton.innerHTML = `
            <button class="btn btn-info" id="generate">Generator Quote</button>
        `;
    };

    this.render();

    $quoteButton.addEventListener('click', onClick);
}
