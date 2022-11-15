var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;
let inputNumber = null;
let powerNumber = null;

function findFibNum(n, power) {
  let a = 1;
  let b = 1;
  const delimiter = (10 ** power);

  if (n <= 1) {
    return 1;
  }

  while (n > 1) {
    let temp = b;
    b = (a + b) % delimiter;
    a = temp;

    n--;
  }

  return b;
}

function main() {
  const fibNum = findFibNum(inputNumber, powerNumber);
  output(fibNum.toString());
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    const [n, p] = line
      .trim()
      .split(" ")
      .map((n) => Number(n));

    inputNumber = n;
    powerNumber = p;
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
