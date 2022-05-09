var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
//[a, x, b, c]
let input_numbers = [];

function prepareNumberArray(line) {
  return line.split(" ").map((num) => Number(num));
}

function main(a, x, b, c) {
  return a * x ** 2 + b * x + c;
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    input_numbers = prepareNumberArray(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  const result = main(...input_numbers).toString();
  output(result);
});

module.exports = {
  main,
  prepareNumberArray,
};
