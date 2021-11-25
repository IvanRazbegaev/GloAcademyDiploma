const accordion = () => {
  const accordionForm = document.querySelector('.accordion');
  const itemList = accordionForm.querySelectorAll('ul>li');
  const itemMessage = accordionForm.querySelectorAll('.msg');

  const hideAllMessages = () => {
    itemMessage.forEach(message => {
      message.style.display = 'none'
    })
  }

  hideAllMessages();

  for (let i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener('click', () => {
      if(itemMessage[i].style.display === 'contents'){
        itemMessage[i].style.display = 'none';
      } else {
        hideAllMessages();
        itemMessage[i].style.display = 'contents';
      }
    })
  }

}

export default accordion;
