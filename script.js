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
