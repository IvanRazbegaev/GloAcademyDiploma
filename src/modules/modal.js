import {menuClosing} from "./menu";

const modal = () => {
  const modalWindow = document.querySelector('.popup-repair-types');
  const fullList = document.querySelectorAll('.link-list');
  const modalCloseBtn = modalWindow.querySelector('.close')

  fullList.forEach(item => {
    item.addEventListener('click', (e) => {
      if(item.querySelector('.menu-link')){
        menuClosing();
      }
      modalWindow.style.visibility = 'visible';
    })
  })

  modalCloseBtn.addEventListener('click', () => {
    modalWindow.style.visibility = 'hidden';
  })
}

export default modal;
