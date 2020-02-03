const swap = (items, left, right) => { // данная функция меняет два элемента массива местами
  let tmp = items[left];
  items[left] = items[right];
  items[right] = tmp;
};

const partition = (items, left, right) => {
  /* в качестве опорного элемента (pivot) берем элемент из середины 
  (или первый или последний или случайный) */ 
  // const pivot = items[Math.floor((left + right) / 2)];
  // const pivot = items[left]; // good
  // const pivot = items[right - 1]; // good
  const pivot = items[Math.floor(Math.random() * (right - left) + left)]; // good
  let leftPointer = left;
  let rightPointer = right;
  while (leftPointer <= rightPointer) { // пока левый и правый указатели не пересекли друг друга
     while (items[leftPointer] < pivot) { // если items[leftPointer] < pivot, то это значит, что левый (меньший) элемент отсортирован относительно pivot
       leftPointer += 1; // и мы сдвигаем левый указатель направо к опорному элементу (к pivot(у)) в поисках нового не отсортированного элемента
     }
     while (items[rightPointer] > pivot) { // если items[rightPointer] < pivot, то это значит, что правый (больший) элемент отсортирован относительно pivot
       rightPointer -= 1; // сдвигаем правый указатель налево к опорному элементу (к pivot(у)), в поисках нового не отсортированного элемента
     }
     if (leftPointer <= rightPointer) { // если в результате сдвигов левый указатель меньше или равен правому, то это значит, что еще остались не отсортированные элементы
       swap(items, leftPointer, rightPointer); // переносим меньший элемент налево, а больший направо
       leftPointer += 1; // двигаем указатели в поисках новых не отсортированных элементов
       rightPointer -= 1;
     }
  }
  return leftPointer;
};

const quickSort = (items, left = 0, right = items.length - 1) => {
  let divIndex;
  if (items.length > 1) { // если длина массива больше 1, это значит, что вероятно есть еще не отсортированные элементы
    divIndex = partition(items, left, right); // получаем разделитель массива, относительно которого мы поделим массив на две части
    if (left < divIndex - 1) {
      quickSort(items, left, divIndex - 1); // рекурсивно запускаем quickSort для левой части
    }
    if (divIndex < right) {
      quickSort(items, divIndex, right); // рекурсивно запускаем quickSort для правой части
    }
  }
  return items;
};

// testing
const arr1 = [9, 6, 3, 4, 1, 2, 8, 7, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(quickSort(arr1));
console.log(quickSort(arr2));
console.log(quickSort(arr3));
