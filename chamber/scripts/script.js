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


let lastVisit = document.querySelector(".lastVisit");
let message = document.querySelector(".message");


// Directory Code
const baseURL = "https://emeksdot.github.io/wdd230/";

const linksURL = "https://emeksdot.github.io/wdd230/chamber/data/members.json";

async function directoryFetch() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
          console.log(data.companies);
          console.log(data.companies[0]);
          console.log(data.companies[0].names);

      buildTable(data.companies);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


const buildTable = (dat) => {
  const table = document.querySelector(".myTable");
  for (let index = 0; index < dat.length; index++) {
    // console.log(data[index].names);
    let row = ` <tr>
      <td>${dat[index].names}</td>
      <td>${dat[index].address}</td>
      <td>${dat[index].phoneNumber}</td>
      <td>${dat[index].website}</td>
    </tr>`;
    table.innerHTML += row;
  }
};


directoryFetch();
