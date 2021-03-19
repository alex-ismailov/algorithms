import splitRectangleIntoSquares from '../splitRectangleIntoSquares.js';

test('160 x 80', () => {
  expect(splitRectangleIntoSquares(160, 80)).toBe(80);
});
test('1680 x 640', () => {
  expect(splitRectangleIntoSquares(1680, 640)).toBe(80);
});

test('2210 x 500', () => {
  expect(splitRectangleIntoSquares(2210, 500)).toBe(10);
});

test('2500 x 350', () => {
  expect(splitRectangleIntoSquares(2500, 350)).toBe(50);
});
