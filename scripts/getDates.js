const today = new Date();
const bit = today.getFullYear();

document.querySelector(".year").innerHTML = bit;

const dateModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = dateModified;

const hamburger = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  nav.classList.toggle("show");
});


const switchIcon = document.querySelector("#mode");
const main = document.querySelector("main");

switchIcon.addEventListener("click", () => {
  if (switchIcon.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    switchIcon.textContent = "🌞";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    switchIcon.textContent = "🕶️";
  }
});

