import {
  alternativeRectangle,
  filledRectangle,
  hollowRectangle,
} from "./handlers.ts";
import { CharSymbol, generatePatternFn, Style } from "./types.ts";
import { isPositive, separator } from "./utils.ts";

export const generatePattern: generatePatternFn = (style, dimension) => {
  const [col, row] = dimension;

  if (!isPositive(col) || !isPositive(row)) {
    return CharSymbol.Empty;
  }

  switch (style) {
    case Style.FilledRectangle: {
      separator();
      return filledRectangle(row, col);
    }
    case Style.HollowRectangle: {
      separator();
      return hollowRectangle(row, col);
    }
    case Style.AlternativeRectangle: {
      separator();
      return alternativeRectangle(row, col);
    }
  }

  return CharSymbol.NewLine;
};
