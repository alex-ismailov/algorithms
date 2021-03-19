import sumLinearRecursively from '../sum-linear-recursively.js';
import sumLinearIteratively from '../sum-linear-iteratively.js';

const nums = [1, 2, 3];

test('Sum of nums - Linear recursive process', () => {
  expect(sumLinearRecursively(nums)).toBe(6);
});

test('Sum of nums - Linear iterative process', () => {
  expect(sumLinearIteratively(nums)).toBe(6);
});
