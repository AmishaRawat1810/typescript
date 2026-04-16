export const compose =
  <B, C>(f: (arg: B) => C, g: (...args: any[]) => B) =>
  (...args: any[]) =>
    f(g(...args));

export const juxt =
  <A, B, C>(f: (...arg: A[]) => B, g: (...arg: A[]) => C) =>
  (...args: A[]) => [f(...args), g(...args)];

export const applyTwice = <A, B>(f: (arg: A | B) => B, x: A) => f(f(x));

export const flip =
  <X, Y, Z>(f: (a: X, b: Y) => Z) =>
  (a: Y, b: X) =>
    f(b, a);

export const constantly =
  <X>(x: X) =>
  () =>
    x;

export const on =
  <X, Y, A, B>(f: (a: A, b: A) => B, g: (arg: X | Y) => A) =>
  (x: X, y: Y) =>
    f(g(x), g(y));

export const pairWith =
  <X, Y>(f: (arg: X) => Y) =>
  (x: X) => [x, f(x)];

export const tap =
  <X, Y>(f: (arg: X) => Y) =>
  (x: X) => {
    f(x);
    return x;
  };

export const zipWith = <A, B, C>(f: (a: A, b: B) => C, a1: A[], a2: B[]) =>
  a1.map((x: A, i: number) => f(x, a2[i]));

export const prop =
  (key: string) =>
  <X>(obj: { [key: string]: X }) =>
    obj[key];

export const wrap =
  <X, Y>(f: (arg: X) => Y) =>
  (x: X) => {
    console.log(x);
    const result = f(x);
    console.log(result);
    return result;
  };

export const fork =
  <X, Y, Z, A>(
    combine: (a: X, b: Y) => Z,
    f: (arg: A) => X,
    g: (arg: A) => Y,
  ) =>
  (x: A) =>
    combine(f(x), g(x));
