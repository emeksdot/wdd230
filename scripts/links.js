const baseURL = "https://emeksdot.github.io/wdd230/";

const linksURL = "https://emeksdot.github.io/wdd230/data/links.json";


async function linksFetch() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    //   displayLinks(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// const displayLinks = (weeks) => {
  // for (let index = 0; index < weeks.length; index++) {
  //   const element = array[index];
  // }
//   weeks.array.forEach((item) => {
//     const li = document.createElement("li");
//     const txt = document.createTextNode(item.links[0].title);
//     const a = document.createElement("a");
//     a.appendChild(txt);
//     li.appendChild(a);
//     const ul = document.createElement("ul");
//     const card = document.querySelector("#card");
//     card.appendChild(ul)


//     ul.appendChild(li);
//   });
// };

linksFetch();
