/**
 * https://contest.yandex.ru/contest/24810/run-report/70429318/
 *
 * -- ПРИНЦИП РАБОТЫ -
 * Сортировка массива через кучу.
 * 1. Заполняем невозрастающую кучу, просеивая вверх вставляемые значения
 * 2. Разбираем кучу, и при этом собираем отсортированный массив
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * https://habr.com/ru/company/otus/blog/460087/
 * https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * заполняем heap - n * log(h)
 * разбираем heap - n * log(h)
 * O(n * log(h))
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * O(n) массив для кучи
 */

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

const participants = [];
let participantsLength = null;

let lineNumber = 0;

const output = (value) => {
  process.stdout.write(value);
};

/**
 * Функция сравнения.
 * Если вернет -1, значит b меньше a.
 * Если вернет  1, значит а меньше b.
 * Если вернет  0, значит а === b.
 */
const compare = (a, b) => {
  if (!a || !b) {
    return 0;
  }

  if (a.points !== b.points) {
    return b.points - a.points;
  }

  if (a.penalty !== b.penalty) {
    return a.penalty - b.penalty;
  }

  return a.login.localeCompare(b.login);
};

class Heap {
  constructor(compareFn = compare) {
    this.arr = [-1];
    this.size = 0;
    this.compare = compareFn;
  }

  siftUp(index) {
    if (index === 1) {
      return;
    }

    const parentIndex = Math.floor(index / 2);

    // if (this.arr[index] <= this.arr[parentIndex])
    if (this.compare(this.arr[index], this.arr[parentIndex]) >= 0) {
      return;
    }

    [this.arr[parentIndex], this.arr[index]] = [
      this.arr[index],
      this.arr[parentIndex],
    ];

    this.siftUp(parentIndex);
  }

  siftDown(index = 1) {
    const left = index * 2;
    const right = index * 2 + 1;

    if (this.size < left) {
      return;
    }

    const largestIndex =
      // if (this.size >= right && this.arr[right] > this.arr[left])
      this.size >= right && this.compare(this.arr[right], this.arr[left]) < 0
        ? right
        : left;

    // if(this.arr[index] < this.arr[largestIndex])
    if (this.compare(this.arr[largestIndex], this.arr[index]) < 0) {
      let temp = this.arr[largestIndex];
      this.arr[largestIndex] = this.arr[index];
      this.arr[index] = temp;
      this.siftDown(largestIndex);
    }
  }

  add(key) {
    this.arr.push(key);
    this.size++;
    this.siftUp(this.size);
  }

  pop() {
    if (!this.size) {
      return null;
    }

    const poped = this.arr[1];
    this.arr[1] = this.arr.pop();
    this.size--;

    this.siftDown(1);

    return poped;
  }
}

const sortParticipants = (arr) => {
  const heap = new Heap(compare);

  participants.forEach((item) => {
    heap.add(item);
  });

  participants.forEach((item, index) => {
    // Мутируем исходный массив, так Array.prototype.sort мутирует исходный массив
    // к тому же, не создавая новый массив - экономим память в O(n)
    arr[index] = heap.pop();
  });

  return arr;
};

const main = () => {
  const res = sortParticipants(participants)
    .map(({ login }) => login)
    .join("\n");

  output(res);
};

class Participant {
  constructor(str) {
    const [login, points, penalty] = str.trim().split(" ");

    this.login = login;
    this.points = Number(points);
    this.penalty = Number(penalty);
  }
}

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    participantsLength = Number(line);
  } else if (lineNumber <= participantsLength) {
    participants.push(new Participant(line));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
