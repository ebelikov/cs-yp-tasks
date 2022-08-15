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
let inputNumbersLength = null;
let inputNumbers = null;

const output = (value) => {
  process.stdout.write(value);
};

const findBigestNumber = (arr) => {
  arr.sort((a, b) => {
    a = Number(a.padEnd(4, a));
    b = Number(b.padEnd(4, b));

    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });

  return arr.join("");
};

const main = () => {
  const res = findBigestNumber(inputNumbers);
  output(res);
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    inputNumbersLength = Number(line);
  } else if (lineNumber === 1) {
    inputNumbers = line.trim().split(" ");
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
