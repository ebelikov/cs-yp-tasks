/**
 * https://contest.yandex.ru/contest/23815/problems/B/
 * 69667474
 * -- ПРИНЦИП РАБОТЫ -
 * Разделяй и влавствуй
 * Разбиение осуществляется с использованием следующей стратегии.
 * Прежде всего, в качестве разделяющего элемента произвольно выбирается элемент a[(l+r)/2].
 *
 * Далее начинается просмотр с левого конца массива, который продолжается до тех пор, пока не будет найден элемент,
 * превосходящий по значению разделяющий элемент, затем выполняется просмотр,
 * начиная с правого конца массива, который продолжается до тех пор, пока не отыскивается элемент,
 * который по значению меньше разделяющего.
 *
 * Оба элемента, на которых просмотр был прерван, очевидно, находятся не на своих местах в разделенном массиве,
 * и потому они меняются местами.
 * Так продолжаем дальше, пока не убедимся в том, что слева от левого указателя не осталось ни одного элемента,
 * который был бы больше по значению разделяющего, и ни одного элемента справа от правого указателя,
 * которые были бы меньше по значению разделяющего элемента.
 *
 * 1) Заводим левый и правый указатели
 * 2) Выбираем опорный элемент
 * 3) Сортируем массив по логике описанной выше
 * 4) Если левый и правый указатели встретились - крайний случай, выходим из рекурсии
 * 5) Иначе повторяем алгоритм
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * https://neerc.ifmo.ru/wiki/index.php?title=%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * В худшем случае O(n^2)
 * В среднем случае О(n * log(n))
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * В данном алгоритме используется рекурсия, соответственно мы используем стек вызовов
 * Пространственной сложностью будет являтся глубина стека
 * В худшем случае О(n-1)
 * В среднем случае О(log(n))
 */

const readline = require('readline');
const io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;
let participants = [];
let n = null;

const output = (arr) => {
  arr.forEach(({ name }) => {
    process.stdout.write(name + '\n');
  });
};

/**
 * Функция сравнения.
 * Если вернет -1, значит b меньше a.
 * Если вернет  1, значит а меньше b.
 * Если вернет  0, значит а === b.
 */
const compareFunc = (a, b) => {
  if (!a || !b) {
    return 0;
  }

  if (a.solvedTasks !== b.solvedTasks) {
    return b.solvedTasks - a.solvedTasks;
  }

  if (a.fine !== b.fine) {
    return a.fine - b.fine;
  }

  return a.name.localeCompare(b.name);
};

const getPivot = (l, r) => {
  const pivot = Math.floor((l + r) / 2);
  return pivot;
};

const swap = (arr, l, r) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};

const partition = (arr, l, r, compareFunc) => {
  const pivot = getPivot(l, r);
  const v = arr[pivot];

  let i = l;
  let j = r;

  while (i <= j) {
    while (compareFunc(arr[i], v) < 0) {
      i++;
    }

    while (compareFunc(v, arr[j]) < 0) {
      j--;
    }

    if (i >= j) {
      break;
    }

    swap(arr, i++, j--);
  }

  return j;
};

const quickSort = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) {
    return;
  }

  const mid = partition(arr, l, r, compareFunc);

  quickSort(arr, l, mid);
  quickSort(arr, mid + 1, r);
};

const main = () => {
  quickSort(participants);
  output(participants);
};

const parseLine = (line) => {
  const arrLine = line.trim().split(' ');

  const obj = {
    name: arrLine[0],
    solvedTasks: Number(arrLine[1]),
    fine: Number(arrLine[2]),
  };

  return obj;
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    n = Number(line);
  } else if (lineNumber <= n) {
    participants.push(parseLine(line));
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
