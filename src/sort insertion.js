const insertionSort = (arr) => {
  const len = arr.length;
  const locArr = arr;
  for (let i = 0; i < len; i += 1) { // проходимся по каждому элемента массива
    const currElem = locArr[i]; // значение текущего элемента
    let prevIndex = i - 1; // значение предыдущего элемента
    while (prevIndex >= 0 && locArr[prevIndex] > currElem) { // пока индекс предыдущего элемента >= 0 и предыдущий больше текущего
      locArr[prevIndex + 1] = locArr[prevIndex]; // заменяем текущий не предыдущий
      prevIndex -= 1; // декрементируем предыдущий индекс
    }
    locArr[prevIndex + 1] = currElem; // меняем предыдущий элемент на текущий
  }
  return locArr;
};

// testing
const arr = [9, 3, 8, 5, 6, 1, 4, 2, 7];
console.log(insertionSort(arr));
