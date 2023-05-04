const {strictEqual, deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");
const {complexNumber} = require("../src/complex.js");

describe("real part", function() {
  const number = complexNumber(1, 2);
  it("should give real part", function() {
    strictEqual(number.realPart(), 1);
  })
})

describe("imaginary part", function() {
  const number = complexNumber(2, 4);
  it("should give imaginary part", function() {
    strictEqual(number.imaginaryPart(), 4);
  })
})

describe("addition", function() {
  const firstNumber = complexNumber(1, -1);
  const secondNumber = complexNumber(2, 3);
  const sum = firstNumber.add(secondNumber);
  it("should give sum of real and imaginary parts of numbers", function() {
    strictEqual(sum.realPart(), 3);
    strictEqual(sum.imaginaryPart(), 2);
  })
})

describe("multiplication", function() {
  const firstNumber = complexNumber(4, 2);
  const secondNumber = complexNumber(2, -3);
  const product = firstNumber.multiply(secondNumber);
  it("should give product of real and imaginary parts of numbers", function() {
    strictEqual(product.realPart(), 14);
    strictEqual(product.imaginaryPart(), -8); 
  })
})

describe("display", function() {
  const number = complexNumber(1, 2);
  it("should display complex number in the standard form", function() {
    strictEqual(number.format(), "1 + 2i");
  })
})
