export default function MessageForm({ $target, onSubmit }) {
  const $form = document.createElement('form')

  $target.appendChild($form)

  this.render = () => {
    $form.innerHTML = `
      <div class="MessageForm__input-area">
          <button class="MessageForm__icon-button" type="button">
            <i class="far fa-envelope"></i>
          </button>
          <input class="MessageForm__input" type="text" />
      </div>
      <button class="MessageForm__submit">submit</button>
    `
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault()

    const $input = $form.querySelector('.MessageForm__input')
    onSubmit($input.value)

    $input.value = ''
  })

  this.render()
}
