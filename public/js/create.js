const newFormHandler = async (event) => {
  event.preventDefault();

  const font1 = document.querySelector('#select1').value;
  const font2 = document.querySelector('#select2').value;
  const font3 = document.querySelector('#select3').value;
  const head = document.querySelector('#head').value;
  const body = document.querySelector('#body').value;
  const footer = document.querySelector('#footer').value;


  if (font1 == 1) {
    document.getElementsByClassName('quote')[0].style.fontFamily = 'Times New Roman';
  } else if (font1 == 2) {
    document.getElementsByClassName('quote')[0].style.fontFamily = 'Gill Sans';
  } else {
    document.getElementsByClassName('quote')[0].style.fontFamily = 'Verdana';
  }

  if (font2 == 1) {
    document.getElementsByClassName('exTitle')[0].style.fontFamily = 'Times New Roman';
  } else if (font2 == 2) {
    document.getElementsByClassName('exTitle')[0].style.fontFamily = 'Gill Sans';
  } else {
    document.getElementsByClassName('exTitle')[0].style.fontFamily = 'Verdana';
  }

  if (font3 == 1) {
    document.getElementsByClassName('exParagraph')[0].style.fontFamily = 'Times New Roman';
  } else if (font3 == 2) {
    document.getElementsByClassName('exParagraph')[0].style.fontFamily = 'Gill Sans';
  } else {
    document.getElementsByClassName('exParagraph')[0].style.fontFamily = 'Verdana';
  }

  
  document.getElementsByClassName('mainHeader')[0].style.backgroundColor = head;
  document.getElementsByClassName('block')[0].style.backgroundColor = body;
  document.getElementsByClassName('exFooter')[0].style.backgroundColor = footer;

};


document
  .querySelector('#saveBtn')
  .addEventListener('click', newFormHandler);