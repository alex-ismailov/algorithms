// Линейно рекурсивный процесс

const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const [first, ...rest] = arr;

  return first + sum(rest);
};

export default sum;
