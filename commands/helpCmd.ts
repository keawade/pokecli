import * as ink from "https://deno.land/x/ink@1.3/mod.ts";

export const helpCmd = () => {
  const helpText = ink.colorize(`
  <b><green>pokecli@0.1.0</green></b>

    <b>USAGE:</b>

    > pokecli ID | NAME

    <b>EXAMPLES:</b>

    > pokecli bulbasaur
    > pokecli 1
    > pokecli 42
    > pokecli mew
  `);
  console.log(helpText);
};
