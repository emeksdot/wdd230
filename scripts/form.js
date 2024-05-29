const today = new Date();
const bit = today.getFullYear();

document.querySelector(".year").innerHTML = bit;

const dateModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = dateModified;

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
