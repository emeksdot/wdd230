const year = new Date();
const bit = year.getFullYear();
console.log(bit);

document.querySelector("#lastModified").innerHTML = bit;

// Store the selected elements that we are going to use. 
// const mainnav = document.querySelector('.nav-container')
// const hambutton = document.querySelector('#menu');


// // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	navelement.classList.toggle('active');
// 	hambutton.classList.toggle('show');
// });

// navelement.addEventListener('click', () => {
	
// 	navelement.classList.toggle('active');

// });


const hamburger = document.querySelector("#hamburger");
const nav1 = document.querySelector("nav-container");

hamburger.addEventListener("click", () => {
  nav1.classList.toggle("show");
  hamburger.classList.toggle("show");
});





