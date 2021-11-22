const contracts = () => {
  const contractsList = document.querySelectorAll('.transparency-item');
  const contractForm = document.querySelector('.popup.popup-transparency');
  const contract = document.querySelectorAll('.popup-transparency-slider__slide');

  const currentCount = contractForm.querySelector('.slider-counter-content__current');
  const overallCount = contractForm.querySelector('.slider-counter-content__total');

  console.dir(currentCount)
  console.dir(overallCount)

  let currentContract = 0;
  let slidesOverall = contract[currentContract].querySelectorAll('img');
  let currentSlide = 1;



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
      if (e.target.closest('.popup-dialog-transparency')) {
        if(e.target.closest('.popup-arrow_transparency_right') || e.target.closest('.popup-arrow_transparency_left')){
          if (e.target.closest('.popup-arrow_transparency_right')){
            slidesOverall = contract[currentContract].querySelectorAll('img');
            console.log(currentSlide);
            prevSlide(slidesOverall, currentSlide)
            currentSlide++;
            nextSlide(slidesOverall, currentSlide)
            if (currentSlide > slidesOverall.length){
              currentSlide = 1;
            }
            updateCounter();
          } else if (e.target.closest('.popup-arrow_transparency_left')) {
            slidesOverall = contract[currentContract].querySelectorAll('img');
            console.log(currentSlide);
            prevSlide(slidesOverall, currentSlide)
            currentSlide--;
            nextSlide(slidesOverall, currentSlide)
            if (currentSlide <= 0){
              currentSlide = slidesOverall.length;
            }
            updateCounter();
          }
        }
      } else {
        contractForm.style.visibility = 'hidden';
      }
    })
  const prevSlide = (elem, index) => {
    elem[index - 1].style.display = 'none';
  }

  const nextSlide = (elem, index) => {
    elem[index - 1].style.display = 'block';
  }

  const hideContracts = () => {
    for (let i = 0; i < contract.length; i++){
      contract[i].style.display = 'none'
    }
  }

  const updateCounter = (currentContract) => {
    currentCount.textContent = `${currentSlide}`;
    slidesOverall = contract[currentContract].querySelectorAll('img');
    overallCount.textContent = `${slidesOverall.length}`;
  }
}

export default contracts;
