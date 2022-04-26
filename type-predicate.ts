//1
function isNumber(n: number | string): n is number {
  return typeof n === "string"; // mistake here
}
const n: string = "not a number";
const n2: number = isNumber(n) ? n : 0;

console.log(n2); // 'not a number', no error

//2
function isString(input: unknown): input is string {
  return typeof input === "string";
}
console.log(isString("hello")); // true
console.log(isString({ input: "hello" })); // false

/**
 * TypeScript trusts us to implement type predicates correctly. Test your predicate functions well to make sure that they do what you think they do.
 * Type predicates can take unions as their arguments, or they can take unknown. In most cases, unknown is the safest and most flexible option.
 */
