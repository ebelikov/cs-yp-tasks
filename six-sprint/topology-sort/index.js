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

const createVerticesList = (edges) => {
  const list = Array(verticesLength + 1);
  list[0] = -1;

  for (const { from, to } of edges) {
    if (Array.isArray(list[from])) {
      list[from].push(to);
    } else {
      list[from] = [to];
    }
  }

  for (let item of list) {
    if (Array.isArray(item)) {
      item.sort((a, b) => b - a);
    }
  }

  return list;
};

const createBaseLists = (size) => {
  const colors = Array(size).fill('white');
  const entry = Array(size);
  const leave = Array(size);

  colors[0] = -1;
  entry[0] = -1;
  leave[0] = -1;

  return { colors, entry, leave };
};

const DFS = ({ colors, resStack, vertices, startIdx }) => {
  const stack = [];
  stack.push(startIdx);

  while (stack.length) {
    const curIdx = stack.pop();

    if (colors[curIdx] === 'white') {
      colors[curIdx] = 'gray';
      stack.push(curIdx);

      if (Array.isArray(vertices[curIdx])) {
        for (const idx of vertices[curIdx]) {
          if (colors[idx] === 'white') stack.push(idx);
        }
      }
    } else if (colors[curIdx] === 'gray') {
      colors[curIdx] = 'black';
      resStack.push(curIdx);
    }
  }
};

const main = () => {
  const vertices = createVerticesList(edges);
  const { colors } = createBaseLists(verticesLength + 1);
  const resStack = [];

  for (let idx = 1; idx < vertices.length; idx++) {
    if (colors[idx] === 'white') {
      DFS({ vertices, colors, resStack, startIdx: idx });
    }
  }

  let res = '';

  while (resStack.length) {
    const poped = resStack.pop();
    res += poped + ' ';
  }

  output(res);
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
