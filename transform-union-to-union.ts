type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

type EntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

const userResult: EntityWithId = {
  type: "user",
  userId: "123",
};

const postResult: EntityWithId = {
  type: "post",
  postId: "123",
};
