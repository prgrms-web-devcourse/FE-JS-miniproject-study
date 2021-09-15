import {request} from './api.js';
import Button from './Button.js';
import Quote from './Quote.js';

export default function App({$target}) {
    this.state = {
        quote: '',
        author: '',
    };

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    const quote = new Quote({
        $target,
        initialState: this.state,
    });

    new Button({
        $target,
        onClick: async () => {
            const randomQuote = await request('');
            this.setState(randomQuote);
        },
    });

    this.render = () => {
        quote.setState(this.state);
    };
}
