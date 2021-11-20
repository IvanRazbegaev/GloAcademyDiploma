const menu = () => {
  const menuIcon = document.querySelector('.menu__icon');
<<<<<<< HEAD
  const popup = document.querySelector('.popup-dialog-menu');
  const closeBtn = document.querySelector('.close-menu');

  menuIcon.addEventListener('click', () => {

    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translateY(0%)';
=======
  const popup = document.querySelector('.popup-dialog-menu')
  const closeBtn = document.querySelector('.close-menu');
  const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');
  const upBtn = document.querySelector('.button-footer>a');

  const menuClosing = () => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translate3d(0,-100%, 0)';
>>>>>>> smoothscroll
    }else {
      popup.style.transform = 'translate3d(100%, 0, 0)'
    }
  }

  menuIcon.addEventListener('click', () => {
      popup.style.transform = 'translate3d(0, 0%, 0)';
  })

  closeBtn.addEventListener('click', () => {
    menuClosing();
  })

<<<<<<< HEAD
  closeBtn.addEventListener('click', () => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translateY(-100%)';
    }else {
      popup.style.transform = 'translateX(100%)'
    }
  })
=======
  menuItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = document.querySelector(item.getAttribute("href"));
      menuClosing();
      e.preventDefault();
      href.scrollIntoView({block:"center", behavior: "smooth"})
    })
  })

  upBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const href = document.querySelector(upBtn.getAttribute("href"));
    href.scrollIntoView({block:"center", behavior: "smooth"})
  })

>>>>>>> smoothscroll
}

export default menu;
