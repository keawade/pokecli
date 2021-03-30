import { PokemonStat } from "../types.d.ts";

export const formatStat = (stat: PokemonStat) => ({
  name: stat.stat.name,
  base: stat.base_stat,
  effort: stat.effort,
});
