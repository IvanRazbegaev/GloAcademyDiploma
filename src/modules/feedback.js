const feedback = () => {

  const feedbackForm = document.querySelectorAll('.feedback');

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    phoneInput.addEventListener('input', (e) => {
      const pattern = /[^\d+\-\)\(]/gi
      e.target.value = e.target.value.replace(pattern, '')
      if (e.target.value.length < 11){
        alert('Телефонный номер не может быть менее 11 символов');
        return false;
      }
    })
  })
}

export default feedback;
