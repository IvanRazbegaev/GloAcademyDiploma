const feedback = () => {

  const feedbackForm = document.querySelectorAll('.feedback');

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    const feedbackBtn = item.querySelector('.button')
    phoneInput.addEventListener('input', (e) => {
      const pattern = /[^\d+\-\)\(]/gi
      e.target.value = e.target.value.replace(pattern, '')
    })
    feedbackBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (phoneInput.value.length < 11){
        alert('Телефонный номер не может быть менее 11 символов!')
        return false;
      }
      const response = await sendFeedback(phoneInput.value);
      console.log(response);
    })
  })
}

const sendFeedback = async (data) => {
  const path = 'server.php'
  const getData = await fetch(path,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
    .catch((e) => console.log(e));

  return getData;
}

export default feedback;
