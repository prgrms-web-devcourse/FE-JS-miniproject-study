const $app = document.querySelector(".app");
const $button = document.querySelector("button");
const $quoteContainer = $app.querySelector(".quote-container");

$button.addEventListener("click", async (e) => {
  const { quote, name } = await getRandomQuote();
  $quoteContainer.querySelector(".quote-text").innerText = quote;
  $quoteContainer.querySelector(".quote-author").innerText = name;
});

const getRandomQuote = async () => {
  try {
    const res = await fetch(
      "https://quotel-quotes.p.rapidapi.com/quotes/random",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "quotel-quotes.p.rapidapi.com",
          "x-rapidapi-key":
            "1272ed783amshe40b9176ec8d6e2p193236jsn7a5df7a8c1fb",
        },
        body: JSON.stringify({}),
      }
    );

    if (res.ok) {
      return res.json();
    }
  } catch (e) {
    throw Error(e);
  }
};
