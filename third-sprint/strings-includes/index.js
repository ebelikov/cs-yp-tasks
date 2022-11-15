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
const OK = 'True';
const NOT_OK = 'False';
let lineNumber = 0;
let s = null;
let t = null;

class Queue {
  constructor(max = 150000) {
    this.items = Array(max);
    this.maxSize = max;
    this.currentSize = 0;
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.maxSize;
    this.currentSize++;
  }

  pop() {
    const poped = this.items[this.head];
    this.items[this.head] = null;
    this.currentSize--;
    this.head = (this.head + 1) % this.maxSize;

    return poped;
  }

  peek() {
    const peeked = this.items[this.head];

    return peeked;
  }

  size() {
    return this.currentSize;
  }
}

const checkStr = (s, t) => {
  if (s.length > t.length) {
    return NOT_OK;
  }

  const queue = new Queue();

  for (let i = 0; i < s.length; i++) {
    queue.push(s[i]);
  }

  for (let i = 0; i < t.length; i++) {
    const peeked = queue.peek();

    if (peeked === t[i]) {
      queue.pop();

      if (queue.size() === 0) {
        return OK;
      }
    }
  }

  return queue.size() === 0 ? OK : NOT_OK;
};

const output = (value) => {
  process.stdout.write(value);
};

const main = () => {
  const res = checkStr(s, t);
  output(res);
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    s = line;
  } else if (lineNumber === 1) {
    t = line;
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
