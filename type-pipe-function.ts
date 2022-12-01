function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;
function compose<Input, FirstArg, SecondArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;
function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;
function compose(...functions: any[]) {
  return (input: any) => functions.reduce((arg, fn) => fn(arg), input);
}

function addOne(num: number): number {
  return num + 1;
}

function numToString(num: number): string {
  return num.toString();
}

function stringToNum(str: string): number {
  return Number(str);
}

const addOneOnly = compose(addOne);
const addOneToString = compose(addOne, numToString);
// const errorComposition = compose(numToString, addOne);
const addOneToStringToNum = compose(addOne, numToString, stringToNum);

console.log(addOneOnly(1));
console.log(addOneToString(1));
console.log(addOneToStringToNum(1));
