var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;

function main() {
  //code here
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});

module.exports = {
  main,
  prepareNumberArray,
};
