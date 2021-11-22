const contracts = () => {
  const contractsForm = document.querySelector('.transparency-slider');
  const contract = document.querySelector('.popup-transparency');

  console.log(contract);

  contractsForm.addEventListener('click', (e) => {
    if(e.target.matches('.transparency-item__img')){
      contract.style.visibility = 'visible';
    }
  })

  contract.addEventListener('click', (e) => {

    if (!e.target.closest('.popup-dialog-transparency')) {
      if (e.target.classList.contains('popup-arrow_transparency_right') || e.target.classList.contains('popup-arrow_transparency_left')) {
        console.log('arrows were clicked')
      } else {
        contract.style.visibility = 'hidden';
      }
    }
  })
}

export default contracts;
