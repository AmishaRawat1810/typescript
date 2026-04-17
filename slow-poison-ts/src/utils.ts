import {
  alternateLineFn,
  BuildRowsFn,
  CharSymbol,
  Dimension,
  LineFn,
  PositiveNumber,
} from "./types.ts";

export const separator = () => console.log(filledLine(10, CharSymbol.Dash));

export const filledLine: LineFn = (width, char = CharSymbol.Star) =>
  char.repeat(width);

export const hollowLine: LineFn = (width, char = CharSymbol.Star) => {
  if (width <= 1) return char;
  if (width === 2) return char + char;
  return char + CharSymbol.Space.repeat(width - 2) + char;
};

export const alternateLine: alternateLineFn = (rowNumber, width, char) =>
  (rowNumber % 2 === 0 ? filledLine : hollowLine)(width, char);

export const spacedAlternateLine = (
  rowNumber: number,
  width: Dimension,
) => {
  const index = Math.floor(rowNumber % 3);
  const symbols = Object.values(CharSymbol);
  return filledLine(width, symbols[index]);
};

export const buildRows: BuildRowsFn = (
  row,
  col,
  callbackFn,
  char = CharSymbol.Star,
) =>
  Array.from({ length: row }, () => callbackFn(col, char)).join(
    CharSymbol.NewLine,
  );

export const isPositive = (n: number): PositiveNumber => {
  if (n <= 0) {
    throw new Error("Value must be > 0");
  }
  return n as PositiveNumber;
};
