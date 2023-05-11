const { Real } = require("./real.js");

class Imaginary {
  #imaginary;

  constructor(number) {
    this.#imaginary = number;
  };

  add(otherNumber) {
    const sum = this.#imaginary.add(otherNumber.#imaginary);
    return new Imaginary(sum);
  };

  multiply(otherNumber) {
    const product = this.#imaginary.multiply(otherNumber);
    return new Imaginary(product);
  };

  multiplyImaginary(otherNumber) {
    const product = this.#imaginary.multiply(otherNumber.#imaginary);
    return product.multiply(new Real(-1));
  };

  isEqual(otherNumber) {
    return this.#imaginary.isEqual(otherNumber.#imaginary);
  };

  toString() {
    return `${this.#imaginary}i`;
  };
};

exports.Imaginary = Imaginary;