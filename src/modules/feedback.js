const feedback = () => {

  const feedbackForm = document.querySelectorAll('.feedback');

  feedbackForm.forEach(item => {
    const phoneInput = item.querySelector('.input.feedback__input-input');
    const feedbackBtn = item.querySelector('.button');
    let confCheckbox = item.querySelector('.checkbox__input');
    console.dir(confCheckbox);

    const feedbackForm = document.querySelectorAll('.feedback');

    feedbackForm.forEach(item => {
      const phoneInput = item.querySelector('.input.feedback__input-input');
      phoneInput.addEventListener('input', (e) => {
        const pattern = /[^\d+\-\)\(]/gi
        e.target.value = e.target.value.replace(pattern, '')
      })
    })

    feedbackBtn.addEventListener('click', async (e) => {
      confCheckbox = item.querySelector('.checkbox__input');
      e.preventDefault();
      if (phoneInput.value.length < 11){
        alert('Телефонный номер не может быть менее 11 символов!')
        return false;
      } else if (!confCheckbox.checked) {
        alert('Примите политику безопасности!')
        return false;
      } else {
        confCheckbox.checked = false;
      }
      const response = await sendFeedback(phoneInput.value);
      phoneInput.value = '';
      console.log(response);
    })
  })
}

const sendFeedback = async (data) => {
  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'
  const getData = await fetch(path,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json())
    .catch((e) => console.log(e));

  return getData;
}

export default feedback;
