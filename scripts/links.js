const baseURL = "https://emeksdot.github.io/wdd230/";

const linksURL = "https://emeksdot.github.io/wdd230/data/links.json";

async function linksFetch() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //   displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

linksFetch();
