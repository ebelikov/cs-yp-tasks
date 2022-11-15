const { main } = require('./index.js');

test('base spec', () => {
  expect(main([-1, -10, -8, 0, 2, 0, 5])).toBe(3);
});

test('base spec', () => {
  expect(main([1, 2, 5, 4, 8])).toBe(2);
});

// test("base spec", () => {
//   expect(main([])).toBe(3);
// });
