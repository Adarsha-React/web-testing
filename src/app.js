const users = [
  {
    name: "Adarsha",
    age: 31,
  },
  {
    name: "Deepashree",
    age: 24,
  },
  {
    name: "Darshan",
    age: 27,
  },
  {
    name: "Venka",
    age: 32,
  },
];

function sortByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

module.exports = sortByAge;
