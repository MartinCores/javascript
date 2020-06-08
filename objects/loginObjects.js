//LOG IN

const objectRapper0 = {
  name: "2pac",
  lastName: "Amaru Shakur",
  email: "2pacamaru@mcprovoker.com",
  password: "whoshotya",
  phone: "677383838",
  address: "N.Y.",
  car: false,
};

const objectRapper1 = {
  name: "The Notorious",
  lastName: "B.I.G",
  email: "biggiesmalls@mcprovoker.com",
  password: "suicidalthoughts",
  phone: "666525252",
  address: "L.A.",
  car: true,
};

const hipHopArray = [
  {
    name: "2pac",
    lastName: "Amaru Shakur",
    email: "2pacamaru@mcprovoker.com",
    password: "whoshotya",
    phone: "677383838",
    address: "N.Y.",
    haveCar: false,
  },
  {
    name: "The Notorious",
    lastName: "B.I.G",
    email: "biggiesmalls@mcprovoker.com",
    password: "suicidalthoughts",
    phone: "666525252",
    address: "L.A.",
    haveCar: true,
  },
];

const hipHopIn = (chain, email, name) => {
  const result =
    chain.find((value) => value === name) +
    "    " +
    chain.find((value) => value === email);
  if (result !== undefined) {
    return hipHopArray;
  }
  return result;
};

console.log(hipHopIn(hipHopArray, {}, "biggiesmalls@mcprovoker.com"));
