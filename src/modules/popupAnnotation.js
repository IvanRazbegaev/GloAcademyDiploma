const popupAnnotation = () => {
  const formulaForm = document.querySelector('.formula');
  const formulaItemsMobile = formulaForm.querySelectorAll('.formula-item.formula-slider__slide');
  const navArrowLeft = document.getElementById('formula-arrow_left');
  const navArrowRight = document.getElementById('formula-arrow_right');
  const mobileVersionWidth = 1024;

  let formulaItemsDesktop = document.querySelectorAll('.wrapper_small.mobile-hide.tablet-hide>.row>.formula-item');
  let activeItem = 0;

  formulaItemsDesktop.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      if (e.target.closest(".formula-item__icon")){
        item.classList.add('active-item');

      } else {
        item.classList.remove('active-item');
      }
    })
  })

  const showSlide= (elem, index) => {
    elem[index].style.display = 'flex';
    elem[index].classList.add('active-item');
  }

  const exposeOfSlide = (elem, index) => {
    elem[index].style.display = 'none';
    elem[index].classList.remove('active-item');
  }

  const hideSlides = () => {
    for  (let i = 0; i < formulaItemsMobile.length; i++){
      formulaItemsMobile[i].style.display = 'none'
    }
  }

  if (document.documentElement.offsetWidth <= mobileVersionWidth){
    hideSlides();
    showSlide(formulaItemsMobile,activeItem);
    navArrowLeft.addEventListener('click', () => {
      exposeOfSlide(formulaItemsMobile, activeItem);
      activeItem--;
      console.log(activeItem);
      if (activeItem < 0){
        activeItem = formulaItemsMobile.length -1;
      }
      showSlide(formulaItemsMobile, activeItem)
    })
    navArrowRight.addEventListener('click', () => {
      exposeOfSlide(formulaItemsMobile, activeItem);
      console.log(activeItem);
      activeItem++;
      if (activeItem >= formulaItemsMobile.length){
        activeItem = 0;
      }
      showSlide(formulaItemsMobile, activeItem)
    })
  }


}
export default popupAnnotation;
