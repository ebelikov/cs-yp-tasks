const { main } = require("./index.js");

test("some", () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];
  const centre = { row: 3, col: 0 };
  expect(main(matrix, centre)).toStrictEqual([7,7]);
});

test("some2", () => {
  const matrix = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ];
  const centre = { row: 0, col: 0 };
  expect(main(matrix, centre)).toStrictEqual([0, 2]);
});

test("some2", () => {
  const matrix = [
    [1],
    [9],
  ];
  const centre = { row: 0, col: 0 };
  expect(main(matrix, centre)).toStrictEqual([9]);
});
