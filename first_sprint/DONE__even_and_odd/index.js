var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let input_numbers = [];

const WIN = 'WIN';
const FAIL = 'FAIL';

function prepareNumberArray(line) {
  return line.split(' ').map((num) => Number(num));
}

function main(...numbers) {
  const checkKindNumber = (number) => {
    return number % 2 ? 'odd' : 'even';
  };

  const firstKind = checkKindNumber(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    const kindCurrentNumber = checkKindNumber(numbers[i]);

    if (kindCurrentNumber !== firstKind) {
      return FAIL;
    }
  }

  return WIN;
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on('line', function (line) {
  if (line_number === 0) {
    input_numbers = prepareNumberArray(line);
  }

  line_number++;
});

io_interface.on('close', function () {
  output(main(...input_numbers));
});

module.exports = {
  main,
  prepareNumberArray,
};
