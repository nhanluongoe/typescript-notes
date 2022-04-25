const s1: string | unknown = "hello";
const s2: string = s1; // error, unknown absorbs string

const s3: string & unknown = "hello";
const s4: string = s3; // no error, the other type absorbs unknown

const anything: any = 5
const unknownThing: unknown = anything // unknown and any are assignable to each other
