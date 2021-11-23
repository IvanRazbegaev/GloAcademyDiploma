const contracts = () => {
  const contractsList = document.querySelectorAll('.transparency-item');
  const contractForm = document.querySelector('.popup.popup-transparency');
  const contract = document.querySelectorAll('.popup-transparency-slider__slide');

  const currentCount = contractForm.querySelector('.slider-counter-content__current');
  const overallCount = contractForm.querySelector('.slider-counter-content__total');

  const arrowLeft = contractForm.querySelector('.popup-arrow_transparency_left');
  const arrowRight = contractForm.querySelector('.popup-arrow_transparency_right');
  const mobileVersionWidth = 1024;

  const sliderArrowLeft = document.getElementById('transparency-arrow_left');
  const sliderArrowRight = document.getElementById('transparency-arrow_right');

  let currentContract = 0;
  let currentList = 0;

  const hideList = () => {
    for (let i = 0; i < contractsList.length; i++){
      contractsList[i].style.display = 'none'
    }
  }

  const showActiveList = (currentList) => {
    contractsList[currentList].style.display = 'flex'
  }

  const removeActiveList = (currentList) => {
    contractsList[currentList].style.display = 'none'
  }

  if (document.documentElement.offsetWidth <= mobileVersionWidth){
    hideList();
    showActiveList(currentList);
    sliderArrowLeft.addEventListener('click', () => {
      removeActiveList(currentList);
      currentList--;
      if (currentList < 0){
        currentList = contractsList.length -1;
      }
      showActiveList(currentList);
    });
    sliderArrowRight.addEventListener('click', () => {
      removeActiveList(currentList);
      currentList++;
      if (currentList >= contractsList.length){
        currentList = 0;
      }
      showActiveList(currentList);
    })
  }

  for (let i = 0; i < contractsList.length; i++){
    contractsList[i].addEventListener('click', (e) => {
      hideContracts();
      contractForm.style.visibility = 'visible';
      contract[i].style.display = 'block';
      currentContract = i;
      updateCounter(i);
    })
  }
    contractForm.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-dialog-transparency')) {
         contractForm.style.visibility = 'hidden';
      }
    })

  arrowRight.addEventListener('click', () => {
    prevSlide(contract, currentContract)
    currentContract++;
    if (currentContract >= contract.length){
      currentContract = 0;
    }
    nextSlide(contract, currentContract)
    updateCounter();
  })
  arrowLeft.addEventListener('click', () => {
    prevSlide(contract, currentContract)
    currentContract--;
    if (currentContract < 0){
      currentContract = contract.length - 1;
    }
    nextSlide(contract, currentContract)
    updateCounter();
  })
  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none';
  }

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'block';
  }

  const hideContracts = () => {
    for (let i = 0; i < contract.length; i++){
      contract[i].style.display = 'none'
    }
  }

  const updateCounter = () => {
    currentCount.textContent = `${currentContract + 1}`;
    overallCount.textContent = `${contract.length}`;
  }
}

export default contracts;
