export default function Form({ $target, onSubmit }) {
  const $form = document.createElement('form');
  $target.append($form);

  $form.innerHTML = /* html */ `
    <label for="messageInput">메시지를 입력하세요.</label>
    <div class="inputBox">
      <button type="button">💌</button>
      <input type="text" name="message" id="messageInput" />
    </div>
    <button class="button__submit">SEND</button>
  `;

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = document.querySelector('#messageInput');
    if (!$input.value) {
      alert('한 글자 이상 입력해주세요.');
      return;
    }
    const messageContent = $input.value;
    $input.value = '';
    onSubmit(messageContent);
  });
}
