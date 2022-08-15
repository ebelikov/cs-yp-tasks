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

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });
const ERROR = "error";
let lineNumber = 0;

const keys = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

let inputKeys = null;

const output = (value) => {
  process.stdout.write(value + " ");
};

const calculateCombinations = (keyIndex, keysValues, remainder) => {
  const lettersByKey = keysValues[keyIndex];

  for (let i = 0; i < lettersByKey.length; i++) {
    const combination = remainder + lettersByKey[i];

    if (keyIndex + 1 >= keysValues.length) {
      output(combination);
    } else {
      calculateCombinations(keyIndex + 1, keysValues, combination);
    }
  }
};

const main = () => {
  const inputKeysValues = inputKeys.map((key) => {
    return keys[key];
  });

  calculateCombinations(0, inputKeysValues, "");
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    inputKeys = line
      .trim()
      .split("")
      .map((n) => Number(n));
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
