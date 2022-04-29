// 1
type NumberToNull<T> = T extends number ? null : T;

const a: NumberToNull<string | number> = 5; //error
const b: NumberToNull<string | number> = ((): number | null => null)(); // error

// 2
type MyExclude<Original, Excluded> = Original extends Excluded
  ? never
  : Original;

const c: MyExclude<string | number | null, number> = 5; //error
const d: MyExclude<string | number | null, number> = ((): string | null =>
  "ok")(); // no error
