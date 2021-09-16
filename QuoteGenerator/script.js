const API_END_POINT = 'https://free-quotes-api.herokuapp.com';

const request = async () => {
  try {
    const res = await fetch(`${API_END_POINT}`);
    if (res.ok) {
      return await res.json();
    }
    throw new Error('API 호출 오류');
  } catch (e) {
    alert(e.message);
  }
}

const cardElement = document.querySelector('.card');
const quoteElement = document.createElement('p');
quoteElement.className = 'quote';
const authorElement = document.createElement('p');
authorElement.className = 'author';
const buttonElement = document.querySelector('.btn-generate');

const loadQuote = async () => {
  const quoteText = await request();
  quoteElement.textContent = quoteText.quote;
  authorElement.textContent = quoteText.author;
}

buttonElement.addEventListener('click', () => {
  loadQuote()
  cardElement.appendChild(quoteElement);
  cardElement.appendChild(authorElement);
})








