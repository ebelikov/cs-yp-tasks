var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let words = [];

function prepareNumberArray(line) {
  return line.trim().split(" ");
}

function main(words) {
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 1) {
    words = prepareNumberArray(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  const result = main(words);

  output(`${result}\n${result.length}`);
});

module.exports = {
  main,
  prepareNumberArray,
};
