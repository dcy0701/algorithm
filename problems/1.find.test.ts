import Find = require("./1.find");

it("5 in given", () => {
  const given = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
  expect(Find(given, 5)).toBe(true);
});

it("20 not in given", () => {
  const given = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
  expect(Find(given, 20)).toBe(false);
});
