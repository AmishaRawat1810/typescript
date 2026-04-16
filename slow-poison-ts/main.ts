enum Symbols {
  star = "*",
  space = " ",
  newLine = "\n",
  dash = "-",
}

type Char = string;
type Dimension = number;

type LineFn = (width: Dimension, char?: Char) => string;
type RectangleFn = (row: Dimension, col: Dimension, char?: Char) => string;

type BuildRowsFn = (
  row: Dimension,
  col: Dimension,
  callbackFn: LineFn,
  char?: Char,
) => string;

type alternateLineFn = (
  rowNumber: number,
  width: Dimension,
  char: Char,
) => string;

const filledLine: LineFn = (width, char = Symbols.star) => char.repeat(width);

const hollowLine: LineFn = (width, char = Symbols.star) => {
  if (width <= 1) return char;
  if (width === 2) return char + char;
  return char + Symbols.space.repeat(width - 2) + char;
};

const alternateLine: alternateLineFn = (rowNumber, width, char) =>
  (rowNumber % 2 === 0 ? filledLine : hollowLine)(width, char);

const buildRows: BuildRowsFn = (row, col, callbackFn, char = Symbols.star) =>
  Array.from({ length: row }, () => callbackFn(col, char)).join(
    Symbols.newLine,
  );

const filledRectangle: RectangleFn = (row, col, char = Symbols.star): string =>
  buildRows(row, col, filledLine, char);

const hollowRectangle: RectangleFn = (row, col, char = Symbols.star) => {
  if (row <= 2 || col <= 2) {
    return filledRectangle(row, col, char);
  }

  const topBottom = filledLine(col, char);
  const middle = buildRows(row - 2, col, hollowLine, char);
  return [topBottom, middle, topBottom].join(Symbols.newLine);
};

const alternativeRectangle: RectangleFn = (row, col, char = Symbols.star) =>
  Array.from({ length: row }, (_, index) =>
    alternateLine(index, col, char),
  ).join(Symbols.newLine);

const main = (): undefined => {
  console.log(filledRectangle(2, 3));
  console.log(filledLine(10, Symbols.dash));
  console.log(hollowRectangle(4, 3));
  console.log(filledLine(10, Symbols.dash));
  console.log(alternativeRectangle(4, 3));
};

main();
