const popupAnnotation = () => {
  const formulaForm = document.querySelector('.formula');
  const formulaItemsPopup = formulaForm.querySelectorAll('.formula-item-popup');
  let formulaItems = document.querySelectorAll('.formula-item');

  console.log(formulaItems)

  const mobileVersionWidth = 1024;

  let activeElemPosition = 0;
  let activeItem = 0;

  formulaForm.addEventListener('mouseover', (e) => {
    console.log(e.target)
    if(e.target.matches('.formula-item__icon')){
      console.log('Над иконкой')
    }
  })
  // forEach((item, index) => {
  //   item.addEventListener('mouseover', (e) => {
  //     if (e.target.closest(".formula-item__icon")){
  //       item.classList.add('active-item');
  //
  //     } else {
  //       item.classList.remove('active-item');
  //     }
  //   })
  // })
  // const getActiveElemPosition = (elem, index) => {
  //       activeElemPosition = elem[index].getBoundingClientRect().top + window.scrollY;
  // }
  //
  // const getActiveItem = () => {
  //   formulaItems = document.querySelectorAll('.formula-item');
  //   for (let i = 0; i < formulaItems; i++){
  //     console.log(formulaItems[i]);
  //     if(formulaItems[i].classList.contains('active-item')){
  //       activeItem = i;
  //       console.log(activeItem);
  //     }
  //   }
  // }
}
export default popupAnnotation;
