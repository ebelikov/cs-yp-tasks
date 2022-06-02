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

const main = () => {
  //code here
};

const output = (value) => {
  process.stdout.write(value);
}

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});

