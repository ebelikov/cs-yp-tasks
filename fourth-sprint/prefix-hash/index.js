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

let k = null;
let p = null;
let str = null;
const operations = [];

const prefixes = [0];
const powers = [1];

const chars = [];

const output = (value) => {
  process.stdout.write(value);
};
const prepare = () => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt();
    chars.push(charCode);
    powers.push((powers[i] * k) % p);

    hash = (((hash * k) % p) + charCode) % p;
    prefixes.push(hash);
  }
  //   console.log(powers.join("\n"));
  //   console.log("-------------");
  //   console.log(prefixes.join("\n"));
  //   console.log("-------------");
};

const calculateDiff = (l, r) => {
  const end = prefixes[r];

  let start = 0;

  if (l) {
    start = prefixes[l - 1];
  }

  const power = powers[r - l + 1];

  return (end + p - ((start * power) % p)) % p;
};

const main = () => {
  prepare();

  for (let i = 0; i < operations.length; i++) {
    const diff = calculateDiff(...operations[i]);
    output(diff.toString() + '\n');
  }
};

let operationsLength = null;

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    k = Number(line);
  } else if (lineNumber === 1) {
    p = Number(line);
  } else if (lineNumber === 2) {
    str = line.trim();
  } else if (lineNumber === 3) {
    operationsLength = Number(line);
  } else if (lineNumber < operationsLength + 4) {
    operations.push(
      line
        .trim()
        .split(' ')
        .map((n) => Number(n))
    );
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
