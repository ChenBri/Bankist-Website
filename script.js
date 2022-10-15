'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements:
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

// Updates automatically
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
document.getElementsByClassName('btn');

// Creating elements:
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'Cookies <button id="cookie-btn" class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message) // First child
header.append(message); // Last child
// header.before(message)
// header.after(message)

// Delete elements
document.getElementById('cookie-btn').addEventListener('click', function () {
  message.remove();
});

// message.style.backgroundColor = '#37383d'
// message.style.width = '100wh'
// document.documentElement.style.setProperty('--color-primary', 'red')

const logo = document.querySelector('.nav__logo');
logo.classList.add('x');
logo.classList.remove('x');
logo.classList.toggle('x');
logo.classList.contains('x');

// Smooth Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('Mouse entered into H1');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
