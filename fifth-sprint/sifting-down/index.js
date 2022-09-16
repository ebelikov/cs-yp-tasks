function siftDown(heap, index) {
  const size = heap.length - 1;

  const left = index * 2;
  const right = index * 2 + 1;

  if (size < left) {
    return index;
  }

  const largestIndex = size >= right && heap[right] > heap[left] ? right : left;

  if (heap[largestIndex] > heap[index]) {
    let temp = heap[largestIndex];
    heap[largestIndex] = heap[index];
    heap[index] = temp;
    return siftDown(heap, largestIndex);
  }

  return index;
}

function test() {
  var sample = [-1, 12, 1, 8, 3, 4, 7];
  console.log(siftDown(sample, 2));
  console.log(sample);
}

test();
