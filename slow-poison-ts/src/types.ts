export enum CharSymbol {
  Star = "*",
  Dash = "-",
  Space = " ",
  NewLine = "\n",
  Empty = "",
}

export enum Style {
  FilledRectangle = "filledRectangle",
  HollowRectangle = "hollowRectangle",
  AlternativeRectangle = "alternativeRectangle",
  SpacedAlterativeRectangle = "spacedAlterativeRectangle",
  Triangle = "triangle",
}

export type Char = string;
export type Dimension = number;
export type PositiveNumber = number & {
  __internalPositiveCheck: "PositiveNumber";
};

export type LineFn = (width: Dimension, char?: Char) => string;
export type RectangleFn = (
  row: Dimension,
  col: Dimension,
  char?: Char,
) => string;
export type generatePatternFn = (
  style: string,
  dimension: [number, number?],
) => string;

export type BuildRowsFn = (
  row: Dimension,
  col: Dimension,
  callbackFn: LineFn,
  char?: Char,
) => string;

export type alternateLineFn = (
  rowNumber: number,
  width: Dimension,
  char: Char,
) => string;
