const {strictEqual} = require("assert");
const {describe, it} = require("node:test");
const {realPart} = require("../src/complex.js");

describe("complex number", function() {
  describe("real part of the complex number", function() {
    it("should give real part", function() {
      strictEqual(realPart(2, 3), 2);
    })
  })
})
