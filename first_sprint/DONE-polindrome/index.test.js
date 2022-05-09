const { main, prepareString } = require("./index.js");

test("trim", () => {
  expect(
    prepareString("A man, a plan, a canal: Panama")
  ).toBe("amanaplanacanalpanama")
});

test("first", () => {
  expect(main('amanaplanacanalpanama')).toBe('True');
});

test("second", () => {
  expect(main('шалаш')).toBe('True');
});

test("third", () => {
  expect(main('а')).toBe('True');
});

test("fourth", () => {
  expect(main('аоо')).toBe('False');
});

test("five", () => {
  expect(main('oooo')).toBe('True');
});

test("six", () => {
  expect(main('aoao')).toBe('False');
});
