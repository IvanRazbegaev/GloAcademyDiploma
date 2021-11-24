import {menuClosing} from "./menu";

const modal = () => {
  const modalWindow = document.querySelector('.popup-repair-types');
  const fullList = document.querySelectorAll('.link-list');
  const modalCloseBtn = modalWindow.querySelector('.close');
  const navigationList = modalWindow.querySelector('.nav-list.nav-list-popup-repair');
  const leftArrow = document.getElementById('nav-arrow-popup-repair_left');
  const rightArrow = document.getElementById('nav-arrow-popup-repair_right');
  const repairTypeTable = modalWindow.querySelector('.popup-repair-types-content-table-wrap')
  const repairTypeTableItems = modalWindow.querySelector('.popup-repair-types-content-table__list');
  const repairTypeTableHeader = modalWindow.querySelector('.popup-repair-types-content__head-title')

  console.log(repairTypeTableHeader);
  console.log(leftArrow);
  console.log(rightArrow);
  console.log(repairTypeTable);

  fullList.forEach(item => {
    item.addEventListener('click', (e) => {
      if (item.querySelector('.menu-link')) {
        menuClosing();
      }
      modalWindow.style.visibility = 'visible';
    })
  })

  modalCloseBtn.addEventListener('click', () => {
    modalWindow.style.visibility = 'hidden';
  })

  modalWindow.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-dialog')) {
      modalWindow.style.visibility = 'hidden';
    }
  })

  const createTableElements = (elementAppendTo, type, unit, cost) => {
    //TODO deep-клонировать уже имеющиеся элементы, а потом уж их удалять
  }
}

export default modal;
