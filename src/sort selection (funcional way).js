const findMinElIndex = (arr, begin, minElIndex) => {
  const minElem = arr
    .reduce((acc, curr, index) => {
      if (index < begin) {
        return acc;
      }
      return curr < acc ? curr : acc;
    }, arr[minElIndex]);

  return arr.indexOf(minElem);
};

// const findMinElIndex = (arr, begin, minElIndex) => {
//   for (let i = begin; i < arr.length; i++) {
//     if (arr[i] < arr[minElIndex]) {
//       minElIndex = i;
//     }
//   }
//   return minElIndex;
// };

const swap = (arr, left, right) => {
  const tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
};

const selectionSort = (arr, begin = 0, end = arr.length - 1) => {
  if (end < 2) {
    return arr;
  }
  const iter = (begin, minElIndex = begin) => {
    if (begin === end) {
      return arr;
    }
    const newMinElIndex = findMinElIndex(arr, begin + 1, minElIndex);
    if (arr[minElIndex] !== arr[newMinElIndex]) {
      swap(arr, minElIndex, newMinElIndex);
      return iter(begin + 1);
    }

    return iter(begin + 1);
  };

  return iter(begin);
};

/* testing */
const arr = [];
console.log(selectionSort(arr));
const arr1 = [1];
console.log(selectionSort(arr1));
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(selectionSort(arr2));
const arr3 = [9, 6, 1, 7, 2, 3, 5, 8, 4];
console.log(selectionSort(arr3));
const arr4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(selectionSort(arr4));

// const test1 = [9, 6, 1, 2, 3];
// const test2 = [9, 6, 3, 2, 1];
// const test3 = [1, 6, 9, 2, 3];
// console.log(findMinElemIndex(test1));
// console.log(findMinElemIndex(test2));
// console.log(findMinElemIndex(test3));
