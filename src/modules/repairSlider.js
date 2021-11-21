const repairSlider = () => {
  const repairForm = document.querySelector('.repair-types');
  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');
  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');
  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');
  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');
  const currentCounterSlide = repairForm.querySelector('.slider-counter-content__current');
  const overallSlides = repairForm.querySelector('.slider-counter-content__total');

  const mobVersionWidth = 1024;
  let currentSlide = 0;
  let currentElem = 0;

  let slides = repairSlider[currentElem].querySelectorAll('.repair-types-slider__slide');

  const updateCounter = (index) => {
    slides = repairSlider[index].querySelectorAll('.repair-types-slider__slide');

    currentCounterSlide.textContent = `${currentSlide + 1}`;
    overallSlides.textContent = `${slides.length}`;
  }

  repairForm.addEventListener('click', (e) => {
    checkActiveButton(repairTab);
    if(!e.target.classList.contains('active') && e.target.tagName === 'BUTTON'){
      currentSlide = 0;
      removeActive();
      e.target.classList.add('active');
      checkActiveButton(repairTab);
      updateCounter(currentElem);
      handleSlider(currentElem);
    }

    prevSlide(slides, currentSlide);
    if(e.target.matches('#repair-types-arrow_left')){
    currentSlide--;
    currentCounterSlide.textContent = `${currentSlide + 1}`
    } else if(e.target.matches('#repair-types-arrow_right')){
      currentSlide++;
      currentCounterSlide.textContent = `${currentSlide + 1}`
    }

    if(currentSlide >= slides.length){
      currentSlide = 0;
      currentCounterSlide.textContent = `${currentSlide + 1}`
    }

    if(currentSlide < 0){
      currentSlide = slides.length - 1
      currentCounterSlide.textContent = `${currentSlide + 1}`
    }
    nextSlide(slides, currentSlide);
  })

  const checkActiveButton = (itemList) => {
    for (let i = 0; i < itemList.length; i++){
      if (itemList[i].classList.contains('active')){
        currentElem = i;
      }
    }
  }

  if(document.documentElement.offsetWidth <= mobVersionWidth){
    mobNavigationLeft.addEventListener('click', () => {
      checkActiveButton(repairTab);
      prevElem(repairTab, currentElem, 'active')
      currentElem --;
      if (currentElem < 0){
        currentElem = repairTab.length - 1;
      }
      nextElem(repairTab, currentElem, 'active')
    });
    mobNavigationRight.addEventListener('click', () => {
      checkActiveButton(repairTab);
      prevElem(repairTab, currentElem, 'active')
      currentElem ++;
      if (currentElem >= repairTab.length - 1){
        currentElem = 0;
      }
      nextElem(repairTab, currentElem, 'active')
    })
  }

 const removeActive = () => {
   repairTab.forEach(tab => {
     if(tab.classList.contains('active')){
       tab.classList.remove('active')
     }
   })
 }
  const handleSlider = (index) => {
    repairSlider.forEach(item => {
      item.style.display = 'none';
    })
    repairSlider[index].style.display = 'block';

  }

  const prevElem = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }
  const nextElem = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const prevSlide = (elems, index) => {
    elems[index].style.display = 'none';
  }
  const nextSlide = (elems, index) => {
    elems[index].style.display = 'block';
  }

updateCounter(currentElem);
}


export default repairSlider;
