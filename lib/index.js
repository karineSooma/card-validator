function cardValidator (cardnumber) {
  callErrors(cardnumber);
  let result = reverseNumAndNumOperations(cardnumber);
  if (result % 10 === 0) {
    return true;
  } else {
    return false
  }
};

function callErrors (cardnumber) {
  if (cardnumber === undefined) {
    throw new RangeError('You must enter a parameter!');
  } else if (typeof cardnumber !== 'number') {
    throw new TypeError('Please insert only numbers!');
  }
}

function reverseNumAndNumOperations (cardnumber) {
  let numReverse = cardnumber.toString().split('').reverse().map(Number);
  let numOperations = numReverse.map((num, i) => {
    if (i % 2 === 1) {
      return (num * 2 <= 9) ? num * 2 : num * 2 - 9;
    } else {
      return num;
    }
  });
  let sumNum = numOperations.reduce((acum, num) => acum + num);
  return sumNum;
}

module.exports = cardValidator;