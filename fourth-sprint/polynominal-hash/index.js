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

let lineNumber = 0;
let s = null;
let m = null;
let a = null;

const output = (value) => {
  process.stdout.write(value);
};

const getHash = (s, a, m) => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum = (sum * a + s[i].charCodeAt()) % m;
  }

  return sum;
};

const main = () => {
  const res = getHash(s, a, m);

  output(res.toString());
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    a = Number(line);
  } else if (lineNumber === 1) {
    m = Number(line);
  } else if (lineNumber === 2) {
    s = line.trim();
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
