/**
 * ID - 69780849
 * -- ПРИНЦИП РАБОТЫ -
 * Записываем операции из входного файла
 * Создаем инстанс хэш таблицы
 * На основе инстанса выполняем необходимые операции и записываем логи
 * Выводим логи
 *
 * Хэш таблица работает на основе массива.
 * Индекс определяем через остаток деления от длины таблицы
 * Для обработки коллизий используется "Метод цепочек"
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * В основе реализации хэш таблицы взята теория из курса.
 * Данные хранятся в массиве. Индекс определяется как i = h(key) % M, где
 * h - хэш функция
 * key - ключ по которому обращаются к таблице
 * M - длина таблицы
 *
 * Так как все ключи являются числами - h(key) = key, этап хэширования можно опустить.
 * Коллизии решаются с помощью связанного списка.
 *
 * Длина таблица выбрана таким образом, чтобы сложность операций была ~ О(1)
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * В худшем случае, если все операции связаны с одной корзиной, то связный список карзины
 * с каждой операцией будет увеличиваться на 1. Тогда O(n * n/2) ~ O(n**2)
 *
 * При условиях, когда макс размер ключа 10**9,
 * а в таблице одновременно будет 10**5 и длина таблице будет 100057,
 * то в связном списке будет находятся в среднем по 1 элементу
 * соответственно операции по добавлению, удалению и получению будут равны ~ O(1);
 *
 * Чтение файла, проход по операциям, вывод логов - по n операций.
 * O(n + n*1 + n) ~ O(n);
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * При данных условиях, длину связонного списка в данном случае можно считать константами ~ O(1);
 * Память для заведения связанного списка m
 * Тогда в худшем случае O(M * m * 1) ~ O(M * m)
 *
 * -- PS --
 * 28.08 - дедлайн =)
 */

const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });

const TABLE_SIZE = 100057;
const NONE = 'None';

let lineNumber = 0;
let operationsLength = null;

const operations = [];

const output = (value) => {
  process.stdout.write(value);
};

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (this.head.data.key === data.key) {
      this.head.data = data;
      return;
    }

    let current = this.head;

    while (current.next && current.next.data.key !== data.key) {
      current = current.next;
    }

    if (!current.next) {
      current.next = new Node(data);
    } else {
      current.next.data = data;
    }
  }

  getByKey(key) {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current && current.data.key !== key) {
      current = current.next;
    }

    return current;
  }

  remove(key) {
    if (!this.head) {
      return null;
    }

    if (this.head.data.key === key) {
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }

    let current = this.head;

    while (current.next && current.next.data.key !== key) {
      current = current.next;
    }

    if (current.next) {
      const removedNode = current.next;
      current.next = current.next.next;
      return removedNode;
    }

    return null;
  }
}

const HashTable = class {
  constructor(tableSize) {
    this.size = tableSize;
    this.arr = Array(this.size).fill(null);
  }

  bucket(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this.bucket(key);

    if (!this.arr[index]) {
      this.arr[index] = new LinkedList();
    }

    this.arr[index].append({ key, value });
  }

  get(key) {
    const index = this.bucket(key);

    const list = this.arr[index];

    if (!list) {
      return NONE;
    }

    const node = list.getByKey(key);

    return node === null ? NONE : node.data.value;
  }

  delete(key) {
    const index = this.bucket(key);
    const list = this.arr[index];

    if (!list) {
      return NONE;
    }

    const node = list.remove(key);

    return node === null ? NONE : node.data.value;
  }
};

const runOperations = (operations) => {
  const map = new HashTable(TABLE_SIZE);
  const logs = []; // Логи выполненных операций

  operations.forEach(({ command, key, value }) => {
    const log = map[command](key, value);

    if (log !== undefined) {
      logs.push(log);
    }
  });

  return logs;
};

const main = () => {
  const logs = runOperations(operations);
  output(logs.join('\n'));
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    operationsLength = Number(line);
  } else if (lineNumber <= operationsLength) {
    const [command, key, value] = line.trim().split(' ');

    const operation = {
      command,
      key: Number(key),
    };

    if (value) {
      operation.value = value;
    }

    operations.push(operation);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
