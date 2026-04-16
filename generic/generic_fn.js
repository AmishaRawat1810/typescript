export function compose(f, g) {
  return function (...args) {
    return f(g(...args));
  };
}

export function juxt(f, g) {
  return function (...args) {
    return [f(...args), g(...args)];
  };
}

export function applyTwice(f, x) {
  return f(f(x));
}

export function flip(f) {
  return function (a, b) {
    return f(b, a);
  };
}

export function constantly(x) {
  return function () {
    return x;
  };
}

export function on(f, g) {
  return function (x, y) {
    return f(g(x), g(y));
  };
}

export function pairWith(f) {
  return function (x) {
    return [x, f(x)];
  };
}

export function tap(f) {
  return function (x) {
    f(x);
    return x;
  };
}

export function zipWith(f, a1, a2) {
  return a1.map(function (x, i) {
    return f(x, a2[i]);
  });
}

export function prop(key) {
  return function (obj) {
    return obj[key];
  };
}

export function wrap(f) {
  return function (x) {
    console.log(x);
    const result = f(x);
    console.log(result);
    return result;
  };
}

export function fork(combine, f, g) {
  return function (x) {
    return combine(f(x), g(x));
  };
}
