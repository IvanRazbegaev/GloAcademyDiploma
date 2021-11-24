const portfolio = () => {
  const portfolioForm = document.querySelector('.portfolio');
  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');
  const arrowRight = document.getElementById('portfolio-arrow_right');
  const arrowLeft = document.getElementById('portfolio-arrow_left');

  let currentMargin = 0;
  const maxMargin = +portfolioSlide[0].offsetWidth * +portfolioSlide.length;
  arrowRight.addEventListener('click', () => {
    console.log('arrow is clicked')
    if(currentMargin >= maxMargin - (+portfolioSlide[0].offsetWidth * +(portfolioSlide.length - 2))){
      currentMargin = +portfolioSlide[0].offsetWidth * +(portfolioSlide.length - 2)
    }
    currentMargin += +portfolioSlide[0].offsetWidth;
    portfolioSlide[0].style.marginLeft = `-${currentMargin}px`;
    })

  arrowLeft.style.display = 'flex';
  arrowLeft.addEventListener('click', () => {
    console.log(currentMargin)
    currentMargin -= +portfolioSlide[0].offsetWidth;
    if (currentMargin < 0) {
      currentMargin = 0;
    }
    portfolioSlide[0].style.marginLeft = `-${currentMargin}px`;
  })
}

export default portfolio;
