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
let masters = null;
let mastersRanges = [];

const output = (value) => {
  process.stdout.write(value.join(" ") + "\n");
};

const comparator = (a, b) => {
  return a[0] - b[0];
};

const calculateFlowerBeds = (arr, n) => {
  arr.sort(comparator);

  const flowerBeds = [];

  for (let i = 0; i < n; i++) {
    const peekedBed = flowerBeds[flowerBeds.length - 1];
    const range = arr[i];

    if (peekedBed === undefined) {
      flowerBeds.push(range);
      continue;
    }

    const [bStart, bEnd] = peekedBed;
    const [rStart, rEnd] = range;

    const isOncedRange = rStart <= bEnd;

    if (isOncedRange) {
      peekedBed[1] = Math.max(bEnd, rEnd);
    } else {
      flowerBeds.push(range);
    }
  }

  return flowerBeds;
};

const main = () => {
  const flowerBeds = calculateFlowerBeds(mastersRanges, masters);

  flowerBeds.forEach((item) => {
    output(item);
  });
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    masters = Number(line);
  } else if (lineNumber) {
    const range = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
    mastersRanges.push(range);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
