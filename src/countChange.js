/* eslint-disable no-nested-ternary */
const firstDenomination = (kindOfCoins) => (
  kindOfCoins === 1 ? 1
    : kindOfCoins === 2 ? 5
      : kindOfCoins === 3 ? 10
        : kindOfCoins === 4 ? 25
          : kindOfCoins === 5 ? 50 : 0
);

const countChange = (amount) => {
  const cc = (a, kindOfCoins) => {
    if (a === 0) {
      return 1;
    }
    return (a < 0) || (kindOfCoins === 0)
      ? 0
      : cc(a, kindOfCoins - 1)
        + cc(a - firstDenomination(kindOfCoins), kindOfCoins);
  };
  return cc(amount, 5);
};

/* testing */
console.log(countChange(4)); // 1
console.log(countChange(5)); // 2
console.log(countChange(7)); // 2
console.log(countChange(50)); // 50
console.log(countChange(100)); // 292
