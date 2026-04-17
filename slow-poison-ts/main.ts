import { generatePattern } from "./src/pattern.ts";
import { Style } from "./src/types.ts";

const main = (): undefined => {
  console.log(generatePattern(Style.FilledRectangle, [3, 2]));
  console.log(generatePattern(Style.HollowRectangle, [3, 4]));
  console.log(generatePattern(Style.AlternativeRectangle, [3, 5]));
  console.log(generatePattern(Style.SpacedAlterativeRectangle, [8, 4]));
  console.log(generatePattern(Style.Triangle, [4]));
};

main();
