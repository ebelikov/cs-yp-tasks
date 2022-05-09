const { main } = require("./index.js");

const WIN = "WIN";
const FAIL = "FAIL";

// WINS
test("default win", () => {
  expect(main(2, 4, 6)).toBe(WIN);
});

test("win with zero", () => {
  expect(main(0, 2, 10)).toBe(WIN);
});

test("win with negative numbeer", () => {
  expect(main(-50, 2, 10)).toBe(WIN);
});

test("win with negative and zero number", () => {
  expect(main(-50, 2, 0)).toBe(WIN);
});

test('win with odd number', () => {
	expect(main(1, 3, 5)).toBe(WIN)
})

// FAILS
test("default fail", () => {
  expect(main(1, 2, 10)).toBe(FAIL);
});

test("float number fail", () => {
  expect(main(2.2, 2, 10)).toBe(FAIL);
});
