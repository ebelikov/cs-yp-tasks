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
let homePricesLength = null;
let budget = null;
let homePrices = null;

const output = (value) => {
  process.stdout.write(value);
};

const calculate = (prices, budget) => {
  let res = 0;

  prices.sort((a, b) => a - b);

  let i = 0;

  while (budget > 0 && i < prices.length) {
    budget = budget - prices[i];

    if (budget >= 0) {
      res++;
    }

    i++;
  }

  return res;
};

const main = () => {
  const res = calculate(homePrices, budget);
  output(res.toString());
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    const [n, k] = line
      .trim()
      .split(" ")
      .map((n) => Number(n));

    homePricesLength = n;
    budget = k;
  } else if (lineNumber === 1) {
    homePrices = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
