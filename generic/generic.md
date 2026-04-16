const compose = (f,g) => (...args) => f(g(...args));

const juxt = (f,g) => (...args) => [f(...args),g(...args)]

const applyTwice = (f, x) => f(f(x));

const flip = (f) => (a, b) => f(b, a);

const constantly = (x) => () => x;

const on = (f, g) => (x, y) => f(g(x), g(y));

const pairWith = (f) => (x) => [x, f(x)];

const tap = (f) => (x) => {
  f(x);
  return x;
};

const zipWith = (f, a1, a2) =>
  a1.map((x, i) => f(x, a2[i]));

const prop = (key) => (obj) => obj[key];

const wrap = (f) => (x) => {
  console.log(x);
  const result = f(x);
  console.log(result);
  return result;
};

const fork = (combine, f, g) => (x) =>
  combine(f(x), g(x));


```ts

// type GenericIdentity = { <type>(arg: type): type };

// const logIdentity: GenericIdentity = (arg) => {
//   console.log({ arg });
//   return arg;
// };
// const num = logIdentity(1);
// const str = logIdentity("hi");
// console.log({ num, str });

// const logIdentityLength = <T>(arg: T[]): T[] => {
//   console.log({ l: arg.length });
//   return arg;
// };

// const nums = logIdentityLength([1]);
// const strs = logIdentityLength(["hi", "bye"]);
// console.log({ nums, strs });

// const logIdentityCopy: { <Type>(arg: Type): Type } = logIdentity;
```