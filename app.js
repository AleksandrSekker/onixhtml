const hamburger = document.querySelector('#hamburger');
const content = document.querySelector('#contentVertical');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  content.classList.toggle('navFalse');
});
