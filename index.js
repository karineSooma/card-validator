module.exports.cardValidator = function cardValidator(cardnumber) {
  callErrors(cardnumber);
  let result = reverseNumAndNumOperations(cardnumber);
  return (result % 10 === 0) ? true : false;
};

function callErrors(cardnumber) {
  if (cardnumber === undefined || cardnumber === "") {
    throw new RangeError("You must enter a parameter!");

  } else if (typeof cardnumber !== "number") {
    throw new TypeError("Please insert only numbers!");

  } else if (parseInt(cardnumber) && cardnumber.toString().length === 1) {
    throw new RangeError("The value insert has only one digit, please insert your complete card number!");
  }
}

function reverseNumAndNumOperations(cardnumber) {
  let numReverse = cardnumber.toString().split("").reverse().map(Number);
  let numOperations = numReverse.map((num, i) => {
    if (i % 2 === 1) {
      return (num * 2 <= 9 ) ? num * 2 : num * 2 - 9;
    } else {
      return num;
    }
  });
  let sumNum = numOperations.reduce((acum, num) => acum + num);
  return sumNum;
}
console.log(cardValidator('1234567890'))