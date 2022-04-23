interface User {
  name: string;
}

interface User {
  age: number;
}

const user1: User = { name: "John" }; // error
const user2: User = { name: "John", age: 30 }; // okay

/**
 * Some reasons to use interface over type
 * Interfaces can produce better error messages in some cases.
 * Interfaces sometimes compile faster than object types.
 * The official TypeScript documentation uses interfaces in its examples, so you'll see a lot of interfaces even if you don't use them.
 * The TypeScript team endorses interfaces. For example, Daniel Rosenwasser, TypeScript's Program Manager, has publicly endorsed them over object types: "my take is that it should really just be interfaces for anything that they can model"
 */
