const headerPhones = () => {
  const phoneArrow = document.querySelector('.header-contacts__arrow');
  const secondPhone = document.querySelector('.header-contacts__phone-number-accord')

  let arrowPressed = false;

  phoneArrow.addEventListener('click', (e) => {
    if(!arrowPressed){
      secondPhone.style.position = 'relative';
      secondPhone.querySelector('a').style.opacity = '1';
      arrowPressed = true;
    } else {
      secondPhone.style.position = 'absolute';
      secondPhone.querySelector('a').style.opacity = '0';
      arrowPressed = false;
    }


    // secondPhone.classList.remove('header-contacts__phone-number-accord')
    // secondPhone.classList.add('header-contacts__phone-number-wrap')
  })

}

export default headerPhones;
