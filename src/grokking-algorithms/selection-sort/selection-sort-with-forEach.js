/* eslint no-param-reassign: 0 */

const swap = (coll, leftIndex, rightIndex) => {
  const tmp = coll[leftIndex];
  coll[leftIndex] = coll[rightIndex];
  coll[rightIndex] = tmp;
};

// export default (coll) => {
//   coll.forEach((value, i) => {
//     let indexOfMin = i;
//     coll.slice(i).forEach((iValue, ii, iArr) => {
//       if (iArr[ii] < coll[indexOfMin]) {
//         indexOfMin = ii + i;
//       }
//     })
//     swap(coll, i, indexOfMin)
//   });

//   return coll;
// };

export default (coll) => {
  coll.forEach((value, i) => {
    const indexOfMin = coll.slice(i).reduce((acc, iValue, ii, iArr) => {
      if (iArr[ii] < coll[acc]) {
        return ii + i;
      }
      return acc;
    }, i);
    swap(coll, i, indexOfMin);
  });

  return coll;
};
