import Message from "./Message.js";

export default function App({ $target }) {
  this.state = null;

  this.setState = (nextState) => {
    if (this.state !== nextState) {
      this.state = nextState;
      message.setState(this.state);
    }
  };

  const message = new Message({
    $target,
    onInput: (text) => {
      this.setState(text);
    },
  });
}
