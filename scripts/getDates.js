const today = new Date();
const bit = today.getFullYear();

document.querySelector(".year").innerHTML = bit;

const dateModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = dateModified;
