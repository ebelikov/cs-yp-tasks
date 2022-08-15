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
let inputArr = null;
let inputArrLength = null;

const output = (value) => {
  process.stdout.write(value.join(" ") + "\n");
};

const bubbleSort = (arr) => {
  let isFirstIteration = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let wasSorted = false;

    for (let j = 0; j < arr.length - 1; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
        wasSorted = true;
      }
    }

    if (!wasSorted && !isFirstIteration) {
      break;
    } else {
      output(arr);
      isFirstIteration = false;
    }
  }
};

const main = () => {
  bubbleSort(inputArr);
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    inputArrLength = Number(line);
  } else if (lineNumber === 1) {
    inputArr = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
