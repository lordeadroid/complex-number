const {strictEqual, deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");
const {complexNumber} = require("../src/complex.js");

describe("complex number", function() {
  const firstNumber = complexNumber(1, 2);
  const secondNumber = complexNumber(2, 3);

  describe("real part", function() {
    it("should give real part", function() {
      strictEqual(firstNumber.realPart(), 1);
    })
  })

  describe("imaginary part", function() {
    it("should give imaginary part", function() {
      strictEqual(firstNumber.imaginaryPart(), 2);
    })
  })

  describe("addition", function() {
    const sum = firstNumber.add(secondNumber);
    it("should give sum of real and imaginary parts of numbers", function() {
      strictEqual(sum.realPart(), 3);
      strictEqual(sum.imaginaryPart(), 5);
    })
  })

  describe("multiplication", function() {
    const product = firstNumber.multiply(secondNumber);
    it("should give product of real and imaginary parts of numbers", function() {
      strictEqual(product.realPart(), -4);
      strictEqual(product.imaginaryPart(), 7); 
    })
  })

  describe("display", function() {
    const number = complexNumber(1, 2);
    it("should display complex number in the standard form", function() {
      strictEqual(number.display(), "1 + 2i");
    })
  })
})
