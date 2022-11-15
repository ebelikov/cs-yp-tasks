/**
 * ID задачи в контексте: 68745205
 *
 * -- ПРИНЦИП РАБОТЫ -
 * Через цикл проходим по массиву оперраций, которые необходимо выполнить над Дек
 * и выполняем их.
 * Дек реализован через кольцевой буффер на статическом массив.
 * Все операции в котором выполняются за O(1).
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Дек - структура данных, представляющая из себя список элементов, в которой добавление новых элементов и удаление существующих производится с обоих концов.
 * Эта структура поддерживает как FIFO, так и LIFO, поэтому на ней можно реализовать как стек, так и очередь.
 * Исходя из этого - все операции выполнятся корректно
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Линейная зависимость O(n), где n - operationLength - количество выполняемых операций
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Для выполнения операций нам требуется Dec - https://neerc.ifmo.ru/wiki/index.php?title=%D0%94%D0%B5%D0%BA
 * Так как мы реализовали дек через кольцевой буффер на статическом массиве,
 * то - O(m) где m - maxDecLength размер статического массива
 */

const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });

const ERROR = 'error';
const operations = [];

let lineNumber = 0;
let maxDecLength = null;
let operationLength = null;

class Dec {
  constructor(maxLength) {
    this.items = Array(maxLength).fill(null);
    this.maxLength = maxLength;
    this.head = 0;
    this.tail = 0;
    this.currentLength = 0;
  }

  pushFront(item) {
    if (this.currentLength === this.maxLength) {
      return ERROR;
    }

    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.maxLength;
    this.currentLength++;
  }

  pushBack(item) {
    if (this.currentLength === this.maxLength) {
      return ERROR;
    }

    this.head = (this.head - 1 + this.maxLength) % this.maxLength;
    this.items[this.head] = item;
    this.currentLength++;
  }

  popFront() {
    if (!this.currentLength) {
      return ERROR;
    }

    const tail = (this.tail - 1 + this.maxLength) % this.maxLength;
    const poped = this.items[tail];
    this.items[tail] = null;
    this.tail = tail;
    this.currentLength--;

    return poped;
  }

  popBack() {
    if (!this.currentLength) {
      return ERROR;
    }

    const head = (this.head + 1) % this.maxLength;
    const poped = this.items[this.head];
    this.items[this.head] = null;
    this.head = head;
    this.currentLength--;

    return poped;
  }

  push_front(item) {
    return this.pushFront(item);
  }

  push_back(item) {
    return this.pushBack(item);
  }

  pop_front() {
    return this.popFront();
  }

  pop_back() {
    return this.popBack();
  }
}

const runOperations = ({ operationLength, operations, maxDecLength }) => {
  const dec = new Dec(maxDecLength);

  for (let i = 0; i < operationLength; i++) {
    const { operation, argument } = operations[i];
    const res = dec[operation](argument);

    if (res) {
      output(res);
    }
  }
};

const main = () => {
  runOperations({ operationLength, operations, maxDecLength });
};

const handleOperationLine = (line) => {
  const [operation, argument] = line.split(' ');

  return { operation, argument };
};

const output = (value) => {
  process.stdout.write(value + '\n');
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    operationLength = Number(line);
  } else if (lineNumber === 1) {
    maxDecLength = Number(line);
  } else if (line) {
    operations.push(handleOperationLine(line));
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
