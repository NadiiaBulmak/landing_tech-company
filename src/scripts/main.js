'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const menuToggle = document.querySelector('.icon--menu');
const closeButton = document.querySelector('.icon--close');
const body = document.body;
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu__nav a');

menuToggle.addEventListener('click', function() {
  body.classList.add('no-scroll');
  menu.classList.add('open');
});

closeButton.addEventListener('click', function() {
  body.classList.remove('no-scroll');
  menu.classList.remove('open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    body.classList.remove('no-scroll');
    menu.classList.remove('open');
  });
});
