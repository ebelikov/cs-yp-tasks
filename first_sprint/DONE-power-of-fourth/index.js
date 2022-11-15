var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let checked_number = 0;

function main(num) {
  for (let i = 1; i <= num; i = i * 4) {
    if (i === num) {
      return 'True';
    }
  }
  return 'False';
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on('line', function (line) {
  if (line_number === 0) {
    checked_number = Number(line);
  }

  line_number++;
});

io_interface.on('close', function () {
  const result = main(checked_number);
  output(result);
});

module.exports = {
  main,
};
