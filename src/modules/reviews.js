const reviews = () => {

  const reviewsForm = document.querySelector('.reviews');
  const reviewsSlides = reviewsForm.querySelectorAll('.reviews-slider__slide');
  const arrowRight = document.getElementById('reviews-arrow_right');
  const arrowLeft = document.getElementById('reviews-arrow_left');

  let activeSlide = 0;

  const hideSlide = (elem, index) => {
    elem[index].style.display = 'none';
  }

  const showSlide = (elem, index) => {
    elem[index].style.display = 'flex';
  }

  arrowRight.addEventListener('click', () => {
    hideSlide(reviewsSlides, activeSlide);
    activeSlide++;
    if(activeSlide >= reviewsSlides.length) {
      activeSlide = 0;
    }
    showSlide(reviewsSlides, activeSlide);
  })

  arrowLeft.addEventListener('click', () => {
    hideSlide(reviewsSlides, activeSlide);
    activeSlide--;
    if(activeSlide < reviewsSlides.length) {
      activeSlide = reviewsSlides.length - 1;
    }
    showSlide(reviewsSlides, activeSlide);
  })
}

export default reviews;
