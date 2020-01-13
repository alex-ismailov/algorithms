const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

// testing
const arr = [9, 3, 8, 5, 6, 1, 4, 2, 7];
console.log(bubbleSort(arr));