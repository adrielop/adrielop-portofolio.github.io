let sun = document.getElementById("sun");
let clouds = document.getElementById("clouds");
let backbg = document.getElementById("backbg");
let frontbg = document.getElementById("frontbg");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  clouds.style.left = value * -1.25 + "px";
  sun.style.top = value * 1.25 + "px";
  backbg.style.top = value * 0.25 + "px";
  frontbg.style.top = value * 0 + "px";
  text.style.marginRight = value * 2 + "px";
  text.style.marginTop = value * 0.3 + "px";
  btn.style.marginTop = value * 0.75 + "px";
  header.style.top = value * 0.5 + "px";
});

const observerA = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animateA = entry.target.querySelector("#info-name");
    // const animateB = entry.target.querySelector('#title-one');
    // const animateC = entry.target.querySelector('#title-two');

    if (entry.isIntersecting) {
      animateA.classList.add("animate__lightSpeedInRight");
      // animateB.classList.add('animate__fadeInDown');
      // animateC.classList.add('animate__fadeInDown');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    animateA.classList.remove("animate__lightSpeedInRight");
    // animateB.classList.remove('animate__fadeInDown');
    // animateC.classList.remove('animate__fadeInDown');
  });
});

observerA.observe(document.querySelector(".info"));

const observerB = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // const animateA = entry.target.querySelector('#info-name');
    const animateB = entry.target.querySelector("#title-one");

    if (entry.isIntersecting) {
      // animateA.classList.add('animate__lightSpeedInRight');
      animateB.classList.add("animate__fadeInDown");

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // animateA.classList.remove('animate__lightSpeedInRight');
    animateB.classList.remove("animate__fadeInDown");
  });
});
observerB.observe(document.querySelector("#secOne"));

const observerC = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // const animateA = entry.target.querySelector('#info-name');
    const animateC = entry.target.querySelector("#title-two");

    if (entry.isIntersecting) {
      animateC.classList.add("animate__fadeInDown");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // animateA.classList.remove('animate__lightSpeedInRight');
    animateC.classList.remove("animate__fadeInDown");
  });
});

observerC.observe(document.querySelector("#secTwo"));
