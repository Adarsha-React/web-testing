const sortByAge = require(".././app.js");

test("first user should be Deepashree", () => {
  const sortedData = sortByAge();
  expect(sortedData[0].name).toBe("Deepashree");
  console.log(sortedData);
});
