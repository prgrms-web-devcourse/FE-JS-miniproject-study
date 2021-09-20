import { request } from "./api.js";
import Button from "./Button.js";
import QuoteBox from "./QuoteBox.js";

export default function App({ $target }) {
  const quoteBox = new QuoteBox({ $target });
  new Button({
    $target,
    onClick: async () => {
      const generatedQuoteSet = await request();
      const quote = `"${generatedQuoteSet.quote.replace("\uFFFD", "'")}"`;
      const author = generatedQuoteSet.author
        ? `- ${generatedQuoteSet.author}`
        : ``;

      quoteBox.setState({
        ...quoteBox.state,
        quote,
        author,
      });
    },
  });
}
