/**
 * ID задачи в контексте: 68741312
 *
 * -- ПРИНЦИП РАБОТЫ -
 * Для работы с польской нотацией, необходим Stack.
 * Можно было обойти и без класса stack, а обычным массивом в JS
 *
 * Итерируя выражение, которое поступает на вход нужно пользоваться логикой:
 * 1. Обработка входного символа:
 * 	1.1 Если на вход подан операнд, он помещается на вершину стека.
 * 	1.1 Если на вход подан знак операции, то эта операция выполняется над требуемым количеством значений, взятых из стека в порядке добавления. Результат выполненной операции помещается на вершину стека.
 * 2. Если входной набор символов обработан не полностью, перейти к шагу 1.
 * 3. После полной обработки входного набора символов результат вычисления выражения находится в вершине стека. Если в стеке осталось несколько чисел, то надо вывести только верхний элемент.
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * Функция calculateExpression работает по алгоритму описанному выше.
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Алгоритм работает по линейной зависимости О(n)
 * где n - expressionItems - количество операндов и операций во входном выражении
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Вспомогательный объек, который хранит методы операций. Статический размер. O(const)
 * Вспомогательный стек, который в самом плохом случае может заполнится на всю длину n
 * где n - expressionItems - количество операндов и операций во входном выражении. Соответственно О(n).
 * O(const) + O(n) ~ O(n).
 *
 */

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

const ERROR = "error";

let lineNumber = 0;
let expressionItems = null;

const output = (value) => {
  process.stdout.write(value);
};

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(item) {
    this.items.push(item);
    this.length++;
  }

  pop() {
    if (!this.length) {
      return ERROR;
    }

    const poped = this.items.pop();
    this.length--;

    return poped;
  }
}

const operatorMethods = {
  "*"(a, b) {
    return a * b;
  },
  /**
   * Так нужно математическое целочисленное деление,
   * необходимо округлять значение деления до меньшего с помощью Math.floor
   */
  "/"(a, b) {
    return Math.floor(a / b);
  },
  "-"(a, b) {
    return a - b;
  },
  "+"(a, b) {
    return a + b;
  },
};

const calculateExpression = (n) => {
  const stack = new Stack();

  for (let i = 0; i < n.length; i++) {
    const isOperator = Boolean(operatorMethods[n[i]]);

    if (!isOperator) {
      stack.push(Number(n[i]));
      continue;
    }

    const b = stack.pop();
    const a = stack.pop();

    const res = operatorMethods[n[i]](a, b);

    stack.push(res);
  }

  const result = stack.pop();

  return result;
};

const main = () => {
  const result = calculateExpression(expressionItems);
  output(result.toString());
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    expressionItems = line.trim().split(" ");
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
