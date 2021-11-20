const popupAnnotation = () => {
  const formulaForm = document.querySelector('.wrapper_small');
  const formulaItemsPopup = formulaForm.querySelectorAll('.formula-item-popup');
  const formulaItems = formulaForm.querySelectorAll('.formula-item');

  formulaItems.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      if (e.target.closest(".formula-item__icon")){
        item.classList.add('active-item');
      } else {
        item.classList.remove('active-item');
      }
    })
  })
}
export default popupAnnotation;
