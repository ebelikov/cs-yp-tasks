const { main } = require('./index.js');

test('first', () => {
  expect(main(16)).toBe('True');
});

test('first', () => {
  expect(main(100)).toBe('False');
});

test('first', () => {
  expect(main(15)).toBe('False');
});

test('first', () => {
  expect(main(3)).toBe('False');
});

test('first', () => {
  expect(main(64)).toBe('True');
});

test('first', () => {
  expect(main(65)).toBe('False');
});

test('first', () => {
  expect(main(256)).toBe('True');
});

test('one', () => {
  expect(main(1)).toBe('True');
});

test('zero', () => {
  expect(main(0)).toBe('False');
});

test('eight', () => {
  expect(main(8)).toBe('False');
});

test('first', () => {
  expect(main(4)).toBe('True');
});
