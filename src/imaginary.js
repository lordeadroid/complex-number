const { Real } = require("./real.js");

class Imaginary {
  #imaginary;

  constructor(realNumber) {
    this.#imaginary = realNumber;
  }

  add(otherNumber) {
    const sum = this.#imaginary.add(otherNumber.#imaginary);
    return new Imaginary(sum);
  }

  multiply(otherNumber) {
    const number = this.#imaginary.multiply(otherNumber);
    return new Imaginary(number);
  }

  multiplyImaginary(otherNumber) {
    const number = this.#imaginary * otherNumber.#imaginary;
    return new Real(number * -1);
  }

  isEqual(otherNumber) {
    return this.#imaginary.isEqual(otherNumber.#imaginary);
  }

  toString() {
    return `${this.#imaginary}i`;
  }
}

exports.Imaginary = Imaginary;