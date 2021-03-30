import * as ink from "https://deno.land/x/ink@1.3/mod.ts";

import { Pokemon } from "../types.d.ts";
import { formatType } from "./formatType.ts";

export const formatPokemon = (pokemon: Pokemon) =>
  ink.colorize(`<b>${pokemon.name}</b>
  id: ${pokemon.id}
  types: ${pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map(formatType)
    .join(" ")}`);
