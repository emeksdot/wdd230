const year = new Date();
const bit = year.getFullYear();
console.log(bit);

document.querySelector("#lastModified").innerHTML = bit;

const nav = document.querySelector("nav");

