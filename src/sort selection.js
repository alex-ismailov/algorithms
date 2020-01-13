const selectionSort = (arr) => {
  const len = arr.length;
  const locArr = arr;
  for (let i = 0; i < len; i += 1) { // проходимся по каждому элемента массива
    let indexMinElem = i; // в качестве текущего мин. значения берем текущий элемент с индексом i
    for (let j = i + 1; j < len; j += 1) { // далее обходим оставшиеся элементы после текущего
      if (locArr[j] < locArr[indexMinElem]) { // если текущий больше минимального элемнта,
        indexMinElem = j; // то запоминаем его индекс
      }
    }
    if (indexMinElem !== i) { // проверяем наличие нового мин. элемента, если такой имеется, то меняем их местами
      const tmp = locArr[indexMinElem];
      locArr[indexMinElem] = locArr[i];
      locArr[i] = tmp;
    }
  }
  return locArr;
};

// testing
const arr = [9, 3, 8, 5, 6, 1, 4, 2, 7];
console.log(selectionSort(arr));
