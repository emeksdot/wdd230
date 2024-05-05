const hamburger = document.querySelector("#hamburger");
const nav1 = document.querySelector("nav-container");

hamburger.addEventListener("click", () => {
  nav1.classList.toggle("show");
  hamburger.classList.toggle("show");
});
