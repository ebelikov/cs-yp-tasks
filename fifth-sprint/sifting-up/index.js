function siftUp(heap, index) {
  if (index === 1) {
    return 1;
  }

  const parentIndex = Math.floor(index / 2);

  if (heap[parentIndex] >= heap[index]) {
  
	return index;
  }

//   let temp = heap[parentIndex];
  [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
//   heap[index] = temp

  return siftUp(heap, parentIndex);
  
}

// function test() {
//   var sample = [-1, 12, 6, 8, 3, 15, 7];
//   console.assert(siftUp(sample, 5) === 1);
// }

// test();
