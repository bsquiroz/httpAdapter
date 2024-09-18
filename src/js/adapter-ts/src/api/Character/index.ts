import { HttpAdapter } from "../../lib/httpAdapter";

export class Character {
  constructor(private http: HttpAdapter) {}

  async getCharacters() {
    const response = this.http.get("https://rickandmortyapi.com/api/character");
    return response;
  }
}
