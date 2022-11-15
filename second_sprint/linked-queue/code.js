var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

function output(output) {
  process.stdout.write(output + '\n');
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.currentSize = 0;
    this.head = null;
    this.tail = null;
  }

  put(item) {
    const node = new Node(item);

    if (this.currentSize === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.currentSize++;
  }

  get() {
    if (this.currentSize === 0) {
      output('error');
      return;
    }

    const pooped = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.currentSize--;

    output(pooped);

    return pooped;
  }

  size() {
    output(this.currentSize);
    return this.currentSize;
  }
}

let lineNumber = 0;
let operationLength = 0;
const operations = [];

function addOperationLine(line) {
  operations.push(line.trim().split(' '));
}

function runOperations(n, operations) {
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    const [operation, value] = operations[i];
    queue[operation](value);
  }
}

function main() {
  runOperations(operationLength, operations);
}

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    operationLength = Number(line);
  } else if (line) {
    addOperationLine(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
