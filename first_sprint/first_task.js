// 68540200
var readline = require("readline");
var io_interface = readline.createInterface({ input: process.stdin });

let line_number = 0;
let length = null;
let house_map_list = [];

function check_distance_by_direct(list, length) {
  const distance_list = [];
  let zero_index = null;

  for (let i = 0; i < length; i++) {
    if (list[i] === 0) {
      zero_index = i;
      distance_list.push(0);
    } else if (zero_index === null) {
      distance_list.push(Infinity);
    } else {
      distance_list.push(i - zero_index);
    }
  }

  return distance_list;
}

function check_distance_by_reverse(list, length) {
  const distance_list = [];
  let zero_index = null;

  for (let i = length - 1; i >= 0; i--) {
    if (list[i] === 0) {
      zero_index = i;
      distance_list.push(0);
    } else if (zero_index === null) {
      distance_list.push(Infinity);
    } else {
      distance_list.push(zero_index - i);
    }
  }

  return distance_list;
}

function main(list, length) {
  length = length || list.length;

  const distance_list_by_direct = check_distance_by_direct(list, length);
  const distance_list_by_reverse = check_distance_by_reverse(list, length);
  const result = [];

  for (let i = 0; i < length; i++) {
    const current_distance = Math.min(
      distance_list_by_direct[i],
      distance_list_by_reverse[length - i - 1]
    )

    result.push(current_distance)
  }

  return result.join(' ');
}

const prepare_number_array = (str) => {
  return str
    .trim()
    .split(' ')
    .map(num => Number(num))
}

function output(output) {
  process.stdout.write(output);
}

io_interface.on("line", function (line) {
  if (line_number === 0) {
    length = Number(line);
  } else if (line_number === 1) {
    house_map_list = prepare_number_array(line);
  }

  line_number++;
});

io_interface.on("close", function () {
  const result = main(house_map_list, length);
  output(result);
});
