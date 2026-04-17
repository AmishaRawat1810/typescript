import {
  alternativeRectangle,
  filledRectangle,
  hollowRectangle,
  spacedAlternateRectangle,
  triangle,
} from "./handlers.ts";
import { CharSymbol, generatePatternFn, Style } from "./types.ts";
import { isPositive, separator } from "./utils.ts";

export const generatePattern: generatePatternFn = (style, dimension) => {
  const row = dimension[0];
  const col = dimension[1] || row;

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
    case Style.SpacedAlterativeRectangle: {
      separator();
      return spacedAlternateRectangle(row, col);
    }
    case Style.Triangle: {
      separator();
      return triangle(row);
    }
  }

  return CharSymbol.NewLine;
};
