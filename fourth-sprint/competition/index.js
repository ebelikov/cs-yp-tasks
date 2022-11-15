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

let lineNumber = 0;

let winArr = [];

const output = (value) => {
  process.stdout.write(value);
};

const prepare = (arr) => {
  const res = [0];

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      sum++;
    } else {
      sum--;
    }

    res.push(sum);
  }

  return res;
};

const findMaxRange = (arr) => {
  if (arr.length < 2) {
    return 0;
  }

  arr = prepare(arr);

  console.log(arr.join(','));

  const map = new Map();
  let total = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];

    if (total === 0) {
      maxLength = i + 1;
    } else if (map.has(total)) {
      maxLength = Math.max(maxLength, i - map.get(total));
    } else {
      map.set(total, i);
    }
  }

  return maxLength;
};

const main = () => {
  const res = findMaxRange(winArr);

  output(res.toString());
};

io_interface.on('line', function (line) {
  if (lineNumber === 1) {
    winArr = line
      .trim()
      .split(' ')
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
