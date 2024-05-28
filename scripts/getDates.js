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

// localStorage.setItem("myCat", "Tom");

// const cat = localStorage.getItem("myCat");
// The syntax for removing the localStorage item is as follows:



const visitsHandle = document.querySelector(".num-visits");
let numVisits = Number(window.localStorage.getItem("numberOfVisits"));

if (numVisits !== 0) {
  visitsHandle.textContent = numVisits;
} else {
  visitsHandle.textContent = `This is your first visit. 🌴 Welcome!`;
}

numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numberOfVisits", numVisits);

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

confirmPassword.addEventListener("focusout", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("check");
  } else {
    confirmPassword.classList.remove("check");
    confirmPassword.setAttribute(
      "borderRight",
      "6px solid var(--required-color)"
    );
  }
});

const rating = document.querySelector("#rating");
const rangevalue = document.querySelector(".rangevalue");

rating.addEventListener("input", () => {
  rangevalue.innerHTML = rating.value;
});

