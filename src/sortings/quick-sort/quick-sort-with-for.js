const sortQuickWithFor = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    }
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    }
  }

  return [...sortQuickWithFor(less), pivot, ...sortQuickWithFor(greater)];
};

export default sortQuickWithFor;
