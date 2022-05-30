var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;
let inputNumber = null;
let powerNumber = null;

function findFibNum(n) {
  let a = BigInt(1);
  let b = BigInt(1);

  if (n <= 1) {
    return 1;
  }

  while (n > 2) {
    let temp = b;
    b = a + b;
    a = temp;

    n--;
  }

  return (a + b).toString();
}

function getRemainder(num, power) {
  return Number(num) % 10 ** power;
}

function main() {
  const fibNum = findFibNum(inputNumber);
  const lastFibNum = fibNum.slice(fibNum.length - 10);
  const remainder = getRemainder(lastFibNum, powerNumber);
  output(remainder.toString());
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
