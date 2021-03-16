/* eslint no-param-reassign: 0 */

export default (coll) => coll.map((value, i) => {
  const indexOfMin = coll.slice(i).reduce((acc, iValue, ii, iArr) => {
    if (iArr[ii] < coll[acc]) {
      return ii + i;
    }
    return acc;
  }, i);

  const res = coll[indexOfMin];
  coll[indexOfMin] = coll[i];

  return res;
});
