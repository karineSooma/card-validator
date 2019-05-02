let chai = require('chai'); 
let expect = chai.expect; 
let cardValidatorTest = require('../lib/index'); 

describe('Card validator', () => {
  describe('validate input', () => {
    it('string is empty', () => {
      expect(cardValidatorTest.cardValidator('')).to.be.false; 
    }); 
    it('string has less than sixteen digits', () => {
      expect(cardValidatorTest.cardValidator('9876543210')).to.be.false; 
    });
  }); 
}); 