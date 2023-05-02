const {strictEqual} = require("assert");
const {describe, it} = require("node:test");
const {realPart, imaginaryPart} = require("../src/complex.js");

describe("complex number", function() {
  describe("real part", function() {
    it("should give real part", function() {
      strictEqual(realPart(2, 3), 2);
    })
  })

  describe("imaginary part", function() {
    it("should give imaginary part", function() {
      strictEqual(imaginaryPart(2, 3), 3);
    })
  })
})
