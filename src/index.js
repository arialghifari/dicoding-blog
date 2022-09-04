import './styles/main.css';

const btnHamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');

btnHamburger.addEventListener('click', (e) => {
  nav.classList.toggle('open');
  e.stopPropagation();
});

document.body.addEventListener('click', (e) => {
  nav.classList.toggle('open');
  e.stopPropagation();
});
