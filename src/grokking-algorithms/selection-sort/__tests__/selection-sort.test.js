import sortSelectionWithFor from '../selection-sort-with-for.js';
import sortSelectionWithForEach from '../selection-sort-with-forEach.js';
import sortSelectionWithMap from '../selection-sort-with-map.js';

let coll;
const expected = [1, 2, 3, 4, 5];

beforeAll(() => {
  coll = [5, 4, 1, 3, 2];
});

test('Selection sorting on for cicle', () => {
  expect(sortSelectionWithFor(coll)).toEqual(expected);
});

test('Selection sorting on fofEach', () => {
  expect(sortSelectionWithForEach(coll)).toEqual(expected);
});

test('Selection sorting on Map', () => {
  expect(sortSelectionWithMap(coll)).toEqual(expected);
});
