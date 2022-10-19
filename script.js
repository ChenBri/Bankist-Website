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

//////////////////////////////////////////////

// Tab component

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  let tab = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  tab.classList.add('operations__content--active');
  console.log(tab);
});

//////////////////////////////////////////////

// Nav-bar styling:

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    console.log(link);
    siblings.forEach(item =>
      item !== link ? (item.style.opacity = 0.5) : (item.style.opacity = 1)
    );
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  console.log(link);
  siblings.forEach(item => {
    item.style.opacity = 1;
  });

  logo.style.opacity = 1;
});

//////////////////////////////////////////////

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

//////////////////////////////////////////////

// Sticky nav-bar

const coords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  let i = coords.top;
  if (window.scrollY > i) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

//////////////////////////////////////////////

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

btnRight.addEventListener('click', function (e) {
  if (currentSlide == maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
  activateDots(currentSlide);
});

btnLeft.addEventListener('click', function (e) {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
  activateDots(currentSlide);
});

// Slider dots
const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach((slide, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};
createDots();

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    activateDots(slide);
  }
});

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

activateDots(0);

//////////////////////////////////////////////

// Intersection Observer API

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// Revealing elements on scroll
const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const element = entries[0];
  // console.log(element);
  if (element.isIntersecting) {
    element.target.classList.remove('section--hidden');
    observer.unobserve(element.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////////////////////////////////////////

// Lazy Loading Image

const imgTargets = document.querySelectorAll('img[data-src');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
});

imgTargets.forEach(img => imgObserver.observe(img));
