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
