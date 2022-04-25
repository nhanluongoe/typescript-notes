//1
function dogName(dog: { name: string }) {
  return user.name;
}

const dog1 = { name: "Hachiko", age: 5 };
dogName(dog1); // okay
dogName({ name: "Akita", age: 2 }); // error

const dog2: { name: string } = { name: "Hachiko", age: 5 }; // error

//2
type Cat = {
  name: string;
  age: number;
  cuddling: boolean;
};

function isCuddling(cat: Cat) {
  return cat.cuddling;
}

const cat1 = {
  name: "Mr. Bigglesworth",
  age: 5,
  cuddling: true,
  extraProperty: "extra",
};
isCuddling(cat1); // okay
isCuddling({
  name: "Mr. Bigglesworth",
  age: 5,
  cuddling: true,
  extraProperty: "extra",
}); // error

/**
 * In general, TypeScript allows objects to have extra properties. For example, we can pass a variable with the type {name: string, age: number} to a function expecting a {name: string}.
 * But TypeScript doesn't allow extra properties when passing literal objects to functions, or assigning them directly to a variable with an explicit type. If we have function userName(user: {name: string}), then userName({name: 'Amir', age: 36}) is a type error. TypeScript knows that no code will ever access that age property, so there's no reason for it to exist.
 * That can show us subtle bugs like misspelled property names.
 */
