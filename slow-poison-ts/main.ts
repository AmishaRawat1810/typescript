import { generatePattern } from "./src/pattern.ts";
import { Style } from "./src/types.ts";

const main = (): undefined => {
  console.log(generatePattern(Style.FilledRectangle, [2, 3]));
  console.log(generatePattern(Style.HollowRectangle, [4, 3]));
  console.log(generatePattern(Style.AlternativeRectangle, [5, 3]));
};

main();
