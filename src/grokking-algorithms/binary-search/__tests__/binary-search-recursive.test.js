import binarySearch from '../binary-search-recursive.js';

let coll;

beforeEach(() => {
  coll = [1, 2, 3, 40, 50, 600, 1000, 10000];
});

test('Search number', () => {
  expect(binarySearch(coll, 50)).toBe(50);
});

test('Unexist number', () => {
  expect(binarySearch(coll, -333)).toBeNull();
});
