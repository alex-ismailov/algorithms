/* eslint no-param-reassign: 0 */

const swap = (coll, leftIndex, rightIndex) => {
  const tmp = coll[leftIndex];
  coll[leftIndex] = coll[rightIndex];
  coll[rightIndex] = tmp;
};

export default (coll) => {
  coll.forEach((value, i) => {
    coll.slice(i).forEach((iValue, ii, iArr) => {
      if (iArr[ii] < coll[i]) {
        swap(coll, i, i + ii);
      }
    });
  });
  return coll;
};
