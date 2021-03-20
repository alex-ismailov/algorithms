const sortQuick = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const less = rest.filter((item) => item <= pivot);
  const greater = rest.filter((item) => item > pivot);

  return [...sortQuick(less), pivot, ...sortQuick(greater)];
};

export default sortQuick;
