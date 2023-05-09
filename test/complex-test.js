const {strictEqual, deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");

const {Complex} = require("../src/complex.js");

describe("real part", function() {
  it("should give real part", function() {
    const number = new Complex(1, 2);
    const actual = number.getReal();
    const expected = 1;
    strictEqual(actual, expected);
  })
})

describe("imaginary part", function() {
  it("should give imaginary part", function() {
    const number = new Complex(2, 4);
    const actual = number.getImaginary();
    const expected = 4;
    strictEqual(actual, expected);
  })
})

describe("addition", function() {
  it("should give sum of real and imaginary parts of numbers", function() {
    const firstNumber = new Complex(1, 1);
    const secondNumber = new Complex(2, 3);
    const actual = firstNumber.add(secondNumber);
    const expected = new Complex(3, 4);
    deepStrictEqual(actual, expected);
  })
})

describe("multiplication", function() {
  it("should give product of real and imaginary parts of numbers", function() {
    const firstNumber = new Complex(4, 2);
    const secondNumber = new Complex(2, 3);
    const actual = firstNumber.multiply(secondNumber);
    const expected = new Complex(2, 16);
    deepStrictEqual(actual, expected);
  })
})
