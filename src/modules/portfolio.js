const portfolio = () => {
  const portfolioForm = document.querySelector('.portfolio');
  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');
  const arrowRight = document.getElementById('portfolio-arrow_right');
  const arrowLeft = document.getElementById('portfolio-arrow_left');
  const slidesList = portfolioForm.querySelectorAll('.portfolio-slider__slide-frame');
  const portfolioPopup = document.querySelector('.popup-portfolio');
  const popupDialogWindow = portfolioPopup.querySelector('.popup-dialog')

  let currentlyShownSlides;
  let activeSet = [];

  if (document.documentElement.offsetWidth < 1010){
    currentlyShownSlides = 2;
  } else {
    currentlyShownSlides = 3;
  }

  const showSlide = (elem, index) => {
    elem[index].style.display = 'flex';
  }

  const hideSlide = (elem, index) => {
    elem[index].style.display = 'none';
  }

  for (let i = 0; i < portfolioSlide.length; i++){
    hideSlide(portfolioSlide, i);
  }
  for (let i = 0; i < currentlyShownSlides; i++){
    showSlide(portfolioSlide, i);
  }


  const getActiveSlidesSet = (slidesList) => {
    activeSet = [];
    for (let i = 0; i < slidesList.length; i++){
      if(slidesList[i].style.display === 'flex'){
        activeSet.push(i);
      }
    }
  }

  arrowRight.addEventListener('click', () => {

    getActiveSlidesSet(portfolioSlide);
    if (activeSet[0] !== 0){
      arrowLeft.style.display = 'flex';
    }

    for (let i = 0; i < activeSet.length; i++){
      hideSlide(portfolioSlide, activeSet[i]);
    }

    for (let i = 0; i < activeSet.length; i++){
      activeSet[i] += 1;
    }

    if (activeSet[activeSet.length - 1] === portfolioSlide.length - 1){
      arrowRight.style.display = 'none';
    }

    for (let i = 0; i < activeSet.length; i++){
      showSlide(portfolioSlide, activeSet[i]);
    }
  })

  arrowLeft.addEventListener('click', () => {

    getActiveSlidesSet(portfolioSlide);

    if (activeSet[activeSet.length - 1] !== portfolioSlide.length - 1){
      arrowRight.style.display = 'flex';
    }

    for (let i = 0; i < activeSet.length; i++){
      hideSlide(portfolioSlide, activeSet[i]);
    }

    for (let i = 0; i < activeSet.length; i++){
      activeSet[i] -= 1;
    }

    if (activeSet[0] === 0){
      arrowLeft.style.display = 'none';
    }

    for (let i = 0; i < activeSet.length; i++){
      showSlide(portfolioSlide, activeSet[i]);
    }
  })

  slidesList.forEach(slide => {
    slide.addEventListener('click', (e) => {
      portfolioPopup.style.visibility = 'visible';
    })
  })

  portfolioPopup.addEventListener('click', (e) => {
    const close = portfolioPopup.querySelector('.close');
    if(!e.target.closest('.popup-dialog')){
      portfolioPopup.style.visibility = 'hidden';
    }
    if (e.target === close){
      portfolioPopup.style.visibility = 'hidden';
    }
  })
}

export default portfolio;
