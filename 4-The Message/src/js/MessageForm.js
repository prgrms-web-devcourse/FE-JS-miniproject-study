export default function MessageForm({$target, onSubmit}) {
   const $form = document.createElement('form')
   $target.appendChild($form)
   
   this.render = () => {
     $form.innerHTML = `
       <div>
         <button class="msg_form_btn"type="button">
          <i class="far fa-envelope"></i>
         </button><input class="msg_form_input" type="text">
       </div>
       <button class="msg_form_submit">Submit</button>
     `
   }

   this.render()

   $form.addEventListener('submit', (e) => {
     e.preventDefault()

     const input = $form.querySelector('.msg_form_input')
     onSubmit(input.value)

     input.value = ''
   })


   window.addEventListener('Enter', (e) => {
     e.preventDefault()

     const input = $form.querySelector('.msg_form_input')
     onSubmit(input.value)

     input.value = ''
   })


}