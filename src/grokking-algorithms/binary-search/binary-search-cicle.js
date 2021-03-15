/**
 * Binary search (using while cicle)
 * @param {Number} items what are we looking for
 * @param {Array} coll among which we are looking for
 * @param {Number} begin starting index
 * @param {Number} end end index
 * @return {Number} index of desired item in array
*/

// const binarySearch = (item, arr, begin = 0, end = arr.length - 1) => {
//   while (begin <= end) {
//     const mid = Math.floor((begin + end) / 2);
//     const guess = arr[mid];
//     if (guess === item) {
//       return mid;
//     }
//     if (guess > item) {
//       end = mid - 1;
//     } else {
//       begin = mid + 1;
//     }
//   }
//   return null;
// };

// /* tetsing */
// const arr = [1, 3, 5, 7, 9, 11, 13, 14, 16, 18, 20];
// console.log(binarySearch(103, arr));
// console.log(binarySearch(3, arr));
// console.log(binarySearch(20, arr));
// console.log(binarySearch(21, arr));
