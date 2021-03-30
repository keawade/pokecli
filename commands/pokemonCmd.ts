import { getPokemon } from "../lib/getPokemon.ts";
import { formatPokemon } from "../lib/format/formatPokemon.ts";
import { helpCmd } from "./helpCmd.ts";

export const pokemonCmd = async (args: (string | number)[]) => {
  try {
    const data = await getPokemon(args[0].toString());
    console.log(formatPokemon(data));
    return;
  } catch (err) {
    if (err.status === 404) {
      return helpCmd();
    }
    throw err;
  }
};
