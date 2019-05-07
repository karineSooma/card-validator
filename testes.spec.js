let chai = require('chai'); 
let expect = chai.expect; 
let cardValidatorTest = require('../lib/index'); 

describe('Card validator', () => {
  describe('validate input', () => {
    it('string has less than sixteen digits', () => {
      expect(cardValidatorTest.cardValidator(121212121212121)).to.be.false; 
    });
    it('string has more than nineteen digits', () => {
      expect(cardValidatorTest.cardValidator(1234567891011121314)).to.be.false;
    });
    it('string has repeated numbers', () => {
      expect(cardValidatorTest.cardValidator(11111111111111111111)).to.be.false;
    });
    it('string has number type', () => {
      expect(cardValidatorTest.cardValidator(5367151096056004)).to.be.true;
    });
    it('string is a valid card number', () => {
      expect(cardValidatorTest.cardValidator(5367151096056004)).to.be.true;
    });
  }); 
}); 