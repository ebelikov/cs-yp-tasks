const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });
let verticesLength = null;
let edges = [];
let edgesLength = null;
let lineNumber = 0;
let startIdx = null;

const output = (value) => {
  process.stdout.write(value);
};

const fillVerticesList = (arr, idx, value) => {
  if (Array.isArray(arr[idx])) {
    arr[idx].push(value);
  } else {
    arr[idx] = [value];
  }
};

const createVerticesList = (edges, size) => {
  const vertices = Array(size);
  vertices[0] = -1;

  for (const { from, to } of edges) {
    fillVerticesList(vertices, from, to);
    fillVerticesList(vertices, to, from);
  }

  for (let item of vertices) {
    if (Array.isArray(item)) {
      item.sort((a, b) => a - b);
    }
  }

  return vertices;
};

const createBaseLists = (size, edges) => {
  const colors = Array(size).fill('white');
  colors[0] = null;
  const vertices = createVerticesList(edges, size);
  const distance = Array(size).fill(-1);

  return { colors, vertices, distance };
};

class Queue {
  constructor() {
    this.stack = [];
    this.reverse = [];
  }

  get length() {
    return this.stack.length + this.reverse.length;
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    if (this.reverse.length) {
      return this.reverse.pop();
    }

    while (this.stack.length) {
      this.reverse.push(this.stack.pop());
    }

    return this.reverse.pop();
  }
}

const BFS = ({ colors, vertices, startIdx, distance }) => {
  const queue = new Queue();
  queue.push(startIdx);
  colors[startIdx] = 'gray';
  distance[startIdx] = 0;

  while (queue.length) {
    const curVertex = queue.pop();

    if (Array.isArray(vertices[curVertex])) {
      for (let v of vertices[curVertex]) {
        if (colors[v] === 'white') {
          queue.push(v);
          colors[v] = 'gray';
          distance[v] = distance[curVertex] + 1;
        }
      }
    }

    colors[curVertex] = 'black';
  }
};

const main = () => {
  const size = verticesLength + 1;
  const { colors, vertices, distance } = createBaseLists(size, edges);

  BFS({ colors, vertices, startIdx, distance });

  output(Math.max(...distance).toString());
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
  } else if (lineNumber === edgesLength + 1) {
    startIdx = Number(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
