var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

let index_line = 0;
let length = 0;
let weather_numbers = [];

function prepareNumberArray(line) {
  return line.split(' ').map((num) => Number(num));
}

function main(weather_numbers) {
  //TODO: delete next lineÎ
  length = weather_numbers.length;
  if (length === 1) {
    return 1;
  }

  let chaotic_days = 0;

  for (let i = 0; i < length; i++) {
    const isMorePrev = i - 1 < 0 || weather_numbers[i - 1] < weather_numbers[i];
    const isMoreNext =
      i + 1 >= length || weather_numbers[i + 1] < weather_numbers[i];

    if (isMorePrev && isMoreNext) {
      chaotic_days++;
      i++;
    }
  }

  return chaotic_days;
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on('line', function (line) {
  if (index_line === 0) {
    length = Number(line);
  } else if (index_line === 1) {
    weather_numbers = prepareNumberArray(line);
  }

  index_line++;
});

io_interface.on('close', function () {
  const result = main(weather_numbers);
  output(result);
});

module.exports = {
  main,
  prepareNumberArray,
};
