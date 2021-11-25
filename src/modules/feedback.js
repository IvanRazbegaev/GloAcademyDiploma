import {sendFeedback} from "./helpers";

const feedback = (form) => {

  const feedbackForm = document.querySelectorAll(`${form}`);

  const termsCloseBtn = document.querySelector('.popup-privacy>.close');
  const terms = document.querySelector('.popup-privacy');

  const thanksPopup = document.querySelector('.popup-thank');
  const thanksForm = thanksPopup.querySelector('.feedback-wrap.popup-thank-bg');
  const thanksPopupClose = thanksPopup.querySelector('.close');

  termsCloseBtn.addEventListener('click', () => {
    terms.style.visibility  = 'hidden';
  })

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    const feedbackBtn = item.querySelector('.button');
    const privacyLink = item.querySelector('.link-privacy');

    let confCheckbox = item.querySelector('.checkbox__input');

    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      terms.style.visibility  = 'visible'
    })

    feedbackForm.forEach(item => {
      const phoneInput = item.querySelector('.input.feedback__input-input');
      phoneInput.addEventListener('input', (e) => {
        e.target.value = phoneMask(e.target.value)
      })
    })
    function phoneMask (phone) {
      return phone.replace(/\D/g, '')
        .slice(0, 11)
        .replace(/^(\d{1,2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1($2)$3-$4-$5');
    }
    feedbackBtn.addEventListener('click', async (e) => {
      confCheckbox = item.querySelector('.checkbox__input');
      e.preventDefault();
      if (phoneInput.value.length < 11){
        alert('Телефонный номер не может быть менее 11 символов!')
        return false;
      } else if (!confCheckbox.checked) {
        alert('Примите политику безопасности!')
        return false;
      }
      thanksPopup.style.visibility = 'visible';
      thanksPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-thank-bg')){
          thanksPopup.style.visibility = 'hidden';
        }
      })
      thanksPopupClose.addEventListener('click', () => {
        thanksPopup.style.visibility = 'hidden';
      })

      const response = await sendFeedback(phoneInput.value);
      if (form.includes('popup')){
        document.querySelector(form).style.visibility = 'hidden';
      }
      phoneInput.value = '';
      confCheckbox.checked = false;
      console.log(response);
    })
  })
}



export default feedback;
