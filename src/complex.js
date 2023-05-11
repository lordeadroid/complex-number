class Complex {
  #real;
  #imaginary;

  constructor(realNumber, imaginaryNumber) {
    this.#real = realNumber;
    this.#imaginary = imaginaryNumber;
  }

  add(otherNumber) {
    const real = this.#real.add(otherNumber.#real);
    const imaginary = this.#imaginary.add(otherNumber.#imaginary);

    return new Complex(real, imaginary);
  }

  multiply(otherNumber) {
    const r1 = this.#real.multiply(otherNumber.#real)
    const r2 = this.#imaginary.multiplyImaginary(otherNumber.#imaginary);
    const real = r1.add(r2);

    const i1 = this.#imaginary.multiply(otherNumber.#real)
    const i2 = otherNumber.#imaginary.multiply(this.#real);
    const imaginary = i1.add(i2);

    return new Complex(real, imaginary);
  }

  isEqual(otherNumber) {
    const isRealEqual = this.#real.isEqual(otherNumber.#real);
    const isImaginaryEqual = this.#imaginary.isEqual(otherNumber.#imaginary);

    return isRealEqual && isImaginaryEqual;
  }

  toString() {
    return this.real.toString() + " + " + this.imaginary.toString();
  }
}

exports.Complex = Complex;