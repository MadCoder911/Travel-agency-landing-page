"use strict";
// HTML selectors
const burgerIcon = document.getElementById("menuu");
const mobileMenu = document.querySelector(".mobile_menu");
const landing = document.querySelector(".landing");
const closemenu = document.querySelector(".close-menu");
const navBar = document.querySelector(".nav");
const faqBtn = document.querySelectorAll(".fa-plus");
//////////////////////
// Mobile menu full functionality
burgerIcon.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(mobileMenu);
  if (mobileMenu.classList.contains("menu_hidden")) {
    mobileMenu.classList.toggle("menu_hidden");
    burgerIcon.style.display = "none";
    closemenu.style.display = "block";
  } else if (!mobileMenu.classList.contains("menu_hidden")) {
    mobileMenu.classList.toggle("menu_hidden");
    burgerIcon.style.display = "block";
    closemenu.style.display = "none";
  }
});
closemenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("menu_hidden");
  burgerIcon.style.display = "block";
  closemenu.style.display = "none";
});

//////////////////////
// Revealing landing section
window.addEventListener("load", function () {
  landing.style.bottom = "0px";
});

//////////////////////
// Revealing sections
const allSectionss = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSectionss.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//////////////////////
//Sticky Nav
const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navBar.classList.add("sticky-nav");
  else navBar.classList.remove("sticky-nav");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
navObserver.observe(landing);

//////////////////////
// FAQ Section
faqBtn.forEach((faq) => {
  faq.addEventListener("click", function () {
    const hidden = document.getElementById(`faq${faq.id}`);
    hidden.classList.toggle("answer--active");
  });
});
//////////////////////
// Slider for customer reviews

const slides = document.querySelectorAll(".boxSlide");
const btnRight = document.querySelector(".fa-arrow-right");
const btnLeft = document.querySelector(".fa-arrow-left");

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(currentSlide);
// Next slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
// Prev slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
