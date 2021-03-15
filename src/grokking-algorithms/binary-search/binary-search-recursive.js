/**
 * Binary search (using while cicle)
 * @param {Number} item what are we looking for
 * @param {Array} arr among which we are looking for
 * @param {Number} begin starting index
 * @param {Number} end end index
 * @return {Number} index of desired item in array
*/

export default (coll, item) => {
  const iterate = (coll, begin, end) => {
    if (begin > end) {
      return null;
    }
  
    const middle = Math.floor((begin + end) / 2);
    if (coll[middle] === item) {
      return coll[middle];
    }
    if (coll[middle] > item) {
      return iterate(coll, begin, middle - 1);
    }
  
    return iterate(coll, middle + 1, end);
  };

  return iterate(coll, 0, coll.length - 1);
};
