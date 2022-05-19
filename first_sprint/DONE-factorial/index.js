var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let number = null;

function main(num) {
  let result = []; 

  const getFactorial = () => {
    const squaredN = Math.ceil(num ** (1/2));

    for(let i = 2; i <= squaredN; i++) {
      if(!(num % i)) {
        result.push(i);
        num = num / i;
        break;
      }

      if(i === squaredN) {
        result.push(num)
        num = 1;
      }
    }
  }

  while(num !== 1) {
    getFactorial();
  }

  return result.join(' ');
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    number = Number(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  const result = main(num);
  output(result);
});

module.exports = {
  main,
};
