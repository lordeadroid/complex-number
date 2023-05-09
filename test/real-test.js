const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { Real } = require("../src/real.js");

describe("Real Numbers", function () {
  describe("addition:", function () {
    it("should return addition of two numbers", function () {
      const firstNumber = new Real(5);
      const secondNumber = new Real(3);
      const sum = firstNumber.add(secondNumber);

      const actual = sum.isEqual(new Real(8));
      const expected = true;

      deepStrictEqual(actual, expected);
    });
  });

  describe("multiplication:", function () {
    it("should return product of two numbers", function () {
      const firstNumber = new Real(5);
      const secondNumber = new Real(2);
      const product = firstNumber.multiply(secondNumber);

      const actual = product.isEqual(new Real(10));
      const expected = true;

      deepStrictEqual(actual, expected);
    });
  });

  describe("toString:", function () {
    it("should display number in string", function () {
      const number = new Real(10);

      const actual = number.toString();
      const expected = '10';

      deepStrictEqual(actual, expected);
    });
  });

  describe("isEqual:", function () {
    it("should be equal when same number is given", function () {
      const firstNumber = new Real(3);
      const secondNumber = new Real(3);

      const actual = firstNumber.isEqual(secondNumber);
      const expected = true;

      deepStrictEqual(actual, expected);
    });

    it("should not be equal for different values", function () {
      const firstNumber = new Real(1);
      const secondNumber = new Real(2);

      const actual = firstNumber.isEqual(secondNumber);
      const expected = false;

      deepStrictEqual(actual, expected);
    });
  });
});