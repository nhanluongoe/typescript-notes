// 1 No asserts
function assert1(condition: boolean) {
  if (!condition) {
    throw new Error("Assertion failed");
  }
}
const x1: string | number = ((): number | string => 1)();
assert1(typeof x1 === "number");
const y1: number = x1; // error

// 2 Asserts
function assert2(condition: boolean): asserts condition {
  if (!condition) {
    throw new Error("Assertion failed");
  }
}

const x2: string | number = ((): number | string => 1)();
assert2(typeof x2 === "number");
const y2: number = x2;
