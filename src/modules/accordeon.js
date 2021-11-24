const accordion = () => {
  const accordionForm = document.querySelector('.accordion');
  const itemList = accordionForm.querySelectorAll('ul>li');
  const itemMessage = accordionForm.querySelectorAll('.msg');

  let activeItem;

  const hideAllMessages = () => {
    itemMessage.forEach(message => {
      message.style.display = 'none'
    })
  }

  const getActiveItem = () => {
    for (let i = 0; i < itemMessage.length; i++){
      if (itemMessage[i].style.display === 'contents'){
        activeItem = i;
      }
    }
  }

  const openItem = (elem, index) => {
    elem[index].style.display = 'contents'
  }

  const closeItem = (elem, index) => {
    elem[index].style.display = 'none'
  }

  hideAllMessages();

  for (let i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener('click', () => {
      let itemWasClickedBefore = false;
      getActiveItem();
      if (itemWasClickedBefore === false){
        openItem(itemMessage, i)
        itemWasClickedBefore = true;
      } else {
        closeItem(itemMessage, i)
        itemWasClickedBefore = false;
      }

    })
  }

}

export default accordion;
