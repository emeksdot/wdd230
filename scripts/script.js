const hamburger = document.querySelector("#hamburger");
const nav1 = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav1.children.classList.toggle("show");
  //   nav1.classList.toggle("show");
  hamburger.classList.toggle("show");
});
