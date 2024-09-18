import { Character } from "./api/Character";
import { AxiosHttpAdapter } from "./lib/httpAdapter/httpAxiosAdapter";
// import { FetchHttpAdapter } from "./lib/httpAdapter/httpFetchAdapter";
import "./style.css";

async function main() {
  const character = new Character(new AxiosHttpAdapter());
  const response = await character.getCharacters();
  console.log(response);
}

main();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2> Patron adaptador! </h2>
  </div>
`;
