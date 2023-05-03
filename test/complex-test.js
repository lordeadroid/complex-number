const {strictEqual, deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");
const {add, complexNumber, multiply, display} = require("../src/complex.js");

describe("complex number", function() {
  let firstNumber = complexNumber(1, 2);
  let secondNumber = complexNumber(2, 3);

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

  const sum = firstNumber.add(secondNumber);
  describe("addition", function() {
    it("should give sum of real and imaginary parts of numbers", function() {
      strictEqual(sum.realPart(), 3);
      strictEqual(sum.imaginaryPart(), 5);
    })
  })
})
