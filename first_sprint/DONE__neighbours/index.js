var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let row_length = 0;
let col_length = 0;
let matrix = [];
let centre = {
  row: 0,
  col: 0,
};

function prepareNumberArray(line) {
  return line.split(' ').map((num) => Number(num));
}

function main(matrix, centre) {
  const coordinatesOfNeighbours = [
    {
      row: centre.row,
      col: centre.col + 1,
    },
    {
      row: centre.row - 1,
      col: centre.col,
    },
    {
      row: centre.row,
      col: centre.col - 1,
    },
    {
      row: centre.row + 1,
      col: centre.col,
    },
  ];

  return coordinatesOfNeighbours
    .map((point) => {
      if (point.row < 0 || point.col < 0) return undefined;
      if (matrix[point.row] === undefined) return undefined;

      return matrix[point.row][point.col];
    })
    .filter((number) => typeof number === 'number')
    .sort((a, b) => a - b);
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on('line', function (line) {
  if (line_number === 0) {
    row_length = Number(line);
  } else if (line_number === 1) {
    col_length = Number(line);
  } else if (line_number > 1 && line_number <= row_length + 1) {
    matrix.push(prepareNumberArray(line));
  } else if (line_number === row_length + 2) {
    centre.row = Number(line);
  } else if (line_number === row_length + 3) {
    centre.col = Number(line);
  }

  line_number++;
});

io_interface.on('close', function () {
  const result = main(matrix, centre);
  output(result.join('\n'));
});

module.exports = {
  main,
  prepareNumberArray,
};
