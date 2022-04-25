type AngryGuy = {
  angry: true;
};

type FunnyGuy = {
  angry: false;
  hilarious: boolean;
};

type Guy = AngryGuy | FunnyGuy;

const john: Guy = { angry: true };
console.log(john.angry); // true

const jane: Guy = { hilarious: true };
console.log(jane.hilarious); // error, no property 'hilarious' on type Guy
