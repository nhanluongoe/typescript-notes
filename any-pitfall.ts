//1
const user: any = { name: "John" };
const numbers: number[] = user; // no error, that's why we should avoid any as much as possible

//2
type ItemObjects<T extends Array<unknown>> = {
  items: T;
};

const numbersObject: ItemObjects<number[]> = { items: [1, 2, 3] }; //ok
const stringsObject: ItemObjects<string[]> = { items: [1, 2, 3] }; //error

/**
 * Using any is like we are using Javascript
 * The only safe use of any or unknown is in generic constraint
 */
