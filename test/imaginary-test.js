const { describe, it } = require("node:test");
const { strictEqual } = require("assert");

const { Real } = require("../src/real");
const { Imaginary } = require("../src/imaginary.js");

describe("Imaginary", function () {
  describe("isEqual:", function () {
    it("should be equals when same number is given", function () {
      const firstNumber = new Imaginary(new Real(1));
      const secondNumber = new Imaginary(new Real(1));

      const actual = firstNumber.isEqual(secondNumber);
      const expected = true;

      strictEqual(actual, expected);
    })

    it("should be not equal for different values", function () {
      const firstNumber = new Imaginary(new Real(0));
      const secondNumber = new Imaginary(new Real(3));

      const actual = firstNumber.isEqual(secondNumber);
      const expected = false;

      strictEqual(actual, expected);
    });
  });

  describe("add:", function () {
    it("should give the sum of two numbers", function () {
      const firstNumber = new Imaginary(new Real(1));
      const secondNumber = new Imaginary(new Real(1));
      const sum = firstNumber.add(secondNumber);

      const actual = sum.isEqual(new Imaginary(new Real(2)));
      const expected = true;

      strictEqual(actual, expected);
    });

    it("should give the sum of a positive and a negative number", function () {
      const firstNumber = new Imaginary(new Real(5));
      const secondNumber = new Imaginary(new Real(-2));
      const sum = firstNumber.add(secondNumber);

      const actual = sum.isEqual(new Imaginary(new Real(3)));
      const expected = true;

      strictEqual(actual, expected);
    });
  });

  describe("multiply:", function () {
    it("should give product of two real with imaginary number", function () {
      const realNumber = new Real(2);
      const imaginaryNumber = new Imaginary(new Real(7));
      const product = imaginaryNumber.multiply(realNumber);

      const actual = product.isEqual(new Imaginary(new Real(14)));
      const expected = true;

      strictEqual(actual, expected);
    });
  });

  describe("multiplyImaginary:", function () {
    it("should give product of two imaginary numbers", function () {
      const firstNumber = new Imaginary(new Real(4));
      const secondNumber = new Imaginary(new Real(2));
      const product = firstNumber.multiplyImaginary(secondNumber);

      const actual = product.isEqual(new Imaginary(new Real(-8)));
      const expected = true;

      strictEqual(actual, expected);
    });

    it("should give product of one positive and imaginary number", function () {
      const firstNumber = new Imaginary(new Real(-3));
      const secondNumber = new Imaginary(new Real(5));
      const product = firstNumber.multiplyImaginary(secondNumber);

      const actual = product.isEqual(new Imaginary(new Real(15)));
      const expected = true;

      strictEqual(actual, expected);
    });
  });
});