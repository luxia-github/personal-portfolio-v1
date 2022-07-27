"use strict";

const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".container__tab");
const contents = document.querySelectorAll(".container__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const navAbout = document.querySelector(".nav-link__about");
const navProjects = document.querySelector(".nav-link__projects");
const btnScrollToTop = document.querySelector(".scroll-to-top");

///////////////////////////////////////
//tabs
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".container__tab");
  if (!clicked) return;

  //deactivate current tab and content
  tabs.forEach((t) => t.classList.remove("container__tab--active"));
  contents.forEach((c) => c.classList.remove("container__content--active"));

  //activate new tab and content
  clicked.classList.add("container__tab--active");
  document
    .querySelector(`.container__content--${clicked.dataset.tab}`)
    .classList.add("container__content--active");
});

///////////////////////////////////////
//sticky nav : intersection observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threhold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
//menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
//menu fade animation for small screen
const navigationVertical = document.querySelector(".navigation-vertical");
const handleHover2 = function (e) {
  if (e.target.classList.contains("navigation-link")) {
    const link = e.target;
    const siblings = link
      .closest(".navigation-vertical")
      .querySelectorAll(".navigation-link");
    console.log(siblings);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

navigationVertical.addEventListener("mouseover", handleHover2.bind(0.5));

navigationVertical.addEventListener("mouseout", handleHover2.bind(1));

///////////////////////////////////////
//sticky scroll to top button : intersection observer API
const stickyScrollToTop = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    btnScrollToTop.classList.remove("btnHidden");
  } else {
    btnScrollToTop.classList.add("btnHidden");
  }
};

const headerObserver2 = new IntersectionObserver(stickyScrollToTop, {
  root: null,
  threhold: 0,
  rootMargin: "-20%",
});

headerObserver2.observe(header);

///////////////////////////////////////
//toggle navigaiton

const navClose = document.querySelector(".navigation-close");
const navPage = document.querySelector(".navigation-page");
const navOpen = document.querySelector(".navigation-open");
const navVertical = document.querySelector(".navigation-vertical");

navOpen.addEventListener("click", function () {
  navPage.style.display = "flex";
});

navClose.addEventListener("click", function () {
  navPage.style.display = "none";
});

navVertical.addEventListener("click", function (e) {
  if (e.target.classList.contains("navigation-link")) {
    navPage.style.display = "none";
  }
});
