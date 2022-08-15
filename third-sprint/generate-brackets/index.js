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
let quantityBrackets = null;

const output = (value) => {
  process.stdout.write(value + "\n");
};

const generateBrackets = (remainder, open, close) => {
  if (open > 0) {
    generateBrackets(remainder + "(", open - 1, close + 1);
  }

  if (close > 0) {
    generateBrackets(remainder + ")", open, close - 1);
  }

  if (open <= 0 && close <= 0) {
    output(remainder);
  }
};

const main = () => {
  generateBrackets("", quantityBrackets, 0);
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    quantityBrackets = Number(line);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
