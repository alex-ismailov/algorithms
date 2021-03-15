const openBrackets = ['(', '{', '[', '<'];
const pairBrackets = ['()', '{}', '[]', '<>'];

const isBracketStructureBalanced = (expression) => {
  const stack = [];
  for (const currBracket of expression) {
    if (openBrackets.includes(currBracket)) { // если текущая скобка открывающая
      stack.push(currBracket);
    } else { // если текущая скобка закрывающая
      const prevBracket = stack.pop();
      const currPairBrackets = `${prevBracket}${currBracket}`;
      if (!pairBrackets.includes(currPairBrackets)) {
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
