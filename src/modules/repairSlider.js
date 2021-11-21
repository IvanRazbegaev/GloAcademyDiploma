const repairSlider = () => {
  const repairForm = document.querySelector('.repair-types');
  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');
  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');
  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');
  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');
  const mobVersionWidth = 1024;

  let currentSlide = 0;

  const checkActiveButton = (itemList) => {
    for (let i = 0; i < itemList.length; i++){
      if (itemList[i].classList.contains('active')){
        currentSlide = i;
      }
    }
  }

  if(document.documentElement.offsetWidth <= mobVersionWidth){
    mobNavigationLeft.addEventListener('click', () => {
      checkActiveButton(repairTab);
      prevSlide(repairTab, currentSlide, 'active')
      currentSlide --;
      if (currentSlide < 0){
        currentSlide = repairTab.length - 1;
      }
      nextSlide(repairTab, currentSlide, 'active')
    });
    mobNavigationRight.addEventListener('click', () => {
      checkActiveButton(repairTab);
      prevSlide(repairTab, currentSlide, 'active')
      currentSlide ++;
      if (currentSlide >= repairTab.length - 1){
        currentSlide = 0;
      }
      nextSlide(repairTab, currentSlide, 'active')
    })
  }

  for (let i = 0; i < repairTab.length; i++){
   repairTab[i].addEventListener('click', () => {
     removeActive();
     repairTab[i].classList.add('active');
     handleSlider();
   })
 }

 const removeActive = () => {
   repairTab.forEach(tab => {
     if(tab.classList.contains('active')){
       tab.classList.remove('active')
     }
   })
 }
  const handleSlider = () => {
    repairSlider.forEach((slider, index) => {
      if(!repairTab[index].classList.contains('active')){
        slider.style.display = 'none';
      } else {
        slider.style.display = 'block';
      }
    })
  }

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }
}

export default repairSlider;
