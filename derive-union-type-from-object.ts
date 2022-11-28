const object = {
  number: 1,
  string: "string",
};

type DeriveUnionTypeFromObject<T> = {
  [K1 in keyof T]: {
    [K2 in K1]: T[K1];
  };
}[keyof T];

type DerivedUnionType = DeriveUnionTypeFromObject<typeof object>;
