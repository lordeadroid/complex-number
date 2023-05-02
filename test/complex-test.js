const {strictEqual, deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");
const {add, complex, multiply, display} = require("../src/complex.js");

describe("complex number", function() {
  const firstNumber = complex(1, 2);
  const secondNumber = complex(2, 3);

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
    it("should give additon", function() {
      deepStrictEqual(add(firstNumber, secondNumber), [3, 5]);
    })
  })

  describe("multiplication", function() {
    it("should give multiplication", function() {
      deepStrictEqual(multiply(firstNumber, secondNumber), [-4, 7]);
    })
  })

  describe("display", function() {
    it("should display the number is standard way", function() {
      strictEqual(display(2, 3), "2 + 3i");
    })
  })
})
