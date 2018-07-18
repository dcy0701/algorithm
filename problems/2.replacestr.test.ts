import replacestr = require("./2.replacestr");

it("We Are Happy", () => {
  expect(replacestr('We Are Happy', '%20')).toBe('We%20Are%20Happy ');
});
