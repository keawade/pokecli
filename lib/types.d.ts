export interface Pokemon {
  id: string;
  abilities: PokemonAbility[];
  name: string;
  height: number;
  weight: number;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  // deno-lint-ignore camelcase
  base_stat: number;
  effort: number;
  stat: {
    name: StatName;
    url: string;
  };
}

type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense";

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  // deno-lint-ignore camelcase
  is_hidden: boolean;
  slot: number;
}
