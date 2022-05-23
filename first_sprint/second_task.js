// 68539825
var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let power = null;
let map = new Map();

function prepareNumberArray(line) {
  return line
    .trim()
    .split('')
    .filter(item => item !== '.')
    .map((num) => Number(num));
}

function main() {
  let points = 0;

  for (let i = 1; i < 10; i++) {
    const map_value = map.get(i);

    if (map_value && map_value <= power) {
      points++;
    }
  }

  return points.toString();
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    power = 2 * Number(line);
  } else if (line_number < 5) {
    const buttons = prepareNumberArray(line);

    buttons.forEach(button => {
      const map_value = map.get(button);
      map.set(button, map_value ? map_value + 1 : 1)
    });
  }

  line_number++;
});

io_interface.on("close", function () {
  output(main());
});

module.exports = {
  main,
  prepareNumberArray,
};
