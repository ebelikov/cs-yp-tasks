var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let word = "";

function prepareString(line) {
  return line
    .trim()
    .replace(/[^\w|^\d]/g, "")
    .toLowerCase();
}

function main(word) {
  const halfWordLength = word.length / 2;

  for (let i = 0; i < halfWordLength; i++) {
    let j = word.length - i - 1;

    if (word[i] !== word[j]) {
      return "False";
    }
  }

  return "True";
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    word = prepareString(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  output(main(word));
});

module.exports = {
  main,
  prepareString,
};
