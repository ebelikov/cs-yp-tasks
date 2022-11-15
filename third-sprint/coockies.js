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

let desiredSizesLength = null;
let desiredSizes = null;
let coockiesLength = null;
let coockiseSizes = null;

const output = (value) => {
  process.stdout.write(value);
};

const calculateJoyBoys = (desiredSizes, coockiseSizes) => {
  let res = 0;
  const compareCallback = (a, b) => a - b;
  desiredSizes.sort(compareCallback);
  coockiseSizes.sort(compareCallback);

  let i = 0;
  let j = 0;

  while (i < desiredSizesLength && j < coockiesLength) {
    if (coockiseSizes[j] >= desiredSizes[i]) {
      res++;
      j++;
      i++;
    } else {
      j++;
    }
  }

  return res;
};

const main = () => {
  const res = calculateJoyBoys(desiredSizes, coockiseSizes);

  output(res.toString());
};

const prepareNumberArr = (arr) => {
  return arr
    .trim()
    .split(' ')
    .map((n) => Number(n));
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    desiredSizesLength = Number(line);
  } else if (lineNumber === 1) {
    desiredSizes = prepareNumberArr(line);
  } else if (lineNumber === 2) {
    coockiesLength = Number(line);
  } else if (lineNumber === 3) {
    coockiseSizes = prepareNumberArr(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
