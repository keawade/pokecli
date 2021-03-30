import * as ink from "https://deno.land/x/ink@1.3/mod.ts";

import { PokemonType } from "../types.d.ts";

export const formatType = (type: PokemonType) => {
  const typeColorMap: { [key: string]: string } = {
    normal: "#aaaa99",
    fire: "#ff4422",
    water: "#3399ff",
    electric: "#ffcc33",
    grass: "#77cc55",
    ice: "#66ccff",
    fighting: "#bb5544",
    poison: "#aa5599",
    ground: "#ddbb55",
    flying: "#8899ff",
    psychic: "#ff5599",
    bug: "#aabb22",
    rock: "#bbaa66",
    ghost: "#6666bb",
    dragon: "#7766ee",
    dark: "#775544",
    steel: "#aaaabb",
    fairy: "#ee99ee",
  };

  return ink.html(
    `<ink style="color: #111111; background-color: ${
      typeColorMap[type.type.name]
    }">${type.type.name}</ink>`
  );
};
