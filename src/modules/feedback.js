const feedback = () => {

  const feedbackForm = document.querySelectorAll('.feedback');

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    phoneInput.addEventListener('input', (e) => {
      const pattern = /[^\d+\-\)\(]/gi
      e.target.value = e.target.value.replace(pattern, '')
    })
  })
}

export default feedback;
