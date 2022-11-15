const { main, prepareNumberArray } = require('./index');

test('Preapare function', () => {
  expect(prepareNumberArray('1 -3 -4 5')).toStrictEqual([1, -3, -4, 5]);
});

test('main function all zeroes', () => {
  expect(main(0, 0, 0, 0)).toBe(0);
});

test('main function 1', () => {
  const answer = main(-8, -5, -2, 7);
  const outputAnswer = answer.toString();
  expect(answer).toBe(-183);
  expect(outputAnswer).toBe('-183');
});

test('main function 2', () => {
  expect(main(8, 2, 9, -10)).toBe(40);
});
