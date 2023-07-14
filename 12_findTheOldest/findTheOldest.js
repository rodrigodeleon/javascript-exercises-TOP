const findTheOldest = function (people) {
  let today = new Date();
  let res = people.sort(function (a, b) {
    if (a.yearOfDeath == undefined) a.yearOfDeath = today.getFullYear();

    if (b.yearOfDeath == undefined) b.yearOfDeath = today.getFullYear();

    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth)
      return -1;
    if (a.yearOfDeath - a.yearOfBirth == b.yearOfDeath - b.yearOfBirth)
      return 0;
    if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) return 1;
  });
  console.table(res);
  return res[0];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
