export default function Quote({$target, initialState}) {
    const $quotes = document.createElement('div');
    $quotes.className = 'inner-quotes-container';
    $target.appendChild($quotes);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        const {quote, author} = this.state;
        $quotes.innerHTML = `
            <p id="quote">${quote ? `"${quote}"` : ''}</p>
            <h3 id="author">${author ? `-${author}` : ''}</h3>
        `;
    };

    this.render();
}
