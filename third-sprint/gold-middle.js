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
const ERROR = "error";
let lineNumber = 0;

let nordN = null;
let nordArr = null;
let southN = null;
let southArr = null;

const output = (value) => {
  process.stdout.write(value);
};

const findGoldMiddle = (nordN, nordArr, southN, southArr) => {
  const isEven = (nordN + southN) % 2 === 0;

  const halfLength = Math.round((nordN + southN) / 2);

  let midValue = null;
  let secMidValue = null;

  let n = 0;
  let s = 0;

  for (let i = 0; i <= halfLength; i++) {
    let value = null;

    if (n < nordN && s < southN) {
      if (nordArr[n] <= southArr[s]) {
        value = nordArr[n];
        n++;
      } else {
        value = southArr[s];
        s++;
      }
    } else if (n < nordN) {
      value = nordArr[n];
      n++;
    } else {
      value = southArr[s];
      s++;
    }

    if (i === halfLength - 1) {
      midValue = value;
    } else if (i === halfLength) {
      secMidValue = value;
    }
  }

  return isEven ? (midValue + secMidValue) / 2 : midValue;
};

const main = () => {
  const res = findGoldMiddle(nordN, nordArr, southN, southArr);
  output(res.toString());
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    nordN = Number(line);
  } else if (lineNumber === 1) {
    southN = Number(line);
  } else if (lineNumber === 2) {
    nordArr = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
  } else if (lineNumber === 3) {
    southArr = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
