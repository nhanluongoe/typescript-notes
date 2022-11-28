interface Person {
  firstName: string;
  lastName: string;
}

interface Club {
  clubName: string;
}

type FootballPlayer = Person & Club;

const ronaldo: FootballPlayer = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
  clubName: "unkown", // since he has got fired off from MU recently
};

// error
const messi: FootballPlayer = {
  firstName: "Lionel",
  lastName: "Messi",
};
