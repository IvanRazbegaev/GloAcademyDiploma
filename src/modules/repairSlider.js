const repairSlider = () => {
  const repairForm = document.querySelector('.repair-types');
  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');
  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');
  const currentCounterSlide = repairForm.querySelector('.slider-counter-content__current');
  const overallSlides = repairForm.querySelector('.slider-counter-content__total');
  const sliderForm = repairForm.querySelector('.nav-list.nav-list-repair');
  const sliderItems = repairForm.querySelectorAll('.button_o');
  const navLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');
  const navRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');

  console.log(sliderItems);

  const mobVersionWidth = 1024;
  let currentSlide = 0;
  let currentElem = 0;
  let currentTranslate = 0;

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

    if(document.documentElement.offsetWidth < mobVersionWidth){
      if (e.target.matches('.nav-arrow.nav-arrow_left')){
        checkActiveButton(repairTab);
        prevElem(repairTab, currentElem, 'active')
        currentElem --;
        if (currentElem < 0){
          currentElem = 0;
          navLeft.disabled = true
        } else {
          navLeft.disabled = false;
        }
        currentTranslate -= 18;
        if (currentTranslate <= 0){
          currentTranslate = 0;
        }
        sliderForm.style.transform = `translateX(-${+currentTranslate}%)`;
        currentSlide = 0;
        updateCounter(currentElem);
        handleSlider(currentElem);
        nextElem(repairTab, currentElem, 'active')
      } else if (e.target.matches('.nav-arrow.nav-arrow_right')){
        checkActiveButton(repairTab);
        prevElem(repairTab, currentElem, 'active')
        currentElem ++;
        currentTranslate += 18;
        if (currentTranslate >= 38){
          currentTranslate = 38;
        }
        sliderForm.style.transform = `translateX(-${+currentTranslate}%)`
        if (currentElem >= repairTab.length){
          currentElem = repairTab.length - 1;
          navRight.disabled = true;
        } else {
          navRight.disabled = false;
        };
        currentSlide = 0;
        updateCounter(currentElem);
        handleSlider(currentElem);
        nextElem(repairTab, currentElem, 'active')
      }
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
