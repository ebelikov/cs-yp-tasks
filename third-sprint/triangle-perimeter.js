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
let triangleSides = null;

const output = (value) => {
  process.stdout.write(value);
};

const findMaxPerimeter = (triangleSides) => {
  let maxPerimeter = 0;

  triangleSides.sort((a, b) => b - a);

  const checkTriangleValidate = (a, b, c) => {
    return a < b + c;
  };

  for (let i = 0; i < triangleSides.length - 2; i++) {
    let a = triangleSides[i];
    let b = triangleSides[i + 1];
    let c = triangleSides[i + 2];

    const isValid = checkTriangleValidate(a, b, c);

    if (isValid) {
      maxPerimeter = a + b + c;
      break;
    }
  }

  return maxPerimeter;
};

const main = () => {
  const res = findMaxPerimeter(triangleSides);
  output(res.toString());
};

io_interface.on("line", function (line) {
  if (lineNumber === 1) {
    triangleSides = line
      .trim()
      .split(" ")
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
