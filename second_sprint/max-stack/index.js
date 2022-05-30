var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

function output(output) {
  process.stdout.write(output + "\n");
}

class Stack {
  constructor(items) {
    this.items = items;
    this.maxItems = [];
  }

  push(item) {
    item = Number(item);

    this.items.push(item);

    if (
      !this.maxItem.length ||
      this.maxItems[this.maxItems.length - 1] <= item
    ) {
      this.maxItems.push(item);
    }
  }

  pop() {
    if (this.items.length) {
      const popedItem = this.items.pop();

      if (this.maxItems[this.maxItems.length - 1] === popedItem) {
        this.maxItems.pop();
      }

      return popedItem;
    } else {
      output("error");
    }
  }

  get_max() {
    this.getMax();
  }

  getMax() {
    if (this.maxItems.length) {
      output(this.maxItems[this.maxItems.length - 1]);
    } else {
      output("None");
    }
  }
}

let line_number = 0;
let operationLength = 0;

const operations = [];

function addOperationLine(line) {
  operations.push(line.trim().split(" "));
}

function runOperations(n, operations) {
  const stack = new Stack([]);

  for (let i = 0; i < n; i++) {
    const [operation, value] = operations[i];
    stack[operation](value);
  }
}

function main() {
  runOperations(operationLength, operations);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    operationLength = Number(line);
  } else if (line) {
    addOperationLine(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  main();
});
