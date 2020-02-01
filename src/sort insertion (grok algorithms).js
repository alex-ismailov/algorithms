const findMinElemIndex = (arr) => {
  const minElem = arr
    .reduce((acc, curr) => (curr < acc ? curr : acc), arr[0]);

  return arr.indexOf(minElem);
};


const insertionSort = (arr) => {
  const iter = (arr, newArr) => {
    if (arr.length < 2) {
      newArr.push(arr.splice(0, 1));
      return newArr;
    }
    const minElemIndex = findMinElemIndex(arr);
    newArr.push(arr.splice(minElemIndex, 1));
    return iter(arr, newArr);
  };

  return iter(arr, []).flat();
};


/* testing */
const arr = [];
console.log(insertionSort(arr));
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(insertionSort(arr1));
const arr2 = [9, 6, 1, 7, 2, 3, 5, 8, 4];
console.log(insertionSort(arr2));
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertionSort(arr3));

// const test1 = [9, 6, 1, 2, 3];
// const test2 = [9, 6, 3, 2, 1];
// const test3 = [1, 6, 9, 2, 3];
// console.log(findMinElemIndex(test1));
// console.log(findMinElemIndex(test2));
// console.log(findMinElemIndex(test3));
