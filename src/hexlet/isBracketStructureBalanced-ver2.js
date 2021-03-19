/* eslint no-restricted-syntax: 0 */

/*
  Функция принимает на вход строку, состоящую только из открывающих и закрывающих скобок
  разных типов, и проверяет является ли эта строка сбалансированной.
  Пустая строка (отсутствие скобок) считается сбалансированной.
*/

const openingBrackets = ['(', '[', '{', '<'];
const closingBrackets = [')', ']', '}', '>'];

const isOpeningBracket = (bracket) => openingBrackets.includes(bracket);
const getClosingBracketFor = (bracket) => closingBrackets[openingBrackets.indexOf(bracket)];

const isBracketStructureBalanced = (expression) => {
  const stack = [];
  for (const currentBracket of expression) {
    if (isOpeningBracket(currentBracket)) {
      const closingBracket = getClosingBracketFor(currentBracket);
      stack.push(closingBracket);
    } else {
      const prevBrackets = stack.pop();
      if (prevBrackets !== currentBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// testing
console.log(isBracketStructureBalanced('[()]')); // true
console.log(isBracketStructureBalanced('{<>}}')); // false
console.log(isBracketStructureBalanced('[')); // false
console.log(isBracketStructureBalanced('}{')); // false
console.log(isBracketStructureBalanced('(([<>]){})')); // true
console.log(isBracketStructureBalanced('([{]})')); // false
