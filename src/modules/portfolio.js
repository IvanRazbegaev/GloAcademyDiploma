const portfolio = () => {
  const portfolioForm = document.querySelector('.portfolio');
  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');
  const arrowLeft = document.getElementById('portfolio-arrow_right')

  let currentMargin = 0;
  console.log(portfolioSlide)

  arrowLeft.addEventListener('click', () => {
    console.log('arrow is clicked')
    currentMargin += +portfolioSlide[0].offsetWidth;
    portfolioSlide[0].style.marginLeft = `-${currentMargin}px`;
    })
}

export default portfolio;
