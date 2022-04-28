// 1
const strings: { [index: number]: string } = ["a", "b", "c"]; // no error
strings[0]; // 'a'

// 2
const func = (arg: object) => "ok";

const test1 = func([1, 2, 3]); // no error, ok
