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

const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });
let lineNumber = 0;
let edgesLength = null;
let verticesLength = null;
const edges = [];

const output = (value) => {
  process.stdout.write(value);
};

const main = () => {
  const matrix = Array(verticesLength);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = Array(verticesLength).fill(0);
  }

  for (const { from, to } of edges) {
    matrix[from - 1][to - 1] = 1;
  }

  const res = [];

  for (const arr of matrix) {
    res.push(arr.join(' '));
  }

  output(res.join('\n'));
};

const prepareInput = (line) => {
  return line
    .trim()
    .split(' ')
    .map((n) => Number(n));
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    const [v, e] = prepareInput(line);

    edgesLength = e;
    verticesLength = v;
  } else if (lineNumber <= edgesLength) {
    const [from, to] = prepareInput(line);

    edges.push({ from, to });
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
