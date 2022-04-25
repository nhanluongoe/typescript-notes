// 1
type userEmails = {
  [userName: string]: string;
};

const emails: userEmails = { dan: "dan@example.com" };
emails.belly; // no error ?!

const bellyEmail: string = emails.belly; // no error ?!

//2
type CatAges = { [name: string]: number };
const catAges: CatAges = { Keanu: 2 };
const age: number = catAges.MsFluff;
console.log(age); // no error, undefined

/**
 * Can enable --noUncheckedIndexedAccess to change this behavior
 */
