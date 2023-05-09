const { deepStrictEqual } = require("assert");
const { describe, it } = require("node:test");

const { Real } = require("../src/real.js");
const { Imaginary } = require("../src/imaginary.js");
const { Complex } = require("../src/complex.js");

describe("Complex Number", function () {
  it("should give sum of real and imaginary parts of numbers", function () {
    const r1 = new Real(1);
    const i1 = new Imaginary(new Real(2));
    const firstNumber = new Complex(r1, i1);

    const r2 = new Real(5);
    const i2 = new Imaginary(new Real(3));
    const secondNumber = new Complex(r2, i2);

    const r = new Real(6);
    const i = new Imaginary(new Real(5));
    const actual = firstNumber.add(secondNumber);
    const expected = new Complex(r, i);

    deepStrictEqual(actual, expected);
  });

  it("should give product of two complex numbers", function () {
    const r1 = new Real(2);
    const i1 = new Imaginary(new Real(3));
    const firstNumber = new Complex(r1, i1);

    const r2 = new Real(5);
    const i2 = new Imaginary(new Real(3));
    const secondNumber = new Complex(r2, i2);

    const r = new Real(1);
    const i = new Imaginary(new Real(21));
    const actual = firstNumber.multiply(secondNumber);
    const expected = new Complex(r, i);

    deepStrictEqual(actual, expected);
  })

  it("should tell if an complex number is equal to other", function () {
    const r1 = new Real(1);
    const i1 = new Imaginary(new Real(7));
    const firstNumber = new Complex(r1, i1);

    const r2 = new Real(5);
    const i2 = new Imaginary(new Real(2));
    const secondNumber = new Complex(r2, i2);

    const actual = firstNumber.isEqual(secondNumber);
    const expected = false;

    deepStrictEqual(actual, expected);
  }
})