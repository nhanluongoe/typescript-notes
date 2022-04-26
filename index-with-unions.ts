const user = {
  name: "Amir",
  age: 36,
};

const userName1: typeof user["name" | "age"] = "Fujiko";
const userName2: typeof user[keyof typeof user] = "Helios";
