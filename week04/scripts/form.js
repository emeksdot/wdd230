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
