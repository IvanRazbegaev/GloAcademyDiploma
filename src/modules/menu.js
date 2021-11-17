const menu = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const popup = document.querySelector('.popup-dialog-menu')
  const closeBtn = document.querySelector('.close-menu');
  const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');
  const upBtn = document.querySelector('.button-footer>a');

  const menuClosing = () => {
    if(document.documentElement.offsetWidth <= 576){
      popup.style.transform = 'translate3d(0,-100%, 0)';
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

}

export default menu;
