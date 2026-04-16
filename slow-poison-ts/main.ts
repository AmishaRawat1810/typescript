type Char = string;
type Dimension = number;

type LineFn = (width: Dimension, char?: Char) => string;
type RectangeFn = (row: Dimension, col: Dimension, char?: Char) => string;
type BuildRowsFn = (
  row: Dimension,
  col: Dimension,
  callbackFn: LineFn,
  char?: Char,
) => string;

const filledLine: LineFn = (width, char = "*") => char.repeat(width);

const hollowLine: LineFn = (width, char = "*") => {
  if (width <= 1) return char;
  if (width === 2) return char + char;
  return char + " ".repeat(width - 2) + char;
};

const buildRows: BuildRowsFn = (row, col, callbackFn, char = "*") =>
  Array.from({ length: row }, () => callbackFn(col, char)).join("\n");

const filledRectangle: RectangeFn = (row, col, char = "*"): string =>
  buildRows(row, col, filledLine, char);

const hollowRectangle: RectangeFn = (row, col, char = "*") => {
  if (row <= 2 || col <= 2) {
    return filledRectangle(row, col, char);
  }

  const topBottom = filledLine(col);
  const middle = buildRows(row - 2, col, hollowLine, char);
  return [topBottom, middle, topBottom].join("\n");
};

console.log(filledRectangle(2, 3));
console.log(filledLine(10, "-"));
console.log(hollowRectangle(4, 3));
