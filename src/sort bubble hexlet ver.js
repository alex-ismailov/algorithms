const bubbleSort = (arr) => {
  let size = arr.length - 1; // нет смысла доходить до последнего элемента
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < size; i += 1) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
    size -= 1;
  } while (swapped);

  return arr;
};

// testing
console.log(bubbleSort([3, 2, 10, -2, 0]));
