const { strictEqual } = require("assert");
const { describe, it } = require("node:test");

const { Real } = require("../src/real.js");
const { Imaginary } = require("../src/imaginary.js");
const { Complex } = require("../src/complex.js");

describe("Complex Number", function () {
  describe("isEqual:", function () {
    it("should be equal for same numbers", function () {
      const r1 = new Real(2);
      const i1 = new Imaginary(new Real(5));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(2);
      const i2 = new Imaginary(new Real(5));
      const secondNumber = new Complex(r2, i2);

      const actual = firstNumber.isEqual(secondNumber);
      const expected = true;

      strictEqual(actual, expected);
    });

    it("should tell if an complex number is equal to other", function () {
      const r1 = new Real(1);
      const i1 = new Imaginary(new Real(7));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(5);
      const i2 = new Imaginary(new Real(2));
      const secondNumber = new Complex(r2, i2);

      const actual = firstNumber.isEqual(secondNumber);
      const expected = false;

      strictEqual(actual, expected);
    });
  });

  describe("add:", function () {
    it("should add two positive complex numbers", function () {
      const r1 = new Real(2);
      const i1 = new Imaginary(new Real(3));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(1);
      const i2 = new Imaginary(new Real(4));
      const secondNumber = new Complex(r2, i2);

      const r = new Real(3);
      const i = new Imaginary(new Real(7));
      const result = new Complex(r, i);
      const sum = firstNumber.add(secondNumber);

      const actual = sum.isEqual(result);
      const expected = true;

      strictEqual(actual, expected);
    });

    it("should give sum of a positive and a negative complex numbers", function () {
      const r1 = new Real(1);
      const i1 = new Imaginary(new Real(2));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(-2);
      const i2 = new Imaginary(new Real(-4));
      const secondNumber = new Complex(r2, i2);

      const r = new Real(-1);
      const i = new Imaginary(new Real(-2));
      const result = new Complex(r, i);
      const sum = firstNumber.add(secondNumber);

      const actual = sum.isEqual(result);
      const expected = true;

      strictEqual(actual, expected);
    });
  });

  describe("multiply:", function () {
    it("should return product of two complex numbers", function () {
      const r1 = new Real(3);
      const i1 = new Imaginary(new Real(4));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(3);
      const i2 = new Imaginary(new Real(2));
      const secondNumber = new Complex(r2, i2);

      const r = new Real(1);
      const i = new Imaginary(new Real(18));
      const result = new Complex(r, i);
      const product = firstNumber.multiply(secondNumber);

      const actual = product.isEqual(result);
      const expected = true;

      strictEqual(actual, expected);
    });

    it("should give product of a positive and a negative complex numbers", function () {
      const r1 = new Real(1);
      const i1 = new Imaginary(new Real(2));
      const firstNumber = new Complex(r1, i1);

      const r2 = new Real(-4);
      const i2 = new Imaginary(new Real(-4));
      const secondNumber = new Complex(r2, i2);

      const r = new Real(4);
      const i = new Imaginary(new Real(-12));
      const result = new Complex(r, i);
      const product = firstNumber.multiply(secondNumber);

      const actual = product.isEqual(result);
      const expected = true;

      strictEqual(actual, expected);
    });
  });
});