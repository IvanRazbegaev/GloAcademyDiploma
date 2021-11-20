const headerPhones = () => {
  const phoneArrow = document.querySelector('.header-contacts__arrow img');
  const secondPhone = document.querySelector('.header-contacts__phone-number-accord')

  let arrowPressed = false;

  phoneArrow.addEventListener('click', (e) => {
    if(!arrowPressed){
      secondPhone.style.position = 'relative';
      secondPhone.querySelector('a').style.opacity = '1';
      phoneArrow.style.transform = 'rotate(180deg)';
      arrowPressed = true;
    } else {
      secondPhone.style.position = 'absolute';
      secondPhone.querySelector('a').style.opacity = '0';
      phoneArrow.style.transform = 'rotate(0deg)';
      arrowPressed = false;
    }
  })

}

export default headerPhones;
