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

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

const YES = "YES";
const NO = "NO";

let lineNumber = 0;

let n = null;
let m = null;

const output = (value) => {
  process.stdout.write(value);
};

const comparison = (n, m) => {
  if (n.length !== m.length) {
    return NO;
  }

  const nMap = new Map();
  const mMap = new Map();

  for (let i = 0; i < n.length; i++) {
    if (!nMap.has(n[i])) {
      nMap.set(n[i], [i]);
    } else {
      nMap.get(n[i]).push(i);
    }
  }

  for (let i = 0; i < m.length; i++) {
    if (!mMap.has(m[i])) {
      mMap.set(m[i], [i]);
    } else {
      mMap.get(m[i]).push(i);
    }
  }

  if (nMap.size !== mMap.size) {
    return NO;
  }

  const mArr = Array.from(mMap.values());

  for (let [_char, nArr] of nMap) {
    const indexOfMatched = mArr.findIndex((arr) => {
      if (arr.length !== nArr.length) {
        return false;
      }

      const identicalIndexes = arr.every((num, index) => {
        return num === nArr[index];
      });

      return identicalIndexes;
    });

    if (indexOfMatched < 0) {
      return NO;
    }

    mArr[indexOfMatched] = [];

    return YES;
  }
};

const main = () => {
  const res = comparison(n, m);

  output(res);
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    n = line.trim();
  } else if (lineNumber === 1) {
    m = line.trim();
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
