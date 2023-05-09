const { Real } = require("./real.js");
const { Imaginary } = require("./imaginary.js");

class Complex {
  #real;
  #imaginary;

  constructor(realNumber, imaginaryNumber) {
    this.#real = realNumber;
    this.#imaginary = imaginaryNumber;
  }

  add(other) {
    const real = this.#real.add(other.#real);
    const imaginary = this.#imaginary.add(other.#imaginary);

    const realNumber = new Real(real);
    const imaginaryNumber = new Imaginary(imaginary);

    return new Complex(realNumber, imaginaryNumber);
  }

  multiply(other) {
    const real = this.#real.multiply(other.#real) + this.#imaginary.multiplyImaginary(other.#imaginary);
    const imaginary = this.#imaginary.multiply(other.#real) + other.#imaginary.multiply(this.#real);

    const realNumber = new Real(real);
    const imaginaryNumber = new Imaginary(imaginary);

    return new Complex(realNumber, imaginaryNumber);
  }

  toString() {
    return this.real.toString() + " + " + this.imaginary.toString();
  }
}

exports.Complex = Complex;