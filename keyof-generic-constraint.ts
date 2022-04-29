// 1
function get<T>(obj: T, key: keyof T) {
  return obj[key];
}

const notExisting = get({ name: "John", age: 37 }, "notexisting"); // error, TypeScript can catch the error
const email = get({ name: "Amir", age: 36 }, "name"); // ok but email has type of string | number, will lead to problem as below
const name: string = get({ name: "Amir", age: 36 }, "name"); // error

// 2
function get2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const name2: string = get2({ name: "John", age: 36 }, "name"); // no error, ok

/**
 * Explanation
 * get's first type parameter is T, with no constraint. We passed a {name: string, age: number}, so that must be T.
 * get's second type parameter is Key extends keyof T. We passed 'age', which is indeed a key of {name: string, age: number}, so that's allowed.
 * The return type is declared as T[Key]. If we expand the type parameters out, that's {name: string, age: number}['age']. We can reduce that type to just number, so that's the return type.
Putting those together, this generic function call's type is (obj: {name: string, age: number}, key: 'age') => number.
 */
