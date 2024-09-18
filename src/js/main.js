import { HttpAdapter } from "./pluggins/httpAdapter.js";

const getCharactersAdapter = async () => {
  const htppAdapter = new HttpAdapter();
  const res = await htppAdapter.get(
    "https://rickandmortyapi.com/api/character"
  );

  return res.results;
};

const getCharacters = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const res = await data.json();
  return res.results;
};

const printCharacters = async () => {
  const characters = await getCharactersAdapter();

  let html = "";

  for (const character of characters) {
    html += `
      <div class="character">
        <div class="character__img">
          <img src="${character.image}" alt="">
        </div>
        <p>${character.name}</p>
      </div>
    `;
  }

  document.querySelector("#characters").innerHTML = html;
};

function main() {
  printCharacters();
}

main();
