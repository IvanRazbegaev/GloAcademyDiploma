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
    const response = await sendFeedback(phoneInput.value);
    console.log(response);
  })
  })
}

const sendFeedback = async (data) => {
  const path = 'server.php'
  return await fetch(path,{
    method: 'POST',
    body: JSON.stringify(data)
  }).then(response => response.json())
    .catch((e) => console.log(e));
}

export default feedback;
