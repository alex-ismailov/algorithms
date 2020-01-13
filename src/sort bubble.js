const bubbleSort = (arr) => {
  const len = arr.length;
  const locArr = arr;
  for (let i = 0; i < len; i += 1) { // проходимся по каждому элементу массива
    for (let j = 0; j < len - i; j += 1) { // сравниваем текущ. элемент с оставшимися, уменьшая при этом длину проходки с конца массива
      if (locArr[j] > locArr[j + 1]) { // если текущий элемент меньше следующего, то меняем их местами
        const tmp = locArr[j];
        locArr[j] = locArr[j + 1];
        locArr[j + 1] = tmp;
      }
    }
  }
  return locArr;
};

// testing
const arr = [9, 3, 8, 5, 6, 1, 4, 2, 7];
console.log(bubbleSort(arr));
