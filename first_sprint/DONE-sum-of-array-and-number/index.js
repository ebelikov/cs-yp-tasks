var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let length = 0;
let input_numbers = '';
let number = 0;

function main(input_numbers, number) {
  const joinedNumber = Number(input_numbers.split(' ').join(''));

  const result = joinedNumber + number;
  
  return result.toString().split('').join(' ');
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    length = Number(line);
  } else if (line_number === 1) {
    input_numbers = line;
  } else if (line_number === 2) {
    number = Number(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  const result = main(input_numbers, number);
  output(result);
});

module.exports = {
  main,
};
