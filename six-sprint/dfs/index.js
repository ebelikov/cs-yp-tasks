`/**
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
let lineNumber = 0;
let edgesLength = null;
let root = null;
let verticesLength = null;

const edges = [];

const output = (value) => {
  process.stdout.write(value);
};

const main = () => {
  const list = Array(verticesLength + 1);
  list[0] = -1;

  for (const { from, to } of edges) {
    if (Array.isArray(list[from])) {
      list[from].push(to);
    } else {
      list[from] = [to];
    }

    if (Array.isArray(list[to])) {
      list[to].push(from);
    } else {
      list[to] = [from];
    }
  }

  for (let item of list) {
    if (Array.isArray(item)) {
      item.sort((a, b) => b - a);
    }
  }

  const colors = Array(verticesLength + 1).fill("white");
  colors[0] = -1;

  const res = [];

  const DFS = (index) => {
    const stack = [];
    stack.push(index);

    while (stack.length) {
      const poped = stack.pop();

      if (colors[poped] === "white") {
        colors[poped] = "gray";
        stack.push(poped);
        res.push(poped);

        if (typeof list[poped] === "object" && list[poped] !== null) {
          for (let v of list[poped]) {
            if (colors[v] === "white") {
              stack.push(v);
            }
          }
        }
      } else if (colors[poped] === "gray") {
        colors[poped] = "black";
      }
    }
  };

  DFS(root);

  output(res.join(" "));
};

const prepareInput = (line) => {
  return line
    .trim()
    .split(" ")
    .map((n) => Number(n));
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    const [v, e] = prepareInput(line);

    edgesLength = e;
    verticesLength = v;
  } else if (lineNumber <= edgesLength) {
    const [from, to] = prepareInput(line);

    edges.push({ from, to });
  } else if (lineNumber === edgesLength + 1) {
    root = Number(line);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
`
// /**
//  * -- ПРИНЦИП РАБОТЫ -
//  *
//  * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
//  *
//  * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
//  *
//  * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
//  *
//  */

// let lineNumber = 0;
// let edgesLength = null;
// let root = null;
// let verticesLength = null;

// const edges = [];

// const output = (value) => {
//   console.log(value);
// };

// const main = () => {
//   const list = Array(verticesLength + 1);
//   list[0] = -1;

//   for (const { from, to } of edges) {
//     list[from] = Array.isArray(list[from]) ? [...list[from], to] : [to];
//     list[to] = Array.isArray(list[to]) ? [...list[to], from] : [from];
//   }

//   for (let item of list) {
//     if (Array.isArray(item)) {
//       item.sort((a, b) => b - a);
//     }
//   }

//   const colors = Array(verticesLength + 1).fill("white");
//   colors[0] = -1;

//   const res = [];

//   const DFS = (index) => {
//     const stack = [];
//     stack.push(index);

//     while (stack.length) {
//       const poped = stack.pop();

//       if (colors[poped] === "white") {
//         colors[poped] = "gray";
//         stack.push(poped);
//         res.push(poped);

//         if (typeof list[poped] === "object" && list[poped] !== null) {
//           for (let v of list[poped]) {
//             if (colors[v] === "white") {
//               stack.push(v);
//             }
//           }
//         }
//       } else if (colors[poped] === "gray") {
//         colors[poped] = "black";
//       }
//     }
//   };

//   DFS(root);

//   output(res.join(" "));
// };

// const prepareInput = (line) => {
//   return line
//     .trim()
//     .split(" ")
//     .map((n) => Number(n));
// };

// function prepare() {
//   const input = ["6 7", "3 2", "5 4", "3 1", "1 4", "1 6", "1 2", "1 5", "1"];
//   for (let line of input) {
//     if (lineNumber === 0) {
//       const [v, e] = prepareInput(line);

//       edgesLength = e;
//       verticesLength = v;
//     } else if (lineNumber <= edgesLength) {
//       const [from, to] = prepareInput(line);

//       edges.push({ from, to });
//     } else if (lineNumber === edgesLength + 1) {
//       root = Number(line);
//     }

//     lineNumber++;
//   }
// }
// prepare();
// main();
