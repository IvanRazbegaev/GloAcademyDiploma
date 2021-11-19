const repairSlider = () => {
  const repairForm = document.querySelector('.repair-types');
  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');
  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');
  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');
  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');
  const mobVersionWidth = 560;

  console.log(mobNavigationLeft);
  console.log(mobNavigationRight)

  if(document.documentElement.offsetWidth <= mobVersionWidth){
    mobNavigationLeft.addEventListener('click', () => {
      console.log('Clicked Left!')
    });
    mobNavigationRight.addEventListener('click', () => {
      console.log('Clicked Right!')
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
}

export default repairSlider;
