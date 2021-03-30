import { PokemonAbility } from "../types.d.ts";

export const formatAbility = (ability: PokemonAbility) => ({
  name: ability.ability.name,
  hidden: ability.is_hidden,
});
