const feedback = () => {
  const phoneInput = document.querySelectorAll('[name=phone]');

  for (let i = 1; i <= phoneInput.length; i++){
    const feedbackForm = document.querySelector(`#feedback${i}`);
    const phoneInput = feedbackForm.querySelector('[name=phone]');
    const name = feedbackForm.querySelector('[type=text]');
    const feedbackBtn = feedbackForm.querySelector('button');

    let checkbox = feedbackForm.querySelector('[type=checkbox]');
    let dataObj;

    phoneInput.addEventListener('input', (e) => {
        e.target.value = phoneMask(e.target.value);
      })
    feedbackBtn.addEventListener('click', async (e) => {
        checkbox = feedbackForm.querySelector('[type=checkbox]');
        e.preventDefault();
        if (phoneInput.value.length < 11){
          alert('Телефонный номер не может быть менее 11 символов!')
          return false;
        } else if (!checkbox.checked) {
          alert('Примите политику безопасности!')
          return false;
        }
        if(name){
          dataObj ={
            name: name.value,
            mail: phoneInput.value
          }
        } else {
          dataObj ={
            mail: phoneInput.value
          }
        }
        const response = await sendFeedback(dataObj);
        checkbox.checked = false;
        phoneInput.value = '';
        if(name) {
          name.value = '';
        }
        console.log(response);
    })
  }
}


function phoneMask (phone) {
  return phone.replace(/\D/g, '')
    .replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1($2)$3-$4-$5')
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
