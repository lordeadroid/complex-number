const {deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");

const {Real} = require("../src/real.js");

describe("Real Number", function() {
  it("get real", function() {
    const number = new Real(2);
    const actual = number.getReal();
    const expected = 2;
    deepStrictEqual(actual, expected);
  })

  it("should return addition of two numbers", function() {
    const number = new Real(5);
    const otherNumber = new Real(3);
    const actual = number.add(otherNumber);
    const expected = new Real(8);
    deepStrictEqual(actual, expected);
  })

  it("should return product of two numbers", function() {
    const number = new Real(3);
    const otherNumber = new Real(2);
    const actual = number.multiply(otherNumber);
    const expected = new Real(6);
    deepStrictEqual(actual, expected);
  })

  it("should display number in standard form", function() {
    const number = new Real(10);
    const actual = number.toString();
    const expected = '10';
    deepStrictEqual(actual, expected);
  })

  it("should equate two numbers", function () {
    const actual = new Real(1);
    const expected = new Real(1);
    deepStrictEqual(actual, expected);
  })
})
