var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;
let inputNumber = null;

// // recursive method
// function findFibNum(n) {
//   return n <= 1 ? 1 : findFibNum(n - 1) + findFibNum(n - 2);
// }

// loop method
function findFibNum(n) {
  const res = 1;

  let a = 1;
  let b = 1;

  if (n <= 1) {
    return res;
  }

  while (n > 2) {
    let temp = b;
    b = a + b;
    a = temp;

    n--;
  }

  return a + b;
}

// loop BigInt method
// function findFibNum(n) {
// 	let a = BigInt(1);
// 	let b = BigInt(1);

// 	if (n <= 1) {
// 	  return res;
// 	}

// 	while (n > 2) {
// 	  let temp = b;
// 	  b = a + b;
// 	  a = temp;

// 	  n--;
// 	}

// 	return (a + b).toString();
//   }

function main() {
  const result = findFibNum(inputNumber);
  output(result.toString());
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    inputNumber = Number(line);
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
