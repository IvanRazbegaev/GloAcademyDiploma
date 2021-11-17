const menu = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const popup = document.querySelector('.popup-dialog-menu')

  menuIcon.addEventListener('click', () => {

    if(document.documentElement.offsetWidth === 576){
      popup.style.transform = 'translateY(0%)';
    }else {
      popup.style.transform = 'translateX(0%)'
    }
  })
}

export default menu;
