// 1
const names: string[] = ["Alice", "Bob"];
const unsoundNames: (string | number)[] = names;

unsoundNames.push(5);
console.log(names); // ["Alice", "Bob", 5], no error!!

// 2
const firstName: string = names[2];
console.log(firstName); // undefined, no error!!
