var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

const ANSWERS = {
  IS_VALID: "True",
  IS_NOT_VALID: "False",
};

let line_number = 0;
let inputBracketsArray = [];

function output(output) {
  process.stdout.write(output);
}

function prepareBracketsArray(backetsLine) {
  inputBracketsArray = backetsLine.split("");
}

function isBracketPairValid(pair) {
  const VALID_PAIRS = ["[]", "{}", "()"];

  return VALID_PAIRS.includes(pair);
}

function checkBracketsSeq(brackets) {
  const OPENED_BRACKETS = ["[", "{", "("];

  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    if (OPENED_BRACKETS.includes(bracket)) {
      stack.push(bracket);
      continue;
    }

    // Create pair from open bracket and closed
    // next check the pair
    const openedBracket = stack.pop();
    const checkedPair = openedBracket + bracket;
    const isValid = isBracketPairValid(checkedPair);

    if (!isValid) {
      return ANSWERS.IS_NOT_VALID;
    }
  }
  return stack.length ? ANSWERS.IS_NOT_VALID : ANSWERS.IS_VALID;
}

function main() {
  const result = checkBracketsSeq(inputBracketsArray);
  output(result);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    prepareBracketsArray(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  main();
});
