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
let lineNumber = 0;
const output = (value) => {
  process.stdout.write(value);
};
let str = null;

// const findMaxUniqueStr = (str) => {
//   const set = new Set();
//   let maxDeep = 0;
//   let currentDeep = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (set.has(str[i])) {
//       maxDeep = Math.max(maxDeep, currentDeep);
//       set.clear();
//       currentDeep = 0;
//     } else {
//       currentDeep++;
//       set.add(str[i]);
//     }
//   }

//   maxDeep = Math.max(maxDeep, currentDeep);
//   currentDeep = 0;
//   set.clear();

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (set.has(str[i])) {
//       maxDeep = Math.max(maxDeep, currentDeep);
//       set.clear();
//       currentDeep = 0;
//     } else {
//       currentDeep++;
//       set.add(str[i]);
//     }
//   }

//   maxDeep = Math.max(maxDeep, currentDeep);

//   return maxDeep;
// };

const findMaxUniqueStr = (str) => {
  const map = new Map();
  let res = 0;
  let prev = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      prev = Math.max(prev, map.get(str[i]));
    }
    map.set(str[i], i + 1);
    res = Math.max(res, i + 1 - prev);
  }

  return res;
};

const main = () => {
  const res = findMaxUniqueStr(str);
  output(res.toString());
};

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    str = line.trim().toLocaleLowerCase();
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
