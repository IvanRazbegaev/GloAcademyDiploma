const popupAnnotation = () => {
  const formulaForm = document.querySelector('.wrapper_small');
  const formulaItemsPopup = formulaForm.querySelectorAll('.formula-item-popup');
  const formulaItems = formulaForm.querySelectorAll('.formula-item');

  formulaItems.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      if (e.target.closest(".formula-item__icon")){
        formulaItemsPopup[index].style.opacity = '1';
        formulaItemsPopup[index].style.visibility = 'visible';
      } else {
        formulaItemsPopup[index].style.opacity = '0.2';
        formulaItemsPopup[index].style.visibility = 'hidden';
      }
    })
  })
}
export default popupAnnotation;
