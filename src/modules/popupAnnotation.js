const popupAnnotation = () => {
  const formulaForm = document.querySelector('.wrapper_small');
  const formulaItemsPopup = formulaForm.querySelectorAll('.formula-item-popup');

  formulaForm.addEventListener('mouseover', (e) => {
    if (e.target.closest(".formula-item")){
      console.dir(e.target)
      // formulaItemsPopup.style.opacity = '1';
      // formulaItemsPopup.style.visibility = 'visible';
      console.log("Мы на элементе!")
    } else {
      // formulaItemsPopup.style.opacity = '0.1';
      // formulaItemsPopup.style.visibility = 'hidden';
      console.log("Мы не на элементе!")
    }
  })
}
export default popupAnnotation;
