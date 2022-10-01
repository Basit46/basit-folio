// Horizontal scrolling Effect
const largest = document.querySelector(".largest");
const larger = document.querySelector(".larger");
const large = document.querySelector(".large");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

let slidesWidth = Number(slide1.scrollWidth) + Number(slide2.scrollWidth);
largest.style.height = Number(slide2.scrollWidth) + "px";

let windowWidth = window.innerWidth;
let totaldis = slidesWidth - windowWidth;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 0 && window.scrollY <= totaldis) {
    slide2.style.transform = "translateX(" + window.scrollY + "px)";
  }
});

window.addEventListener("resize", () => {
  if (windowWidth > 430) {
    window.location.reload();
  }
});

// menu bar functionality
const bar = document.querySelector("nav .bar");
const menu = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

bar.addEventListener("click", function () {
  menu.classList.toggle("showmenu");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("showmenu");
  });
});
