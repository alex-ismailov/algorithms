// Линейно итеративный процесс

const sumIter = (acc, arr, count) => {
  if (count === 0) {
    return acc;
  }

  const [first, ...rest] = arr;

  return sumIter(acc + first, rest, count - 1);
};

export default (arr) => sumIter(0, arr, arr.length);
