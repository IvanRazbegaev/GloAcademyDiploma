import {sendFeedback} from "./helpers";


const feedbackBlock = async () => {
  const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');

  const termsCloseBtn = document.querySelector('.popup-privacy>.close');
  const terms = document.querySelector('.popup-privacy');

  const thanksPopup = document.querySelector('.popup-thank');
  const thanksPopupClose = thanksPopup.querySelector('.close');

  termsCloseBtn.addEventListener('click', () => {
    terms.style.visibility = 'hidden';
  })

  feedbackBlockForm.forEach(block => {
    const phoneInput = block.querySelector('.feedback-block__form-input_phone');
    const nameInput = block.querySelector('.feedback-block__form-input_name');
    const feedbackBtn = block.querySelector('.button');
    const privacyLink = block.querySelector('.link-privacy');

    let confCheckbox = block.querySelector('.checkbox__input');

    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      terms.style.visibility = 'visible'
    })

    phoneInput.addEventListener('input', (e) => {
      e.target.value = phoneMask(e.target.value)
    })

    nameInput.addEventListener('input', (e) => {
      e.target.value = nameMask(e.target.value);
    })

    feedbackBtn.addEventListener('click', async (e) => {
      confCheckbox = block.querySelector('.checkbox__input');
      e.preventDefault();
      if (phoneInput.value.length < 11) {
        alert('Телефонный номер не может быть менее 11 символов!')
        return false;
      } else if (!confCheckbox.checked) {
        alert('Примите политику безопасности!')
        return false;
      } else if (nameInput.value.length < 2){
        alert('Имя не может быть менее 2ух символов!');
        return false;
      }

      thanksPopup.style.visibility = 'visible';
      thanksPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-thank-bg')) {
          thanksPopup.style.visibility = 'hidden';
        }
      })
      thanksPopupClose.addEventListener('click', () => {
        thanksPopup.style.visibility = 'hidden';
      })

      const response = await sendFeedback(phoneInput.value, nameInput.value);
      console.log(response)

      phoneInput.value = '';
      nameInput.value = '';
      confCheckbox.checked = false;
    })
  })
}
  const nameMask = (name) => {
    return name.replace(/\d/gi, '')
  }



  const phoneMask = (phone) => {
    return phone.replace(/\D/g, '')
      .slice(0, 11)
      .replace(/^(\d{1,2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1($2)$3-$4-$5');
  }


export default feedbackBlock;
