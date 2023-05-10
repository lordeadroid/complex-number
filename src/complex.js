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

    return new Complex(real, imaginary);
  }

  multiply(other) {
    const r1 = this.#real.multiply(other.#real)
    const r2 = this.#imaginary.multiplyImaginary(other.#imaginary);
    const real = r1.add(r2);

    const i1 = this.#imaginary.multiply(other.#real)
    const i2 = other.#imaginary.multiply(this.#real);
    const imaginary = i1.add(i2);

    return new Complex(real, imaginary);
  }

  isEqual(other) {
    const isRealEqual = this.#real.isEqual(other.#real);
    const isImaginaryEqual = this.#imaginary.isEqual(other.#imaginary);

    return isRealEqual && isImaginaryEqual;
  }

  toString() {
    return this.real.toString() + " + " + this.imaginary.toString();
  }
}

exports.Complex = Complex;