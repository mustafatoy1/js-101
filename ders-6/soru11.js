const mahmut = {
  name: "yasin",
  lastName: "toy",
  friends: {
    names: [
      { fistName: "firstName", lastName: "toy", age: 29 },
      { fistName: "firstName2", lastName: "toy2", age: 90 },
    ],
  },
  age: 25,
  dersler: [
    3,
    5,
    7,
    10,
    "blabla",
    { name: "yeniObje", age: { yas: [90, { bla: "yaso" }, 1000] } },
  ],
};

console.log(
  mahmut.friends.names[1].fistName,
  mahmut.friends.names[1].lastName,
  mahmut.friends.names[1].age
);
