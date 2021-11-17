const menu = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const popup = document.querySelector('.popup-dialog-menu')
  const closeBtn = document.querySelector('.close-menu');

  menuIcon.addEventListener('click', (e) => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translate3d(0, -100%, 0)';
      popup.style.transform = 'translate3d(0, 0%, 0)';
    }else {
      popup.style.transform = 'translate3d(100%, 0, 0)'
      popup.style.transform = 'translate3d(0%, 0, 0)'
    }
  })

  closeBtn.addEventListener('click', () => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translate3d(0,-100%, 0)';
    }else {
      popup.style.transform = 'translate3d(100%, 0, 0)'
    }
  })
}

export default menu;
