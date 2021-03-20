import sortQuickFilter from '../quick-sort-with-filter.js';
import sortQuickWithFor from '../quick-sort-with-for.js';

const nums3 = [2, 1, 3];
const expected3 = [1, 2, 3];

const nums5 = [3, 1, 2, 5, 4];
const expected5 = [1, 2, 3, 4, 5];

const nums7 = [7, 6, 5, 4, 3, 2, 1];
const expected7 = [1, 2, 3, 4, 5, 6, 7];

test('Quick sort 3 nums', () => {
  expect(sortQuickFilter(nums3)).toEqual(expected3);
});

test('Quick sort 7 nums', () => {
  expect(sortQuickFilter(nums7)).toEqual(expected7);
});

test('Quick sort with for 7 nums', () => {
  const res = sortQuickWithFor(nums7);
  expect(res).toEqual(expected7);
});

test('Quick sort with for 5 nums', () => {
  const res = sortQuickWithFor(nums5);
  expect(res).toEqual(expected5);
});
