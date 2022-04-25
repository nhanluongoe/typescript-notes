function double(n: number): number;
function double(s: string): string;
function double(n: number | string): number | string {
  if (typeof n === "number") {
    return n * 2;
  } else {
    const doubled = Number(n) * 2;
    return doubled;
  }
}

// This is supposed to be a string, but it ends up holding a number!
const s: string = double("6");
console.log(s); // no error, 12
