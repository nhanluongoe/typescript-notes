type OurArray<T = string> = Array<T>;

const arr1: string[] = ["a", "b", "c"];
const arr2: OurArray = ["a", "b", "c"];
const arr3: OurArray<number> = [1, 2, 3];
const arr4: OurArray = [1, 2, 3]; // error
