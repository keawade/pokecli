import { parse } from "https://deno.land/std@0.91.0/flags/mod.ts";

import { pokemonCmd } from "./commands/pokemonCmd.ts";
import { helpCmd } from "./commands/helpCmd.ts";

const { args } = Deno;

const { _: parsedArgs } = parse(args);

(async function () {
  switch (parsedArgs[0]) {
    case "help":
      return helpCmd();
    default:
      return await pokemonCmd(parsedArgs);
  }
})();
