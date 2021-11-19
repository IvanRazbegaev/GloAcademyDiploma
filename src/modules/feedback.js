const feedback = () => {

  const feedbackForm = document.querySelectorAll('.feedback');

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    phoneInput.addEventListener('input', (e) => {
      e.target.value = phoneMask(e.target.value)
    })
  })
  function phoneMask (phone) {
    return phone.replace(/\D/g, '')
      .replace(/^(\d{1,2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1($2)$3-$4-$5');
  }
}

export default feedback;
