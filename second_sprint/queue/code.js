var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

function output(output) {
  process.stdout.write(output + "\n");
}

class Queue {
  constructor(max) {
    this.items = Array(max).fill(null);
    this.maxSize = max;
    this.currentSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    if (this.currentSize === this.maxSize) {
      output("error");
      return;
    }

    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.maxSize;
    this.currentSize++;
  }

  pop() {
    if (this.currentSize === 0) {
      output("None");
      return;
    }

    const poped = this.items[this.head];
	this.items[this.head] = null;
    this.currentSize--;
    this.head = (this.head + 1) % this.maxSize;

    output(poped);

    return poped;
  }

  peek() {
    if (this.currentSize === 0) {
      output("None");
      return;
    }

    const peeked = this.items[this.head];

    output(peeked);
    return peeked;
  }

  size() {
    output(this.currentSize);
    return this.currentSize;
  }
}

let lineNumber = 0;
let operationLength = 0;
let maxQueueLength = 0;
const operations = [];

function addOperationLine(line) {
  operations.push(line.trim().split(" "));
}

function runOperations(n, operations) {
  const queue = new Queue(maxQueueLength);

  for (let i = 0; i < n; i++) {
    const [operation, value] = operations[i];
    queue[operation](value);
  }
}

function main() {
  runOperations(operationLength, operations);
}

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    operationLength = Number(line);
  } else if (lineNumber === 1) {
    maxQueueLength = Number(line);
  } else if (line) {
    addOperationLine(line);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
