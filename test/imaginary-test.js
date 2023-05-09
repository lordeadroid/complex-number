const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { Real } = require("../src/real");
const { Imaginary } = require("../src/imaginary.js");

describe("Imaginary", function () {
  it("should add two imaginary numbers", function () {
    const number = new Imaginary(new Real(2));
    const other = new Imaginary(new Real(3));

    const actual = number.add(other);
    const expected = new Imaginary(new Real(5));

    deepStrictEqual(actual, expected);
  });

  it("should return an product of real and imaginary", function () {
    const r = new Real(3);
    const i = new Imaginary(new Real(2));

    const actual = i.multiply(r);
    const expected = new Imaginary(6);

    deepStrictEqual(actual, expected);
  })

  it("should equate two imaginary numbers", function () {
    const number = new Imaginary(new Real(1));
    const other = new Imaginary(new Real(1));

    const actual = number.isEqual(other);
    const expected = true;

    deepStrictEqual(actual, expected);
  })
});