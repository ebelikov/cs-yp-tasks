let arrays = [
  [9, 3, 4, 1, 3, 6, 4, 5, 134, 2, 1, 15, 5342, 21, 3, 53233],
  [10, 23, 4, 1, 43, 67, 8, 3, 14, 63, 1, 2, 4, 6, 13, 32, 66],
];

const merge = (arr, lf, mid, rg) => {
  let res = [];
  const middle = mid;

  while (lf < middle && mid < rg) {
    if (arr[lf] < arr[rg]) {
      res.push(arr[lf]);
      lf++;
    } else {
      res.push(arr[mid]);
      mid++;
    }
  }

  while (lf < middle) {
    res.push(arr[lf]);
    lf++;
  }

  while (mid < rg) {
    res.push(arr[mid]);
    mid++;
  }

  return res;
};

const mergeSort = (arr, left, right) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid, right);

  const sorted = merge(arr, left, mid, right);
};

arrays = arrays.map((arr) => {
  const sorted = mergeSort(arr);
  console.log(sorted);
  return sorted;
});

// const mergeSort = (arr) => {
// 	if (arr.length <= 1) {
// 	  return arr;
// 	}

// 	const mid = Math.floor(arr.length / 2);
// 	const left = mergeSort(arr.slice(0, mid));
// 	const right = mergeSort(arr.slice(mid, arr.length));

// 	let res = [];

// 	let lf = 0;
// 	let rg = 0;

// 	while (lf < left.length && rg < right.length) {
// 	  if (left[lf] < right[rg]) {
// 		res.push(left[lf]);
// 		lf++;
// 	  } else {
// 		res.push(right[rg]);
// 		rg++;
// 	  }
// 	}

// 	while (lf < left.length) {
// 	  res.push(left[lf]);
// 	  lf++;
// 	}

// 	while (rg < right.length) {
// 	  res.push(right[rg]);
// 	  rg++;
// 	}

// 	return res;
//   };
