const { main } = require('./index.js');

test('first', () => {
  expect(main([3, 1, 2, 3, 4, 5, 0, 6, 7, 8, 9])).toBe('6 5 4 3 2 1 0 1 2 3 4');
});

test('second', () => {
  expect(main([0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0])).toBe('0 1 2 2 1 0 1 2 2 1 0');
});

test('fourth', () => {
  expect(main([0], 1)).toBe('0');
});
