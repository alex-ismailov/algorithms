/* eslint no-param-reassign: 0 */

const swap = (coll, leftIndex, rightIndex) => {
  const tmp = coll[leftIndex];
  coll[leftIndex] = coll[rightIndex];
  coll[rightIndex] = tmp;
};

export default (coll) => {
  for (let i = 0; i < coll.length; i += 1) {
    let minIndex = i;
    for (let ii = i; ii < coll.length; ii += 1) {
      if (coll[ii] < coll[minIndex]) {
        minIndex = ii;
      }
    }
    swap(coll, i, minIndex);
  }

  return coll;
};
