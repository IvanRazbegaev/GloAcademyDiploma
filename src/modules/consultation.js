import feedback from "./feedback";


const consult = () => {
  const consultBtn = document.querySelectorAll('.button.button_wide');
  const consultPopup = document.querySelector('.popup-consultation');
  const consultCloseBtn = consultPopup.querySelector('.close');

  feedback('.popup.popup-consultation');

  consultBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      consultPopup.style.visibility = 'visible';
    })
  })

  consultPopup.addEventListener('click', (e) => {
    if (e.target.closest('.feedback-wrap')) {
      consultPopup.style.visibility = 'visible';
    } else {
      consultPopup.style.visibility = 'hidden';
    }
  })

  consultCloseBtn.addEventListener('clicked', () => {
    consultPopup.style.visibility = 'hidden';
  })
}

export default consult;
