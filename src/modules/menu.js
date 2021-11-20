const menu = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const popup = document.querySelector('.popup-dialog-menu');
  const closeBtn = document.querySelector('.close-menu');

  menuIcon.addEventListener('click', () => {

    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translateY(0%)';
    }else {
      popup.style.transform = 'translateX(0%)'
    }
  })

  closeBtn.addEventListener('click', () => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translateY(-100%)';
    }else {
      popup.style.transform = 'translateX(100%)'
    }
  })
}

export default menu;
