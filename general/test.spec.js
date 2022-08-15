const { binarySearch } = require("./binary-search");

test("1", () => {
  const arr = [1, 2, 3, 5, 6, 7, 9];

  expect(binarySearch(arr, 3)).toBe(2);
});
test("1", () => {
  const arr = [1, 3, 5, 6, 23, 35, 234, 1223, 1444];

  expect(binarySearch(arr, 23)).toBe(4);
});
test("1", () => {
  const arr = [1, 3, 5, 5, 6, 23, 35, 234, 1223, 1444];

  expect(binarySearch(arr, 23)).toBe(5);
});
test("1", () => {
  const arr = [1, 3, 5, 5, 5, 5, 6, 23, 35, 234, 1223, 1444];

  expect(binarySearch(arr, 6)).toBe(6);
});
test("2", () => {
  const arr = [];

  expect(binarySearch(arr, 23)).toBe(-1);
});
test("1", () => {
  const arr = [1, 3, 5];

  expect(binarySearch(arr, 5)).toBe(2);
});
test("1", () => {
  const arr = [1, 3, 5];

  expect(binarySearch(arr, 1)).toBe(0);
});
test("1", () => {
  const arr = [1];

  expect(binarySearch(arr, 1)).toBe(0);
});
test("1", () => {
  const arr = [1, 2];

  expect(binarySearch(arr, 2)).toBe(1);
});
test("1", () => {
  const arr = [1, 2];

  expect(binarySearch(arr, 1)).toBe(0);
});
