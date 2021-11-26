const portfolio = () => {
  const portfolioForm = document.querySelector('.portfolio');
  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');
  const arrowRight = document.getElementById('portfolio-arrow_right');
  const arrowLeft = document.getElementById('portfolio-arrow_left');
  const slidesList = portfolioForm.querySelectorAll('.portfolio-slider__slide-frame');
  const portfolioPopup = document.querySelector('.popup-portfolio');
  const sliderText = portfolioPopup.querySelectorAll('.popup-portfolio-text');
  const SliderPicture = portfolioPopup.querySelectorAll('.popup-portfolio-slider__slide')
  const contentCounterTotal = portfolioPopup.querySelector('.slider-counter-content__total');
  const popupArrowLeft = portfolioPopup.querySelector('.popup-arrow.popup-arrow_left');
  const popupArrowRight = portfolioPopup.querySelector('.popup-arrow.popup-arrow_right');

  let contentCounterCurrent = portfolioPopup.querySelector('.slider-counter-content__current');
  let currentlyShownSlides;
  let activeSet = [];
  let activePicture = 0;


  contentCounterTotal.textContent = `${SliderPicture.length}`;

  const hidePictures = (elem, indexes) => {
    for (let i = 0; i < indexes; i++){
      elem[i].style.display = 'none';
    }
  }
  const showSlide = (elem, index) => {
    elem[index].style.display = 'flex';
  }

  if (document.documentElement.offsetWidth < 1010){
    currentlyShownSlides = 2;
  } else if (document.documentElement.offsetWidth >= 1010) {
    currentlyShownSlides = 3;
  } else if (document.documentElement.offsetWidth < 560) {
    currentlyShownSlides = 1;
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

    for (let i = 0; i < activeSet.length; i++){
      hideSlide(portfolioSlide, activeSet[i]);
    }

    for (let i = 0; i < activeSet.length; i++){
      activeSet[i] += 1;
    }

    if (activeSet[0] !== 0){
      arrowLeft.style.display = 'flex';
    }
    if (activeSet[activeSet.length - 1] === portfolioSlide.length - 1){
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
    }

    for (let i = 0; i < activeSet.length; i++){
      showSlide(portfolioSlide, activeSet[i]);
    }
  })

  arrowLeft.addEventListener('click', () => {

    getActiveSlidesSet(portfolioSlide);

    for (let i = 0; i < activeSet.length; i++){
      hideSlide(portfolioSlide, activeSet[i]);
    }

    for (let i = 0; i < activeSet.length; i++){
      activeSet[i] -= 1;
    }

    if (activeSet[activeSet.length - 1] !== portfolioSlide.length - 1){
      arrowRight.style.display = 'flex';
    }

    if (activeSet[0] === 0){
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = 'flex';
    }

    for (let i = 0; i < activeSet.length; i++){
      showSlide(portfolioSlide, activeSet[i]);
    }
  })

  slidesList.forEach((slide, index) => {
    slide.addEventListener('click', (e) => {
      portfolioPopup.style.visibility = 'visible';
      hidePictures(sliderText, sliderText.length);
      hidePictures(SliderPicture, sliderText.length);
      showSlide(sliderText, index.toString().slice(-1));
      showSlide(SliderPicture, index.toString().slice(-1));
      activePicture = +index.toString().slice(-1);
      contentCounterCurrent.textContent = `${activePicture + 1}`;
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

  popupArrowLeft.addEventListener('click', () => {
    activePicture--
    if (activePicture < 0){
      activePicture = SliderPicture.length - 1;
    }
    hidePictures(sliderText, sliderText.length);
    hidePictures(SliderPicture, sliderText.length);
    showSlide(sliderText, activePicture);
    showSlide(SliderPicture, activePicture);
    contentCounterCurrent.textContent = `${activePicture + 1}`;
  })

  popupArrowRight.addEventListener('click', () => {
    activePicture++
    if (activePicture >= SliderPicture.length){
      activePicture = 0;
    }
    hidePictures(sliderText, sliderText.length);
    hidePictures(SliderPicture, sliderText.length);
    showSlide(sliderText, activePicture);
    showSlide(SliderPicture, activePicture);
    contentCounterCurrent.textContent = `${activePicture + 1}`;
  })

}

export default portfolio;
