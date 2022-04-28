// 1
type User = {
  kind: "user";
  name: string;
};

function userName(user: User) {
  return user.name;
}

const user1 = {
  kind: "user",
  name: "John",
};

userName(user1); // error, kind is infered as string

// 2
const user2: User = {
  kind: "user",
  name: "John",
};

userName(user2); // ok, no error

// 3
const user3 = {
  kind: "user" as const,
  name: "John",
};

userName(user3); // ok, no error
