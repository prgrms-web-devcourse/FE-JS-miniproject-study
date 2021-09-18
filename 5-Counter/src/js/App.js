import CounterPage from "./CounterPage.js";

export default function App({ $target }) {
  const counterPage = new CounterPage({ $target });

  counterPage.render();
}
