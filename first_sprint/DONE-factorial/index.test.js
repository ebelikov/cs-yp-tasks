const { main } = require('./index.js');

test('first', () => {
  expect(main(8)).toBe('2 2 2');
});
test('second', () => {
  expect(main(13)).toBe('13');
});
test('third', () => {
  expect(main(100)).toBe('2 2 5 5');
});
test('forth', () => {
  expect(main(2)).toBe('2');
});

test('five', () => {
  expect(main(77)).toBe('7 11');
});
