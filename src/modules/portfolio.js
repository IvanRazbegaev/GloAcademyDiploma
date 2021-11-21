const portfolio = () => {
  const portfolioForm = document.querySelector('.portfolio');

  portfolioForm.addEventListener('click', (e) => {
    if(e.target.matches('#portfolio-arrow_right')){
      console.log('arrow right is clicked')
    }
  })
}

export default portfolio;
