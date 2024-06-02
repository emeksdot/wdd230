const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dateOfBirth = document.createElement("p");
    const placeOfBirth = document.createElement("p");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = ` Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", `lazy`);
    portrait.setAttribute("width", `321px`);
    portrait.setAttribute("height", `397px`);

    section.appendChild(fullName);
    section.appendChild(dateOfBirth);
    section.appendChild(placeOfBirth);
    section.appendChild(portrait);

    cards.appendChild(section);

    // portrait.alt = `${prophet.}`
  });
};

getProphetData();
