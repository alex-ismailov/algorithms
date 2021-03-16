import sortInsertionWithFor from '../bubble-sorting-with-for.js';
import sortInsertionWithForEach from '../bubble-sorting-with-forEach.js';

let coll;
const expected = [1, 2, 3, 4, 5];

beforeAll(() => {
  coll = [5, 4, 1, 3, 2];
});

test('bubble-sorting-with-for test', () => {
  expect(sortInsertionWithFor(coll)).toEqual(expected);
});

test('bubble-sorting-with-forEach test', () => {
  expect(sortInsertionWithForEach(coll)).toEqual(expected);
});
