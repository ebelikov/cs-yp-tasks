function merge_sort(arr, left = 0, right = arr.length) {
  if (right - left <= 1) {
    return;
  }

  const mid = Math.floor((right + left) / 2);

  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);

  const res = merge(arr, left, mid, right);

  for (let i = left; i < right; i++) {
    arr[i] = res[i - left];
  }
}

function merge(arr, left, mid, right) {
  const res = [];
  let l = left;
  let m = mid;

  while (l < mid && m < right) {
    if (arr[l] < arr[m]) {
      res.push(arr[l]);
      l++;
    } else {
      res.push(arr[m]);
      m++;
    }
  }

  while (l < mid) {
    res.push(arr[l]);
    l++;
  }

  while (m < right) {
    res.push(arr[m]);
    m++;
  }

  return res;
}

// function test() {
//   var a = [1, 4, 9, 2, 10, 11];
//   var b = merge(a, 0, 3, 6);
//   console.log(b);
//   var expected = [1, 2, 4, 9, 10, 11];

//   var c = [3, 2, 1];
//   merge_sort(c, 0, 3);
//   console.log(c);
//   //   var c = [1, 4, 2, 10, 1, 2];
//   //   merge_sort(c, 0, 6);
//   //   console.log(c);
//   //   expected = [1, 1, 2, 2, 4, 10];
// }

// test();
