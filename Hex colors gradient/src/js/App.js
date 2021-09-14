import Button from './Button.js';

export default function App({$target}) {
    const $background = document.createElement('h2');
    $target.appendChild($background);

    const selectRandomColor = () => {
        return '#' + Math.round(Math.random() * 0xffffff).toString(16);
    };

    this.state = {
        hexcode1: '#ffffff',
        hexcode2: '#ffffff',
    };

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    new Button({
        $target,
        onClick: () => {
            const nextHexCode = {
                hexcode1: selectRandomColor(),
                hexcode2: selectRandomColor(),
            };
            this.setState(nextHexCode);
        },
    });

    this.render = () => {
        const {hexcode1, hexcode2} = this.state;

        $background.innerHTML = `
            background: linear-gradient(to right,
            <span id="hexcode1">${hexcode1}</span>
            ,
            <span id="hexcode2">${hexcode2}</span>
            ); 
        `;

        document.querySelector('main').style = `background: linear-gradient(to right, ${hexcode1} , ${hexcode2}`;
    };

    this.render();
}
