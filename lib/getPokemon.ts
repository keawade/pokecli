import { BASE_URL } from "./constants.ts";
import { Pokemon } from "./types.d.ts";

export const getPokemon = async (pokemonNameOrId: string): Promise<Pokemon> => {
  const res = await fetch(`${BASE_URL}/pokemon/${pokemonNameOrId}`);
  if (res.status !== 200) {
    throw res;
  }
  const data = await res.json();

  return data;
};
