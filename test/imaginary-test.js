const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { Imaginary } = require("../src/imaginary.js");

describe("Imaginary", function () {
  it("should add two imaginary numbers", function () {
    const number = new Imaginary(2);
    const other = new Imaginary(5);
    const actual = number.add(other);
    const expected = new Imaginary(7);
    deepStrictEqual(actual, expected);
  });
});