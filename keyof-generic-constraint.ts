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
