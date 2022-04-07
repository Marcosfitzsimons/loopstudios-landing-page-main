const menuBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const bgNav = document.querySelector(".background-nav");
const firstPart = document.querySelector(".first-part");
const secondPart = document.querySelector(".second-part");
const footer = document.querySelector(".footer");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  firstPart.classList.toggle("hidden");
  secondPart.classList.toggle("hidden");
  footer.classList.toggle("hidden");
  navList.classList.toggle("active");
  menuBtn.classList.toggle("active");
  bgNav.classList.toggle("active");
});
