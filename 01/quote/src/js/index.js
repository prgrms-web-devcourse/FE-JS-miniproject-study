import { getQuote } from "../api/api.js";

const $clickBtn = document.querySelector(".click-btn");
const $quote = document.querySelector(".quote");
const $author = document.querySelector(".author");

async function fetchQuote() {
  const res = await getQuote();
  const { quote, author } = res;

  $quote.textContent = `"${quote}"`;
  $author.textContent = `- ${author} -`;
}

$clickBtn.addEventListener("click", (e) => fetchQuote());
