const swap = (arr, left, right) => {
  const tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
};

const selectionSort = (arr) => {
  const len = arr.length;
  const locArr = arr;
  for (let i = 0; i < len; i += 1) { // проходимся по каждому элемента массива
    let minElIndex = i; // в качестве текущего мин. значения берем текущий элемент с индексом i
    for (let j = i + 1; j < len; j += 1) { // далее обходим оставшиеся элементы после текущего
      if (locArr[j] < locArr[minElIndex]) { // если текущий больше минимального элемнта,
        minElIndex = j; // то запоминаем его индекс
      }
    }
    if (minElIndex !== i) { // проверяем наличие нового мин. элемента, если такой имеется, то меняем их местами
      swap(arr, i, minElIndex);
    }
  }
  return locArr;
};

// testing
// const arr = [9, 3, 8, 5, 6, 1, 4, 2, 7];
// console.log(selectionSort(arr));
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
