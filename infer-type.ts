// 1
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : any;

const add = (x: number, y: number): number => x + y;
const res: MyReturnType<typeof add> = add(1, 2);

// 2
type ArrayElementType<T extends any[]> = T[number];
type ArrayElementType2<T> = T extends Array<infer R> ? R : never;

const arrayOfStrings = ["1", "2", "3"];
const helloString: ArrayElementType<typeof arrayOfStrings> = "hello";
const helloString2: ArrayElementType2<string[]> = "hello";
