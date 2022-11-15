/**
 * -- ПРИНЦИП РАБОТЫ -
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 *
 */

const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });
const ERROR = 'error';
let lineNumber = 0;
let numbers = null;
let len = null;

const output = (value) => {
  process.stdout.write(value);
};

const sortClothes = (arr, n) => {
  if (!n) {
    return null;
  }

  let res = Array(n).fill(0);
  let quantity = [0, 0, 0];

  arr.forEach((el, index) => {
    quantity[index]++;
  });

  return [...arr];
};

const main = () => {
  const res = sortClothes(numbers, len);

  if (!res) {
    return;
  }
  output(res.join(' '));
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    len = Number(line);
  } else if (lineNumber === 1) {
    numbers = line
      .trim()
      .split(' ')
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
