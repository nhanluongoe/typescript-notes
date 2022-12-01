function compose<Input, FirstArg>(func: (input: Input) => FirstArg): FirstArg;
function compose<Input, FirstArg, SecondArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): SecondArg;
function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func1: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): ThirdArg;
function compose(...args: any[]) {
  return args.reduceRight((result, func) => func(result)) as any;
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
