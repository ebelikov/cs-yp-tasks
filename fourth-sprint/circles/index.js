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
let n = null;
let arr = [];
let lineNumber = 0;

const output = (value) => {
  process.stdout.write(value + "\n");
};

const main = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      continue;
    }

    map.set(arr[i], true);
  }

  for (let item of map.keys()) {
    output(item);
  }
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    n = Number(line);
  } else if (lineNumber <= n) {
    arr.push(line);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main(arr);
});
