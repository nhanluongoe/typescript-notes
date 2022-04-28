type MapNumberPropertyWithNull<T> = {
  [K in keyof T]: T[K] extends number ? null : T[K];
};

type Animal = {
  breed: string;
  age: number;
};

const dog: MapNumberPropertyWithNull<Animal> = {
  breed: "Corgi",
  age: null,
};
