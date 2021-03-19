/* Задача:
Равномерно разделить прямоугольный участок на одинаковые квадратные участки.
Участки должны быть настолько большими, насколько это возможно. */

const splitRectangleIntoSquares = (width, height) => {
  const maxSize = Math.max(width, height);
  const minSize = Math.min(width, height);
  if (maxSize % minSize === 0) {
    return minSize;
  }
  return splitRectangleIntoSquares(maxSize % minSize, minSize);
};

export default splitRectangleIntoSquares;
