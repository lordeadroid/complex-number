const { Real } = require("./real.js");

class Imaginary {
  #imaginary;

  constructor(realNumber) {
    this.#imaginary = realNumber;
  };

  add(imaginaryNumber) {
    const sum = this.#imaginary.add(imaginaryNumber.#imaginary);
    return new Imaginary(sum);
  };

  multiply(realNumber) {
    const product = this.#imaginary.multiply(realNumber);
    return new Imaginary(product);
  };

  multiplyImaginary(otherNumber) {
    const product = this.#imaginary.multiply(otherNumber.#imaginary);
    return product.multiply(new Real(-1));
  };

  isEqual(imaginaryNumber) {
    return this.#imaginary.isEqual(imaginaryNumber.#imaginary);
  };

  toString() {
    return `${this.#imaginary}i`;
  };
};

exports.Imaginary = Imaginary;