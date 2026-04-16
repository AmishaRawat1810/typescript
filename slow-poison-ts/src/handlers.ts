import { CharSymbol, RectangleFn } from "./types.ts";
import { alternateLine, buildRows, filledLine, hollowLine } from "./utils.ts";

export const filledRectangle: RectangleFn = (
  row,
  col,
  char = CharSymbol.Star,
): string => buildRows(row, col, filledLine, char);

export const hollowRectangle: RectangleFn = (
  row,
  col,
  char = CharSymbol.Star,
) => {
  if (row <= 2 || col <= 2) {
    return filledRectangle(row, col, char);
  }

  const topBottom = filledLine(col, char);
  const middle = buildRows(row - 2, col, hollowLine, char);
  return [topBottom, middle, topBottom].join(CharSymbol.NewLine);
};

export const alternativeRectangle: RectangleFn = (
  row,
  col,
  char = CharSymbol.Star,
) =>
  Array.from({ length: row }, (_, index) =>
    alternateLine(index, col, char),
  ).join(CharSymbol.NewLine);
