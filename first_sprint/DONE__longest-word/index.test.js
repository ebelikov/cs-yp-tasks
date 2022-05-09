const { main } = require("./index.js");

test("first", () => {
  expect(main(["i", "love", "segment", "tree"])).toBe('segment');
});

test("second", () => {
  expect(main(["frog", "jumps", "from", "river"])).toBe('jumps');
});

test("third", () => {
  expect(main([])).toBe('');
});

test("fourth", () => {
  expect(main(['f'])).toBe('f');
});

