const binarySearch = (arr, k) => {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] > k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

// const binarySearch = (arr, k) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((right - left) / 2) + left;

//     if (arr[mid] === k) {
//       return mid;
//     } else if (arr[mid] > k) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return -1;
// };
module.exports = {
  binarySearch,
};
