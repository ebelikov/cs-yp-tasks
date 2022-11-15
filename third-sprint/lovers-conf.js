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
let ids = null;
let quantity = null;

const output = (value) => {
  process.stdout.write(value);
};

const calculate = (ids, q) => {
  const map = new Map();

  ids.forEach((id) => {
    if (map.has(id)) {
      map.set(id, map.get(id) + 1);
    } else {
      map.set(id, 1);
    }
  });

  const sortedIdsByQuantityStudent = Array.from(map).sort(
    (a, b) => b[1] - a[1]
  );

  let res = sortedIdsByQuantityStudent.slice(0, q);

  res.sort((a, b) => {
    const [idA, quantityA] = a;
    const [idB, quantityB] = b;

    if (quantityA !== quantityB) {
      return 0;
    }

    return idA - idB;
  });

  res = res.map((id) => id[0]);

  return res;
};

const main = () => {
  const res = calculate(ids, quantity);
  output(res.join(' '));
};

io_interface.on('line', function (line) {
  if (lineNumber === 1) {
    ids = line
      .trim()
      .split(' ')
      .map((n) => Number(n));
  } else if (lineNumber === 2) {
    quantity = Number(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
