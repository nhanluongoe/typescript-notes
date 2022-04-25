const aString: "dogs" = "dosg" as "dogs"; // dangerous

const a: unknown = "five";
const fakeNumber: number = a as number;
Math.sqrt(fakeNumber); // no error => dangerous
