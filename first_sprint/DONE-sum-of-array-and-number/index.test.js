const { main } = require('./index.js');

test('first', () => {
  expect(main('1 2 0 0', 34)).toBe('1 2 3 4');
});

test('second', () => {
  expect(main('9 5', 17)).toBe('1 1 2');
});
