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

class ListItem {
  constructor(firstItem) {
    this.len = 1;
    this.vertices = [firstItem];
  }

  add(item) {
    this.vertices.push(item);
    this.len++;
  }

  getOutputView() {
    return this.len.toString() + ' ' + this.vertices.join(' ');
  }
}

const main = () => {
  const list = Array(verticesLength + 1).fill(null);
  list[0] = -1;

  for (const { from, to } of edges) {
    if (list[from] === null) {
      list[from] = new ListItem(to);
    } else {
      list[from].add(to);
    }
  }

  const resOutput = [];

  for (let item of list) {
    if (item === -1) continue;

    if (item !== null) {
      resOutput.push(item.getOutputView());
      continue;
    }

    resOutput.push('0');
  }

  output(resOutput.join('\n'));
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
