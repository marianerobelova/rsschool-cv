const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");

function switchMenu() {
  toggleBtn.classList.toggle("collapsed");
  nav.classList.toggle("collapsed");
  navList.classList.toggle("collapsed");
}
toggleBtn.addEventListener("click", switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove("collapsed");
    nav.classList.remove("collapsed");
    navList.classList.remove("collapsed");
  }, 1000);
}
navItems.forEach((el) => el.addEventListener("click", closeMenu));

const buttonGoToTop = document.querySelector(".button-go-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonGoToTop.style.display = "flex";
  } else {
    buttonGoToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
