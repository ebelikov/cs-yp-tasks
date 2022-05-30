var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

function output(value) {
  process.stdout.write(value);
}

let line_number = 0;
let matrixLines = 0;
let matrixColumns = 0;

const matrix = [];

function revertMatrix(n, m, matrix) {
  const revertedMatrix = [];

  for (let i = 0; i < m; i++) {
    revertedMatrix.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      revertedMatrix[j].push(matrix[i][j]);
    }
  }

  return revertedMatrix;
}

function addMatrixLine(line) {
  matrix.push(
    line
      .trim()
      .split(" ")
      .map((n) => Number(n))
  );
}

function main() {
  let revertedMatrix = revertMatrix(matrixLines, matrixColumns, matrix);

  revertedMatrix = revertedMatrix.map((line) => line.join(" ")).join("\n");

  output(revertedMatrix);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    matrixLines = Number(line);
  } else if (line_number === 1) {
    matrixColumns = Number(line);
  } else if (line) {
    addMatrixLine(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  main();
});
