import Form from './Form.js';

export default function App({ $target }) {
  const $messageBox = document.createElement('div');
  const $previewBox = document.createElement('p');
  $messageBox.className = 'messageBox';
  $previewBox.className = 'previewBox';
  $target.append($messageBox);

  $messageBox.innerHTML = /* html */ `
    <h2>메시지 보내기</h2>
    <hr />
  `;

  new Form({
    $target: $messageBox,
    onSubmit: (messageContent) => {
      $previewBox.textContent = messageContent;
    },
  });

  $messageBox.append($previewBox);
}
