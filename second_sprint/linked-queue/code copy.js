var readline = require('readline');
var io_interface = readline.createInterface({ input: process.stdin });

function output(output) {
  process.stdout.write(output + '\n');
}

let lineNumber = 0;

function main() {
  //code here
}

io_interface.on('line', function (line) {
  if (lineNumber === 0) {
    //...
  }

  lineNumber++;
});

io_interface.on('close', function () {
  main();
});
