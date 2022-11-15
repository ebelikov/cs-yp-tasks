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

let savingsLength = null;
let savings = [];
let bicycleCost = null;
let lineNumber = 0;

const findDay = (arr, x, l, r) => {
  let res = null;
  let mid;
  let token;

  while (l < r) {
    mid = l + Math.floor((r - l) / 2);
    token = arr[mid];

    if (x <= token) {
      res = mid;
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return res === null ? -1 : res + 1;
};

const output = (value) => {
  process.stdout.write(value);
};

const main = () => {
  const dayWhenCanByeFirstBicycle = findDay(
    savings,
    bicycleCost,
    0,
    savingsLength
  );

  const dayWhenCanByeSecondBicycle = findDay(
    savings,
    bicycleCost * 2,
    dayWhenCanByeFirstBicycle - 1,
    savingsLength
  );

  output(`${dayWhenCanByeFirstBicycle} ${dayWhenCanByeSecondBicycle}`);
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    savingsLength = Number(line);
  } else if (lineNumber === 1) {
    savings = line
      .trim()
      .split(' ')
      .map((n) => Number(n));
  } else if (lineNumber === 2) {
    bicycleCost = Number(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
